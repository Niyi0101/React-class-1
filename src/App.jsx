import Example from "./components/Example"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import Home from "./pages/Home"
import Services from "./pages/Services"
import Fetch from "./pages/Fetch"
import Contact from "./pages/Contact"
import SingleCard from "./components/SingleCard"
import NewTab from "./pages/NewTab"
import NewTab2 from "./pages/NewTab2"
import Counts from './pages/Counts'
function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Example />} />
          <Route path="/home" element={<Home />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<SingleCard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/newTab' element={<NewTab />} />
          <Route path='/newTab2' element={<NewTab2 />} />
          <Route path='/newTab3' element={<Counts />} />
          
          
        </Routes>
      </Router>
    </div>
  )
}


export default App
