const API_KEY = '5678fbf4cc9402a8db1f0e8902896161';
const URL = 'https://api.themoviedb.org/3'
const mostPopularUrl = "/trending/movie/day";
const byKeyWordUrl = "/search/movie";
const infoFilmUrl ="/movie/:movie.id";
const actorUrl = "/movie/:movie.id/credits";
const reviewsUrl = "/movie/:movie_id/reviews"



function getMostPopular(){

    return fetch(`${URL}${mostPopularUrl}?api_key=${API_KEY}`)
    .then(response => {
        if (response.ok) {
          return response.json()
          
        }
        return Promise.reject(new Error(`Нет image `));
        }) 
         
         
}
function getFilm(){
  return fetch(`${URL}${byKeyWordUrl}?api_key=${API_KEY}`)
  .then(response => {
      if (response.ok) {
        return response.json()
        
      }
      return Promise.reject(new Error(`Нет image `));
      }) 
       
}

function getInformationFilm(){
  return fetch(`${URL}${infoFilmUrl}?api_key=${API_KEY}`)
  .then(response => {
      if (response.ok) {
        return response.json()
        
      }
      return Promise.reject(new Error(`Нет image `));
      }) 
       
}

function getInformationActor(){
  return fetch(`${URL}${actorUrl}?api_key=${API_KEY}`)
  .then(response => {
      if (response.ok) {
        return response.json()
        
      }
      return Promise.reject(new Error(`Нет image `));
      }) 
       
}

function getReviews(){
  return fetch(`${URL}${reviewsUrl}?api_key=${API_KEY}`)
  .then(response => {
      if (response.ok) {
        return response.json()
        
      }
      return Promise.reject(new Error(`Нет image `));
      }) 
       
}



const api ={
  getMostPopular,
  getFilm,
  getInformationFilm,
  getInformationActor,
  getReviews

}

export default api;