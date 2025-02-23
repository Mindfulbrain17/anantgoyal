
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ArticleCardProps {
  title: string
  description: string
  category: string
  readTime: string
}

export function ArticleCard({ title, description, category, readTime }: ArticleCardProps) {
  return (
    <Card className="glass card-hover">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <span className="text-xs text-muted-foreground">{readTime}</span>
        </div>
        <h3 className="text-xl font-medium leading-none tracking-tight">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full">
          Read More
        </Button>
      </CardFooter>
    </Card>
  )
}
