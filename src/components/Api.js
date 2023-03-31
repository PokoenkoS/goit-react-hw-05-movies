const API_KEY = '5678fbf4cc9402a8db1f0e8902896161';
const URL = 'https://api.themoviedb.org/3'
const mostPopularUrl = "/trending/movie/day";
const byKeyWordUrl = "/search/movie";
const infoFilmUrl ="/movie/";
const actorUrl = "/movie/";
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
function getFilm(value){
  return fetch(`${URL}${byKeyWordUrl}?api_key=${API_KEY}&query=${value}`)
  .then(response => {
      if (response.ok) {
        return response.json()
        
      }
      return Promise.reject(new Error(`Нет image `));
      }) 
       
}

function getInformationFilm(id){
  return fetch(`${URL}${infoFilmUrl}${id}?api_key=${API_KEY}`)
  .then(response => {
   
      if (response.ok) {
        return response.json()
        
      }
      return Promise.reject(new Error(`Нет image `));
      }) 
       
}

function getInformationActor(id){
  return fetch(`${URL}${actorUrl}${id}/credits?api_key=${API_KEY}`)
  .then(response => {
      if (response.ok) {
        console.log(response);
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