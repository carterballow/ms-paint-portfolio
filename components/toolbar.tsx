"use client"

import type React from "react"

import { MousePointer, Type, Paintbrush, Eraser, Pipette, Pencil, SprayCanIcon as Spray, Trash2 } from "lucide-react"

interface ToolbarProps {
  selectedTool: string
  onToolSelect: (tool: string) => void
  onClearDrawing: () => void
  showClearButton: boolean
}

export default function Toolbar({ selectedTool, onToolSelect, onClearDrawing, showClearButton }: ToolbarProps) {
  const tools = [
    { id: "select", icon: <MousePointer className="w-4 h-4" />, tooltip: "Select" },
    { id: "pencil", icon: <Pencil className="w-4 h-4" />, tooltip: "Pencil" },
    { id: "brush", icon: <Paintbrush className="w-4 h-4" />, tooltip: "Brush" },
    { id: "spray", icon: <Spray className="w-4 h-4" />, tooltip: "Airbrush" },
    { id: "text", icon: <Type className="w-4 h-4" />, tooltip: "Text" },
    { id: "picker", icon: <Pipette className="w-4 h-4" />, tooltip: "Color Picker" },
    { id: "eraser", icon: <Eraser className="w-4 h-4" />, tooltip: "Eraser" },
  ]

  return (
    <div className="w-12 border-r border-[#808080] bg-[#c0c0c0] p-1 self-stretch flex flex-col">
      <div className="grid grid-cols-2 gap-1">
        {tools.map((tool) => (
          <ToolButton
            key={tool.id}
            icon={tool.icon}
            tooltip={tool.tooltip}
            active={selectedTool === tool.id}
            onClick={() => onToolSelect(tool.id)}
          />
        ))}
      </div>

      {/* Clear Drawing button - only shown when on home page */}
      {showClearButton && (
        <div className="mt-4 border-t border-[#808080] pt-2">
          <ToolButton
            icon={<Trash2 className="w-4 h-4 text-red-500" />}
            tooltip="Clear Drawing"
            onClick={onClearDrawing}
            fullWidth
          />
        </div>
      )}
    </div>
  )
}

function ToolButton({
  icon,
  tooltip,
  active = false,
  onClick,
  fullWidth = false,
}: {
  icon: React.ReactNode
  tooltip: string
  active?: boolean
  onClick: () => void
  fullWidth?: boolean
}) {
  return (
    <button
      className={`flex items-center justify-center ${fullWidth ? "w-full col-span-2" : "w-full"} h-5 border ${
        active
          ? "bg-[#efefef] border-t-[#808080] border-l-[#808080] border-b-white border-r-white"
          : "bg-[#c0c0c0] border-t-white border-l-white border-b-[#808080] border-r-[#808080]"
      } hover:bg-[#efefef]`}
      title={tooltip}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}


