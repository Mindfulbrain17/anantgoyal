
import { Infinity } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex h-16 items-center justify-center gap-2">
        <span className="text-sm font-medium">AnantG</span>
        <Infinity className="h-4 w-4" />
      </div>
    </footer>
  )
}
