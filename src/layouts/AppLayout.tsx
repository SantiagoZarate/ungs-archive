import { Outlet } from "react-router-dom";
import { Header } from "../common/Header";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      <Header />
      <div className="max-w-screen-xl mx-auto">
        <main className="p-8 bg-zinc-800">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
