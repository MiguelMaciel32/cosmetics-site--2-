import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  name: string
  subtitle?: string
  description: string
  price: number
  image: string
  rating: number
  isNew?: boolean
}

export function ProductCard({ name, subtitle, description, price, image, rating, isNew = false }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-sm transition-all hover:shadow-md">
      <div className="relative">
        {isNew && (
          <Badge className="absolute left-4 top-4 z-10 bg-[#2F4538] text-white hover:bg-[#2F4538]/90">LANÇAMENTO</Badge>
        )}
        <div className="aspect-[4/5] overflow-hidden bg-muted p-6">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="h-full w-full object-contain transition-transform hover:scale-105"
          />
        </div>
      </div>
      <CardContent className="flex flex-col gap-3 p-6">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{name}</h3>
          {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="flex items-center gap-1">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-amber-500 text-amber-500" : "text-muted"}`} />
            ))}
          <span className="ml-2 text-sm text-muted-foreground">({rating})</span>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold text-primary">R$ {price.toFixed(2).replace(".", ",")}</p>
          <Button className="w-full bg-primary text-white hover:bg-primary/90">COMPRAR</Button>
        </div>
      </CardContent>
    </Card>
  )
}

