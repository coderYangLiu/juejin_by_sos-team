import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [isDark, setTheme] = useState(false)

  useEffect(() => {
    const mode = window.localStorage.getItem('themme') ?? 'light'

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
      window.localStorage.setItem('themme', 'light')
    }
    else {
      setTheme(true)
      document.body.setAttribute('arco-theme', 'dark')
      window.localStorage.setItem('themme', 'dark')
    }
  }

  return { isDark, setDark }
}
