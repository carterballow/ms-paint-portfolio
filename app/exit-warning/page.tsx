import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ExitWarning() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-4xl font-bold mb-8 text-red-500">You shouldn't have done that</h1>
      <p className="text-xl mb-12">The portfolio was closed unexpectedly.</p>

      <Link
        href="/"
        className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Go Back</span>
      </Link>
    </div>
  )
}
