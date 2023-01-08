import { useState, useEffect } from "react";
//API
import API from "../API";
//import { loadFromLocalStorage, saveToLocalStorage } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentItem, setCurrentItem] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState();


  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);

      setState((previousState) => ({
        ...movies,results: [...previousState.results, ...movies.results]}));

    //   setState((previousState) => ({
    //     ...movies,
    //     results:
    //       page > 1
    //         ? [...previousState.results, ...movies.results]
    //         : [...movies.results]
    //   }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  //Initial and search
  useEffect(() => {
    const sessionState = loadFromLocalStorage('HomeState');
    if(sessionState){
      setState(sessionState);
      return;
    }

    setState(initialState);
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state?.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [searchTerm, isLoadingMore, state?.page]);

  //Write to the localStorage

  useEffect(()=>{
    saveToLocalStorage('HomeState',state);
    //sessionStorage.setItem('HomeState',JSON.stringify(state));
  },[state]);

  return { state, loading, error, currentItem, searchTerm, setCurrentItem, setSearchTerm, setIsLoadingMore };
};
