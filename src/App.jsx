import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Library from './pages/Library'
import Recommendations from './pages/Recommendations'
import History from './pages/History'
import Settings from './pages/Settings'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/recommend" element={<Recommendations />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}
