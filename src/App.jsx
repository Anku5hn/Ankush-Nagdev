import './App.css'
import Home from './pages/Home.jsx'
import Question from './pages/Question.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  

  return (
<>
<Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element = {<Question/>}/>
        </Routes>
      </Router>
</>
  )
}

export default App
