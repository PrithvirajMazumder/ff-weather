import { Card } from './Card.tsx'

type Props = {
  temp: string
}
export const CurrentFeelsLike = ({temp}: Props) => {
  return (
    <Card bodyClassName={'items-start'} className={'bg-success/25'}>
      <h1 className={'text-xl font-bold'}>Feels like 🌡</h1>
      <h1 className={'text-7xl'}>{temp}&#xb0;c</h1>
    </Card>
  )
}
