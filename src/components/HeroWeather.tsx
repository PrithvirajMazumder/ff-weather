import { Card } from './Card.tsx'

export const HeroWeather = () => {
  return (
    <Card className={'bg-base-200'}>
      <h1 className={'text-4xl text-primary font-bold'}>Pune</h1>
      <h1 className={'text-7xl'}>39&#xb0;c</h1>
      <p className={'text-xl'}>Partly Cloudy</p>
    </Card>
  )
}
