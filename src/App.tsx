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
          {isLoading && <progress className="progress w-full progress-primary"></progress>}
          <HeroWeather
            locationName={weatherInfo?.location?.name}
            temp={weatherInfo?.current?.temp_c}
            condition={weatherInfo?.current?.condition?.text}
          />
          <div className="flex items-center w-full gap-4">
            <CurrentFeelsLike temp={weatherInfo?.current?.feelslike_c} />
            <CurrentPrecipitaion mm={weatherInfo?.current?.precip_mm} />
            <Sunset time={weatherInfo?.forecast?.forecastday[0]?.astro?.sunset} />
            <Sunrise time={weatherInfo?.forecast?.forecastday[0]?.astro?.sunrise} />
          </div>
        </>
      )}
    </MainLayout>
  )
}
