"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Check, Star, Truck } from "lucide-react"
import {
  IceCreamBowlIcon as Bowl,
  Ruler,
  PuzzleIcon as PuzzlePieces,
  Dumbbell,
  TrendingUp,
  SpaceIcon as Yoga,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProductCard } from "@/components/product-card"
import { IconCategory } from "@/components/icon-category"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Produtos Naturais para sua Beleza",
      description: "Descubra nossa linha de cosméticos naturais",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Nova Coleção Verão",
      description: "Produtos refrescantes para os dias quentes",
    },
    {
      image: "/placeholder.svg?height=600&width=1200",
      title: "Promoção Especial",
      description: "Até 30% de desconto em produtos selecionados",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <main className="flex-1">
      {/* Carrossel */}
      <section className="relative h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/30 z-10" />
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl max-w-[800px]">
                {slide.title}
              </h1>
              <p className="mt-4 max-w-[600px] text-lg md:text-xl">{slide.description}</p>
              <Button size="lg" className="mt-6">
                Comprar Agora
              </Button>
            </div>
          </div>
        ))}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white"
          onClick={prevSlide}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white"
          onClick={nextSlide}
        >
          <ArrowRight className="h-6 w-6" />
        </Button>
        <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Categorias</h2>
          <p className="max-w-[700px] text-muted-foreground">
            Explore nossa linha completa de produtos para saúde e bem-estar
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          <IconCategory icon={<Bowl className="h-8 w-8" />} label="Nutricional" color="bg-[#4A5D4F]" />
          <IconCategory icon={<Ruler className="h-8 w-8" />} label="Evolução Cliente" color="bg-[#B5A48B]" />
          <IconCategory icon={<PuzzlePieces className="h-8 w-8" />} label="Psicológico" color="bg-[#607D8B]" />
          <IconCategory icon={<Dumbbell className="h-8 w-8" />} label="Treino" color="bg-[#8B6D6D]" />
          <IconCategory icon={<TrendingUp className="h-8 w-8" />} label="Oportunidades" color="bg-[#7C8B6D]" />
          <IconCategory icon={<Yoga className="h-8 w-8" />} label="Bem Estar" color="bg-[#C4B486]" />
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="border-0 shadow-sm">
            <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium">100% Natural</h3>
              <p className="text-sm text-muted-foreground">
                Todos os nossos produtos são feitos com ingredientes naturais, livres de produtos químicos nocivos.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium">Frete Grátis</h3>
              <p className="text-sm text-muted-foreground">
                Aproveite o frete grátis em todos os pedidos acima de R$150. Entrega rápida para todo o Brasil.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-sm">
            <CardContent className="flex flex-col items-center gap-2 p-6 text-center">
              <div className="rounded-full bg-primary/10 p-3">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium">Qualidade Premium</h3>
              <p className="text-sm text-muted-foreground">
                Nossos produtos são elaborados com os mais altos padrões de qualidade para resultados excepcionais.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Produtos Mais Vendidos</h2>
            <p className="max-w-[700px] text-muted-foreground">
              Descubra nossos produtos mais populares amados por clientes em todo o Brasil.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard
              name="Melatonina"
              subtitle="Para Seu Sono"
              description="A Melatonina é ideal para regular o ciclo do sono e melhorar a qualidade do descanso, combinando ingredientes naturais para um sono reparador."
              price={53.45}
              image="/placeholder.svg?height=400&width=300"
              rating={5}
              isNew={true}
            />
            <ProductCard
              name="Colágeno Hidrolisado"
              subtitle="Saúde da Pele"
              description="Suplemento premium para manter a saúde e beleza da pele, cabelos e unhas. Fórmula avançada com peptídeos bioativos."
              price={89.9}
              image="/placeholder.svg?height=400&width=300"
              rating={5}
              isNew={false}
            />
            <ProductCard
              name="Ômega 3"
              subtitle="Saúde Cardiovascular"
              description="Óleo de peixe purificado e concentrado, rico em EPA e DHA para suporte à saúde do coração e função cerebral."
              price={75.9}
              image="/placeholder.svg?height=400&width=300"
              rating={4}
              isNew={false}
            />
            <ProductCard
              name="Vitamina D3"
              subtitle="Imunidade Diária"
              description="Vitamina D3 de alta absorção para fortalecimento do sistema imunológico e saúde dos ossos."
              price={45.9}
              image="/placeholder.svg?height=400&width=300"
              rating={5}
              isNew={true}
            />
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/produtos">
              <Button variant="outline" className="gap-2">
                Ver Todos os Produtos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Nova Coleção: Brilho Natural</h2>
            <p className="text-muted-foreground">
              Nossa nova coleção foi desenvolvida para dar aquele brilho natural perfeito. Apresentando fórmulas leves,
              proteção solar e ingredientes hidratantes para manter sua pele radiante durante todo o ano.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="gap-2">
                Comprar Coleção
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline">Saiba Mais</Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg bg-muted">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Coleção Brilho Natural"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">O Que Nossos Clientes Dizem</h2>
            <p className="max-w-[700px] text-muted-foreground">Leia depoimentos de nossos clientes satisfeitos.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Ana Silva",
                text: "Estou usando o Sérum Facial Hidratante há um mês e minha pele nunca esteve melhor! É super hidratante sem deixar a pele oleosa.",
                avatar: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Carlos Oliveira",
                text: "O Creme Anti-idade para os Olhos é revolucionário. Notei uma redução significativa nas linhas finas ao redor dos meus olhos. Vale cada centavo!",
                avatar: "/placeholder.svg?height=100&width=100",
              },
              {
                name: "Juliana Santos",
                text: "Adoro que todos os produtos são naturais e não testados em animais. A Máscara com Vitamina C dá um brilho instantâneo à minha pele. Sou cliente para a vida toda!",
                avatar: "/placeholder.svg?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.text}</p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 overflow-hidden rounded-full">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">Cliente Verificado</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-16">
        <div className="rounded-lg bg-primary/10 p-8 md:p-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">Assine Nossa Newsletter</h2>
            <p className="max-w-[600px] text-muted-foreground">
              Inscreva-se em nossa newsletter para ofertas exclusivas, dicas de beleza e anúncios de novos produtos.
            </p>
            <div className="mt-2 flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Digite seu email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>Assinar</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

