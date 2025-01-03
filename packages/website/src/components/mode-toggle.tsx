import * as React from 'react'
import { Moon, Sun } from 'lucide-react'

import { Button, type ButtonProps } from '@/components/ui/button'

interface ModeToggleProps extends ButtonProps {}

export function ModeToggle({ ...props }: ModeToggleProps) {
  const [theme, setThemeState] = React.useState<
    'theme-light' | 'dark' | 'system'
  >('theme-light')

  React.useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
  }, [theme])

  return (
    <button
      className="px-1 hover:text-primary transition"
      onClick={() => {
        setThemeState('theme-light')
      }}
      {...props}
    >
      {theme === 'theme-light' ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
