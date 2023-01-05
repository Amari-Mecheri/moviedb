import { useState, useEffect } from "react";
import API from '../API';
import { loadFromLocalStorage, saveToLocalStorage } from "../helpers";

export const useMovieFetch=(movieId)=>{
    const [state,setState] = useState({});
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(false);

    useEffect(()=>{
        // const sessionMovie = loadFromLocalStorage(movieId);
        // if(sessionMovie){
        //     setLoading(true);
        //     setError(false);
        //     setState(sessionMovie);
        //     setLoading(false);
        //     return;
        // }
        const fetchMovie = async () =>{
            try{
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);

                const directors = credits.crew.filter(member=>member.job === 'Director');
                setState({...movie,actors:credits.cast, directors});
                //sessionStorage.setItem(movieId,JSON.stringify({...movie,actors:credits.cast, directors})); //useEffect instead
                setLoading(false);
            } catch(error){
                setError(true);
            }
        };
        fetchMovie();
    },[movieId]);

    //Write to session storage

    // useEffect(()=>{
    //     saveToLocalStorage(movieId,state);
    //     //sessionStorage.setItem(movieId,JSON.stringify(state));
    // },[movieId, state]);

    return {state, loading, error};

}