
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ARTICLES } from "@/lib/constants"

export default function Article() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const article = ARTICLES.find(
    (a) => a.title.toLowerCase().replace(/\s+/g, "-") === slug
  )

  if (!article) {
    return navigate("/")
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="blog-theme">
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 container py-8">
          <Button
            variant="ghost"
            className="mb-8 -ml-2"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <article className="prose prose-lg dark:prose-invert mx-auto max-w-[750px]">
            <div className="space-y-2 mb-8">
              <h1 className="text-4xl font-bold tracking-tight">
                {article.title}
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>{article.category}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
            <p className="leading-7">
              {article.description}
              {/* Add more content here when you have actual articles */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </article>
        </main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  )
}
