import { Card } from './Card.tsx'

export const CurrentFeelsLike = () => {
  return (
    <Card bodyClassName={'items-start'} className={'bg-success/25'}>
      <h1 className={'text-xl font-bold'}>Feels like 🌡</h1>
      <h1 className={'text-7xl'}>37&#xb0;c</h1>
    </Card>
  )
}
