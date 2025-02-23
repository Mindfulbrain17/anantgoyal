
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleCard } from "@/components/article-card"

const ARTICLES = [
  {
    title: "The Art of Letting Go",
    description: "Explore the liberating practice of releasing attachments and finding peace in impermanence.",
    category: "Life Philosophy",
    readTime: "5 min read",
  },
  {
    title: "Finding Meaning in Simplicity",
    description: "Discover how minimalism can lead to a more fulfilled and purposeful life.",
    category: "Personal Growth",
    readTime: "7 min read",
  },
  {
    title: "Embracing Uncertainty",
    description: "Learn to find comfort and growth in life's unpredictable moments.",
    category: "Mindfulness",
    readTime: "6 min read",
  },
  {
    title: "The Power of Now",
    description: "Understanding the importance of present moment awareness in daily life.",
    category: "Mindfulness",
    readTime: "4 min read",
  },
  {
    title: "Digital Minimalism",
    description: "How to maintain focus and productivity in an age of constant connectivity.",
    category: "Technology",
    readTime: "8 min read",
  },
  {
    title: "The Journey Within",
    description: "Exploring the path of self-discovery and inner transformation.",
    category: "Personal Growth",
    readTime: "6 min read",
  },
]

const Index = () => {
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
              {ARTICLES.map((article) => (
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
