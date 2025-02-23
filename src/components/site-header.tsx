
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import { CATEGORIES } from "@/lib/constants"
import { useSearchParams } from "react-router-dom"

export function SiteHeader() {
  const { theme, setTheme } = useTheme()
  const [searchParams, setSearchParams] = useSearchParams()

  const handleCategoryClick = (category: string) => {
    if (searchParams.get("category") === category) {
      searchParams.delete("category")
    } else {
      searchParams.set("category", category)
    }
    setSearchParams(searchParams)
  }

  const activeCategory = searchParams.get("category")

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="text-xl font-bold tracking-tighter">
            AnantG
          </a>
          <nav className="hidden md:flex gap-6">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary/80"
                }`}
              >
                {category}
              </button>
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
