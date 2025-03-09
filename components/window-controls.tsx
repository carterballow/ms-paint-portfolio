"use client"

import { Minimize, Square } from "lucide-react"

interface WindowControlsProps {
  onExit: () => void
}

export default function WindowControls({ onExit }: WindowControlsProps) {
  return (
    <div className="flex">
      <button className="p-1 hover:bg-[#1084d0]">
        <Minimize className="w-3 h-3" />
        <span className="sr-only">Minimize</span>
      </button>
      <button className="p-1 hover:bg-[#1084d0]">
        <Square className="w-3 h-3" />
        <span className="sr-only">Resize</span>
      </button>
      <button className="p-1 hover:bg-[#1084d0]" onClick={onExit}>
        <span className="block w-3 h-3 text-xs font-bold">✕</span>
        <span className="sr-only">Close</span>
      </button>
    </div>
  )
}
