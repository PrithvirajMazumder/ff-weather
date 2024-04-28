import { PropsWithChildren } from 'react'

export const Card = (props: PropsWithChildren<{ className?: string, bodyClassName?: string }>) => {
  return (
    <div className={`card w-full ${props.className}`}>
      <div className={`card-body text-center ${props.bodyClassName}`}>{props.children}</div>
    </div>
  )
}
