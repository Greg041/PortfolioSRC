import Navbar from "./Components/Common/Navbar/Navbar"
import Footer from "./Components/Common/Footer/Footer"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>  
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}