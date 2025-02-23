
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

interface ArticleCardProps {
  title: string
  description: string
  category: string
  readTime: string
}

export function ArticleCard({ title, description, category, readTime }: ArticleCardProps) {
  const navigate = useNavigate()
  const slug = title.toLowerCase().replace(/\s+/g, "-")

  return (
    <Card className="glass card-hover">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs px-3 py-1 rounded-full">
            {category}
          </Badge>
          <span className="text-xs text-muted-foreground">{readTime}</span>
        </div>
        <h3 className="text-2xl font-medium leading-tight tracking-tight mt-2">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="ghost" 
          className="w-full"
          onClick={() => navigate(`/article/${slug}`)}
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  )
}
