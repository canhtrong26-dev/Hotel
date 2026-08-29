import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import HotelListPage from './pages/HotelListPage'
import HotelDetailPage from './pages/HotelDetailPage'
import FavoritesPage from './pages/FavoritesPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import AdminHotelListPage from './pages/admin/AdminHotelListPage'
import AdminHotelFormPage from './pages/admin/AdminHotelFormPage'

function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<HotelListPage />} />
        <Route path="/hotels/:id" element={<HotelDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>

      <Route path="/admin" element={<AdminDashboardPage />} />
      <Route path="/admin/hotels" element={<AdminHotelListPage />} />
      <Route path="/admin/hotels/new" element={<AdminHotelFormPage />} />
      <Route path="/admin/hotels/:id/edit" element={<AdminHotelFormPage />} />

      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  )
}

export default App