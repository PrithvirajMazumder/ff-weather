import { Card } from './Card.tsx'

type Props = {
  locationName: string,
  temp: string,
  condition: string
}
export const HeroWeather = ({ condition, locationName, temp }: Props) => {
  return (
    <Card className={'bg-base-200'}>
      <h1 className={'text-4xl text-primary font-bold capitalize'}>{locationName}</h1>
      <h1 className={'text-7xl'}>{temp}&#xb0;c</h1>
      <p className={'text-xl'}>{condition}</p>
    </Card>
  )
}
