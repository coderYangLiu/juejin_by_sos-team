import { useState } from 'react'

export const useTheme = () => {
  const [isDark, setTheme] = useState(false)

  const setDark = () => {
    if (isDark) {
      setTheme(false)
      document.body.removeAttribute('arco-theme')
    }
    else {
      setTheme(true)
      document.body.setAttribute('arco-theme', 'dark')
    }
  }

  return { setDark }
}
