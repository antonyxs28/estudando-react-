import { useState } from "react"

export function Login() {
  // mundaça de estado
  const [email, setEmail] = useState<string>()
  const [password, setPassword] = useState<string>()

  const handleLogin = () => {
    // fazer a chamada para o backend para logar
    console.log('Login', email, password)
  }

  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="password">password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  )
}