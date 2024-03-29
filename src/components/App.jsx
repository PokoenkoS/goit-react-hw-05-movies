import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home/Home"
import {Layout}  from './Header/Layout';


const Movies = lazy(()=> import("../pages/Movies/Movies"));
const MoviesDetails = lazy(()=> import("../pages/MovieDetails/MoviesDetails"));
const Cast = lazy(()=> import("./Cast/Cast"));
const Reviews = lazy(()=> import("./Reviews/Reviews"));

export const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home />} />
    <Route path="movies" element={<Movies />} />
    <Route path="movies/:movieId" element={<MoviesDetails/>} >
      <Route path="cast" element={<Cast />} />
      <Route path="reviews" element={<Reviews />} />
      </Route>
    </Route>
    
     </Routes>
  );
};
