import { Outlet, NavLink } from 'react-router-dom'

function AdminLayout() {
  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}
      <aside className="w-56 bg-dark text-white flex flex-col">
        <div className="p-6 text-xl font-bold text-primary">
          Admin Panel
        </div>
        <nav className="flex flex-col gap-2 px-4">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              isActive ? 'bg-primary text-white px-4 py-2 rounded' : 'text-gray-300 hover:text-white px-4 py-2 rounded'   
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/hotels"
            className={({ isActive }) =>
              isActive  ? 'bg-primary text-white px-4 py-2 rounded'   : 'text-gray-300 hover:text-white px-4 py-2 rounded'
            }
          >
            Khách sạn
          </NavLink>
        </nav>
      </aside>

      {/* Nội dung */}
      <main className="flex-1 bg-gray-50 p-8">
        <Outlet />
      </main>

    </div>
  )
}

export default AdminLayout