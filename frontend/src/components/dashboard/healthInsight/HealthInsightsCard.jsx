import "./HealthInsightsCard.css";

export default function HealthInsightsCard({
  healthInsights,
  loadingInsights,
  fetchHealthInsights,
  setShowInsights,
}) {
  return (
    <div className="insights-card">
      <div className="insights-header">
        <div className="title-area">
          <h2>Your Health Insights</h2>
          <p className="subtitle">
            Personalized analysis from your connected devices
          </p>
        </div>

        <div className="controls">
          <button
            className="btn-refresh"
            onClick={fetchHealthInsights}
            disabled={loadingInsights}
            aria-label="Refresh insights"
          >
            {loadingInsights ? (
              <span className="loading-dot">Refreshing…</span>
            ) : (
              "Refresh"
            )}
          </button>

          <button
            className="btn-hide"
            onClick={() => setShowInsights(false)}
            aria-label="Hide insights panel"
          >
            Hide Insight
          </button>
        </div>
      </div>

      <div className="insights-content">
        {healthInsights ? (
          <div className="insights-text" style={{ whiteSpace: "pre-line" }}>
            {healthInsights}
          </div>
        ) : (
          <div className="empty-state">
            <p>No insights available yet.</p>
            <small>Connect more devices or refresh data</small>
          </div>
        )}
      </div>

      <div className="insights-footer">
        <div className="disclaimer">
          <span className="info-icon">ℹ️</span>
          This is not medical advice. Consult a healthcare professional for
          personalized guidance.
        </div>
      </div>
    </div>
  );
}