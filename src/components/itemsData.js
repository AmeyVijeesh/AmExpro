import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.webp";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img5.webp";
import img6 from "./images/img6.webp";
import img7 from "./images/img7.jpeg";
import img8 from "./images/img8.webp";
import img9 from "./images/img9.webp";
import img10 from "./images/img10.jpeg";
import img11 from "./images/img11.jpeg";
import img12 from "./images/img12.jpeg";
import img13 from "./images/img13.jpeg";
import img14 from "./images/img14.jpeg";
import img15 from "./images/img15.jpeg";
import img16 from "./images/img16.jpeg";
import img17 from "./images/img17.webp";
import img18 from "./images/img18.jpeg";
import img19 from "./images/img19.jpeg";
import img20 from "./images/img20.jpeg";
import img21 from "./images/img21.jpg";
import img22 from "./images/img22.jpeg";
import img23 from "./images/img23.jpeg";
import img24 from "./images/img24.jpeg";
import img25 from "./images/img25.jpeg";
import img26 from "./images/img26.jpeg";
import img27 from "./images/img27.jpeg";
import img28 from "./images/img28.jpeg";

const items = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro",
    price: "999",
    category: "Electronics",
    imageUrl: img1,
    description:
      "The iPhone 14 Pro is the latest smartphone from Apple, featuring a stunning Super Retina XDR display and powerful A15 Bionic chip.",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Samsung 4K Smart TV",
    price: "799",
    category: "Electronics",
    imageUrl: img2,
    rating: 4.2,
    description:
      "Enjoy a cinematic experience with the Samsung 4K Smart TV. It comes with built-in streaming apps and a crystal-clear display.",
  },
  {
    id: 3,
    name: "Samsung Galaxy Z Fold 4",
    price: "1799",
    category: "Electronics",
    imageUrl: img3,
    description:
      "Experience revolutionary technology with the new Galaxy Fold 4. Ultra-fast processing, high definition audio and video coupled with other cutting-edge features ensure that you never need an upgrade from this. ",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Breville Barista Espresso Maker",
    price: "499",
    category: "Home Appliances",
    imageUrl: img4,
    rating: 4.2,
    description:
      "Brew your favorite coffee at home with this high-quality coffee maker. It's easy to use and produces rich, flavorful coffee.",
  },
  {
    id: 5,
    name: "Puma Running Shoes",
    price: "89",
    category: "Sports & Outdoors",
    imageUrl: img5,
    rating: 4,
    description:
      "Get ready for your next run with these comfortable and durable running shoes. They provide excellent support and cushioning.",
  },
  {
    id: 6,
    name: "Apple Watch SE Series 9",
    price: "489",
    category: "Electronics",
    imageUrl: img6,
    rating: 4.5,
    description:
      "Stay connected and track your health, fitness and activity. The ultra-fast S9 chip enables a superbright display and a magical new way to quickly and easily interact with your Apple Watch without touching the screen. ",
  },
  {
    id: 7,
    name: "Harry Potter Book Set - Gryffindor",
    price: "105",
    category: "Books",
    imageUrl: img7, // Replace img7 with the URL of the book set's image
    description:
      "Complete set of Harry Potter books by J.K. Rowling. Join Harry, Hermione, and Ron on their magical adventures.",
    rating: 4.9,
  },

  // Apple iPad Pro
  {
    id: 8,
    name: "Apple iPad Pro",
    price: "1099",
    category: "Electronics",
    imageUrl: img9, // Replace img8 with the URL of the iPad Pro's image
    description:
      "The Apple iPad Pro offers exceptional performance and a stunning Liquid Retina display. Perfect for work and entertainment.",
    rating: 4.7,
  },

  // Percy Jackson book set
  {
    id: 9,
    name: "Percy Jackson Book Set",
    price: "30",
    category: "Books",
    imageUrl: img8, // Replace img9 with the URL of the book set's image
    description:
      "Join Percy Jackson in his adventures with this complete book set by Rick Riordan. Demigods and monsters await!",
    rating: 4.8,
  },

  // Remote control car
  {
    id: 10,
    name: "Remote Control Scale Model Car",
    price: "49.99",
    category: "Toys & Games",
    imageUrl: img10, // Replace img10 with the URL of the remote control car's image
    description:
      "Have fun with this high-speed remote control 1:14 scale model  of the Lamborghini Aventador. Metal high-gloss finish and extreme attention to detail.",
    rating: 4.5,
  },

  // Wooden desk
  {
    id: 11,
    name: "Wooden Desk",
    price: "249",
    category: "Furniture",
    imageUrl: img11, // Replace img11 with the URL of the wooden desk's image
    description:
      "Upgrade your workspace with this sturdy wooden desk. It provides ample space for work and organization.",
    rating: 4.6,
  },
  {
    id: 12,
    name: "Maze Runner Book Series",
    price: "45",
    category: "Books",
    imageUrl: img12, // Replace img12 with the URL of the book series' image
    description:
      "Experience the thrilling Maze Runner series by James Dashner. Get lost in the maze and unravel its secrets.",
    rating: 4.5,
  },

  // Samsung Cube Air Purifier
  {
    id: 13,
    name: "Samsung Cube Air Purifier",
    price: "199",
    category: "Home Appliances",
    imageUrl: img13, // Replace img13 with the URL of the air purifier's image
    description:
      "Breathe clean and fresh air with the Samsung Cube Air Purifier. Removes pollutants and allergens from your home.",
    rating: 4.6,
  },

  // Crockery Set
  {
    id: 14,
    name: "Crockery Set",
    price: "79",
    category: "Home Items",
    imageUrl: img14, // Replace img14 with the URL of the crockery set's image
    description:
      "Elevate your dining experience with this elegant crockery set. Perfect for special occasions and everyday use.",
    rating: 4.7,
  },

  // PlayStation 5
  {
    id: 15,
    name: "PlayStation 5",
    price: "499",
    category: "Toys & Games",
    imageUrl: img15, // Replace img15 with the URL of the PlayStation 5's image
    description:
      "Experience next-gen gaming with the PlayStation 5. Immerse yourself in stunning graphics and fast load times.",
    rating: 4.9,
  },

  // LEGO Mars Research Shuttle Building Set
  {
    id: 16,
    name: "LEGO Mars Research Shuttle",
    price: "39",
    category: "Toys & Games",
    imageUrl: img16, // Replace img16 with the URL of the LEGO set's image
    description:
      "Embark on a space adventure with the LEGO Mars Research Shuttle. Build and explore the Red Planet!",
    rating: 4.8,
  },

  // Football
  {
    id: 17,
    name: "Football",
    price: "20",
    category: "Sports & Outdoors",
    imageUrl: img17, // Replace img17 with the URL of the football's image
    description:
      "Enjoy a game of football with this high-quality ball. Perfect for practice and matches.",
    rating: 4.6,
  },
  // Microwave
  {
    id: 18,
    name: "Panasonic Microwave Oven",
    price: "129",
    category: "Home Appliances",
    imageUrl: img18, // Replace img18 with the URL of the microwave's image
    description:
      "Heat and cook your meals quickly with this efficient microwave. It's a kitchen essential.",
    rating: 4.4,
  },

  // Basketball
  {
    id: 19,
    name: "Basketball",
    price: "25",
    category: "Sports & Outdoors",
    imageUrl: img19, // Replace img19 with the URL of the basketball's image
    description:
      "Get ready to play some hoops with this high-quality basketball. Perfect for outdoor and indoor use.",
    rating: 4.7,
  },

  // Shirt
  {
    id: 20,
    name: "Shirt",
    price: "29",
    category: "Travel & Fashion",
    imageUrl: img20, // Replace img20 with the URL of the shirt's image
    description:
      "Upgrade your wardrobe with this stylish and comfortable shirt. Excellent for sports and other outdoor activities.",
    rating: 4.5,
  },

  // Laptop
  {
    id: 21,
    name: "Dell Inspiron Touchscreen Laptop",
    price: "799",
    category: "Electronics",
    imageUrl: img21, // Replace img21 with the URL of the laptop's image
    description:
      "Experience powerful computing with this high-performance Dell laptop. 16GB RAM, Intel i7 processor and 1TB SSD ensures sublime processing and speed. ",
    rating: 4.8,
  },
  // Coffee Mug
  {
    id: 22,
    name: "Coffee Mug - Ceramic, 16oz",
    price: "12",
    category: "Home Items",
    imageUrl: img22, // Replace img22 with the URL of the coffee mug's image
    description:
      "Enjoy your favorite hot beverages in this stylish coffee mug. It's a great addition to your morning routine.",
    rating: 4.6,
  },

  // Comfy Chair/Sofa
  {
    id: 23,
    name: "Single Reclining Sofa",
    price: "399",
    category: "Furniture",
    imageUrl: img23, // Replace img23 with the URL of the comfy chair/sofa's image
    description:
      "Relax and unwind in this comfortable sofa. Perfect for your living room or lounge area.",
    rating: 4.7,
  },

  // Luggage Bag
  {
    id: 24,
    name: "American Tourister Luggage - Set of 3",
    price: "79",
    category: "Travel & Fashion",
    imageUrl: img24, // Replace img24 with the URL of the luggage bag's image
    description:
      "Travel with ease and style with this spacious and durable luggage bag. It's perfect for your next adventure.",
    rating: 4.8,
  },

  // Teddy Bear
  {
    id: 25,
    name: "Teddy Bear",
    price: "19",
    category: "Toys & Games",
    imageUrl: img25, // Replace img25 with the URL of the teddy bear's image
    description: "A soft and adorable teddy bear. Good for children.",
    rating: 4.9,
  },

  // Bedside Table
  {
    id: 26,
    name: "Bedside Table",
    price: "59",
    category: "Furniture",
    imageUrl: img26, // Replace img26 with the URL of the bedside table's image
    description:
      "Complete your bedroom setup with this functional bedside table. It provides convenient storage and a stylish look. Comes with a nightlight and a 3 year warranty.",
    rating: 4.7,
  },
  {
    id: 27,
    name: "Indoor Plant",
    price: "29",
    category: "Home Items",
    imageUrl: img27, // Replace img27 with the URL of the indoor plants image
    description:
      "Bring the beauty of nature indoors with a variety of indoor plants. Perfect for enhancing your home decor.",
    rating: 4.7,
  },

  // Handbag
  {
    id: 28,
    name: "Pure Leather Handbag",
    price: "49",
    category: "Travel & Fashion",
    imageUrl: img28, // Replace img28 with the URL of the handbag's image
    description:
      "Accessorize in style with this elegant leather handbag. It offers both fashion and functionality for any occasion.",
    rating: 4.6,
  },
];

export default items;
