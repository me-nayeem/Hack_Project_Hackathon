const testimonials = [
  { name: "Amit Sharma", text: "Lost 18kg in 5 months thanks to challenges!", stars: 5 },
  { name: "Priya Verma", text: "The AI detected my vitamin deficiency early!", stars: 5 },
  { name: "Rahul Mehta", text: "Finally a health app that feels like a game!", stars: 5 },
];

const Testimonials = () => {
  return (
    <>
            <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>Loved by Thousands</h2>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div class="icon-circle">User IMG</div>
                <div className="stars">★★★★★</div>
                <p className="quote">"{t.text}"</p>
                <p className="author">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;