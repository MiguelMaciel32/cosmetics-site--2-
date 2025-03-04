import type React from "react"
interface IconCategoryProps {
  icon: React.ReactNode
  label: string
  color: string
}

export function IconCategory({ icon, label, color }: IconCategoryProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`relative flex h-24 w-24 items-center justify-center rounded-full ${color}`}>
        <div className="absolute inset-0 rounded-full bg-[url('/brush-stroke.svg')] bg-cover bg-center bg-no-repeat opacity-20" />
        <div className="text-white">{icon}</div>
      </div>
      <span className="text-center font-medium">{label}</span>
    </div>
  )
}

