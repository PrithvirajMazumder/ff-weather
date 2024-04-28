import { Card } from './Card.tsx'

export const CurrentPrecipitaion = () => {
  return (
    <Card bodyClassName={'items-start'} className={'bg-primary/15'}>
      <h1 className={'text-xl font-bold'}>Precipitation 💦</h1>
      <h1 className={'text-7xl'}>0.3mm</h1>
    </Card>
  )
}
