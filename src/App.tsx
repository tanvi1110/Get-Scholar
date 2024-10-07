
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
// @ts-ignore
import { Navbar } from './components/Navbar'
// @ts-ignore
import { Scholarships } from './components/Scholarships'
// @ts-ignore
import { LatestBlog } from './components/LatestBlog'
// @ts-ignore
import { Schemes } from './components/Schemes'
// @ts-ignore
import { About } from './components/About'
function App() {

  return (
  <>
    <BrowserRouter>

<Navbar />
<div className="max-w-7xl mx-auto pt-20 px-6 z-0">
<Routes>
 
  <Route path="/scholarships" element={<Scholarships />} />
  <Route path="/schemes" element={<Schemes />} />
  <Route path="/latest-blog" element={<LatestBlog />} />
  <Route path="/about" element={<About />} />
</Routes>

</div>

</BrowserRouter>
   
  </>
  )
}

export default App
