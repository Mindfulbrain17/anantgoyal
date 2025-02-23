
import { Infinity } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t py-8 mt-8">
      <div className="container flex flex-col items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-medium tracking-tight">AnantG</span>
          <Infinity className="h-5 w-5" />
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Exploring life's profound questions through mindful reflection</p>
        </div>
        <div className="text-sm text-muted-foreground mt-2">
          © 2025 AnantG. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
