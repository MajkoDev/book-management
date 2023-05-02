import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import PersonalProfile from "../pages/PersonalProfile"
import AboutPage from "../pages/AboutPage"
import Navbar from "../components/Navbar"


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/profile' element={<PersonalProfile />} />
    </Routes>
    </>
  )
}

export default App
