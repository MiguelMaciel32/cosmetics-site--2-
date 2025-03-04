import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { WhatsAppLink } from "@/components/whatsapp-link"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Verde Cosméticos - Produtos Naturais de Beleza Premium",
  description:
    "Descubra cosméticos naturais premium para um brilho radiante e saudável. Feitos com amor e cuidado para sua pele.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold">
                <span className="text-primary">Verde</span>
                <span>Cosméticos</span>
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="/" className="text-sm font-medium hover:text-primary">
                  Início
                </Link>
                <Link href="/produtos" className="text-sm font-medium hover:text-primary">
                  Produtos
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-primary">
                  Coleções
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-primary">
                  Sobre
                </Link>
                <WhatsAppLink className="text-sm font-medium hover:text-primary">Contato</WhatsAppLink>
              </nav>
              <div className="flex items-center gap-4">
                <Link href="#" className="hidden md:block text-sm font-medium hover:text-primary">
                  Entrar
                </Link>
                <Button size="sm" className="hidden md:flex gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  Carrinho (0)
                </Button>
                <Button variant="outline" size="icon" className="md:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </Button>
              </div>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  )
}



import './globals.css'