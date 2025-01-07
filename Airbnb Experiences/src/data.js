const data = [
  {
      id: 1,
      title: "Lionel Messi",
      description: "Argentinian footballer, widely regarded as one of the greatest players of all time.",
      coverImg: "https://tse2.mm.bing.net/th?id=OIP.7stwxZm-L1BqyYwVuRKYNgHaE7&pid=Api&P=0&h=180",
      stats: {
          rating: 4.9,
          reviewCount: 12345
      },
      location: "Miami, USA",
      openSpots: 0
  },
  {
      id: 2,
      title: "Gordon Ramsay",
      description: "World-renowned chef and TV personality known for 'Hell's Kitchen' and 'MasterChef.'",
      coverImg: "https://tse1.mm.bing.net/th?id=OIF.e8Z%2fyEhUkKPjA%2fuygrDJuw&pid=Api&P=0&h=180",
      stats: {
          rating: 4.8,
          reviewCount: 9876
      },
      location: "London, UK",
      openSpots: 5
  },
  {
      id: 3,
      title: "Anthony Bourdain",
      description: "Celebrated chef and travel documentarian known for exploring global cuisine.",
      coverImg: "https://tse2.mm.bing.net/th?id=OIP.mzlvms-fleP5pt0FQ1LldAHaJe&pid=Api&P=0&h=180",
      stats: {
          rating: 4.9,
          reviewCount: 14500
      },
      location: "Global",
      openSpots: 2
  },
  {
      id: 4,
      title: "Cristiano Ronaldo",
      description: "Portuguese footballer and one of the most marketable athletes in the world.",
      coverImg: "https://tse2.mm.bing.net/th?id=OIP.p4DhnJ6ghVxV5wBW_llamgHaE7&pid=Api&P=0&h=180",
      stats: {
          rating: 4.8,
          reviewCount: 14567
      },
      location: "Riyadh, Saudi Arabia",
      openSpots: 10
  },
  {
      id: 5,
      title: "Kim Kardashian",
      description: "American reality TV star, entrepreneur, and cultural icon.",
      coverImg: "https://tse2.mm.bing.net/th?id=OIP.tyxedheMRu0FUbEr64Pt4wHaE7&pid=Api&P=0&h=180",
      stats: {
          rating: 4.7,
          reviewCount: 15000
      },
      location: "Los Angeles, USA",
      openSpots: 6
  },
  {
      id: 6,
      title: "Bear Grylls",
      description: "British adventurer and survivalist, known for 'Man vs. Wild.'",
      coverImg: "https://tse4.mm.bing.net/th?id=OIP.v_1kE6HFeJ1y9QE31WgYdAHaJd&pid=Api&P=0&h=180",
      stats: {
          rating: 4.9,
          reviewCount: 9800
      },
      location: "Wilderness",
      openSpots: 3
  },
  {
      id: 7,
      title: "Simone Biles",
      description: "American gymnast with a record 25 World Championship medals.",
      coverImg: "https://tse4.mm.bing.net/th?id=OIP.I-dQG9jbIOV0m7o0YYbsNgHaK1&pid=Api&P=0&h=180",
      stats: {
          rating: 4.9,
          reviewCount: 8543
      },
      location: "Texas, USA",
      openSpots: 0
  },
  {
      id: 8,
      title: "Jamie Oliver",
      description: "British chef and advocate for healthy eating.",
      coverImg: "https://tse3.mm.bing.net/th?id=OIP.0ygNs7qf9FJ6YNS_1mnInwHaHP&pid=Api&P=0&h=180",
      stats: {
          rating: 4.8,
          reviewCount: 11200
      },
      location: "London, UK",
      openSpots: 4
  },
  {
      id: 9,
      title: "Angelina Jolie",
      description: "Oscar-winning actress and global humanitarian.",
      coverImg: "https://tse3.mm.bing.net/th?id=OIP.yKB5T6ZtpvKt8uwgT2yIIgHaLH&pid=Api&P=0&h=180",
      stats: {
          rating: 4.9,
          reviewCount: 14000
      },
      location: "Hollywood, USA",
      openSpots: 8
  },
  {
      id: 10,
      title: "David Beckham",
      description: "English football legend and global fashion icon.",
      coverImg: "https://tse4.mm.bing.net/th?id=OIP.aZnVp3DlZbahP1QsUBOthwHaKv&pid=Api&P=0&h=180",
      stats: {
          rating: 4.8,
          reviewCount: 11000
      },
      location: "London, UK",
      openSpots: 6
  },
  {
      id: 11,
      title: "Marie Kondo",
      description: "Japanese organizing consultant and author known for her KonMari method.",
      coverImg: "https://tse1.mm.bing.net/th?id=OIP.86SESL7OiBZrYhpQqlB9sQHaLG&pid=Api&P=0&h=180",
      stats: {
          rating: 4.8,
          reviewCount: 8800
      },
      location: "Tokyo, Japan",
      openSpots: 7
  },
  {
      id: 12,
      title: "Julia Child",
      description: "American chef and TV personality who popularized French cuisine.",
      coverImg: "https://tse1.mm.bing.net/th?id=OIP.k5zb5PdGo7nfdPgIvaXxRwHaJg&pid=Api&P=0&h=180",
      stats: {
          rating: 4.9,
          reviewCount: 13500
      },
      location: "Paris, France",
      openSpots: 5
  },
  {
      id: 13,
      title: "The Rock (Dwayne Johnson)",
      description: "Actor and former wrestler, one of Hollywood's biggest stars.",
      coverImg: "https://tse3.mm.bing.net/th?id=OIP.QX8ss9_DWEbaWyOrLkDJKAHaE8&pid=Api&P=0&h=180",
      stats: {
          rating: 4.9,
          reviewCount: 17000
      },
      location: "Hollywood, USA",
      openSpots: 4
  },
  {
      id: 14,
      title: "Amelia Earhart",
      description: "Aviation pioneer and one of the first women to fly solo across the Atlantic.",
      coverImg: "https://tse2.mm.bing.net/th?id=OIP.1ykiB_vhkAQmRuZAK16DvwHaJd&pid=Api&P=0&h=180",
      stats: {
          rating: 4.9,
          reviewCount: 9500
      },
      location: "Global",
      openSpots: 2
  },
  {
      id: 15,
      title: "Lewis Hamilton",
      description: "British Formula 1 driver and seven-time world champion.",
      coverImg: "https://tse2.mm.bing.net/th?id=OIP.TeInF5UyhzbG-M3GVKHKvgHaE8&pid=Api&P=0&h=180",
      stats: {
          rating: 4.9,
          reviewCount: 9400
      },
      location: "Online",
      openSpots: 7
  },
  {
      id: 16,
      title: "Anthony Hopkins",
      description: "Acclaimed actor known for his roles in 'The Silence of the Lambs' and 'The Father.'",
      coverImg: "https://tse2.mm.bing.net/th?id=OIP.B4nY8OAsZbYbUlnxS3NAigHaLC&pid=Api&P=0&h=180",
      stats: {
          rating: 4.9,
          reviewCount: 10300
      },
      location: "Wales, UK",
      openSpots: 3
  },
  {
      id: 17,
      title: "Martha Stewart",
      description: "Lifestyle guru and TV personality specializing in cooking and home décor.",
      coverImg: "https://tse2.mm.bing.net/th?id=OIP.bZn_bYHWkuGEs95FL1NuKAHaJH&pid=Api&P=0&h=180",
      stats: {
          rating: 4.8,
          reviewCount: 8700
      },
      location: "New York, USA",
      openSpots: 5
  },
  {
      id: 18,
      title: "Kylian Mbappé",
      description: "French footballer and World Cup winner.",
      coverImg: "https://tse4.mm.bing.net/th?id=OIP.9qAeSZ3m-8fRffTLUnGpzwHaJ3&pid=Api&P=0&h=180",
      stats: {
          rating: 4.8,
          reviewCount: 8900
      },
      location: "Paris, France",
      openSpots: 9
  }
];

export default data;
