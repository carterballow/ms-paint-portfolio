"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import HomePage from "@/components/home"
import AboutMe from "@/components/about-me"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Resume from "@/components/resume"
import HighSchoolArchive from "@/components/high-school-archive"
import WindowControls from "@/components/window-controls"
import ColorPalette from "@/components/color-palette"
import Toolbar from "@/components/toolbar"

// Tab interface
interface Tab {
  id: string
  label: string
  content: string
}

export default function PaintInterface() {
  const router = useRouter()
  const [tabs, setTabs] = useState<Tab[]>([{ id: "1", label: "Home", content: "home" }])
  const [activeTabId, setActiveTabId] = useState("1")
  const [nextTabId, setNextTabId] = useState(2)
  const [selectedColor, setSelectedColor] = useState("#000000")
  const [selectedTool, setSelectedTool] = useState("pencil")
  const [clearCounter, setClearCounter] = useState(0) // Counter to trigger clearing

  // Function to clear the canvas - will be passed to both Toolbar and HomePage
  const clearDrawing = useCallback(() => {
    localStorage.removeItem("ms-paint-drawing")
    // Increment the counter to trigger the useEffect in HomePage
    setClearCounter((prev) => prev + 1)
  }, [])

  // Get active tab content
  const activeTabContent = tabs.find((tab) => tab.id === activeTabId)?.content || "home"

  // Handle opening a new tab
  const openNewTab = (content: string) => {
    // Check if we already have 7 tabs open
    if (tabs.length >= 7) {
      // Silently fail - don't open a new tab
      return
    }

    // Check if this content is already open in a tab
    const existingTab = tabs.find((tab) => tab.content === content)
    if (existingTab) {
      setActiveTabId(existingTab.id)
      return
    }

    const label = getTabLabel(content)
    const newTab = { id: nextTabId.toString(), label, content }
    setTabs([...tabs, newTab])
    setActiveTabId(nextTabId.toString())
    setNextTabId(nextTabId + 1)
  }

  // Get tab label based on content
  const getTabLabel = (content: string) => {
    switch (content) {
      case "home":
        return "Home"
      case "projects":
        return "Projects"
      case "about":
        return "About Me"
      case "experience":
        return "Experience"
      case "contact":
        return "Contact Me"
      case "resume":
        return "Resume"
      case "highschool":
        return "High School Archive"
      default:
        return "New Tab"
    }
  }

  // Handle closing a tab
  const closeTab = (tabId: string, e: React.MouseEvent) => {
    e.stopPropagation()

    // Don't close if it's the last tab
    if (tabs.length === 1) return

    const newTabs = tabs.filter((tab) => tab.id !== tabId)
    setTabs(newTabs)

    // If we're closing the active tab, activate another tab
    if (tabId === activeTabId) {
      setActiveTabId(newTabs[newTabs.length - 1].id)
    }
  }

  // Handle tab click
  const handleTabClick = (tabId: string) => {
    setActiveTabId(tabId)
  }

  // Handle color selection
  const handleColorSelect = (color: string) => {
    setSelectedColor(color)
  }

  // Handle tool selection
  const handleToolSelect = (tool: string) => {
    setSelectedTool(tool)
  }

  // Handle exit button click
  const handleExit = () => {
    router.push("/exit-warning")
  }

  // Handle navigation from components
  const handleNavigate = (content: string) => {
    // Check if tab already exists
    const existingTab = tabs.find((tab) => tab.content === content)
    if (existingTab) {
      setActiveTabId(existingTab.id)
    } else {
      openNewTab(content)
    }
  }

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden border-2 border-[#dfdfdf] shadow-md bg-[#c0c0c0]">
      {/* Title bar */}
      <div className="flex items-center justify-between px-2 py-1 bg-[#000080] text-white sticky top-0 z-20">
        <h1 className="text-sm font-normal">Carter Ballow - Portfolio</h1>
        <WindowControls onExit={handleExit} />
      </div>

      {/* Menu bar - above tabs */}
      <div className="flex px-2 py-1 border-b border-[#808080] bg-[#c0c0c0] sticky top-7 z-10">
        <button onClick={() => openNewTab("home")} className="mr-4 text-sm hover:underline">
          Home
        </button>
        <button onClick={() => openNewTab("projects")} className="mr-4 text-sm hover:underline">
          Projects
        </button>
        <button onClick={() => openNewTab("about")} className="mr-4 text-sm hover:underline">
          About Me
        </button>
        <button onClick={() => openNewTab("experience")} className="mr-4 text-sm hover:underline">
          Experience
        </button>
        <button onClick={() => openNewTab("contact")} className="text-sm hover:underline">
          Contact Me
        </button>
      </div>

      {/* Tab bar */}
      <div className="flex items-center border-b border-[#808080] bg-[#c0c0c0] sticky top-[calc(1.75rem+1px)] z-10 overflow-x-auto">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={cn(
              "flex items-center px-3 py-1 border-r border-[#808080] min-w-[100px] max-w-[200px]",
              activeTabId === tab.id ? "bg-white" : "bg-[#efefef] hover:bg-[#e0e0e0]",
            )}
          >
            <span className="truncate text-sm mr-2">{tab.label}</span>
            {tabs.length > 1 && (
              <button onClick={(e) => closeTab(tab.id, e)} className="text-xs hover:bg-[#d0d0d0] rounded-sm p-0.5">
                <X size={12} />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Content area with toolbar */}
      <div className="flex flex-1 min-h-0 overflow-hidden">
        <Toolbar
          selectedTool={selectedTool}
          onToolSelect={handleToolSelect}
          onClearDrawing={clearDrawing}
          showClearButton={activeTabContent === "home"}
        />

        {/* Main content area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Canvas area */}
          <div className="flex-1 bg-white border border-[#808080] overflow-auto">
            {activeTabContent === "home" && (
              <HomePage
                onNavigate={handleNavigate}
                selectedColor={selectedColor}
                selectedTool={selectedTool}
                clearCounter={clearCounter}
              />
            )}
            {activeTabContent === "projects" && <Projects />}
            {activeTabContent === "about" && <AboutMe />}
            {activeTabContent === "experience" && <Experience />}
            {activeTabContent === "contact" && <Contact />}
            {activeTabContent === "resume" && <Resume />}
            {activeTabContent === "highschool" && <HighSchoolArchive />}
          </div>

          {/* Color palette */}
          <ColorPalette onColorSelect={handleColorSelect} selectedColor={selectedColor} />

          {/* Status bar */}
          <div className="flex items-center justify-between px-2 py-1 text-xs border-t border-[#808080]">
            <div>Tool: {selectedTool.charAt(0).toUpperCase() + selectedTool.slice(1)}</div>
            <div>Selected Color: {selectedColor}</div>
          </div>
        </div>
      </div>
    </div>
  )
}