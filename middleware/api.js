//const { builtinModules } = require('module');
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

var baseurl = 'https://pokeapi.co/api/v2/';

function apiReq(){
  let pokeURL = baseurl + pokemonInput;
  $.getJSON(pokeURL, function(data){
    console.log(data);
    console.log(JSON.stringify(data,null, " "));
  }
  )};
  
function apiCall(name){
  return new Promise((resolve, reject) => {
    if (name){
      P.getPokemonByName(name, function (api, error){
        if (!error) {
          resolve(api)
        } else {
          reject(error);
        }
      });
    } else {
      reject("pokemon name not entered")
    }
  })
}

function getSpecies(name){
  return new Promise((resolve, reject) => {
    if (name){
      P.getPokemonSpeciesByName(name, function (api, error){
        if (!error) {
          resolve(api)
        } else {
          reject(error);
        }
      });
    } else {
      reject("pokemon name not entered")
    }
  })
}


module.exports = {apiCall, getSpecies};

// create two new routes - search results for pokemon, one for two pokemon

//send api data to right page (from api.js to search.js)
