
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ARTICLES } from "@/lib/constants"
import { useEffect } from "react"

export default function Article() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const article = ARTICLES.find(
    (a) => a.title.toLowerCase().replace(/\s+/g, "-") === slug
  )

  if (!article) {
    useEffect(() => {
      navigate("/")
    }, [navigate])
    return null
  }

  return (
    <ThemeProvider defaultTheme="system" storageKey="blog-theme">
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 container py-8">
          <Button
            variant="ghost"
            className="mb-8 -ml-2"
            onClick={() => navigate("/")}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <article className="prose prose-lg dark:prose-invert mx-auto max-w-[750px] font-serif">
            <div className="space-y-2 mb-8">
              <h1 className="text-4xl font-bold tracking-tight font-sans">
                {article.title}
              </h1>
              <div className="flex items-center gap-4 text-muted-foreground font-sans">
                <span>{article.category}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 font-sans">Table of Contents</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#introduction" className="hover:underline">Introduction</a>
                </li>
                <li>
                  <a href="#understanding" className="hover:underline">Understanding the Concept</a>
                </li>
                <li>
                  <a href="#practice" className="hover:underline">Practical Applications</a>
                </li>
                <li>
                  <a href="#benefits" className="hover:underline">Key Benefits</a>
                </li>
                <li>
                  <a href="#conclusion" className="hover:underline">Conclusion</a>
                </li>
              </ul>
            </div>

            {/* Article Content */}
            <div className="space-y-8 leading-relaxed">
              <section id="introduction">
                <h2 className="text-2xl font-bold mb-4 font-sans">Introduction</h2>
                <p>
                  {article.description} In our fast-paced world, the concept of <em>letting go</em> 
                  has become increasingly vital for maintaining mental and emotional well-being. 
                  This article explores the profound implications of this practice and its 
                  transformative potential in our lives.
                </p>
              </section>

              <section id="understanding">
                <h2 className="text-2xl font-bold mb-4 font-sans">Understanding the Concept</h2>
                <p>
                  The art of letting go is rooted in ancient wisdom traditions, particularly 
                  <strong> Buddhist philosophy</strong>, which emphasizes the impermanence of all 
                  things. When we grasp this fundamental truth, we begin to understand that our 
                  attachments—whether to possessions, relationships, or ideas—often cause us 
                  unnecessary suffering.
                </p>
                <blockquote className="italic border-l-4 pl-4 my-4">
                  "In the end, only three things matter: how much you loved, how gently you lived, 
                  and how gracefully you let go of things not meant for you."
                </blockquote>
              </section>

              <section id="practice">
                <h2 className="text-2xl font-bold mb-4 font-sans">Practical Applications</h2>
                <p>
                  Here are several key practices that can help develop the skill of letting go:
                </p>
                <ul className="list-disc pl-6 my-4">
                  <li>
                    <strong>Mindfulness Meditation:</strong> Regular practice helps observe thoughts 
                    without attachment
                  </li>
                  <li>
                    <strong>Journaling:</strong> Writing helps process emotions and identify 
                    attachment patterns
                  </li>
                  <li>
                    <strong>Physical Decluttering:</strong> Starting with material possessions 
                    builds the letting go muscle
                  </li>
                </ul>
              </section>

              <section id="benefits">
                <h2 className="text-2xl font-bold mb-4 font-sans">Key Benefits</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full my-4">
                    <thead>
                      <tr>
                        <th className="border p-2">Benefit</th>
                        <th className="border p-2">Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Reduced Stress</td>
                        <td className="border p-2">Lower cortisol levels, better sleep</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Mental Clarity</td>
                        <td className="border p-2">Improved decision-making, focus</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Emotional Freedom</td>
                        <td className="border p-2">Greater resilience, adaptability</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="conclusion">
                <h2 className="text-2xl font-bold mb-4 font-sans">Conclusion</h2>
                <p>
                  The journey of letting go is not about loss, but about <u>gaining freedom</u>. 
                  When we release what no longer serves us, we create space for new possibilities 
                  and deeper fulfillment. Remember, letting go is not a one-time event but a 
                  continuous practice that becomes easier with time and patience.
                </p>
              </section>
            </div>
          </article>
        </main>
        <SiteFooter />
      </div>
    </ThemeProvider>
  )
}
