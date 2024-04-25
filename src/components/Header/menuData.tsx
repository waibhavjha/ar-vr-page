import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/",
    newTab: false,
  },
  {
    id: 33,
    title: "Property",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Locations",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Select Location",
        path: "/",
        newTab: false,
      },
      {
        id: 42,
        title: "Pune",
        path: "/",
        newTab: false,
      },
      {
        id: 43,
        title: "Mumbai",
        path: "/",
        newTab: false,
      },
      {
        id: 44,
        title: "Bangalore",
        path: "/",
        newTab: false,
      },
      {
        id: 45,
        title: "Hyderabad",
        path: "/",
        newTab: false,
      },
    ],
  },
];
export default menuData;
