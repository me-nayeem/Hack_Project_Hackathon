import React from "react";
import "./SleepChart.css";

const SleepChart = ({ data }) => {
  const hours = 24;
  const width = 600;
  const height = 200;
  const barWidth = width / data.length;

  const stages = ["Deep", "Light", "REM", "Awake"];
  const colors = ["#6366f1", "#8b5cf6", "#ec4899", "#ef4444"];

  return (
    <div className="chart-card">
      <h3>Sleep Stages (Last 7 Nights)</h3>
      <svg
        width={width}
        height={height}
        role="img"
        aria-labelledby="sleep-title"
      >
        <title id="sleep-title">Sleep stages over the last 7 nights</title>
        {data.slice(-7).map((night, i) => {
          let y = height;
          return (
            <g key={i} transform={`translate(${i * barWidth},0)`}>
              {stages.map((stage, j) => {
                const minutes = night.stages[stage] || 0;
                const h = ((minutes / 60) * height) / 8; // max ~8h
                y -= h;
                return (
                  <rect
                    key={stage}
                    x={2}
                    y={y}
                    width={barWidth - 4}
                    height={h}
                    fill={colors[j]}
                    aria-label={`${stage}: ${minutes} min`}
                  />
                );
              })}
            </g>
          );
        })}
      </svg>
      <div className="legend">
        {stages.map((s, i) => (
          <span key={s}>
            <i style={{ background: colors[i] }}></i>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SleepChart;
