import { FAQItem, Logo } from "./types";
import oracle from "./assets/partners/oracle.png";
import morpheus from "./assets/partners/morpheus.png";
import samsung from "./assets/partners/samsung.png";
import monday from "./assets/partners/monday.png";
import segment from "./assets/partners/segment.png";
import coinbase from "./assets/partners/coinbase.png";
import spotify from "./assets/partners/spotify.png";
import slack from "./assets/partners/slack.png";
import dropbox from "./assets/partners/dropbox.png";
import webflow from "./assets/partners/webflow.png";
import zoom from "./assets/partners/zoom.png";

import icon1 from "./assets/services/Vector (7).png";
import icon2 from "./assets/services/Vector (8).png";
import icon3 from "./assets/services/Vector (9).png";
import icon4 from "./assets/services/Vector (10).png";
import icon5 from "./assets/services/Vector (11).png";
import icon6 from "./assets/services/Vector (12).png";
import symbol1 from "./assets/features/Symbol.png";
import symbol2 from "./assets/features/Symbol (1).png";
import symbol3 from "./assets/features/Symbol (2).png";
import symbol4 from "./assets/features/Symbol (3).png";
import blog1 from "./assets/blogs/blog1.png";
import blog2 from "./assets/blogs/blog2.png";
import blog3 from "./assets/blogs/blog3.png";

export const section2Logos: Logo[] = [
  { name: "Oracle", src: oracle, alt: "Oracle Logo" },
  {
    name: "Morpheus",
    src: morpheus,
    alt: "Morpheus Logo 1",
  },
  {
    name: "Morpheus",
    src: morpheus,
    alt: "Morpheus Logo 2",
  },
  { name: "Samsung", src: samsung, alt: "Samsung Logo" },
  { name: "Monday", src: monday, alt: "Monday.com Logo" },
  { name: "Segment", src: segment, alt: "Segment Logo" },
];

export const services = [
  {
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
    icon: icon1,
    href: "/services/company-formation",
  },
  {
    title: "Company Secretarial Services",
    description:
      "Make data-driven decisions and utilize technology to reach business goals.",
    icon: icon2,
    href: "/services/secretarial",
  },
  {
    title: "Virtual Office Address",
    description:
      "Foster customer relationships by effectively serving your market.",
    icon: icon3,
    href: "/services/virtual-office",
  },
  {
    title: "Annual Compliance Services",
    description:
      "Turn your ideas into modern products with our design experts.",
    icon: icon4,
    href: "/services/compliance",
  },
  {
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
    icon: icon5,
    href: "/services/payroll",
  },
  {
    title: "Bookkeeping Services",
    description:
      "Steering user behaviours with creative design, data insights & technology.",
    icon: icon6,
    href: "/services/bookkeeping",
  },
];

export const features = [
  {
    icon: symbol1,
    title: "Confidential & Safe",
    description: "All your private information is safe with us",
    className: "bg-red-100",
  },
  {
    icon: symbol2,
    title: "No Hidden Fee",
    description:
      "Everything is put before you with no hidden charges or conditions",
    className: "bg-green-100",
  },
  {
    icon: symbol3,
    title: "Guaranteed Satisfaction",
    description:
      "We ensure that you stay 100% satisfied with our offered services",
    className: "bg-blue-100",
  },
  {
    icon: symbol4,
    title: "Expert CA/CS Assistance",
    description: "Prompt support from our in-house expert professionals",
    className: "bg-purple-100",
  },
  {
    icon: symbol1,
    title: "Expert CA/CS Assistance",
    description: "Prompt support from our in-house expert professionals",
    className: "bg-red-100",
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "Small business & Startup",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    author: "Prabhaah Mishra",
    date: "1 Jan 2023",
    image: blog1,
    tags: ["Tax & Audit", "Management"],
  },
  {
    id: "2",
    title: "Scale-Up Company Offer",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    image: blog2,
    tags: ["Tax", "Research", "Compliance"],
  },
  {
    id: "3",
    title: "Growing Business Package",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    image: blog3,
    tags: ["Audit", "Money Back"],
  },
  {
    id: "4",
    title: "Scale-Up Company Offer",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    author: "Karan Kumar",
    date: "1 Jan 2023",
    image: blog2,
    tags: ["Money", "Management"],
  },
  {
    id: "5",
    title: "Scale-Up Company Offer",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    author: "Richa Singh",
    date: "1 Jan 2023",
    image: blog3,
    tags: ["Tax Return", "News", "Audit"],
  },
  {
    id: "6",
    title: "Scale-Up Company Offer",
    description:
      "Starting a community doesn't need to be complicated, but how do you get started?",
    author: "Miss Nora",
    date: "1 Jan 2023",
    image: blog1,
    tags: ["Private Limited Company", "Customer Success"],
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software can help you recover deleted files from your desktop. The recovery process is designed to be simple and effective, with a high success rate for recently deleted files.",
  },
  {
    id: "2",
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software can help you recover deleted files from your desktop. The recovery process is designed to be simple and effective, with a high success rate for recently deleted files.",
  },
  {
    id: "3",
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software can help you recover deleted files from your desktop. The recovery process is designed to be simple and effective, with a high success rate for recently deleted files.",
  },
  {
    id: "4",
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software can help you recover deleted files from your desktop. The recovery process is designed to be simple and effective, with a high success rate for recently deleted files.",
  },
  {
    id: "5",
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, our software can help you recover deleted files from your desktop. The recovery process is designed to be simple and effective, with a high success rate for recently deleted files.",
  },
];

export const section12Logos: Logo[] = [
  { name: "coinbase", src: coinbase, alt: "Oracle Logo" },
  {
    name: "spotify",
    src: spotify,
    alt: "Morpheus Logo 1",
  },
  {
    name: "slack",
    src: slack,
    alt: "Morpheus Logo 2",
  },
  { name: "dropbox", src: dropbox, alt: "Samsung Logo" },
  { name: "webflow", src: webflow, alt: "Monday.com Logo" },
  { name: "zoom", src: zoom, alt: "Segment Logo" },
];

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    rating: 4.5,
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 2,
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    rating: 4.5,
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 3,
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    rating: 4.5,
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 4,
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    rating: 4.5,
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 5,
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    rating: 4.5,
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 6,
    name: "Chris",
    title: "President and CEO, PrintReach, USA",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident",
    rating: 4.5,
    image: "/placeholder.svg?height=64&width=64",
  },
];

export const section13Data = [
  { title: "1M+", description: "Customers" },
  { title: "12+", description: "Years of Excellence" },
  { title: "41+", description: "R&D Engineers" },
  { title: "78+", description: "Countries" },
  { title: "32874+", description: "Partners" },
  { title: "41+", description: "Awards Recieved" },
];
