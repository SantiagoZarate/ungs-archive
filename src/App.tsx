import { Route, Routes } from "react-router-dom";
import { ExplorePage } from "./pages/ExplorePage";
import { AppLayout } from "./layouts/AppLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" index element={<ExplorePage />} />
      </Route>
    </Routes>
  )
}