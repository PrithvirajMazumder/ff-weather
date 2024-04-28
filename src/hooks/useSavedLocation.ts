import { useEffect, useState } from 'react'

const locationKey = 'FF_WEATHER_LOCATION_NAME'

export const useSavedLocation = () => {
  const [locationName, setLocationName] = useState<string | null>(null)

  useEffect(() => {
    setLocationName(localStorage.getItem(locationKey))
  }, [])

  return {
    locationName,
    setLocationName: (locationName: string) => {
      localStorage.setItem(locationKey, locationName)
      setLocationName(locationName)
    }
  }
}
