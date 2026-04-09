// constants/menu.js  (or constants/data.js)

export const menuData = {
  categories: [
    {
      id: "starters",
      name: "Starters",
      description: "Fresh beginnings to awaken your taste buds",
      items: [
        {
          id: "s1",
          name: "Blooming Bruschetta",
          description: "Toasted sourdough with fresh tomatoes, basil, garlic & aged balsamic glaze",
          price: 890,
          image: "/images/menu/bruschetta.jpg",
          isPopular: true,
          isVegetarian: true,
          prepTime: "10 min"
        },
        {
          id: "s2",
          name: "Crispy Calamari",
          description: "Golden fried squid rings served with spicy marinara & lemon aioli",
          price: 1250,
          image: "/images/menu/calamari.jpg",
          isPopular: false,
          isVegetarian: false,
          prepTime: "15 min"
        },
        {
          id: "s3",
          name: "Avocado Bloom Salad",
          description: "Creamy avocado, mixed greens, pomegranate, feta & honey-lime dressing",
          price: 950,
          image: "/images/menu/avocado-salad.jpg",
          isPopular: true,
          isVegetarian: true,
          prepTime: "8 min"
        }
      ]
    },
    {
      id: "mains",
      name: "Main Course",
      description: "Signature dishes that steal the show",
      items: [
        {
          id: "m1",
          name: "Grilled Salmon Teriyaki",
          description: "Fresh Atlantic salmon glazed with homemade teriyaki, served with jasmine rice & stir-fried vegetables",
          price: 2450,
          image: "/images/menu/salmon.jpg",
          isPopular: true,
          isVegetarian: false,
          prepTime: "25 min"
        },
        {
          id: "m2",
          name: "Butter Chicken",
          description: "Tender chicken cooked in rich tomato-butter gravy with aromatic spices, served with naan",
          price: 1850,
          image: "/images/menu/butter-chicken.jpg",
          isPopular: true,
          isVegetarian: false,
          prepTime: "20 min"
        },
        {
          id: "m3",
          name: "Mushroom Risotto",
          description: "Creamy Arborio rice with wild mushrooms, truffle oil & parmesan",
          price: 1650,
          image: "/images/menu/risotto.jpg",
          isPopular: false,
          isVegetarian: true,
          prepTime: "22 min"
        },
        {
          id: "m4",
          name: "Beef Steak Bloom",
          description: "Prime ribeye steak with garlic herb butter, roasted vegetables & mashed potatoes",
          price: 2950,
          image: "/images/menu/steak.jpg",
          isPopular: true,
          isVegetarian: false,
          prepTime: "30 min"
        }
      ]
    },
    {
      id: "desserts",
      name: "Desserts",
      description: "Sweet endings that bloom with flavor",
      items: [
        {
          id: "d1",
          name: "Chocolate Lava Bloom",
          description: "Warm molten chocolate cake with vanilla ice cream & fresh berries",
          price: 950,
          image: "/images/menu/lava-cake.jpg",
          isPopular: true,
          isVegetarian: true,
          prepTime: "12 min"
        },
        {
          id: "d2",
          name: "Mango Cheesecake",
          description: "Creamy mango-infused cheesecake on a buttery biscuit base",
          price: 850,
          image: "/images/menu/mango-cheesecake.jpg",
          isPopular: false,
          isVegetarian: true,
          prepTime: "5 min"
        },
        {
          id: "d3",
          name: "Tiramisu Bloom",
          description: "Classic Italian dessert with coffee-soaked ladyfingers & mascarpone cream",
          price: 780,
          image: "/images/menu/tiramisu.jpg",
          isPopular: true,
          isVegetarian: true,
          prepTime: "5 min"
        }
      ]
    },
    {
      id: "drinks",
      name: "Beverages",
      description: "Refreshing drinks to complement your meal",
      items: [
        {
          id: "dr1",
          name: "Fresh Mint Lemonade",
          description: "Classic lemonade with fresh mint & crushed ice",
          price: 450,
          image: "/images/menu/lemonade.jpg",
          isPopular: true,
          isVegetarian: true,
          prepTime: "5 min"
        },
        {
          id: "dr2",
          name: "Berry Blast Smoothie",
          description: "Strawberry, blueberry, banana & yogurt smoothie",
          price: 650,
          image: "/images/menu/smoothie.jpg",
          isPopular: false,
          isVegetarian: true,
          prepTime: "7 min"
        },
        {
          id: "dr3",
          name: "Iced Chai Latte",
          description: "Spiced Indian chai with cold milk & honey",
          price: 520,
          image: "/images/menu/iced-chai.jpg",
          isPopular: true,
          isVegetarian: true,
          prepTime: "6 min"
        }
      ]
    }
  ]
};


// Helper functions (optional but very useful)
export const getAllMenuItems = () => {
  return menuData.categories.flatMap(category => category.items);
};

export const getPopularItems = () => {
  return getAllMenuItems().filter(item => item.isPopular);
};

export const getVegetarianItems = () => {
  return getAllMenuItems().filter(item => item.isVegetarian);
};

export const getCategoryById = (categoryId) => {
  return menuData.categories.find(cat => cat.id === categoryId);
};

export const popularItems = getPopularItems();