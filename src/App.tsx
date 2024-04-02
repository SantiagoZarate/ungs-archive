import { AuthPage, ExplorePage } from "./pages";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/auth" index element={<AuthPage />} />
      <Route element={<AppLayout />}>
        <Route path="/" index element={<ExplorePage />} />
      </Route>
    </Routes>
  );
}
