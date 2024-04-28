import { Card } from './Card.tsx'

type Props = {
  time: string
}
export const Sunrise = (props: Props) => {
  return (
    <Card bodyClassName={'items-start'} className={'bg-warning/25 min-w-44 h-full min-h-44'}>
      <h1 className={'text-xl font-bold'}>Sunrise 🌅</h1>
      <h1 className={'text-5xl'}>{props.time}</h1>
    </Card>
  )
}
