    import React from 'react';

    //Config
    import {POSTER_SIZE, BACKDROP_SIZE,IMAGE_BASE_URL } from '../../config';

    //Components
    import HeroImage from "../HeroImage/HeroImage"
    import Grid from '../Grid/Grid';
    import Thumbnail from '../Thumbnail/Thumbnail';
    import Spinner  from '../Spinner/Spinner';
    import SearchBar from '../SearchBar/SearchBar';




    //Image
    import NoImage from '../../images/no_image.jpg';
    import Button from '../Button/Button';

    const Home=({props})=>{
        const {state, loading, error, currentItem, searchTerm, setCurrentItem, setSearchTerm, setIsLoadingMore} = props;

        if(error) return (<div>Something went wrong...</div>)
        return (
            <>
                { !searchTerm &&
                state?.results[currentItem] ?
                    <HeroImage 
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[currentItem].backdrop_path}`}
                    title={state.results[currentItem].original_title}
                    text={state.results[currentItem].overview}/> 
                : null
                }
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                <Grid header={searchTerm?'Search Result':'Popular Movies'}>
                    {state?.results?.map((movie,index)=>(
                        <Thumbnail key={movie.id} clickable onClick={()=>{setCurrentItem(index)}}
                        image={movie.poster_path? IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path:NoImage}
                        movieId={movie.id}/>
                    ))}
                </Grid>
                {loading && <Spinner/>}
                {state?.page<state?.total_pages && !loading && (
                    <Button text='Load more' callback={()=>setIsLoadingMore(true) } />
                )}
            </>  
        );
    }

    export default Home;