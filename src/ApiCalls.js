import apiKey from './apiKey'
import testSearch from './TestAPISearchVegan.json'
const unirest = require('unirest');
const rootURL = 'https://listen-api.listennotes.com/api/v2/'

// This WORKS! But have a test data below to use so I don't go ove my limit
// export const getSearchedPodcasts = async (searchValue) => {
//   const response = await unirest.get(`https://listen-api.listennotes.com/api/v2/search?q=${searchValue}&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0`)
//   .headers('X-ListenAPI-Key', apiKey)
//   if(response.ok) {
//     return response.body.results;
//    } else {
//     throw new Error(response.statusText);
//   }
// } 
// To delete before submission
export const getSearchedPodcasts = (searchValue) => {
  return testSearch.results
}

// create test search results fetch
