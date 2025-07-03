import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Layout from "./Layout"



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route  path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App