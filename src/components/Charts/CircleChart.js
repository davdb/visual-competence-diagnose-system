import React, { useState } from "react";
import styled from "styled-components";

const StyledChartWrapper = styled.div`
  & .circle-chart__circle {
    animation: circle-chart-fill 2s reverse; /* 1 */
    transform: rotate(-90deg); /* 2, 3 */
    transform-origin: center; /* 4 */
  }

  & .circle-chart__circle--negative {
    transform: rotate(-90deg) scale(1, -1); /* 1, 2, 3 */
  }

  & .circle-chart__info {
    animation: circle-chart-appear 2s forwards;
    opacity: 0;
    transform: translateY(0.3em);
  }

  @keyframes circle-chart-fill {
    to {
      stroke-dasharray: 0 100;
    }
  }

  @keyframes circle-chart-appear {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const CircleChart = ({ points, maxPoints }) => {
  var result = ((points / (maxPoints ? maxPoints : 1)) * 100).toFixed(2);

  return (
    <StyledChartWrapper>
      <section>
        <svg
          className="circle-chart"
          viewBox="0 0 33.83098862 33.83098862"
          width="120"
          height="120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="circle-chart__background"
            stroke="#efefef"
            strokeWidth="2"
            fill="none"
            cx="16.91549431"
            cy="16.91549431"
            r="15.91549431"
          />
          <circle
            className="circle-chart__circle"
            stroke="#6d64ff"
            strokeWidth="2"
            strokeDasharray={result + ",100"}
            strokeLinecap="round"
            fill="none"
            cx="16.91549431"
            cy="16.91549431"
            r="15.91549431"
          />
          <g className="circle-chart__info">
            <text
              className="circle-chart__percent"
              x="16.91549431"
              y="15.5"
              alignmentBaseline="central"
              textAnchor="middle"
              fontSize="8"
            >
              {result}%
            </text>
            <text
              className="circle-chart__subline"
              x="16.91549431"
              y="20.5"
              alignmentBaseline="central"
              textAnchor="middle"
              fontSize="2"
            >
              maksymalnej liczby punktów
            </text>
          </g>
        </svg>
      </section>
    </StyledChartWrapper>
  );
};

export default CircleChart;
