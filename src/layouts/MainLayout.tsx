import { PropsWithChildren } from 'react'

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <section className={'container mx-auto p-4'}>
      <nav className="navbar bg-primary text-primary-content rounded-xl mb-4">
        <button className="btn btn-ghost text-xl">FF-Weather🌤️</button>
        <input
          type="text"
          placeholder="Pune, Kolkata"
          className="input input-bordered input-sm w-full max-w-xs ml-auto mr-2"
        />
      </nav>
      <div className="flex flex-col gap-4 w-full items-center">{children}</div>
    </section>
  )
}
