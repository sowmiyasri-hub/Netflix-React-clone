import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Details from "../src/pages/Details"
function App() {

  return (
    <>
     

      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/details/:slug"  element={<Details />} />

      </Routes>
    </>
  )
}

export default App