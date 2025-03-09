"use client"

import { useEffect, useRef, useState } from "react"

interface HomePageProps {
  onNavigate: (tab: string) => void
  selectedColor: string
  selectedTool: string
  onClearDrawing: () => void
}

export default function HomePage({ onNavigate, selectedColor, selectedTool, onClearDrawing }: HomePageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 })
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

  // Save drawing to localStorage
  const saveDrawing = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dataURL = canvas.toDataURL()
    localStorage.setItem("ms-paint-drawing", dataURL)
  }

  // Load drawing from localStorage
  const loadDrawing = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const savedDrawing = localStorage.getItem("ms-paint-drawing")
    if (savedDrawing) {
      const img = new Image()
      img.onload = () => {
        // Clear canvas first to ensure we don't stack drawings
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0)
      }
      img.src = savedDrawing
    }
  }

  // Clear the canvas - now triggered from the toolbar
  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  // Listen for clear drawing events from parent
  useEffect(() => {
    clearCanvas()
  }, [onClearDrawing])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to fill the container
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (!container) return

      const width = container.clientWidth
      const height = container.clientHeight

      // Only resize if dimensions have changed
      if (width !== canvas.width || height !== canvas.height) {
        // Store current drawing
        const tempCanvas = document.createElement("canvas")
        const tempCtx = tempCanvas.getContext("2d")
        if (tempCtx) {
          tempCanvas.width = canvas.width
          tempCanvas.height = canvas.height
          tempCtx.drawImage(canvas, 0, 0)
        }

        // Resize canvas
        canvas.width = width
        canvas.height = height
        setCanvasSize({ width, height })

        // Restore drawing if we had one
        if (tempCanvas.width > 0 && tempCanvas.height > 0) {
          ctx.drawImage(tempCanvas, 0, 0, tempCanvas.width, tempCanvas.height, 0, 0, width, height)
        } else {
          // Load from localStorage on initial load
          loadDrawing()
        }
      }
    }

    // Initial resize
    resizeCanvas()

    // Listen for window resize
    window.addEventListener("resize", resizeCanvas)

    // Mouse events for drawing
    const handleMouseDown = (e: MouseEvent) => {
      setIsDrawing(true)
      const rect = canvas.getBoundingClientRect()
      setLastPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDrawing) return

      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      ctx.beginPath()

      if (selectedTool === "pencil") {
        ctx.strokeStyle = selectedColor
        ctx.lineWidth = 2
        ctx.moveTo(lastPos.x, lastPos.y)
        ctx.lineTo(x, y)
        ctx.stroke()
      } else if (selectedTool === "brush") {
        ctx.strokeStyle = selectedColor
        ctx.lineWidth = 5
        ctx.lineCap = "round"
        ctx.moveTo(lastPos.x, lastPos.y)
        ctx.lineTo(x, y)
        ctx.stroke()
      } else if (selectedTool === "eraser") {
        ctx.strokeStyle = "white"
        ctx.lineWidth = 10
        ctx.lineCap = "round"
        ctx.moveTo(lastPos.x, lastPos.y)
        ctx.lineTo(x, y)
        ctx.stroke()
      }

      setLastPos({ x, y })

      // Save drawing after each stroke
      saveDrawing()
    }

    const handleMouseUp = () => {
      if (isDrawing) {
        saveDrawing()
      }
      setIsDrawing(false)
    }

    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseup", handleMouseUp)
    canvas.addEventListener("mouseleave", handleMouseUp)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousedown", handleMouseDown)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseup", handleMouseUp)
      canvas.removeEventListener("mouseleave", handleMouseUp)
    }
  }, [isDrawing, selectedColor, selectedTool, lastPos])

  return (
    <div className="relative w-full h-full min-h-[500px]">
      {/* Drawing canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{ cursor: selectedTool === "eraser" ? "cell" : "crosshair" }}
      />

      {/* HTML overlay for ultra-clear text and buttons */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col items-center">
        {/* Name with ultra-clear text */}
        <h1
          className="text-5xl font-bold mt-[15%] mb-16 text-black"
          style={{
            fontFamily: "Arial, sans-serif",
            textRendering: "geometricPrecision",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            letterSpacing: "-0.5px",
          }}
        >
          Carter Ballow
        </h1>

        {/* Buttons with pointer-events enabled */}
        <div className="flex gap-10 pointer-events-auto">
          <button
            onClick={() => onNavigate("resume")}
            className="px-6 py-3 bg-[#0078d7] text-white font-bold border-2 border-black rounded-none transition-colors hover:bg-[#0063b1] focus:outline-none"
            style={{
              fontFamily: "Arial, sans-serif",
              textRendering: "geometricPrecision",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              boxShadow: "2px 2px 0 rgba(0,0,0,0.2)",
            }}
          >
            Resume
          </button>

          <button
            onClick={() => onNavigate("highschool")}
            className="px-6 py-3 bg-[#ff8c00] text-white font-bold border-2 border-black rounded-none transition-colors hover:bg-[#e67e00] focus:outline-none"
            style={{
              fontFamily: "Arial, sans-serif",
              textRendering: "geometricPrecision",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              boxShadow: "2px 2px 0 rgba(0,0,0,0.2)",
            }}
          >
            High School Archive
          </button>
        </div>
      </div>
    </div>
  )
}

