import "./Features.css";


const features = [
  { icon: "🏆", title: "Leaderboards", desc: "Compete globally and see who's the healthiest" },
  { icon: "📈", title: "User Levels", desc: "Level up as you achieve health milestones" },
  { icon: "💰", title: "Token Rewards", desc: "Earn & spend tokens on premium features" },
  { icon: "🎯", title: "Daily Challenges", desc: "Fun science-backed health challenges" },
  { icon: "👥", title: "Community", desc: "Connect, share progress, motivate each other" },
  { icon: "👨‍⚕️", title: "Consult Doctors", desc: "Video/audio calls with verified doctors" },
  { icon: "🤖", title: "Ask AI", desc: "24/7 AI answers your health questions instantly" },
  { icon: "🎨", title: "Best Fit Plans", desc: "Workouts & diets tailored just for you" },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Powerful Features for Your Health Journey</h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;