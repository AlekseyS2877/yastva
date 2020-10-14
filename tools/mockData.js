const courses = [
  {
    id: 1,
    title: "Макароны Barilla",
    slug: "makaroni-barilla",
    authorId: 1,
    category: "Паста",
  },
  {
    id: 2,
    title: "Маслины чёрные Iberica",
    slug: "masliny-chernii-iberica",
    authorId: 1,
    category: "Маслины",
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript",
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript",
  },
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
};
