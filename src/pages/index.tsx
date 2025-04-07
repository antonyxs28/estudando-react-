import { useState } from "react";

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

export function HomePage() {
  const [users, setUsers] = useState<User[]>();
  async function loadData() {
    const response = await fetch("https://api.github.com/users/antonysantos71");
    const data = await response.json();
    setUsers(data);
  }
  loadData();

  return (
    <div>
      <h1>home</h1>
      <div>
        {users?.map((user) => (
          <div>{user.name}</div>
        ))}
      </div>
    </div>
  );
}
