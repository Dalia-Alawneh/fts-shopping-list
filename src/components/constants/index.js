import plant1 from '#assets/plants/plant1.png';
import plant2 from '#assets/plants/plant2.png';
import plant3 from '#assets/plants/plant3.png';
import plant4 from '#assets/plants/plant4.png';
import plant5 from '#assets/plants/plant5.png';
import plant6 from '#assets/plants/plant6.png';

export const categories = [
  {
    id: 1,
    name: 'New Arrival'
  },
  {
    id: 2,
    name: 'Best Sellers'
  },
  {
    id: 3,
    name: 'Trending Plants'
  },
];

export const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 4999,
    rating: 5,
    image: plant1,
    category: {
      id: 1,
      name: 'New Arrival'
    }
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 5999,
    rating: 4.5,
    image: plant2,
    category: {
      id: 1,
      name: 'New Arrival'
    }
  },
  {
    id: 3,
    name: "Monstera Plant",
    price: 4999,
    rating: 5,
    image: plant3,
    category: {
      id: 3,
      name: 'Trending Plants'
    }
  },
  {
    id: 4,
    name: "ZZ Plant",
    price: 2999,
    rating: 4,
    image: plant4,
    category: {
      id: 2,
      name: 'Best Sellers'
    },
  },
  {
    id: 5,
    name: "Cactus Plant",
    price: 1999,
    rating: 4,
    image: plant5,
    category: {
      id: 2,
      name: 'Best Sellers'
    },
  },
  {
    id: 6,
    name: "Scindapsus Pictus",
    price: 4999,
    rating: 4,
    image: plant6,
    category: {
      id: 2,
      name: 'Best Sellers'
    },
  },
  {
    id: 7,
    name: "Peace Lily",
    price: 5999,
    rating: 4.5,
    image: plant2,
    category: {
      id: 2,
      name: 'Best Sellers'
    },
  },
];
