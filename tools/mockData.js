const foods = [
  {
    id: 1,
    title: "Макароны Barilla",
    token: "makaroni-barilla",
    authorId: 1,
    category: "Паста",
  },
  {
    id: 2,
    title: "Маслины чёрные Iberica",
    token: "masliny-chernii-iberica",
    authorId: 1,
    category: "Маслины",
  },
  {
    id: 3,
    title: "Шафран Sri Lanka Gold",
    token: "shafran-shri-lanka-gold",
    authorId: 2,
    category: "Приправы",
  },
  {
    id: 4,
    title: "Пармезан 'Волшебный'",
    token: "parmesan-volshebnyi",
    authorId: 3,
    category: "Сыры",
  },
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" },
];

const newFood = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newFood,
  foods,
  authors,
};
