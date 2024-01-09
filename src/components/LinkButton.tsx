import { Link } from "react-router-dom"

type LinkButtonProps = {
  value: string,
  url: string,
}

export function LinkButton({ url, value }: LinkButtonProps) {
  return (
    <Link className="capitalize text-sm clickable-item px-4 py-1 rounded-full hover:bg-accent-foreground" to={url}>
      {value}
    </Link>
  )
}