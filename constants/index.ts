import { Icons } from "@/components/shared/icons"
export const HomeServicesItems = [
  {
    badge: "Efficient",
    butttonText: "Learn More",
    description: "Stay Ahead with Advanced Technology",
    image: "/assets/img3.jpg",
    title: "Cutting-Edge Medical Equipment",
    isVertical: false,
  },
  {
    badge: "Personalized",
    butttonText: "Sign Up",
    description: "Receive Individualized Care",
    image: "/assets/img4.jpg",
    title: "Tailored Medical Solutions",
    isVertical: true,
  },
  {
    badge: "Accessible",
    butttonText: "Get Started",
    description: "Book Appointments with Ease",
    image: "/assets/img5.jpg",
    title: "Easy Booking Process",
    isVertical: true,
  },
]

export const HomeHealthcareSotionsItems = [
  {
    title: "Experience Quality Healthcare Services",
    subTitle:
      "Our medical services cover a wide range of specialties, ensuring that you receive the care you need.",
    buttonText: "Learn More",
    icon: Icons.heartPulse,
  },
  {
    title: "Access Convenient Online Consultations",
    subTitle:
      "With our online platform, you can easily connect with healthcare professionals from the comfort of your own home.",
    buttonText: "Sign Up",
    icon: Icons.walletCards,
  },
  {
    title: "Get Timely Medical Advice and Support",
    subTitle:
      "Our team of experienced doctors and specialists are here to provide you with the guidance and care you need.",
    buttonText: "Contact",
    icon: Icons.shieldHalf,
  },
]

export const HomeFeatures = [
  {
    href: "/",
    name: "Appointment Booking",
    description:
      "Allow users to book, reschedule, or cancel appointments instantly through an interactive calendar.",
    icon: Icons.bookText,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: "/",
    name: "Responsive Design",
    description:
      "Ensure the website is fully responsive, providing an optimal viewing experience across all devices, from desktops to smartphones.",
    icon: Icons.palette,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: "/",
    name: "Patient Portal",
    description:
      "Provide a personalized dashboard where users can view their medical history, upcoming appointments, and test results.",
    icon: Icons.layoutDashboard,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: "/",
    name: "Server-Side Rendering (SSR)",
    description:
      "Use SSR for faster page loads and improved SEO, ensuring content is quickly accessible and easily indexed by search engines.",
    icon: Icons.serverCog,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
]

export const testimonials = [
  {
    body: "The best healthcare appointment booking experience! Fast and reliable service.",
    author: {
      name: "Alex Johnson",
      handle: "alexjohnson",
      imageUrl:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Amazing variety of healthcare services! I found everything I needed for my appointments.",
    author: {
      name: "Taylor Green",
      handle: "taylorgreen",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Incredible customer support and quick responses. Highly recommend this healthcare service!",
    author: {
      name: "Angela Smith",
      handle: "angelasmith",
      imageUrl:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "Best online healthcare appointment booking experience! The service is unbeatable.",
    author: {
      name: "Morgan Lee",
      handle: "morganlee",
      imageUrl:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "I love the convenience of booking healthcare appointments online. Fantastic service!",
    author: {
      name: "Casey Adams",
      handle: "caseyadams",
      imageUrl:
        "https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "High-quality healthcare services and reliable appointment booking. I'm a loyal customer for life!",
    author: {
      name: "Riley Brown",
      handle: "rileybrown",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
]

export const HomeContactsItems = [
  {
    title: "Email",
    subTitle: "Contact us via email",
    info: "mediappoint@gmail.com",
    icon: Icons.mail,
  },
  {
    title: "Phone",
    subTitle: "Call us directly",
    info: "(+216) 22 222 222",
    icon: Icons.phone,
  },
  {
    title: "Office",
    subTitle: "Visit our office",
    info: "Monastir, Tunisia 5035",
    icon: Icons.mapPin,
  },
]

export const faqs = [
  {
    question: "What is this platform?",
    answer:
      "Our platform is a website designed to help you easily schedule and manage your healthcare appointments.",
  },
  {
    question: "How do I get started?",
    answer:
      "To get started, simply sign up for an account and start scheduling your appointments with our healthcare providers.",
  },
  {
    question: "How can I contact support?",
    answer:
      "If you need assistance, you can reach our support team through the contact information provided on our website.",
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Yes, you can reschedule or cancel your appointment through your account. Simply log in and navigate to the appointments section.",
  },
  {
    question: "How do I find a healthcare provider?",
    answer:
      "You can search for healthcare providers by specialty, location, or name. Our platform offers a comprehensive directory to help you find the right provider for your needs.",
  },
  {
    question: "Do you offer telehealth services?",
    answer:
      "Yes, we offer telehealth services for certain appointments. You can schedule a telehealth appointment just like you would an in-person visit.",
  },
  {
    question: "How do I pay for my appointment?",
    answer:
      "You can pay for your appointment through our secure online payment system. We accept various payment methods including credit cards and insurance.",
  },
]
