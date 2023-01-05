import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {GlobalStyle} from './GlobalStyle'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import NotFound from './components/NotFound/NotFound';
import {useHomeFetch} from './Hooks/useHomeFetch';

    //Hook

function App() {
  const {state, loading, error, currentItem, searchTerm, setCurrentItem, setSearchTerm, setIsLoadingMore} = useHomeFetch();

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home props={{state, loading, error, currentItem, searchTerm, setCurrentItem, setSearchTerm, setIsLoadingMore}} />}/>
        <Route path='/:movieId' element={<Movie/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
