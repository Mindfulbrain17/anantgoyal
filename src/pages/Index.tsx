
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleCard } from "@/components/article-card"
import { ARTICLES } from "@/lib/constants"
import { useSearchParams } from "react-router-dom"

const Index = () => {
  const [searchParams] = useSearchParams()
  const activeCategory = searchParams.get("category")

  const filteredArticles = activeCategory
    ? ARTICLES.filter((article) => article.category === activeCategory)
    : ARTICLES

  return (
    <ThemeProvider defaultTheme="system" storageKey="blog-theme">
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 container py-8">
          <section className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fadeIn">
                Thoughts on Living Well
              </h1>
              <p className="text-muted-foreground max-w-[700px] animate-fadeIn">
                Exploring life's profound questions through the lens of philosophy,
                personal growth, and mindful living.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <ArticleCard key={article.title} {...article} />
              ))}
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  )
}

export default Index
