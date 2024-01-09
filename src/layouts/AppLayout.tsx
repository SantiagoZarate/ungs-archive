import { Outlet } from "react-router-dom";
import { AsideMenu } from "../common/AsideMenu";
import { Header } from "../common/Header";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      <Header />
      <div className="max-w-screen-xl mx-auto grid grid-cols-6 [&>*:first-child]:col-span-2">
        <AsideMenu />
        <main className="col-span-4 p-8 bg-zinc-800">
          <Outlet />
        </main>
      </div>
    </div>
  )
}