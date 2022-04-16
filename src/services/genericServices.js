//create generic services class using axios and return the response

import axios from 'axios';


// https://pokeapi.co/api/v2/pokemon?offset=0&limit=151
export default class GenericServices {

  //constructor to initialize the axios instance with the base url customizable
  // BASE_URL = 'https://pokeapi.co/api/v2/';

  // accept the base url to start constructing the axios instance 
  constructor(BASE_URL) {
    this.axios = axios.create({
      baseURL: BASE_URL,
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  // the rest of the url must be passed to the get method
  get(url) { 
    return this.axios.get(url);
  }

  post(url, data) {
    return this.axios.post(url, data);
  }

  put(url, data) {
    return this.axios.put(url, data);
  }

  delete(url) {
    return this.axios.delete(url);
  }
}