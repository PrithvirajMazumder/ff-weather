import { useState } from 'react'

const BASE_URL = 'https://api.weatherapi.com/v1'
const ENDPOINT = 'current.json'
const API_KEY = import.meta.env.VITE_API_KEY

export const useFetchWeather = () => {
  const [weatherInfo, setWeatherInfo] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState<unknown>(null)

  const fetchWeather = async (locationName: string) => {
    try {
      setIsLoading(true)
      setWeatherInfo(await (await fetch(`${BASE_URL}/${ENDPOINT}?q=${locationName}&key=${API_KEY}`)).json())
    } catch (e) {
      setHasError(e)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    weatherInfo,
    isLoading,
    hasError,
    reFetchWeather: fetchWeather
  }
}
