// HealthStorePage.jsx
import React, { useState } from 'react';
import './Store.css';

import Navbar from '../../components/dashboard/Navbar/Navbar';

const products = [
  {
    id: 1,
    title: "Motivational Health T-Shirt",
    description: "Wear your progress with inspiring designs.",
    cost: 400,
    imageUrl: "https://i.etsystatic.com/51887582/r/il/6baaba/7250887286/il_fullxfull.7250887286_3j0m.jpg",
    colorClass: "green",
  },
  {
    id: 2,
    title: "Reusable Insulated Water Bottle",
    description: "Stay hydrated and eco-friendly.",
    cost: 300,
    imageUrl: "https://cdn.thewirecutter.com/wp-content/media/2025/06/BEST-WATER-BOTTLES-SUB-05461-3x2-1.jpg?auto=webp&quality=75&crop=3:2&width=1024",
    colorClass: "purple",
  },
  {
    id: 3,
    title: "Non-Slip Yoga Mat",
    description: "Perfect for your daily stretches.",
    cost: 600,
    imageUrl: "https://cdn.thewirecutter.com/wp-content/media/2024/07/yoga-mat-2048px-1629-3x2-1.jpg?auto=webp&quality=75&crop=4:3,smart&width=1024",
    colorClass: "yellow",
  },
  {
    id: 4,
    title: "Fitness Tracker Wristband",
    description: "Track steps and stay on top of goals.",
    cost: 800,
    imageUrl: "https://m.media-amazon.com/images/I/61-PhP53C2L.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
    colorClass: "blue",
  },
  {
    id: 5,
    title: "Healthy Recipe Cookbook",
    description: "Delicious ideas for balanced meals.",
    cost: 500,
    imageUrl: "https://m.media-amazon.com/images/I/916JB3lm7oL._AC_UF1000,1000_QL80_.jpg",
    colorClass: "pink",
  },
  {
    id: 6,
    title: "Meditation Cushion",
    description: "Comfort for your mindfulness practice.",
    cost: 450,
    imageUrl: "https://m.media-amazon.com/images/I/51NiGRuNv1L._AC_UF1000,1000_QL80_.jpg",
    colorClass: "orange",
  },
];

const Store = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const userPoints = 1250;

  const handleRedeem = (product) => {
    if (userPoints >= product.cost) {
      alert(`Redeemed ${product.title}! ${product.cost} points deducted.`);
    } else {
      alert("Not enough points! Keep completing challenges!");
    }
  };

  return (
    <>
      <Navbar />
    <div className="store-container">
      <h1>Health Store</h1>
      <p className="subtitle">
        Redeem your points for rewards that keep you motivated!
      </p>

      <div className="search-wrapper">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Products... (T-shirts, Bottles, Mats...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="points-display">
        You have <strong>{userPoints} Points</strong> available
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className={`product-card ${product.colorClass}`}>
            <img
              src={product.imageUrl}
              alt={product.title}
              className="product-image"
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div className="cost">Cost: {product.cost} Points</div>
            <button
              className="redeem-button"
              onClick={() => handleRedeem(product)}
              disabled={userPoints < product.cost}
            >
              Redeem Now
            </button>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="no-results">No products match your search.</p>
      )}
    </div>
    </>
  );
}

export default Store;


















