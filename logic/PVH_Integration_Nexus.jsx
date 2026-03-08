import { useState, useEffect, useCallback } from "react";

// ─── Color System (matching existing TMI visual language) ───
const COLORS = {
  zone1: { bg: "#2E7D32", light: "#E8F0E8", text: "#1B5E20", surface: "#4CAF50" },
  zone2: { bg: "#E67E00", light: "#FFF3D6", text: "#BF360C", surface: "#FF9800" },
  zone3: { bg: "#C62828", light: "#FDE8E8", text: "#B71C1C", surface: "#F44336" },
  pvh: { bg: "#1B3A5C", ring: "#4A90B8", glow: "#2E5984" },
  epistemic: { bg: "#1A237E", light: "#E8EAF6", accent: "#3F51B5" },
  bridge: { stroke: "#E8A838", glow: "#FFD54F" },
  feedback: { stroke: "#78909C", dash: "6,3" },
  failure: { stroke: "#EF5350", text: "#D32F2F" },
  tier1: "#C62828",
  tier2: "#E67E00",
  tier3: "#2E7D32",
  dark: "#1B3A5C",
  text: "#333333",
  white: "#FFFFFF",
  light: "#F0F5FA",
};

// ─── PVH Node SVG Diagram ───
function PVHDiagram({ activeZone, showBridge, showFailure, showFeedback, animating }) {
  const w = 960;
  const h = 720;

  // Central hub position
  const cx = w / 2;
  const cy = h / 2 - 10;
  const hubR = 62;

  // Affect engine positions (left)
  const affectX = 135;
  const zonePositions = [
    { x: affectX, y: cy - 140, zone: 1, label: "Zone 1: Baseline", sub: "Predictive Success", color: COLORS.zone1 },
    { x: affectX, y: cy, zone: 2, label: "Zone 2: Engaged", sub: "Character Alignment", color: COLORS.zone2 },
    { x: affectX, y: cy + 140, zone: 3, label: "Zone 3: Crisis", sub: "Catastrophic Transition", color: COLORS.zone3 },
  ];

  // Epistemic steering positions (right)
  const epiX = w - 135;
  const epiNodes = [
    { x: epiX, y: cy - 105, label: "SEEK_DISCONFIRMATION", sub: "= True", key: "sd" },
    { x: epiX, y: cy - 35, label: "VIRTUE_HUMILITY", sub: "Initial Confidence: 0.1", key: "vh" },
    { x: epiX, y: cy + 35, label: "VIRTUE_COURAGE", sub: "Follow Evidence", key: "vc" },
    { x: epiX, y: cy + 105, label: "CALIBRATE_BELIEF", sub: "Dynamic Process", key: "cb" },
  ];

  // Tier output positions (top)
  const tierY = 72;
  const tiers = [
    { x: cx - 180, y: tierY, label: "T3", sub: "Utility", color: COLORS.tier3, zone: 1 },
    { x: cx, y: tierY, label: "T2", sub: "Virtue", color: COLORS.tier2, zone: 2 },
    { x: cx + 180, y: tierY, label: "T1", sub: "Deontology", color: COLORS.tier1, zone: 3 },
  ];

  // Helper: curved path between two points
  const curvePath = (x1, y1, x2, y2, bend = 0.3) => {
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const cpx = mx - dy * bend;
    const cpy = my + dx * bend;
    return `M ${x1} ${y1} Q ${cpx} ${cpy} ${x2} ${y2}`;
  };

  // Arrow marker
  const arrowId = (color) => `arrow-${color.replace("#", "")}`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: "100%", fontFamily: "'IBM Plex Mono', 'Fira Code', monospace" }}>
      <defs>
        {/* Arrow markers */}
        {[COLORS.zone1.bg, COLORS.zone2.bg, COLORS.zone3.bg, COLORS.epistemic.accent, COLORS.bridge.stroke, COLORS.feedback.stroke, COLORS.failure.stroke, COLORS.dark, COLORS.tier1, COLORS.tier2, COLORS.tier3].map((c) => (
          <marker key={c} id={arrowId(c)} markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={c} />
          </marker>
        ))}

        {/* Central hub glow */}
        <radialGradient id="pvhGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={COLORS.pvh.ring} stopOpacity="0.5" />
          <stop offset="100%" stopColor={COLORS.pvh.bg} stopOpacity="0" />
        </radialGradient>

        {/* Hub gradient */}
        <radialGradient id="pvhHub" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor={COLORS.pvh.ring} />
          <stop offset="100%" stopColor={COLORS.pvh.bg} />
        </radialGradient>

        {/* Zone 3 pulse animation */}
        <filter id="zone3glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Bridge glow */}
        <filter id="bridgeGlow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Active pulse animation */}
        {animating && (
          <>
            <animate xlinkHref={`#hubPulse`} attributeName="r" values={`${hubR + 8};${hubR + 18};${hubR + 8}`} dur="2s" repeatCount="indefinite" />
            <animate xlinkHref={`#hubPulse`} attributeName="opacity" values="0.4;0.15;0.4" dur="2s" repeatCount="indefinite" />
          </>
        )}
      </defs>

      {/* Background */}
      <rect width={w} height={h} fill="#0D1117" rx="12" />
      <rect width={w} height={h} fill="url(#pvhGlow)" opacity="0.08" rx="12" />

      {/* Grid pattern */}
      {Array.from({ length: 24 }).map((_, i) => (
        <line key={`gv${i}`} x1={i * 40} y1="0" x2={i * 40} y2={h} stroke="#1E293B" strokeWidth="0.5" opacity="0.4" />
      ))}
      {Array.from({ length: 18 }).map((_, i) => (
        <line key={`gh${i}`} x1="0" y1={i * 40} x2={w} y2={i * 40} stroke="#1E293B" strokeWidth="0.5" opacity="0.4" />
      ))}

      {/* ═══ SECTION LABELS ═══ */}
      <text x={affectX} y={28} textAnchor="middle" fill={COLORS.zone2.bg} fontSize="11" fontWeight="700" letterSpacing="2">
        AFFECT ENGINE (Ω₂*)
      </text>
      <text x={epiX} y={28} textAnchor="middle" fill={COLORS.epistemic.accent} fontSize="11" fontWeight="700" letterSpacing="2">
        EPISTEMIC STEERING (Ω₄)
      </text>
      <text x={cx} y={28} textAnchor="middle" fill="#90A4AE" fontSize="11" fontWeight="700" letterSpacing="2">
        DECISION OUTPUT
      </text>

      {/* ═══ CONNECTION LINES: AFFECT → PVH ═══ */}
      {zonePositions.map((z) => {
        const isActive = activeZone === z.zone;
        const strokeW = isActive ? 3 : 1.5;
        const opacity = isActive ? 1 : 0.35;
        return (
          <g key={`aff-${z.zone}`}>
            <path
              d={`M ${z.x + 90} ${z.y} L ${cx - hubR - 8} ${cy + (z.zone - 2) * 20}`}
              stroke={z.color.bg}
              strokeWidth={strokeW}
              fill="none"
              opacity={opacity}
              markerEnd={`url(#${arrowId(z.color.bg)})`}
            />
            {isActive && animating && (
              <circle r="4" fill={z.color.surface} opacity="0.9">
                <animateMotion
                  path={`M ${z.x + 90} ${z.y} L ${cx - hubR - 8} ${cy + (z.zone - 2) * 20}`}
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        );
      })}

      {/* ═══ CONNECTION LINES: EPISTEMIC → PVH ═══ */}
      {epiNodes.map((e, i) => {
        const targetY = cy + (i - 1.5) * 15;
        return (
          <path
            key={`epi-${e.key}`}
            d={`M ${e.x - 95} ${e.y} L ${cx + hubR + 8} ${targetY}`}
            stroke={COLORS.epistemic.accent}
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
            markerEnd={`url(#${arrowId(COLORS.epistemic.accent)})`}
          />
        );
      })}

      {/* ═══ CONNECTION LINES: PVH → TIERS ═══ */}
      {tiers.map((t) => {
        const isActive = activeZone === t.zone;
        return (
          <g key={`tier-${t.label}`}>
            <path
              d={`M ${cx + (t.zone - 2) * 30} ${cy - hubR - 4} L ${t.x} ${t.y + 30}`}
              stroke={t.color}
              strokeWidth={isActive ? 3 : 1.5}
              fill="none"
              opacity={isActive ? 1 : 0.25}
              markerEnd={`url(#${arrowId(t.color)})`}
            />
            {isActive && animating && (
              <circle r="4" fill={t.color} opacity="0.9">
                <animateMotion
                  path={`M ${cx + (t.zone - 2) * 30} ${cy - hubR - 4} L ${t.x} ${t.y + 30}`}
                  dur="1.2s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>
        );
      })}

      {/* ═══ VECTOR 7 / E6 BRIDGE ═══ */}
      {showBridge && (
        <g filter="url(#bridgeGlow)">
          {/* Zone 3 → Epistemic Obligations direct override */}
          <path
            d={curvePath(affectX + 90, cy + 140, epiX - 95, cy - 105, -0.15)}
            stroke={COLORS.bridge.stroke}
            strokeWidth={activeZone === 3 ? 4 : 2.5}
            fill="none"
            opacity={activeZone === 3 ? 1 : 0.6}
            strokeDasharray={activeZone === 3 ? "none" : "8,4"}
          />
          {/* Bridge label */}
          <rect x={cx - 125} y={h - 105} width={250} height={48} rx="6" fill="#2A1F00" stroke={COLORS.bridge.stroke} strokeWidth="1.5" />
          <text x={cx} y={h - 84} textAnchor="middle" fill={COLORS.bridge.glow} fontSize="10" fontWeight="700" letterSpacing="1">
            E6: TierDeont(x) → HasEpistemicObl(x)
          </text>
          <text x={cx} y={h - 68} textAnchor="middle" fill={COLORS.bridge.stroke} fontSize="10" fontWeight="600">
            CLEAR SIGHT IN CRISIS
          </text>
          {activeZone === 3 && animating && (
            <circle r="5" fill={COLORS.bridge.glow} opacity="0.9">
              <animateMotion
                path={curvePath(affectX + 90, cy + 140, epiX - 95, cy - 105, -0.15)}
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          )}
        </g>
      )}

      {/* ═══ FAILURE MODE (Blind Dogmatism) ═══ */}
      {showFailure && (
        <g>
          <path
            d={`M ${affectX + 90} ${cy + 155} L ${cx - 30} ${h - 55}`}
            stroke={COLORS.failure.stroke}
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
            opacity="0.7"
          />
          {/* X mark */}
          <line x1={cx - 85} y1={h - 38} x2={cx - 65} y2={h - 18} stroke={COLORS.failure.stroke} strokeWidth="3" opacity="0.8" />
          <line x1={cx - 65} y1={h - 38} x2={cx - 85} y2={h - 18} stroke={COLORS.failure.stroke} strokeWidth="3" opacity="0.8" />
          <text x={cx - 45} y={h - 22} fill={COLORS.failure.text} fontSize="10" fontWeight="700" letterSpacing="1">
            BLIND DOGMATISM
          </text>
          <text x={cx - 45} y={h - 10} fill={COLORS.failure.text} fontSize="9" opacity="0.7">
            (formally excluded by E6)
          </text>
        </g>
      )}

      {/* ═══ FEEDBACK LOOP ═══ */}
      {showFeedback && (
        <g>
          {/* From tier outputs back down to affect engine */}
          <path
            d={`M ${cx - 210} ${tierY + 10} Q ${35} ${tierY + 30} ${affectX - 50} ${cy - 160} L ${affectX - 50} ${cy + 160} Q ${affectX - 50} ${cy + 200} ${affectX} ${cy + 175}`}
            stroke={COLORS.feedback.stroke}
            strokeWidth="1.5"
            strokeDasharray={COLORS.feedback.dash}
            fill="none"
            opacity="0.5"
            markerEnd={`url(#${arrowId(COLORS.feedback.stroke)})`}
          />
          <text x={18} y={cy} fill={COLORS.feedback.stroke} fontSize="9" fontWeight="600" transform={`rotate(-90 18 ${cy})`} textAnchor="middle" opacity="0.7">
            HOMEOSTATIC FEEDBACK
          </text>
        </g>
      )}

      {/* ═══ AFFECT ZONE NODES ═══ */}
      {zonePositions.map((z) => {
        const isActive = activeZone === z.zone;
        return (
          <g key={`zone-${z.zone}`} opacity={isActive ? 1 : 0.55}>
            <rect
              x={z.x - 90}
              y={z.y - 32}
              width={180}
              height={64}
              rx="8"
              fill={isActive ? z.color.bg : "#1A2332"}
              stroke={z.color.bg}
              strokeWidth={isActive ? 2.5 : 1}
              filter={isActive && z.zone === 3 ? "url(#zone3glow)" : undefined}
            />
            <text x={z.x} y={z.y - 8} textAnchor="middle" fill={COLORS.white} fontSize="12" fontWeight="700">
              {z.label}
            </text>
            <text x={z.x} y={z.y + 12} textAnchor="middle" fill={isActive ? "#FFFFFFCC" : "#FFFFFF88"} fontSize="9.5">
              {z.sub}
            </text>
          </g>
        );
      })}

      {/* ═══ EPISTEMIC NODES ═══ */}
      {epiNodes.map((e) => (
        <g key={e.key}>
          <rect
            x={e.x - 95}
            y={e.y - 25}
            width={190}
            height={50}
            rx="6"
            fill="#131B2E"
            stroke={COLORS.epistemic.accent}
            strokeWidth="1"
            opacity="0.8"
          />
          <text x={e.x} y={e.y - 4} textAnchor="middle" fill={COLORS.epistemic.accent} fontSize="10.5" fontWeight="700">
            {e.label}
          </text>
          <text x={e.x} y={e.y + 13} textAnchor="middle" fill="#90A4AE" fontSize="9.5">
            {e.sub}
          </text>
        </g>
      ))}

      {/* ═══ TIER OUTPUT NODES ═══ */}
      {tiers.map((t) => {
        const isActive = activeZone === t.zone;
        return (
          <g key={t.label}>
            <rect
              x={t.x - 55}
              y={t.y - 22}
              width={110}
              height={52}
              rx="8"
              fill={isActive ? t.color : "#1A2332"}
              stroke={t.color}
              strokeWidth={isActive ? 2.5 : 1}
              opacity={isActive ? 1 : 0.45}
            />
            <text x={t.x} y={t.y + 2} textAnchor="middle" fill={COLORS.white} fontSize="16" fontWeight="800">
              {t.label}
            </text>
            <text x={t.x} y={t.y + 18} textAnchor="middle" fill="#FFFFFFBB" fontSize="9.5">
              {t.sub}
            </text>
            {isActive && (
              <text x={t.x} y={t.y - 30} textAnchor="middle" fill={t.color} fontSize="9" fontWeight="700" letterSpacing="1">
                ▼ ACTIVE
              </text>
            )}
          </g>
        );
      })}

      {/* ═══ CENTRAL PVH HUB ═══ */}
      {/* Outer glow ring */}
      <circle id="hubPulse" cx={cx} cy={cy} r={hubR + 12} fill="none" stroke={COLORS.pvh.ring} strokeWidth="1" opacity="0.25" />
      {animating && (
        <circle cx={cx} cy={cy} r={hubR + 12} fill="none" stroke={COLORS.pvh.ring} strokeWidth="1.5" opacity="0.15">
          <animate attributeName="r" values={`${hubR + 10};${hubR + 22};${hubR + 10}`} dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.05;0.3" dur="2.5s" repeatCount="indefinite" />
        </circle>
      )}

      {/* Hub circle */}
      <circle cx={cx} cy={cy} r={hubR} fill="url(#pvhHub)" stroke={COLORS.pvh.ring} strokeWidth="2.5" />

      {/* Hub label */}
      <text x={cx} y={cy - 16} textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700" letterSpacing="2">
        PREDICTIVE VALUE
      </text>
      <text x={cx} y={cy + 2} textAnchor="middle" fill={COLORS.white} fontSize="10" fontWeight="700" letterSpacing="2">
        HOMEOSTASIS
      </text>
      <text x={cx} y={cy + 22} textAnchor="middle" fill={COLORS.bridge.glow} fontSize="14" fontWeight="800">
        PVH
      </text>
      <text x={cx} y={cy + 40} textAnchor="middle" fill="#FFFFFF88" fontSize="8.5">
        Integration Nexus
      </text>

      {/* ═══ OMEGA LABELS ═══ */}
      <text x={cx - hubR - 55} y={cy + 55} textAnchor="middle" fill="#546E7A" fontSize="9" fontWeight="600">
        Ω₂* feeds →
      </text>
      <text x={cx + hubR + 55} y={cy + 55} textAnchor="middle" fill="#546E7A" fontSize="9" fontWeight="600">
        ← Ω₄ steers
      </text>
    </svg>
  );
}

// ─── Main Component ───
export default function PVHNodeDiagram() {
  const [activeZone, setActiveZone] = useState(1);
  const [showBridge, setShowBridge] = useState(true);
  const [showFailure, setShowFailure] = useState(true);
  const [showFeedback, setShowFeedback] = useState(true);
  const [animating, setAnimating] = useState(true);
  const [autoPlay, setAutoPlay] = useState(false);

  // Auto-cycle through zones
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveZone((z) => (z % 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const zoneDescriptions = {
    1: {
      title: "Zone 1 → Tier 3 (Utility)",
      desc: "Low cognitive load, low conflict. The system is in stable homeostasis. Predictive success is high. The PVH routes decisions to Tier 3: flexible, consequentialist optimization within established constraints. Methods can vary freely.",
      formal: "InZone1(x) ↔ TierUtil(x) [B1, Proved]",
    },
    2: {
      title: "Zone 2 → Tier 2 (Virtue)",
      desc: "Moderate load and conflict activate character-alignment testing. The PVH detects perturbation and routes to Tier 2: wisdom, integrity, empathy, and fairness govern decision-making. The system is coping actively through virtue-driven resilience.",
      formal: "InZone2(x) ↔ TierVirtue(x) [B2, Proved]",
    },
    3: {
      title: "Zone 3 → Tier 1 (Deontology) + Emergency Brake",
      desc: "High load/conflict threatens structural coherence. The PVH activates absolute constraints. The Emergency Brake engages: Tier 2 virtue reasoning is EXCLUDED (no rationalizing away prohibitions). Simultaneously, the E6 bridge DEMANDS heightened epistemic clarity — Clear Sight in Crisis.",
      formal: "TierDeont(x) → ¬TierVirtue(x) [EB] ∧ HasEpistemicObligations(x) [CSC]",
    },
  };

  const info = zoneDescriptions[activeZone];

  return (
    <div style={{ background: "#0D1117", minHeight: "100vh", color: "#E0E0E0", fontFamily: "'IBM Plex Sans', 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ padding: "20px 28px 10px", borderBottom: "1px solid #1E293B" }}>
        <h1 style={{ margin: 0, fontSize: "20px", fontWeight: 800, color: "#E0E0E0", letterSpacing: "1px", fontFamily: "'IBM Plex Mono', monospace" }}>
          The PVH Integration Nexus
        </h1>
        <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#78909C", letterSpacing: "0.5px" }}>
          Predictive Value Homeostasis — The Engine of the ACIP-Paraclete Framework
        </p>
      </div>

      {/* Diagram */}
      <div style={{ padding: "10px 16px 0" }}>
        <PVHDiagram
          activeZone={activeZone}
          showBridge={showBridge}
          showFailure={showFailure}
          showFeedback={showFeedback}
          animating={animating}
        />
      </div>

      {/* Controls */}
      <div style={{ padding: "6px 28px 10px", display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
        {/* Zone selector */}
        <div style={{ display: "flex", gap: "6px" }}>
          {[1, 2, 3].map((z) => {
            const colors = [COLORS.zone1, COLORS.zone2, COLORS.zone3];
            const c = colors[z - 1];
            return (
              <button
                key={z}
                onClick={() => { setActiveZone(z); setAutoPlay(false); }}
                style={{
                  background: activeZone === z ? c.bg : "#1A2332",
                  color: "#FFF",
                  border: `2px solid ${c.bg}`,
                  borderRadius: "6px",
                  padding: "6px 14px",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                  opacity: activeZone === z ? 1 : 0.6,
                  transition: "all 0.2s",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                Zone {z}
              </button>
            );
          })}
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            style={{
              background: autoPlay ? "#37474F" : "#1A2332",
              color: autoPlay ? "#FFD54F" : "#78909C",
              border: "1px solid #37474F",
              borderRadius: "6px",
              padding: "6px 12px",
              fontSize: "11px",
              cursor: "pointer",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            {autoPlay ? "⏸ Auto" : "▶ Auto"}
          </button>
        </div>

        {/* Toggle controls */}
        <div style={{ display: "flex", gap: "8px", marginLeft: "auto" }}>
          {[
            { label: "E6 Bridge", state: showBridge, set: setShowBridge, color: COLORS.bridge.stroke },
            { label: "Failure Mode", state: showFailure, set: setShowFailure, color: COLORS.failure.stroke },
            { label: "Feedback", state: showFeedback, set: setShowFeedback, color: COLORS.feedback.stroke },
            { label: "Animate", state: animating, set: setAnimating, color: "#4A90B8" },
          ].map((t) => (
            <button
              key={t.label}
              onClick={() => t.set(!t.state)}
              style={{
                background: t.state ? `${t.color}22` : "transparent",
                color: t.state ? t.color : "#546E7A",
                border: `1px solid ${t.state ? t.color : "#37474F"}`,
                borderRadius: "4px",
                padding: "4px 10px",
                fontSize: "10px",
                cursor: "pointer",
                fontFamily: "'IBM Plex Mono', monospace",
                fontWeight: 600,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Info Panel */}
      <div style={{
        margin: "0 28px 16px",
        padding: "14px 18px",
        background: "#111820",
        borderRadius: "8px",
        border: "1px solid #1E293B",
        borderLeft: `3px solid ${[COLORS.zone1.bg, COLORS.zone2.bg, COLORS.zone3.bg][activeZone - 1]}`,
      }}>
        <div style={{ fontSize: "14px", fontWeight: 700, color: [COLORS.zone1.surface, COLORS.zone2.surface, COLORS.zone3.surface][activeZone - 1], marginBottom: "6px" }}>
          {info.title}
        </div>
        <div style={{ fontSize: "12.5px", color: "#B0BEC5", lineHeight: 1.6, marginBottom: "8px" }}>
          {info.desc}
        </div>
        <div style={{
          fontSize: "11px",
          color: "#78909C",
          fontFamily: "'IBM Plex Mono', monospace",
          background: "#0D1117",
          padding: "6px 10px",
          borderRadius: "4px",
          display: "inline-block",
        }}>
          {info.formal}
        </div>
      </div>

      {/* Footer annotation */}
      <div style={{ padding: "0 28px 18px", fontSize: "10px", color: "#546E7A", lineHeight: 1.5 }}>
        <span style={{ color: "#78909C", fontWeight: 600 }}>Architecture: </span>
        Left flank feeds affective state (Ω₂*) → PVH routes to appropriate tier → Right flank maintains epistemic calibration (Ω₄).
        The Vector 7 bridge (E6, gold line) ensures Zone 3 crisis states directly mandate epistemic obligations, formally preventing blind dogmatism.
        Feedback loop maintains homeostatic equilibrium across cycles.
      </div>
    </div>
  );
}
