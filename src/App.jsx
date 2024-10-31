import { Outlet } from "react-router-dom"
function App() {

  return (
    <>
      <nav>Navigace</nav>
      <Outlet />
      <footer>@2024</footer>
    </>
  )
}

export default App
