import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { NotFound } from "../pages/not-found";
import { HomePage } from "../pages";
import { Login } from "../pages/login";

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
