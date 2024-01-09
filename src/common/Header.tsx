export function Header() {
  return (
    <header className="w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center border-b p-4">
        <div className="flex gap-8 items-center">
          <h6><strong className="font-bold">UNGS</strong> Archive</h6>
          <nav className="flex gap-4">
            <a className="px-2 py-1 capitalize" href="">pagina</a>
            <a className="px-2 py-1 capitalize" href="">pagina</a>
            <a className="px-2 py-1 capitalize" href="">pagina</a>
          </nav>
        </div>

        <div>
          Search bar...
          <a href="">Iniciar sesión</a>
        </div>
      </div>
    </header>
  )
}