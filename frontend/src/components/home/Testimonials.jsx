import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    avatar: "👩‍🦰", // Replace with real image URLs later
    rating: 5,
    quote:
      "HealthHub transformed my daily routine! The challenges keep me motivated, and I've lost 15lbs in 3 months while feeling amazing.",
  },
  {
    name: "Mike Chen",
    role: "Busy Professional",
    avatar: "👨‍💼",
    rating: 5,
    quote:
      "As someone with a hectic schedule, the personalized plans and AI health advice fit perfectly into my life. Best health app I've used!",
  },
  {
    name: "Emma Rodriguez",
    role: "New Mom",
    avatar: "👩‍👧",
    rating: 5,
    quote:
      "Post-pregnancy, HealthHub helped me regain energy and track my progress safely. The community support is incredibly encouraging.",
  },
  {
    name: "David Park",
    role: "Marathon Runner",
    avatar: "🏃‍♂️",
    rating: 4,
    quote:
      "Leaderboards and token rewards make training fun. Consulting doctors through the app saved me multiple trips!",
  },
];

const Testimonials = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star"}>
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2>What Our Users Say</h2>
        <p className="testimonials-subtitle">
          Join thousands who are achieving their health goals with HealthHub
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">{t.avatar}</div>
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>

              <div className="testimonial-rating">{renderStars(t.rating)}</div>

              <blockquote className="testimonial-quote">
                "{t.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;