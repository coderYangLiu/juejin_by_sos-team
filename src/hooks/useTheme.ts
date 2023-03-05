import { useEffect, useState } from 'react'
const THEME_KEY = 'JUEJIN_THEME'

export const useTheme = () => {
  const [isDark, setTheme] = useState(false)

  useEffect(() => {
    const mode = window.localStorage.getItem(THEME_KEY) ?? 'light'

    if (isDark)
      (mode === 'light') && setDark()
    else
      (mode === 'dark') && setDark()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function setDark() {
    if (isDark) {
      setTheme(false)
      document.body.removeAttribute('arco-theme')
      window.localStorage.setItem(THEME_KEY, 'light')
    }
    else {
      setTheme(true)
      document.body.setAttribute('arco-theme', 'dark')
      window.localStorage.setItem(THEME_KEY, 'dark')
    }
  }

  return { isDark, setDark }
}
