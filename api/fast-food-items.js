

//api/fast-food-items.js:
export const fastFoodItems = [
  { 
    id: '1', 
    name: 'Burger', 
    price: '5.99', 
    image: 'https://www.shutterstock.com/image-photo/fresh-tasty-burger-isolated-on-600nw-1550041295.jpg',
    category: 'Fast Food',
    description: 'A juicy beef patty with lettuce, tomato, cheese, and pickles in a soft sesame seed bun.',
    nutritionalInfo: {
      calories: 550,
      fat: 25,
      carbs: 45,
      protein: 30
    },
    reviews: [
      { user: 'John Doe', rating: 4, comment: 'Delicious and filling!' },
      { user: 'Jane Smith', rating: 5, comment: 'The best burger ever!' }
    ]
  },
  { 
    id: '2', 
    name: 'Cheese Pizza', 
    price: '8.99', 
    image: 'https://i.pinimg.com/736x/26/c6/4b/26c64bef44546cdc05bc2233168f32ac.jpg',
    category: 'Fast Food',
    description: 'A classic pizza with mozzarella cheese, tomato sauce, and your choice of toppings.',
    nutritionalInfo: {
      calories: 750,
      fat: 30,
      carbs: 80,
      protein: 20
    },
    reviews: [
      { user: 'Alice', rating: 4, comment: 'Tasty but a bit too cheesy.' }
    ]
  },
  { 
    id: '3',
    name: 'Fries',
    price: '3.49',
    image: 'https://as2.ftcdn.net/v2/jpg/02/40/94/21/1000_F_240942173_udFeGFE8kWgkDuNeRG2YkzM5m7mUfwZP.jpg',
    category: 'Side',
    description: 'Crispy golden fries, lightly salted, and perfect as a side dish.',
    nutritionalInfo: {
      calories: 350,
      fat: 18,
      carbs: 45,
      protein: 3
    },
    reviews: [
      { user: 'Charlie', rating: 3, comment: 'Good fries, could be crispier.' }
    ]
  },
  { 
    id: '4', 
    name: 'Hotdog', 
    price: '4.99', 
    image: 'https://img.freepik.com/free-photo/classic-hot-dog-with-ketchup-mustard-sauce-isolated-white-background_123827-29747.jpg',
    category: 'Fast Food',
    description: 'A grilled hotdog in a soft bun with mustard, ketchup, and relish.',
    nutritionalInfo: {
      calories: 400,
      fat: 20,
      carbs: 35,
      protein: 15
    },
    reviews: [
      { user: 'Tom', rating: 5, comment: 'Perfect for a quick snack!' }
    ]
  },
  { 
    id: '5', 
    name: 'Chicken Nuggets',
    price: '6.49', 
    image: 'https://img.freepik.com/premium-photo/pile-fried-chicken-nuggets-white-background-generative-ai_797840-2872.jpg',
    category: 'Fast Food',
    description: ' 12 Pieces Crispy, breaded chicken nuggets served with your choice of dipping sauce.',
    nutritionalInfo: {
      calories: 450,
      fat: 25,
      carbs: 35,
      protein: 20
    },
    reviews: [
      { user: 'Sara', rating: 4, comment: 'Crispy and tasty.' }
    ]
  },
  { 
    id: '6',
    name: 'Onion Rings',
    price: '3.99',
    image: 'https://img.freepik.com/premium-photo/onion-rings-white-background_266402-1111.jpg',
    category: 'Side',
    description: 'Crispy battered onion rings, lightly salted and served with dipping sauce.',
    nutritionalInfo: {
      calories: 300,
      fat: 18,
      carbs: 35,
      protein: 5
    },
    reviews: [
      { user: 'Liam', rating: 3, comment: 'Could use more seasoning.' }
    ]
  },
  { 
    id: '7',
    name: 'Milkshake',
    price: '4.49',
    image: 'https://static.vecteezy.com/system/resources/previews/026/278/172/non_2x/chocolate-milkshake-in-plastic-takeaway-cup-isolated-on-white-background-ai-generated-photo.jpg',
    category: 'Beverage',
    description: 'A creamy milkshake made with ice cream, milk, and flavoring of your choice.',
    nutritionalInfo: {
      calories: 400,
      fat: 15,
      carbs: 55,
      protein: 6
    },
    reviews: [
      { user: 'Olivia', rating: 5, comment: 'So creamy and refreshing!' }
    ]
  },
  { 
    id: '8',
    name: 'Taco',
    price: '7.99',
    image: 'https://t4.ftcdn.net/jpg/10/51/02/77/360_F_1051027759_OYSbaM8t2d2f1eZU0IjVKQHV0YIaWgBt.jpg',
    category: 'Mexican',
    description: 'Soft corn tortillas filled with seasoned meat, topped with lettuce, cheese, and salsa.',
    nutritionalInfo: {
      calories: 600,
      fat: 25,
      carbs: 50,
      protein: 25
    },
    reviews: [
      { user: 'Ethan', rating: 4, comment: 'A bit spicy, but good!' }
    ]
  },
  { 
    id: '9', 
    name: 'Chicken Sandwich',
    price: '6.99', 
    image: 'https://www.shutterstock.com/image-photo/sandwich-ham-cheese-tomatoes-lettuce-600nw-1027873342.jpg',
    category: 'Fast Food',
    description: 'A crispy chicken breast served on a toasted bun with lettuce, tomato, and mayo.',
    nutritionalInfo: {
      calories: 700,
      fat: 30,
      carbs: 40,
      protein: 35
    },
    reviews: [
      { user: 'Mia', rating: 5, comment: 'Love this sandwich!' }
    ]
  },
  { 
    id: '10',
    name: 'Samosa',
    price: '2.99',
    image: 'https://img.freepik.com/premium-photo/samosa-isolated-white-background_398492-14264.jpg',
    category: 'Snack',
    description: 'Deep-fried pastry filled with a spicy mixture of potatoes and peas.',
    nutritionalInfo: {
      calories: 150,
      fat: 10,
      carbs: 15,
      protein: 4
    },
    reviews: [
      { user: 'Lucas', rating: 4, comment: 'Perfect for a light snack.' }
    ]
  },
  { 
    id: '11',
    name: 'Wings',
    price: '7.49',
    image: 'https://img.freepik.com/premium-photo/photo-crispy-fried-chicken-breast-wings-plate-isolated-white-background_763111-222729.jpg',
    category: 'Fast Food',
    description: 'Spicy and tangy chicken wings, crispy on the outside and juicy on the inside.',
    nutritionalInfo: {
      calories: 500,
      fat: 25,
      carbs: 20,
      protein: 30
    },
    reviews: [
      { user: 'Sophia', rating: 4, comment: 'Crispy and flavorful.' }
    ]
  },
  { 
    id: '12',
    name: 'Quesadilla',
    price: '5.79',
    image: 'https://t3.ftcdn.net/jpg/09/73/26/98/360_F_973269809_2jrpICmsTmD28TePBFYmhwHnzseG5Xl1.jpg',
    category: 'Mexican',
    description: 'A warm flour tortilla filled with melted cheese and your choice of meat or vegetables.',
    nutritionalInfo: {
      calories: 700,
      fat: 35,
      carbs: 60,
      protein: 20
    },
    reviews: [
      { user: 'Isabella', rating: 5, comment: 'Cheesy and delicious.' }
    ]
  },
  { 
    id: '13', 
    name: 'Beef Wrap', 
    price: '5.29',
    image: 'https://img.freepik.com/premium-photo/beef-kebab-tortilla-white-background_908985-36017.jpg',
    category: 'Snack',
    description: 'A healthy wrap filled with grilled Beef, veggies, and your choice of sauce.',
    nutritionalInfo: {
      calories: 400,
      fat: 12,
      carbs: 45,
      protein: 25
    },
    reviews: [
      { user: 'Mason', rating: 4, comment: 'Healthy and filling.' }
    ]
  },
  { 
    id: '14', 
    name: 'Mozzarella Sticks', 
    price: '4.79',
    image: 'https://st3.depositphotos.com/1177973/15596/i/450/depositphotos_155969410-stock-photo-fried-cheese-sticks.jpg',
    category: 'Side',
    description: 'Fried mozzarella cheese sticks served with marinara dipping sauce.',
    nutritionalInfo: {
      calories: 350,
      fat: 18,
      carbs: 30,
      protein: 15
    },
    reviews: [
      { user: 'Harper', rating: 5, comment: 'Great as a snack or side!' }
    ]
  },
  { 
    id: '15', 
    name: 'Cheeseburger', 
    price: '6.49', 
    image: 'https://goboldwithbutter.com/BoldWithButter/media/images/SmashBurgers_Hero_1460x973.jpg?ext=.jpg',
    category: 'Fast Food',
    description: 'A juicy beef patty topped with melted cheddar cheese, lettuce, tomato, and pickles in a soft bun.',
    nutritionalInfo: {
      calories: 600,
      fat: 35,
      carbs: 40,
      protein: 30
    },
    reviews: [
      { user: 'Jack', rating: 5, comment: 'A classic with a great cheesy flavor!' }
    ]
  },
  { 
    id: '16', 
    name: 'Veggie Burger', 
    price: '5.99', 
    image: 'https://img.freepik.com/premium-photo/delicious-juicy-burger-isolated-white-background-fast-food_554439-38.jpg',
    category: 'Vegetarian',
    description: 'A plant-based patty made with lentils, beans, and vegetables, topped with avocado, lettuce, and tomato on a whole wheat bun.',
    nutritionalInfo: {
      calories: 400,
      fat: 15,
      carbs: 45,
      protein: 20
    },
    reviews: [
      { user: 'Emma', rating: 5, comment: 'Delicious and filling without the meat!' }
    ]
  },
  { 
    id: '17', 
    name: 'Fish Tacos', 
    price: '6.99', 
    image: 'https://img.freepik.com/premium-photo/fish-tacos-isolated-white-background_972075-18476.jpg',
    category: 'Mexican',
    description: 'Lightly battered fish fillets served in soft tortillas with cabbage slaw, cilantro, and a tangy lime sauce.',
    nutritionalInfo: {
      calories: 550,
      fat: 20,
      carbs: 45,
      protein: 30
    },
    reviews: [
      { user: 'James', rating: 4, comment: 'Fresh and tasty, but could use a bit more spice.' }
    ]
  },
  { 
    id: '18', 
    name: 'Falafel Wrap', 
    price: '5.49', 
    image: 'https://img.freepik.com/premium-photo/vegetarian-tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-isolated-white-background_89816-45213.jpg',
    category: 'Middle Eastern',
    description: 'Crispy falafel balls wrapped in warm pita bread with hummus, cucumber, tomato, and tahini sauce.',
    nutritionalInfo: {
      calories: 450,
      fat: 20,
      carbs: 40,
      protein: 15
    },
    reviews: [
      { user: 'Zara', rating: 5, comment: 'A great vegetarian option with tons of flavor!' }
    ]
  },
  { 
    id: '19', 
    name: 'BBQ Ribs', 
    price: '12.99', 
    image: 'https://img.freepik.com/premium-photo/barbeque-ribs-white-background_832479-2313.jpg',
    category: 'Grilled',
    description: 'Tender, slow-cooked ribs glazed with a smoky BBQ sauce, served with coleslaw and cornbread.',
    nutritionalInfo: {
      calories: 950,
      fat: 50,
      carbs: 50,
      protein: 60
    },
    reviews: [
      { user: 'Chris', rating: 5, comment: 'Fall-off-the-bone tender and packed with flavor!' }
    ]
  },
  { 
    id: '20', 
    name: 'Spicy Chicken Wrap', 
    price: '6.49', 
    image: 'https://thumbs.dreamstime.com/b/bbq-chicken-wrap-over-white-19880185.jpg',
    category: 'Fast Food',
    description: 'Grilled spicy chicken breast wrapped in a flour tortilla with lettuce, cheese, and a creamy spicy sauce.',
    nutritionalInfo: {
      calories: 500,
      fat: 25,
      carbs: 45,
      protein: 35
    },
    reviews: [
      { user: 'Olivia', rating: 5, comment: 'Perfectly spicy and satisfying.' }
    ]
  }
];
