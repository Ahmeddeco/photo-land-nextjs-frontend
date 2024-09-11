import axios from 'axios'

export const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    // Authorization: 'bearer 51357b83fb9ebd0372b50c662a15f862cbccba88710ea19a3baf07e815724fc531bd9c5b81396367d5f8f769b18ef5378254644d5cd53290dbc50f531563a999dbd825cd8763696157699f0603d9530d76d83ad1fd6857a2359a52b9b3191af1d9108befa6b5d1b7442a94ee391a8b0d48ed0bfc9a11c18d67392bdf453f6398',

    Authorization: `bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  },
})
