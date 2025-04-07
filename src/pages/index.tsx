import { useCallback, useMemo, useState } from "react";

interface User {
  name: string;
  login: string;
  avatar_url: string;
}

export function HomePage() {
  const [users, setUsers] = useState<User[]>();
// useMemo é usado para memorizar um valor, evitando que ele seja recalculado em cada renderização
  const names = useMemo(
    () => users?.map((user) => user.name).join(", "),
    [users]
  );
  // useCallback é usado para memorizar uma função, evitando que ela seja recriada em cada renderização
  const greeting = useCallback((user: User) => {
    alert(`Hello ${user.name}`);
  }, [])

  return (
    <div>
      <h1>home</h1>
    </div>
  );
}
