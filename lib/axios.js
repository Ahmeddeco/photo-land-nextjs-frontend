import axios from 'axios'
import { useEffect, useState } from 'react'

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // headers: {
  //   Authorization: `bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  // },
})


export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await request.get(url)

        setData(res.data.data)
      } catch (error) {
        setError(error)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [url])

  return { data, isLoading, error }
}
