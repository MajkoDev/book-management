import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import BooksPage from "../pages/BooksPage";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
