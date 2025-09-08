import { Logo } from "@/components/Logo"

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-10">
      <div className="container flex justify-between items-center">
        <Logo />

        <small className="text-neutral-50 font-medium">© 2025 RIVRA DIGITAL</small>
      </div>
    </footer>
  )
}