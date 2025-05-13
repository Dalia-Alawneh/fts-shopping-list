import plant1 from '#assets/plants/plant1.png';
import plant2 from '#assets/plants/plant2.png';
import plant3 from '#assets/plants/plant3.png';
import plant4 from '#assets/plants/plant4.png';
import plant5 from '#assets/plants/plant5.png';
import plant6 from '#assets/plants/plant6.png';
import tipsBook from '#assets/tips/tipsBook.png';

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
    price: 49,
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
    price: 45,
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
    price: 59,
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
    price: 29,
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
    price: 199,
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
    price: 75,
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
    price: 26,
    rating: 4.5,
    image: plant2,
    category: {
      id: 2,
      name: 'Best Sellers'
    },
  },
  {
    id: 8,
    name: "Peace Lily",
    price: 26,
    rating: 4.5,
    image: plant2,
    category: {
      id: 3,
      name: 'Trending Plants'
    }
  },
  {
    id: 9,
    name: "Peace Lily",
    price: 26,
    rating: 4.5,
    image: plant2,
    category: {
      id: 1,
      name: 'New Arrival'
    }
  },
  {
    id: 10,
    name: "Cactus Plant",
    price: 199,
    rating: 4,
    image: plant5,
    category: {
      id: 1,
      name: 'New Arrival'
    },
  },
  {
    id: 11,
    name: "Scindapsus Pictus",
    price: 75,
    rating: 4,
    image: plant6,
    category: {
      id: 1,
      name: 'New Arrival'
    },
  },
];

export const greenHouseBook = {
  name: 'How to Take Care of Plants',
  image: tipsBook,
  description: "Watch our greenhouse guide and discover simple tips for all your plant care needs! From watering frequency to choosing the right pot, we've got you covered. Also you can download the E-book that guides the same procedure covered in the video, click the download button below and enjoy the journey to a greener environment.",
  rating: 5,
}