"use client"

import { useState } from "react"
import { Grid2X2, List, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"

const categories = [
  { id: "emagrecedores", label: "Emagrecedores" },
  { id: "para-sua-dor", label: "Para Sua Dor" },
  { id: "vitaminas", label: "Vitaminas" },
  { id: "para-seu-treino", label: "Para Seu Treino" },
  { id: "cuidados-femininos", label: "Cuidados Femininos" },
  { id: "para-seu-sono", label: "Para Seu Sono" },
  { id: "saude-masculina", label: "Saúde Masculina" },
  { id: "para-sua-tpm", label: "Para Sua TPM" },
]

const products = [
  {
    id: 1,
    name: "Green Gummy",
    category: "Cuidados Femininos",
    description:
      "O Green Gummy é ideal para promover a saúde e a beleza de cabelos, pele e unhas, combinando ingredientes naturais.",
    price: 104.9,
    originalPrice: 129.9,
    image: "/placeholder.svg?height=400&width=300",
    rating: 5,
    isNew: false,
    isPromotion: true,
  },
  {
    id: 2,
    name: "Afrodite + Gummy",
    category: "Cuidados Femininos",
    description:
      "Combo especial para cuidados femininos completos, proporcionando beleza e bem-estar em um único pacote.",
    price: 179.84,
    originalPrice: 249.9,
    image: "/placeholder.svg?height=400&width=300",
    rating: 5,
    isNew: true,
    isPromotion: true,
  },
  {
    id: 3,
    name: "Premium Emagrecedor",
    category: "Emagrecedores",
    description:
      "O Premium é ideal para acelerar o metabolismo, combinando ingredientes naturais como cafeína e psyllium.",
    price: 110.0,
    originalPrice: 110.0,
    image: "/placeholder.svg?height=400&width=300",
    rating: 5,
    isNew: false,
    isPromotion: false,
  },
  {
    id: 4,
    name: "Melatonina Plus",
    category: "Para Seu Sono",
    description: "Fórmula avançada com melatonina e ingredientes naturais para um sono reparador e de qualidade.",
    price: 89.9,
    originalPrice: 89.9,
    image: "/placeholder.svg?height=400&width=300",
    rating: 4,
    isNew: true,
    isPromotion: false,
  },
  {
    id: 5,
    name: "Vitamina D3 + K2",
    category: "Vitaminas",
    description: "Combinação sinérgica de vitaminas D3 e K2 para melhor absorção e saúde dos ossos.",
    price: 79.9,
    originalPrice: 99.9,
    image: "/placeholder.svg?height=400&width=300",
    rating: 5,
    isNew: false,
    isPromotion: true,
  },
  {
    id: 6,
    name: "Whey Protein Premium",
    category: "Para Seu Treino",
    description: "Proteína de alta qualidade para recuperação muscular e ganho de massa magra.",
    price: 159.9,
    originalPrice: 159.9,
    image: "/placeholder.svg?height=400&width=300",
    rating: 5,
    isNew: true,
    isPromotion: false,
  },
]

type SortOption = "relevancia" | "menor-preco" | "maior-preco" | "mais-vendidos" | "lancamentos"

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [priceRange, setPriceRange] = useState([0, 300])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [showNewOnly, setShowNewOnly] = useState(false)
  const [sortBy, setSortBy] = useState<SortOption>("relevancia")

  // Função para filtrar os produtos
  const filteredProducts = products.filter((product) => {
    // Filtro por preço
    if (product.price < priceRange[0] || product.price > priceRange[1]) {
      return false
    }

    // Filtro por categoria
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false
    }

    // Filtro por nome
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false
    }

    // Filtro por lançamentos
    if (showNewOnly && !product.isNew) {
      return false
    }

    return true
  })

  // Função para ordenar os produtos
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "menor-preco":
        return a.price - b.price
      case "maior-preco":
        return b.price - a.price
      case "lancamentos":
        return Number(b.isNew) - Number(a.isNew)
      case "mais-vendidos":
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">FILTRAR POR</h2>
              <div className="h-1 w-12 bg-primary mb-6" />
            </div>

            <div>
              <h3 className="text-lg mb-3">Categorias</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={category.id}
                      checked={selectedCategories.includes(category.label)}
                      onCheckedChange={(checked) => {
                        setSelectedCategories(
                          checked
                            ? [...selectedCategories, category.label]
                            : selectedCategories.filter((c) => c !== category.label),
                        )
                      }}
                    />
                    <label
                      htmlFor={category.id}
                      className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg mb-3">Nome</h3>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Nome do produto"
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg mb-3">Preço</h3>
              <Slider
                defaultValue={[0, 300]}
                max={300}
                min={0}
                step={1}
                value={priceRange}
                onValueChange={setPriceRange}
                className="my-6"
              />
              <div className="text-sm text-muted-foreground">
                R${priceRange[0].toFixed(2)} - R${priceRange[1].toFixed(2)}
              </div>
            </div>

            <div>
              <h3 className="text-lg mb-3">Lançamento</h3>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="lancamento"
                  checked={showNewOnly}
                  onCheckedChange={(checked) => setShowNewOnly(checked as boolean)}
                />
                <label
                  htmlFor="lancamento"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mostrar apenas lançamentos
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid2X2 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">{sortedProducts.length} produtos encontrados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">Ordenar Por:</span>
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevancia">Relevância</SelectItem>
                  <SelectItem value="menor-preco">Menor Preço</SelectItem>
                  <SelectItem value="maior-preco">Maior Preço</SelectItem>
                  <SelectItem value="mais-vendidos">Mais Vendidos</SelectItem>
                  <SelectItem value="lancamentos">Lançamentos</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div
            className={`grid gap-6 ${
              viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
            }`}
          >
            {sortedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="relative">
                  {(product.isNew || product.isPromotion) && (
                    <div className="absolute left-4 top-4 z-10 flex gap-2">
                      {product.isNew && (
                        <Badge className="bg-[#2F4538] text-white hover:bg-[#2F4538]/90">LANÇAMENTO</Badge>
                      )}
                      {product.isPromotion && (
                        <Badge className="bg-red-500 text-white hover:bg-red-500/90">PROMOÇÃO</Badge>
                      )}
                    </div>
                  )}
                  <div
                    className={`${viewMode === "grid" ? "aspect-[4/5]" : "aspect-[16/9]"} overflow-hidden bg-muted p-6`}
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-contain transition-transform hover:scale-105"
                    />
                  </div>
                </div>
                <CardContent className={`flex ${viewMode === "grid" ? "flex-col" : "flex-row"} gap-4 p-6`}>
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      <p className="text-sm text-primary font-medium">{product.category}</p>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    <div className="flex items-center gap-1">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < product.rating ? "fill-amber-500 text-amber-500" : "text-muted"}`}
                          />
                        ))}
                      <span className="ml-2 text-sm text-muted-foreground">({product.rating})</span>
                    </div>
                  </div>
                  <div className={`flex ${viewMode === "grid" ? "flex-col" : "flex-col justify-center"} gap-3`}>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        R$ {product.originalPrice.toFixed(2).replace(".", ",")}
                      </span>
                    )}
                    <p className="text-2xl font-bold text-primary">R$ {product.price.toFixed(2).replace(".", ",")}</p>
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">COMPRAR</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-8">
              <p className="text-lg text-muted-foreground">Nenhum produto encontrado com os filtros selecionados.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

