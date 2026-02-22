interface ClientLogoProps {
  name: string
  logo: string
}

export default function ClientLogo({ name, logo }: ClientLogoProps) {
  return (
    <div className="flex items-center justify-center p-4 bg-white rounded-xl border border-green-700 hover:shadow-lg transition">
      <img src={logo} alt={name} className="h-16 object-contain" />
    </div>
  )
}
