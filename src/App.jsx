
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
function App() {

  return (
  <>
    <BrowserRouter>

<Navbar />
<div className="max-w-7xl mx-auto pt-20 px-6 z-0">
<Routes>
 
  <Route path="/scholarships" element={<About />} />
  <Route path="/schemes" element={<Submissions />} />
  <Route path="/latest-blog" element={<Archive/>} />
  <Route path="/about" element={<SignUpLogin />} />
</Routes>
<Footer />
</div>

</BrowserRouter>
   
  </>
  )
}

export default App
