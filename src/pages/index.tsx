import { NavLink } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1>home</h1>
      <div>
        <NavLink to="/login" >login</NavLink>
      </div>
    </div>
  );
}
