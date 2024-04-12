import { materias } from "@/data/materias";
import { Link } from "react-router-dom";

export function ExplorePage() {
  return (
    <section>
      <ul className="grid grid-cols-4 gap-8">
        {materias.map((materia) => (
          <Link
            to={"/materia/" + materia.nombre}
            className="group bg-zinc-900 p-4 rounded-lg min-h-28 relative overflow-hidden border border-zinc-700 shadow-lg hover:-translate-y-1 transition"
          >
            <h4 className="capitalize text-sm font-bold">{materia.nombre}</h4>
            <p className="uppercase text-zinc-600">{materia.abreviacion}</p>
            <span className="absolute group-hover:right-0 group-hover:bottom-0 duration-300 transition-all -right-5 -bottom-5 text-zinc-700">
              {materia.icon}
            </span>
          </Link>
        ))}
      </ul>
    </section>
  );
}
