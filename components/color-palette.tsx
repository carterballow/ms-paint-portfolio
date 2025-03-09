"use client"

interface ColorPaletteProps {
  onColorSelect: (color: string) => void
  selectedColor: string
}

export default function ColorPalette({ onColorSelect, selectedColor }: ColorPaletteProps) {
  const colors = [
    "#000000",
    "#808080",
    "#800000",
    "#808000",
    "#008000",
    "#008080",
    "#000080",
    "#800080",
    "#ffffff",
    "#c0c0c0",
    "#ff0000",
    "#ffff00",
    "#00ff00",
    "#00ffff",
    "#0000ff",
    "#ff00ff",
  ]

  return (
    <div className="flex p-2 border-t border-[#808080] sticky bottom-0 bg-[#c0c0c0] z-10">
      <div className="flex flex-wrap w-full max-w-xs gap-1">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`w-5 h-5 border ${selectedColor === color ? "border-white outline outline-1 outline-black" : "border-[#808080]"}`}
            style={{ backgroundColor: color }}
            onClick={() => onColorSelect(color)}
            title={color}
          />
        ))}
      </div>
      <div className="flex ml-4">
        <div className="w-8 h-8 border border-[#808080]" style={{ backgroundColor: selectedColor }} />
        <div className="w-8 h-8 border border-[#808080] bg-white" />
      </div>
    </div>
  )
}
