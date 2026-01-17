import React, { useState, useEffect } from 'react';
import './Learn.css';

import Navbar from '../../components/dashboard/Navbar/Navbar';

const learnTopics = [
  { id: 1, title: "Tracking Basics", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800", total: 12 },
  { id: 2, title: "Understanding Metrics", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800", total: 15 },
  { id: 3, title: "Best Devices & Apps 2025", image: "https://images.unsplash.com/photo-1557936798-9e4e6c2aefc8?w=800", total: 14 },
  { id: 4, title: "Sleep Science", image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=800", total: 11 },
  { id: 5, title: "Heart Rate & HRV", image: "https://images.unsplash.com/photo-1576678927484-cc907957688c?w=800", total: 13 },
  { id: 6, title: "Nutrition Tracking", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800", total: 10 },
  { id: 7, title: "Stress & Recovery", image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800", total: 9 },
  { id: 8, title: "Cycle & Women's Health", image: "https://images.unsplash.com/photo-1570549717489-3d758e4b5e0e?w=800", total: 8 },
  { id: 9, title: "Longevity Basics", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800", total: 11 },
  { id: 10, title: "Common Mistakes", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800", total: 13 },
  { id: 11, title: "Blood Tests & Biomarkers", image: "https://images.unsplash.com/photo-1581595220178-b0e75e2f8d2e?w=800", total: 10 },
  { id: 12, title: "Breath & Respiratory", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", total: 9 },
];

const topicLessons = {
  "Tracking Basics": [
    { name: "Why Track Health Data in 2026?", desc: "Understanding real value of personal tracking", readTime: "6 min", level: "Beginner", readers: 84.2 },
    { name: "How to Create Your Baseline Week", desc: "Establishing your personal normal values", readTime: "9 min", level: "Beginner", readers: 62.7 },
    { name: "Choosing Your First Tracking Goal", desc: "Where should you actually start?", readTime: "7 min", level: "Beginner", readers: 71.5 },
  ],
};

const Learn = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [currentView, setCurrentView] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const itemsPerPage = 9;

  useEffect(() => {
    const handleScroll = () => setScrollOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filtered = learnTopics.filter(t =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <Navbar scrollOffset={scrollOffset} currentView={currentView} setCurrentView={setCurrentView} />
        <section className="challenges-fullpage" style={{ background: 'linear-gradient(135deg, #ecfeff 0%, #ccfbf1 100%)', minHeight: '100vh' }}>
          <div className="container" style={{ paddingTop: '120px', minHeight: '100vh' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Learn Health Tracking</h2>
            <p className="section-subtitle">Master your metrics, devices, sleep science & data interpretation</p>

            <div className="modern-search-container">
              <div className="search-box">
                <span className="search-icon-inside">🔍</span>
                <input
                  type="text"
                  placeholder="Search topics... (HRV, Sleep, Wearables...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  className="search-input-clean"
                />
              </div>

              {showSuggestions && searchTerm && (
                <div className="suggestions-box">
                  {learnTopics
                    .filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase()))
                    .slice(0, 8)
                    .map(topic => (
                      <div
                        key={topic.id}
                        className="suggestion-item"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setSearchTerm(topic.title);
                          setShowSuggestions(false);
                          setCurrentPage(1);
                        }}
                      >
                        <span className="sugg-icon">Learn </span>
                        <span className="sugg-text">{topic.title}</span>
                      </div>
                    ))}
                  {learnTopics.filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
                    <div className="suggestion-item no-result">No topic found</div>
                  )}
                </div>
              )}
            </div>

            {selectedTopic ? (
              <div className="selected-section-challenges">
                <button className="back-btn-simple" onClick={() => setSelectedTopic(null)}>
                  ← Back to All Topics
                </button>

                <h2 className="section-challenges-title">{selectedTopic.title}</h2>
                <p className="section-challenges-count">
                  {selectedTopic.total} Lessons • Knowledge Base
                </p>

                <div className="challenges-grid-inside">
                  {(topicLessons[selectedTopic.title] || Array.from({ length: selectedTopic.total }, (_, i) => ({
                    name: `${selectedTopic.title} Lesson ${i + 1}`,
                    desc: `Deep understanding of ${selectedTopic.title.toLowerCase()} concepts`,
                    readTime: `${5 + Math.floor(i * 1.8)} min`,
                    level: ["Beginner", "Intermediate", "Advanced"][i % 3],
                    readers: (Math.random() * 80 + 10).toFixed(1),
                    image: selectedTopic.image
                  }))).map((lesson, i) => (
                    <div
                      key={i}
                      className="premium-challenge-card"
                      onClick={() => setSelectedLesson(lesson)}
                    >
                      <img src={lesson.image} alt={lesson.name} className="challenge-card-img" />
                      <div className="challenge-card-content">
                        <div className={`challenge-difficulty ${lesson.level.toLowerCase()}`}>
                          {lesson.level}
                        </div>
                        <div className="challenge-users">
                          <span className={`difficulty-tag ${lesson.level.toLowerCase()}`}>
                            {lesson.level}
                          </span>
                          <span className="user-count">
                            {lesson.readers}K Readers
                          </span>
                        </div>
                        <h3>{lesson.name}</h3>
                        <p>{lesson.desc}</p>
                        <div className="challenge-Points">
                          ≈ {lesson.readTime} reading
                        </div>
                        <button className="join-challenge-btn">
                          Start Reading
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <h2 className="all-sections-title">All Learning Topics</h2>
                <p className="all-sections-subtitle">Choose a subject and build your health-tracking knowledge</p>

                <div className="beautiful-sections-grid">
                  {paginated.map((topic) => (
                    <div
                      key={topic.id}
                      className="beautiful-section-card"
                      onClick={() => setSelectedTopic(topic)}
                    >
                      <div className="beautiful-badge">
                        {topic.total} Lessons
                      </div>
                      <img src={topic.image} alt={topic.title} className="beautiful-img" />
                      <div className="beautiful-overlay">
                        <h3>{topic.title}</h3>
                        <p>Tap to start learning</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="beautiful-pagination">
                  <button
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                    const pageNum = i + Math.max(currentPage - 3, 1);
                    if (pageNum > totalPages) return null;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={currentPage === pageNum ? 'active' : ''}
                      >
                        {pageNum}
                      </button>
                    );
                  }).filter(Boolean)}
                  <button
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            <button
              className="btn-secondary back-home-btn"
              onClick={() => setCurrentView('home')}
              style={{ margin: '4rem auto', display: 'block', padding: '1rem 3rem' }}
            >
              ← Back to Home
            </button>
          </div>

          {selectedLesson && (
            <div className="challenge-detail-modal">
              <div className="modal-overlay" onClick={() => setSelectedLesson(null)}></div>
              <div className="challenge-detail-card">
                <button className="close-modal" onClick={() => setSelectedLesson(null)}>×</button>
                <img src={selectedLesson.image} alt={selectedLesson.name} className="detail-img" />
                <div className="detail-content">
                  <h2>{selectedLesson.name}</h2>
                  <div className="detail-badge">{selectedLesson.level} • {selectedLesson.readTime}</div>

                  <div className="detail-section">
                    <h3>What You'll Learn</h3>
                    <ul>
                      <li>Core concepts explained in simple terms</li>
                      <li>Real-world examples & user experiences</li>
                      <li>Common mistakes to avoid</li>
                      <li>Practical takeaways you can use today</li>
                    </ul>
                  </div>

                  <button className="big-join-btn">
                    Start Reading Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
    </>
  );
}

export default Learn;