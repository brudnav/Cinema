import { Outlet } from "react-router-dom"
import Header from "./components/layout/Header/Header"
import Footer from "./components/layout/Footer/Footer"
function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
