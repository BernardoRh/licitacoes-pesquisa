import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './Layuts/DefaultLayout'
import { Favorite } from './pages/Favorite/indext'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Favorite" element={<Favorite />} />
      </Route>
    </Routes>
  )
}
