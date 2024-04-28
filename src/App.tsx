import { MainLayout } from './layouts/MainLayout.tsx'
import { HeroWeather } from './components/HeroWeather.tsx'
import { CurrentPrecipitaion } from './components/CurrentPrecipitaion.tsx'
import { CurrentFeelsLike } from './components/CurrentFeelsLike.tsx'
import { Sunset } from './components/Sunset.tsx'
import { Sunrise } from './components/Sunrise.tsx'
import { useSavedLocation } from './hooks/useSavedLocation.ts'
import { useFetchWeather } from './hooks/useFetchWeather.ts'
import { useEffect } from 'react'

export function App() {
  const { setLocationName, locationName } = useSavedLocation()
  const { isLoading, reFetchWeather, weatherInfo } = useFetchWeather()

  useEffect(() => {
    if (locationName) {
      void reFetchWeather(locationName)
    }
  }, [locationName])

  return (
    <MainLayout onSearch={(locationName) => setLocationName(locationName)}>
      {weatherInfo && (
        <>
          <HeroWeather />
          <div className="flex items-center w-full gap-4">
            <CurrentFeelsLike />
            <CurrentPrecipitaion />
            <div className="flex items-start gap-4">
              <Sunset />
              <Sunrise />
            </div>
          </div>
        </>
      )}
    </MainLayout>
  )
}
