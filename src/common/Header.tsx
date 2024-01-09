import { LinkButton } from "@/components/LinkButton";
import { SearchBar } from "./SearchBar";

export function Header() {
  return (
    <header className="w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center border-b p-4">
        <div className="flex gap-8 items-center">
          <h6><strong className="font-bold">UNGS</strong> Archive</h6>
          <nav className="flex gap-4">
            <LinkButton value={"explorar"} url={"/explorar"} />
            <LinkButton value={"recursos"} url={"/recursos"} />
            <LinkButton value={"materias"} url={"/materias"} />
          </nav>
        </div>

        <div className="flex gap-4 items-center">
          <SearchBar />
          <a className="bg-accent px-4 py-2 rounded-full border-t border-accent-foreground" href="">Iniciar sesión</a>
        </div>
      </div>
    </header>
  )
}