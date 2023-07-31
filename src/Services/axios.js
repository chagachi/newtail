import axios from 'axios'

export const filmApi = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=1ea0eca3`
})

export const coverApi = axios.create({
  baseURL: `http://img.omdbapi.com/?apikey=1ea0eca3`
})
