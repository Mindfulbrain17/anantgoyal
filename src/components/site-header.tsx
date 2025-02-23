
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

const CATEGORIES = [
  "Life Philosophy",
  "Personal Growth",
  "Mindfulness",
  "Technology",
]

export function SiteHeader() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="text-xl font-bold tracking-tighter">
            AnantG
          </a>
          <nav className="hidden md:flex gap-6">
            {CATEGORIES.map((category) => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium hover:text-primary/80 transition-colors"
              >
                {category}
              </a>
            ))}
          </nav>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  )
}
