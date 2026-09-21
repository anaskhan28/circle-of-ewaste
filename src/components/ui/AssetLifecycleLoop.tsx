"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const LOOP_ITEMS = [
  { label: "Assess", color: "#1264C4", angle: 270 },
  { label: "Secure", color: "#0B3B82", angle: 330 },
  { label: "Recover", color: "#168A3A", angle: 30 },
  { label: "Refurbish", color: "#62B92E", angle: 90 },
  { label: "Reuse", color: "#1598E8", angle: 150 },
  { label: "Recycle", color: "#168A3A", angle: 210 },
];

const RADIUS = 120;
const CENTER = 180;

function degToRad(deg: number) {
  return (deg * Math.PI) / 180;
}

interface AssetLifecycleLoopProps {
  className?: string;
  size?: number;
}

export function AssetLifecycleLoop({ className, size = 360 }: AssetLifecycleLoopProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <svg
        ref={svgRef}
        width={size}
        height={size}
        viewBox="0 0 360 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="CIRKAL asset lifecycle circular flow: Assess, Secure, Recover, Refurbish, Reuse, Recycle"
        role="img"
      >
        {/* Background glow */}
        <circle cx={CENTER} cy={CENTER} r={145} fill="url(#bgGradient)" opacity="0.15" />

        {/* Defs */}
        <defs>
          <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1264C4" />
            <stop offset="100%" stopColor="#168A3A" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer circle track */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          stroke="#E2E8F0"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          opacity="0.5"
        />

        {/* Animated rotating ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          stroke="url(#ringGradient)"
          strokeWidth="2"
          strokeDasharray={`${RADIUS * 0.6} ${RADIUS * 1.5}`}
          strokeLinecap="round"
          fill="none"
          style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${CENTER} ${CENTER}`}
            to={`360 ${CENTER} ${CENTER}`}
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>

        <defs>
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1264C4" />
            <stop offset="100%" stopColor="#62B92E" />
          </linearGradient>
        </defs>

        {/* Connecting lines from center to nodes */}
        {LOOP_ITEMS.map((item, i) => {
          const rad = degToRad(item.angle);
          const x = CENTER + RADIUS * Math.cos(rad);
          const y = CENTER + RADIUS * Math.sin(rad);
          return (
            <line
              key={i}
              x1={CENTER}
              y1={CENTER}
              x2={x}
              y2={y}
              stroke={item.color}
              strokeWidth="1"
              opacity="0.15"
            />
          );
        })}

        {/* Node circles + labels */}
        {LOOP_ITEMS.map((item, i) => {
          const rad = degToRad(item.angle);
          const x = CENTER + RADIUS * Math.cos(rad);
          const y = CENTER + RADIUS * Math.sin(rad);

          // Label position (push outward)
          const labelRadius = RADIUS + 42;
          const lx = CENTER + labelRadius * Math.cos(rad);
          const ly = CENTER + labelRadius * Math.sin(rad);

          return (
            <g key={i}>
              {/* Pulsing halo */}
              <circle cx={x} cy={y} r={14} fill={item.color} opacity="0.1">
                <animate
                  attributeName="r"
                  values="14;20;14"
                  dur={`${3 + i * 0.4}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.1;0;0.1"
                  dur={`${3 + i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
              {/* Node */}
              <circle
                cx={x}
                cy={y}
                r={10}
                fill={item.color}
                filter="url(#glow)"
              />
              <circle cx={x} cy={y} r={10} fill="white" opacity="0.25" />
              {/* Label */}
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="11"
                fontWeight="700"
                fontFamily="var(--font-plus-jakarta)"
                fill={item.color}
                letterSpacing="0.5"
              >
                {item.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Center — CIRKAL brand mark */}
        <circle cx={CENTER} cy={CENTER} r={50} fill="white" opacity="0.95" />
        <circle cx={CENTER} cy={CENTER} r={50} stroke="#E2E8F0" strokeWidth="1" fill="none" />

        {/* Mini globe in center */}
        <circle cx={CENTER} cy={CENTER} r={22} fill="#F1F9F3" stroke="#168A3A" strokeWidth="1.5" />
        <ellipse cx={CENTER} cy={CENTER} rx={10} ry={22} stroke="#168A3A" strokeWidth="1" fill="none" />
        <line x1={CENTER - 22} y1={CENTER} x2={CENTER + 22} y2={CENTER} stroke="#168A3A" strokeWidth="1" />
        <line x1={CENTER - 19} y1={CENTER - 8} x2={CENTER + 19} y2={CENTER - 8} stroke="#168A3A" strokeWidth="0.8" />
        <line x1={CENTER - 19} y1={CENTER + 8} x2={CENTER + 19} y2={CENTER + 8} stroke="#168A3A" strokeWidth="0.8" />

        {/* Circular arrow arc (the C) */}
        <path
          d={`M ${CENTER} ${CENTER - 40} A 40 40 0 1 1 ${CENTER + 30} ${CENTER + 27}`}
          stroke="#1264C4"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <polygon
          points={`${CENTER + 30},${CENTER + 27} ${CENTER + 38},${CENTER + 18} ${CENTER + 22},${CENTER + 20}`}
          fill="#1264C4"
        />

        {/* "CIRKAL" text below center */}
        <text
          x={CENTER}
          y={CENTER + 58}
          textAnchor="middle"
          fontSize="9"
          fontWeight="700"
          fontFamily="var(--font-plus-jakarta)"
          fill="#1264C4"
          letterSpacing="2"
        >
          CIRKAL
        </text>
      </svg>
    </div>
  );
}

// Vertical mobile version
export function AssetLifecycleVertical({ className }: { className?: string }) {
  const steps = [
    { label: "Business Assets", color: "#0B3B82", bg: "#F2F7FD" },
    { label: "Assess", color: "#1264C4", bg: "#F2F7FD" },
    { label: "Secure", color: "#0B3B82", bg: "#F2F7FD" },
    { label: "Recover Value", color: "#168A3A", bg: "#F1F9F3" },
    { label: "Refurbish / Reuse", color: "#62B92E", bg: "#F1F9F3" },
    { label: "Recycle", color: "#168A3A", bg: "#F1F9F3" },
    { label: "Resource Recovery", color: "#62B92E", bg: "#F1F9F3" },
  ];

  return (
    <div className={cn("flex flex-col items-center gap-0", className)}>
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col items-center">
          <div
            className="px-6 py-2.5 rounded-xl text-sm font-semibold"
            style={{ backgroundColor: step.bg, color: step.color }}
          >
            {step.label}
          </div>
          {i < steps.length - 1 && (
            <div className="w-0.5 h-6 bg-gradient-to-b from-brand-blue/50 to-brand-green/50" />
          )}
        </div>
      ))}
      {/* Loop arrow back */}
      <div className="mt-2 text-xs text-muted font-medium flex items-center gap-1">
        <span className="text-brand-blue">↺</span>
        Circular flow
      </div>
    </div>
  );
}
