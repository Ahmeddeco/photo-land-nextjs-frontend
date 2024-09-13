'use client'

import { request } from '@/app/request'
import { useState, useEffect } from 'react'

export default useFetch = (url) => {
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

