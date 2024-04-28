import { PropsWithChildren } from 'react'

export const MainLayout = ({
  children,
  onSearch
}: PropsWithChildren<{ onSearch: (locationName: string) => void }>) => {
  return (
    <section className={'container mx-auto p-4'}>
      <nav className="navbar bg-primary text-primary-content rounded-xl mb-4">
        <button className="btn btn-ghost text-xl">FF-Weather🌤️</button>
        <form
          className="ml-auto mr-2"
          onSubmit={(e) => {
            e.preventDefault()
            const target = e.target as typeof e.target & {
              weatherSearch: { value: string }
            }
            onSearch(target.weatherSearch.value)
          }}
        >
          <input
            name={'weatherSearch'}
            type="text"
            placeholder="Pune, Kolkata"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </form>
      </nav>
      <div className="flex flex-col gap-4 w-full items-center">{children}</div>
    </section>
  )
}
