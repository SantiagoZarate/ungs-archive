import { ProcessorIcon, DeveloperIcon } from "@/components/icons";
import { Materia } from "@/types";
import { DatabaseIcon } from "lucide-react";

export const materias: Materia[] = [
  {
    nombre: "sistemas operativos y redes",
    abreviacion: "sor",
    icon: <ProcessorIcon />,
  },
  {
    nombre: "programación III",
    abreviacion: "p3",
    icon: <DeveloperIcon />,
  },
  {
    abreviacion: "BBDD",
    nombre: "Base de datos",
    icon: <DatabaseIcon />,
  },
];
