import { createContext, useContext, useState, useEffect } from 'react'

type UIContextType = {
  isSidebarOpen: boolean
  toggleSidebar: () => void
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const UIContext = createContext<UIContextType | null>(null)

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  )

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', String(isDarkMode))
  }, [isDarkMode])

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev)
  const toggleDarkMode = () => setIsDarkMode(prev => !prev)

  return (
    <UIContext.Provider value={{ isSidebarOpen, toggleSidebar, isDarkMode, toggleDarkMode }}>
      {children}
    </UIContext.Provider>
  )
}

export function useUI() {
  const context = useContext(UIContext)
  if (!context) throw new Error('useUI phải dùng trong UIProvider')
  return context
}