import { Outlet, NavLink } from 'react-router-dom'
import { useUI } from '../contexts/UIContext'

function MainLayout() {
  const { isDarkMode, toggleDarkMode } = useUI()

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">

      <header  className="bg-dark text-white px-4 sm:px-10 py-4 flex items-center justify-between">
         <span className="text-lg sm:text-xl font-bold text-primary">HotelFinder</span>
  <nav className="flex gap-3 sm:gap-6 items-center text-sm sm:text-base">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>Home</NavLink>
          <NavLink to="/hotels" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>Hotels</NavLink>
          <NavLink to="/favorites" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>Favorites</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>About</NavLink>

          {/* Nút toggle dark mode */}
          <button
            onClick={toggleDarkMode}
            className="text-xl hover:opacity-80"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

        </nav>
      </header>

      <main className="flex-1 p-10 bg-white dark:bg-gray-900">
        <Outlet />
      </main>

      <footer className="bg-dark text-white text-center py-4">
        <p>© HotelFinder 2026</p>
      </footer>

    </div>
  )
}

export default MainLayout