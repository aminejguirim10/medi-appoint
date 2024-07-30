import { Icons } from "@/components/shared/icons";
import React from "react";
export const HomeServicesItems = [
  {
    badge: "Efficient",
    butttonText: "Learn More",
    description: "Stay Ahead with Advanced Technology",
    image: "/assets/img2.jpg",
    title: "Cutting-Edge Medical Equipment",
    isVertical: false,
  },
  {
    badge: "Personalized",
    butttonText: "Sign Up",
    description: "Receive Individualized Care",
    image: "/assets/img2.jpg",
    title: "Tailored Medical Solutions",
    isVertical: true,
  },
  {
    badge: "Accessible",
    butttonText: "Get Started",
    description: "Book Appointments with Ease",
    image: "/assets/img2.jpg",
    title: "Easy Booking Process",
    isVertical: true,
  },
];

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
];

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
];
