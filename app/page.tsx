'use client'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Phone, Mail, MapPin, Users, BookOpen, Award, Globe } from "lucide-react"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"

import logo from "../public/logo.png"
// import npmalda from "../public/NPEAmalda.png"

export default function NorthPointGroupLanding() {
  const schools = [
    {
      name: "North Point",
      level: "",
      grades: "K-5",
      website: "https://northpoint-elementary.edu",
      description: "Building strong foundations for lifelong learning",
      logo: "/north-point-elementary-school-logo-with-books-and-.jpg",
      cardImages: [
        "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
        "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
        "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
      ],
    },
    {
      name: "North Point English Academy",
      level: "Middle School",
      grades: "6-8",
      website: "https://northpoint-middle.edu",
      description: "Nurturing growth during critical developmental years",
      logo: "/NPEA.png",
      cardImages: [
        "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
        "https://cdn.pixabay.com/photo/2022/08/08/19/36/landscape-7373484_1280.jpg"
      ],
    },
    {
      name: "North Point Public School",
      level: "High School",
      grades: "9-12",
      website: "https://northpoint-high.edu",
      description: "Preparing students for college and career success",
      logo: "/NPPS.png",
      cardImages: [
        "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
        "https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-cloudy-background-beautiful-natural-streaks-of-sky-and-clouds-red-image_15684333.jpg",
        "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
      ],
    },
    {
      name: "North Point Play School",
      level: "Specialized",
      grades: "K-12",
      website: "https://northpoint-academy.edu",
      description: "Advanced programs for gifted and talented students",
      logo: "/NPPLAY.png",
      cardImages: [
        "https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_1280.jpg",
        "https://i0.wp.com/picjumbo.com/wp-content/uploads/palm-tree-and-sky-in-early-evening-free-image.jpg?w=600&quality=80",
        "https://media.istockphoto.com/id/1461630610/photo/group-of-happy-students-checking-results-on-laptop-while-sitting-on-college-campus-concept-of.jpg?s=612x612&w=0&k=20&c=cFO_ROJ_yxhk7lv8Xwm13iaIUOnL_nJMO1EU2lKhPVQ="
      ],
    },
    {
      name: "North Point Academy",
      level: "Technical",
      grades: "9-12",
      website: "https://northpoint-tech.edu",
      description: "Career-focused education in technology and trades",
      logo: "/NPA.png",
      cardImages: [
        "https://png.pngtree.com/thumb_back/fh260/background/20230411/pngtree-nature-forest-sun-ecology-image_2256183.jpg",
        "https://t4.ftcdn.net/jpg/08/65/05/13/360_F_865051346_z5VQQ1Ty7SZbseqQwCODRtyFTxh7wEnO.jpg",
        "https://www.shutterstock.com/image-photo/portrait-little-boy-studying-classroom-600nw-2491116325.jpg"
      ],
    },
    {
      name: "North Point Residential School",
      level: "International",
      grades: "K-12",
      website: "https://northpoint-international.edu",
      description: "Global education with international curriculum",
      logo: "/NPRS.png",
      cardImages: [
        "https://static.vecteezy.com/system/resources/thumbnails/030/660/619/small_2x/simple-and-beautiful-ipad-wallpaper-high-quality-free-photo.jpg",
        "https://img.freepik.com/premium-photo/indian-college-student-points-hand-laptop-screen_29977-141.jpg",
        "https://img.freepik.com/premium-photo/indian-college-student-with-laptop-digital-education-concept_1257902-1561.jpg"
      ],
    },
  ]


  const heroImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoyRlg0V6aXjIRSL2rn04y1OgnFfWBVIJYQ&s",
    "https://gokilambalacademy.com/wp-content/uploads/2021/01/vision.jpg",
    "https://digitallearning.eletsonline.com/wp-content/uploads/2019/12/Why-School-education-crucial-for-child-development.jpg",
  ]


  const stats = [
    { icon: Users, label: "Students", value: "12,000+" },
    { icon: BookOpen, label: "Programs", value: "150+" },
    { icon: Award, label: "Awards", value: "50+" },
    { icon: Globe, label: "Countries", value: "25+" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center ">
              {/* Ensure your logo path is correct, relative to the public directory */}
              <Image src={logo} alt="North Point Group" className="h-25 w-auto" width={50} height={50} /> 
              <div className="ml-3"> {/* Added margin to separate logo from text */}
                <h1 className="text-2xl font-bold text-primary">North Point Group</h1>
                <p className="text-sm text-muted-foreground">Excellence in Education</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#schools" className="text-foreground hover:text-primary transition-colors">
                Schools
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button>Apply Now</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {/* For a true slider, you'd integrate a library here. This is a static background image. */}
       <section className="relative min-h-screen">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="h-screen"
        >
          {heroImages.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="h-screen w-full bg-cover bg-center flex items-center justify-center relative"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto text-center relative z-10 text-white">
                  <h2 className="text-5xl font-bold mb-6">Empowering Students at Every Level</h2>
                  <p className="text-xl mb-8 max-w-3xl mx-auto">
                    North Point Group is a premier educational network committed to providing exceptional learning
                    experiences from elementary through specialized programs, preparing students for success in an
                    ever-changing world.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 text-white">
                      Explore Our Schools
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-primary"
                    >
                      Schedule a Visit
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools Grid */}
      

      {/* Schools Grid */}
      <section id="schools" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Our Schools</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive network of educational institutions, each designed to meet the unique needs of
              students at different stages of their academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schools.map((school, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="flex flex-col h-full">
                  {school.cardImages && (
                    <div className="relative h-48 w-full">
                      <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop
                        className="h-full w-full"
                      >
                        {school.cardImages.map((img, i) => (
                          <SwiperSlide key={i}>
                            <Image
                              src={img}
                              alt={`${school.name} background`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  )}
                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-4">
                      <Image
                        src={school.logo || "/placeholder.svg"}
                        alt={`${school.name} logo`}
                        width={64}
                        height={64}
                        className="h-16 w-auto object-contain"
                      />
                      <Badge variant="secondary">{school.level}</Badge>
                    </div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{school.name}</h4>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">{school.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium">Grades: {school.grades}</span>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                      asChild
                    >
                      <a href={school.website} target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8">About North Point Group</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              For over three decades, North Point Group has been at the forefront of educational excellence, serving
              diverse communities with innovative programs and dedicated faculty. Our comprehensive network of schools
              provides seamless educational pathways from early childhood through specialized career preparation.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Academic Excellence</h4>
                <p className="text-sm text-muted-foreground">Rigorous curriculum designed to challenge and inspire</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Community Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Building strong connections between students, families, and educators
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Proven Results</h4>
                <p className="text-sm text-muted-foreground">
                  Consistently high achievement and college acceptance rates
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">Get in Touch</h3>
              <p className="text-xl text-muted-foreground">
                Ready to join the North Point Group family? We're here to help you find the perfect educational fit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@northpointgroup.edu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>123 Education Drive, Learning City, LC 12345</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold mb-6">Quick Links</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="justify-start bg-transparent">
                    Admissions
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    Academics
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    Athletics
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    Arts Programs
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    Student Life
                  </Button>
                  <Button variant="outline" className="justify-start bg-transparent">
                    Parent Portal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Image
              src={logo}
              alt="North Point Group"
              className="h-25 w-auto mx-auto mb-4"
              width={50} // Added width/height for Next.js Image component
              height={50}
            />
            <p className="text-muted-foreground mb-2">
              © 2024 North Point Group. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Developed by <span className="font-semibold text-primary">EduNextG India LLP</span>
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}