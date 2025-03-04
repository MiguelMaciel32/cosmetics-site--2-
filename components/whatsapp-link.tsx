import type React from "react"
interface WhatsAppLinkProps {
  children: React.ReactNode
  className?: string
}

export function WhatsAppLink({ children, className }: WhatsAppLinkProps) {
  const phoneNumber = "5511957777785"
  const message = "Olá! Vim pelo site da Verde Cosméticos e gostaria de mais informações."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

