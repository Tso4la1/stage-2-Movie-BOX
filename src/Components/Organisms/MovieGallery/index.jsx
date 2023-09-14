import React from 'react';
import { useState, useEffect } from 'react';
import { Text } from '../../Atoms';

export const MovieGallery = () => {
    const [movies, setMovies] = useState([]);





    useEffect(() => {

        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc1Mjk1ZmZhN2EwMjUyMDJiNzY4NWNjZmI2ODJlZCIsInN1YiI6IjY0OTc3YWEzZWI3OWMyMDBjNTZkN2U3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._rwpgQieG4YP9E1Ot9sCUpHbTYuwlOutM16VUbx8qDQ'
            }
        };



        fetch(url, options)
            .then(res => res.json())
            .then(json => setMovies(json.results))
            .catch(err => console.error('error:' + err))



        console.log(movies);
    }, [])

    return (
        <div className="w-full px-10 overflow-x-auto">
            <ol className='grid grid-cols-4 gap-10'>
                {movies.map((movie) => {
                    return (
                        <div key={movie.id}>
                            <li className="p-4 text-black">
                                <div className="">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                    <Text type="p" text={movie.release_date} />
                                    <Text type="p" text={movie.title} />
                                    <Text type="p" text={movie.original_language} />

                                </div>
                            </li>
                        </div>
                    )
                })}
            </ol>
        </div>
    )
}
