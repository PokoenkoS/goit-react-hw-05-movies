const API_KEY = '5678fbf4cc9402a8db1f0e8902896161';
const URL = 'https://api.themoviedb.org/3'
const mostPopularUrl = "/trending/movie/day";
const byKeyWordUrl = "/search/company";



function getMostPopular(){
 let movie=[]
    return fetch(`${URL}${mostPopularUrl}?api_key=${API_KEY}`)
    .then(response => {
        if (response.ok) {
          return response.json()
          
        }
        return Promise.reject(new Error(`Нет image `));
        }) 
         
         
}




const api ={
  getMostPopular,
}

export default api;