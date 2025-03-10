import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ExitWarning() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl font-bold mb-8 text-red-500"></h1>
      <h1 className="text-4xl font-bold mb-8 text-red-500"></h1>
      <h1 className="text-4xl font-bold mb-8 text-red-500">why are you trying to leave? :3</h1>
      <Link
        href="/"
        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Go Back</span>
      </Link>
      <img src="/file.svg" alt="Profile" style={{ height: '400px', width: '400px' }} />
    </div>
  )
}
