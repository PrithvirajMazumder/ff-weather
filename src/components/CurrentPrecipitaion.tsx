import { Card } from './Card.tsx'

type Props  = {
  mm: string
}
export const CurrentPrecipitaion = ({mm}: Props) => {
  return (
    <Card bodyClassName={'items-start'} className={'bg-primary/15'}>
      <h1 className={'text-xl font-bold'}>Precipitation 💦</h1>
      <h1 className={'text-7xl'}>{mm}mm</h1>
    </Card>
  )
}
