import { Logo } from "@/components/Logo"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-10">
      <div className="container flex flex-col gap-10 sm:flex-row sm:gap-0 justify-between items-center">
        <Logo />

        <Link href="mailto:rivra@rivradigital.com" className="text-neutral-50 font-medium uppercase cursor-pointer text-sm">rivra@rivradigital.com</Link>

        <small className="text-neutral-50 font-medium">© 2025 RIVRA DIGITAL</small>
      </div>
    </footer>
  )
}