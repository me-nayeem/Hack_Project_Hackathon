const features = [
{ icon: "Trophy", title: "Leaderboards", desc: "Compete globally and see who's the healthiest" },
{ icon: "User Level", title: "User Levels", desc: "Level up as you achieve health milestones" },
{ icon: "Coins", title: "Token Rewards", desc: "Earn & spend tokens on premium features" },
{ icon: "Target", title: "Daily Challenges", desc: "Fun science-backed health challenges" },
{ icon: "Community", title: "Community", desc: "Connect, share progress, motivate each other" },
{ icon: "Doctor", title: "Consult Doctors", desc: "Video/audio calls with verified doctors" },
{ icon: "AI", title: "Ask AI", desc: "24/7 AI answers your health questions instantly" },
{ icon: "Personalized", title: "Best Fit Plans", desc: "Workouts & diets tailored just for you" },
];


const Features = () => {


  return (
    <>
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
    </>
  );
};

export default Features;
