import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { NotFound } from "../pages/not-found";

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
