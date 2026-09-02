import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      login()  // ← dùng login từ AuthContext thay vì localStorage trực tiếp
      navigate('/admin')
    } else {
      setError('Sai tên đăng nhập hoặc mật khẩu!')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-textcolor text-center mb-6">
          Admin Login
        </h1>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Tên đăng nhập</label>
            <input type="text" value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              className="w-full border border-gray-200 rounded px-4 py-2 text-sm outline-none" />
          </div>
          <div>
            <label className="text-sm text-gray-500 mb-1 block">Mật khẩu</label>
            <input type="password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border border-gray-200 rounded px-4 py-2 text-sm outline-none" />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button onClick={handleLogin}
            className="bg-primary text-white py-2 rounded hover:opacity-90 font-medium">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage