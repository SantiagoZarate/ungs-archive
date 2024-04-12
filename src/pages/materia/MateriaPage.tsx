import { DocumentsIcon, FolderIcon, UsersIcon } from "@/components/icons";

export function MateriaPage() {
  return (
    <section className="grid grid-cols-5">
      <aside className="flex flex-col gap-4">
        <header>Programacion III</header>
        <ul className="flex flex-col gap-2">
          <li className="flex gap-2 items-center hover:bg-zinc-900 p-1">
            <DocumentsIcon />
            <p>Ejercicios</p>
          </li>
          <li className="flex gap-2 items-center">
            <UsersIcon />
            <p>Profesores</p>
          </li>
          <li className="flex gap-2 items-center">
            <FolderIcon />
            <p>Recursos</p>
          </li>
        </ul>
      </aside>
      <article className="col-span-4">
        <ul className="flex flex-col divide-y">
          {[1, 2, 3, 4, 5].map((index) => (
            <li key={index} className="flex flex-col gap-2 p-4">
              <h5>Recorrido grafo - Breadth First Search</h5>
              <p className="text-xs text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                at in minus saepe architecto maxime?
              </p>
              <footer className="flex items-center gap-12 text-xs capitalize">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-green-400 rounded-full"></span>
                  <p>resuelto</p>
                </div>
                <p>3 comentarios</p>
              </footer>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
