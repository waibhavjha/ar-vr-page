import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "We Work",
    paragraph:
      "Coworking",
    image: "/images/blog/prp-image-1.avif",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Starting from ₹8,500/Seat",
    },
    tags: ["Coworking"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Spring House",
    paragraph:
      "Coworking",
    image: "/images/blog/prp-image-2.avif",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Starting from ₹6,500/Seat",
    },
    tags: ["Coworking"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Employers Place",
    paragraph:
      "Coworking",
    image: "/images/blog/prp-image-3.avif",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Starting from ₹5,500/Seat",
    },
    tags: ["Coworking"],
    publishDate: "2025",
  },
];
export default blogData;
