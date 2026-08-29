import { Outlet, NavLink } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      <header className="bg-dark text-white px-10 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-primary">HotelFinder</span>
        <nav className="flex gap-6">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>Home</NavLink>
          <NavLink to="/hotels" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>Hotels</NavLink>
          <NavLink to="/favorites" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>Favorites</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>About</NavLink>
        </nav>
      </header>

      <main className="flex-1 p-10">
        <Outlet />
      </main>

      <footer className="bg-dark text-white text-center py-4">
        <p>© HotelFinder 2026</p>
      </footer>

    </div>
  )
}

export default MainLayout