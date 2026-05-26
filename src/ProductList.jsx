import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList({ onCartClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Spider Plant",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Monkey_Puzzle_Araucaria_araucana_Flower_2000px.jpg/800px-Monkey_Puzzle_Araucaria_araucana_Flower_2000px.jpg",
          description: "Excellent air purifier, easy to care for.",
          cost: "$10.00",
        },
        {
          name: "Snake Plant",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/800px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg",
          description: "Tolerates low light, removes toxins from air.",
          cost: "$15.00",
        },
        {
          name: "Peace Lily",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Peace_lily_%28Spathiphyllum_cochlearispathum%29_2.jpg/800px-Peace_lily_%28Spathiphyllum_cochlearispathum%29_2.jpg",
          description: "Beautiful white blooms, great for indoor spaces.",
          cost: "$18.00",
        },
        {
          name: "Boston Fern",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Boston_Fern_in_pot.jpg/800px-Boston_Fern_in_pot.jpg",
          description: "Lush, feathery fronds that humidify the air.",
          cost: "$20.00",
        },
        {
          name: "Rubber Plant",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ficus_elastica_-_Rubber_plant.jpg/800px-Ficus_elastica_-_Rubber_plant.jpg",
          description: "Bold glossy leaves, removes CO2 effectively.",
          cost: "$22.00",
        },
        {
          name: "Aloe Vera",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_-_The_plant_of_immortality.jpg/800px-Aloe_vera_-_The_plant_of_immortality.jpg",
          description: "Purifies air and has medicinal gel in leaves.",
          cost: "$14.00",
        },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Single_lavender_flower02.jpg/800px-Single_lavender_flower02.jpg",
          description: "Soothing fragrance, great for relaxation.",
          cost: "$20.00",
        },
        {
          name: "Jasmine",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Jasminum_officinale1.jpg/800px-Jasminum_officinale1.jpg",
          description: "Sweet scent, climbs beautifully indoors.",
          cost: "$18.00",
        },
        {
          name: "Rosemary",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Rosemary_bush.jpg/800px-Rosemary_bush.jpg",
          description: "Aromatic herb perfect for kitchen windowsills.",
          cost: "$15.00",
        },
        {
          name: "Mint",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Menta_gentile_%28Mentha_spicata%29.jpg/800px-Menta_gentile_%28Mentha_spicata%29.jpg",
          description: "Fresh scent, versatile for cooking and teas.",
          cost: "$12.00",
        },
        {
          name: "Lemon Balm",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Melissa_officinalis_—_lemon_balm.jpg/800px-Melissa_officinalis_—_lemon_balm.jpg",
          description: "Citrusy aroma that repels insects naturally.",
          cost: "$14.00",
        },
        {
          name: "Hyacinth",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Hyacinthus_orientalis_floriade.jpg/800px-Hyacinthus_orientalis_floriade.jpg",
          description: "Intensely fragrant spring blooms.",
          cost: "$22.00",
        },
      ],
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        {
          name: "Oregano",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Oregano-oreganum-vulgare.jpg/800px-Oregano-oreganum-vulgare.jpg",
          description: "Natural insect deterrent, also great for cooking.",
          cost: "$10.00",
        },
        {
          name: "Marigold",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Marigold_flower_02.jpg/800px-Marigold_flower_02.jpg",
          description: "Bright blooms that repel mosquitoes and aphids.",
          cost: "$8.00",
        },
        {
          name: "Geraniums",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pelargonium_peltatum_garden.jpg/800px-Pelargonium_peltatum_garden.jpg",
          description: "Citronella scent keeps mosquitoes at bay.",
          cost: "$20.00",
        },
        {
          name: "Basil",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Basil-Basilico-Ocimum_basilicum-albahaca.jpg/800px-Basil-Basilico-Ocimum_basilicum-albahaca.jpg",
          description: "Repels flies and mosquitoes, great in the kitchen.",
          cost: "$9.00",
        },
        {
          name: "Lavender (Repellent)",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Single_lavender_flower02.jpg/800px-Single_lavender_flower02.jpg",
          description: "Wards off moths, fleas, and mosquitoes.",
          cost: "$16.00",
        },
        {
          name: "Catnip",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Catmint_Nepeta_cataria.jpg/800px-Catmint_Nepeta_cataria.jpg",
          description: "10x more effective than DEET at repelling mosquitoes.",
          cost: "$13.00",
        },
      ],
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Chamomile",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Camomile%40original_size.jpg/800px-Camomile%40original_size.jpg",
          description: "Calming herb used in teas to reduce anxiety.",
          cost: "$15.00",
        },
        {
          name: "Echinacea",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Purple_coneflower_%28Echinacea_purpurea%29_at_Oast_House_Farm.jpg/800px-Purple_coneflower_%28Echinacea_purpurea%29_at_Oast_House_Farm.jpg",
          description: "Boosts immune system, widely used for colds.",
          cost: "$18.00",
        },
        {
          name: "Peppermint",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Peppermint_illustration.jpg/800px-Peppermint_illustration.jpg",
          description: "Relieves headaches and digestive issues.",
          cost: "$12.00",
        },
        {
          name: "Lemon Verbena",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Aloysia_citrodora2.jpg/800px-Aloysia_citrodora2.jpg",
          description: "Used to ease stress and promote sleep.",
          cost: "$14.00",
        },
        {
          name: "Turmeric",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Tumeric.jpg/800px-Tumeric.jpg",
          description: "Anti-inflammatory root, rich in curcumin.",
          cost: "$20.00",
        },
        {
          name: "Feverfew",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Feverfew_Tanacetum_parthenium.jpg/800px-Feverfew_Tanacetum_parthenium.jpg",
          description: "Traditional remedy for migraines and fever.",
          cost: "$16.00",
        },
      ],
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  const calculateTotalQuantity = () => {
    return cartItems ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    onCartClick();
  };

  return (
    <div className="product-list-container">
      <div className="navbar">
        <div className="navbar-brand">Paradise Nursery 🌿</div>
        <div className="navbar-links">
          <a href="/" className="navbar-link">Home</a>
          <a href="#plants" className="navbar-link">Plants</a>
          <a href="#" className="navbar-link cart-link" onClick={handleCartClick}>
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{calculateTotalQuantity()}</span>
          </a>
        </div>
      </div>

      <div className="product-grid" id="plants">
        {plantsArray.map((category, index) => (
          <div key={index}>
            <h1>
              <div>{category.category}</div>
            </h1>
            <div className="product-list">
              {category.plants.map((plant, plantIndex) => (
                <div className="product-card" key={plantIndex}>
                  <img
                    className="product-image"
                    src={plant.image}
                    alt={plant.name}
                  />
                  <div className="product-title">{plant.name}</div>
                  <div className="product-description">{plant.description}</div>
                  <div className="product-cost">{plant.cost}</div>
                  <button
                    className="product-button"
                    onClick={() => handleAddToCart(plant)}
                    disabled={!!addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
