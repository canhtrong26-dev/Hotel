import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useUI } from '../contexts/UIContext'

function AdminLayout() {
  const { logout } = useAuth()
  const { isSidebarOpen, toggleSidebar } = useUI()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex">

      {/* Nút hamburger — chỉ hiện trên mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 bg-dark text-white p-2 rounded lg:hidden"
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed lg:static top-0 left-0 h-full w-56 bg-dark text-white
        flex flex-col justify-between z-40
        transition-transform duration-300
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div>
          <div className="p-6 text-xl font-bold text-primary">
            Admin Panel
          </div>
          <nav className="flex flex-col gap-2 px-4">
            <NavLink to="/admin" end
              className={({ isActive }) =>
                isActive
                  ? 'bg-primary text-white px-4 py-2 rounded'
                  : 'text-gray-300 hover:text-white px-4 py-2 rounded'
              }
            >
              Dashboard
            </NavLink>
            <NavLink to="/admin/hotels"
              className={({ isActive }) =>
                isActive
                  ? 'bg-primary text-white px-4 py-2 rounded'
                  : 'text-gray-300 hover:text-white px-4 py-2 rounded'
              }
            >
              Khách sạn
            </NavLink>
          </nav>
        </div>
        <div className="p-4">
          <button onClick={handleLogout}
            className="w-full bg-red-500 text-white py-2 rounded hover:opacity-90 text-sm">
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Overlay khi sidebar mở trên mobile */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
        />
      )}

      {/* Nội dung */}
      <main className="flex-1 bg-gray-50 p-8 lg:ml-0">
        <Outlet />
      </main>

    </div>
  )
}

export default AdminLayout