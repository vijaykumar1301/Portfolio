"use client";

import { useState ,useEffect } from "react"
import { Button } from "./components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/card"
import { Textarea } from "./components/textarea"
import { Input } from "./components/input"
import { Badge } from "./components/badge"

import {
     Menu,
  X,
  Download,
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Palette,
  Bot,
  ChevronDown,
  Calendar,
  GraduationCap,
} from "lucide-react"

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "services", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const skills = {
    languages: ["Python", "C", "Java", "HTML", "CSS", "JavaScript", "SQL"],
    frameworks: ["React.js", "Angular", "Django"],
    databases: ["MongoDB", "NoSQL", "SQL"],
    tools: ["LaTeX", "Excel", "Git", "GitHub"],
    design: ["Figma", "Canva"],
    aiml: ["NLP", "Prompt Engineering"],
  }

  const projects = [
    {
      title: "Online Railway Ticket Reservation System",
      description:
        "Full-stack PHP application with user authentication, booking system, and comprehensive admin panel for managing reservations.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "AI Web Scraper",
      description:
        "NLP-powered web scraper built with Streamlit, Selenium, and Large Language Models for intelligent data extraction.",
      tech: ["Python", "Streamlit", "Selenium", "NLP", "LLMs"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Weather Forecast Web App",
      description:
        "Real-time weather application using OpenWeather API with modern, responsive UI and location-based forecasting.",
      tech: ["JavaScript", "API Integration", "HTML", "CSS"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-stone-50/95 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-stone-800">Vijay Kumar</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-olive-600 ${
                    activeSection === item.id ? "text-olive-600" : "text-stone-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-600 hover:text-stone-800">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-stone-50 border-t border-stone-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-stone-600 hover:text-olive-600 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-stone-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Vijay Kumar"
              className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-stone-200 shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6">Vijay Kumar</h1>
          <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer | AI & Web Solutions | Freelance UI/UX Designer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-3 text-lg"
            >
              Explore My Work
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-olive-600 text-olive-600 hover:bg-olive-50 px-8 py-3 text-lg"
            >
              Hire Me
            </Button>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="mx-auto text-stone-400" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-stone-800 mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                Versatile and results-driven software developer with expertise in Java, JavaScript, C, C++, Python, SQL,
                HTML, and CSS. Proficient in AI-driven solutions, including Natural Language Processing (NLP) and
                sentiment analysis, with a solid foundation in data analysis and big data technologies.
              </p>
              <Button className="bg-olive-600 hover:bg-olive-700 text-white">
                <Download className="mr-2" size={16} />
                Download Resume
              </Button>
            </div>
            <div className="space-y-6">
              <Card className="border-stone-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-olive-600" size={24} />
                    <CardTitle className="text-stone-800">Education</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-stone-800">MCA</h4>
                    <p className="text-stone-600">Kristu Jayanti College Autonomous</p>
                    <p className="text-sm text-stone-500">Bangalore North University (2023–2025)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800">BCA</h4>
                    <p className="text-stone-600">Kristu Jayanti College Autonomous</p>
                    <p className="text-sm text-stone-500">Bangalore North University (2019–2022)</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-stone-800 mb-16">Experience</h2>
          <div className="space-y-8">
            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-stone-800">Software Development Engineer Intern</CardTitle>
                    <CardDescription className="text-olive-600 font-medium">Bluestock Fintech Pvt Ltd</CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-stone-500">
                    <Calendar size={16} />
                    <span className="text-sm">Apr 2025 – May 2025</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-stone-600">
                  <li>• Developed IPO-related features using Django REST APIs</li>
                  <li>• Built responsive frontend interfaces with React and Tailwind CSS</li>
                  <li>• Collaborated with cross-functional teams to deliver high-quality solutions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-stone-800">Front-End Developer Intern</CardTitle>
                    <CardDescription className="text-olive-600 font-medium">
                      Software Development Cell, Kristu Jayanti
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-stone-500">
                    <Calendar size={16} />
                    <span className="text-sm">Jun 2024 – Jul 2024</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-stone-600">
                  <li>• Developed responsive web pages using Angular 17+</li>
                  <li>• Implemented modern UI/UX designs with HTML, CSS, and JavaScript</li>
                  <li>• Ensured cross-browser compatibility and mobile responsiveness</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-stone-800 mb-16">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="text-stone-800">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-olive-100 text-olive-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="text-stone-800">Frameworks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-olive-100 text-olive-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="text-stone-800">Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-olive-100 text-olive-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="text-stone-800">Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-olive-100 text-olive-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="text-stone-800">Design</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.design.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-olive-100 text-olive-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="text-stone-800">AI/ML</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.aiml.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-olive-100 text-olive-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-stone-800 mb-16">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-stone-200 hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mb-4">
                  <Code className="text-olive-600" size={32} />
                </div>
                <CardTitle className="text-stone-800">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600">
                  Full-stack web development with modern frameworks and responsive design principles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mb-4">
                  <Palette className="text-olive-600" size={32} />
                </div>
                <CardTitle className="text-stone-800">UI/UX Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600">
                  User-centered design solutions that combine aesthetics with functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-stone-200 hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mb-4">
                  <Bot className="text-olive-600" size={32} />
                </div>
                <CardTitle className="text-stone-800">AI & NLP Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600">
                  Intelligent applications powered by natural language processing and machine learning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-stone-800 mb-16">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-stone-200 hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-stone-800">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-olive-200 text-olive-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-olive-600 text-olive-600 hover:bg-olive-50">
                    <ExternalLink className="mr-2" size={16} />
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-stone-800 mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">{"Let's work together"}</h3>
              <p className="text-stone-600 mb-8">
                {"I'm always interested in new opportunities and exciting projects. Feel free to reach out!"}
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-olive-600" size={20} />
                  <a href="mailto:vijaykumar773313@gmail.com" className="text-stone-600 hover:text-olive-600">
                    vijaykumar773313@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-olive-600" size={20} />
                  <a href="tel:+919342332770" className="text-stone-600 hover:text-olive-600">
                    +91 93423 32770
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="text-olive-600" size={20} />
                  <a href="https://github.com/vijaykumar3713" className="text-stone-600 hover:text-olive-600">
                    vijaykumar3713
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="text-olive-600" size={20} />
                  <a href="#" className="text-stone-600 hover:text-olive-600">
                    Vijay Kumar
                  </a>
                </div>
              </div>
            </div>

            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="text-stone-800">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="border-stone-300" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email" className="border-stone-300" />
                  </div>
                  <div>
                    <Textarea placeholder="Your Message" rows={5} className="border-stone-300" />
                  </div>
                  <Button className="w-full bg-olive-600 hover:bg-olive-700 text-white">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Vijay Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

