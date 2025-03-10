"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Facebook } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold border-b-2 border-[#808080] pb-2">Contact Me</h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="border-2 border-[#808080] p-4 bg-[#efefef]">
            <h3 className="text-lg font-bold">Get In Touch</h3>
            <p className="mt-2 text-sm">
              Feel free to reach out if you have any questions or would like to work together. I'm always open to
              discussing new projects and opportunities.
            </p>

            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span className="text-sm">carterballow06@g.ucla.edu</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(760) 525-4955</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Los Angeles, CA</span>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
            <a href="https://github.com/carterballow" className="p-2 border border-[#808080] hover:bg-[#c0c0c0]">
            <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/carterballow/" className="p-2 border border-[#808080] hover:bg-[#c0c0c0]">
            <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/carterballooooo" className="p-2 border border-[#808080] hover:bg-[#c0c0c0]">
            <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/carter.ballow/" className="p-2 border border-[#808080] hover:bg-[#c0c0c0]">
            <Facebook className="w-5 h-5" />
            </a>
            </div>
          </div>
        </div>

        <div className="border-2 border-[#808080] p-4 bg-[#efefef]">
          <h3 className="text-lg font-bold">Send a Message</h3>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-[#808080] focus:border-[#000080]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-[#808080] focus:border-[#000080]"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border border-[#808080] focus:border-[#000080]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-[#808080] focus:border-[#000080]"
              />
            </div>

            <Button
              type="submit"
              className="px-4 py-2 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-b-[#808080] border-r-[#808080] hover:bg-[#d0d0d0] active:border-[#808080] active:border-b-[#dfdfdf] active:border-r-[#dfdfdf]"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
