import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

export function App() {
  return (
    <div className="app">
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}
