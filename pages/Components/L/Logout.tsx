import { signOut } from "next-auth/react"

const Logout = () => {
  return (
    <button onClick={() => signOut()}>Sign out</button>
  )
}

export default Logout
