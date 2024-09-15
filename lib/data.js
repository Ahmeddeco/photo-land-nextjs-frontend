'use server'

export const getData = async (path) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`)
  return data.json()
}

