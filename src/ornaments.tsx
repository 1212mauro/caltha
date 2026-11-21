import { useId } from 'react';

// useId output contains characters that are awkward inside url(#…) refs.
const useSvgId = () => useId().replace(/[^a-zA-Z0-9_-]/g, '');

const C = 300;

// One guilloché band: a circle of radius r with `lobes` sine waves of height `amp` running around it.
function wave(r: number, amp: number, lobes: number, phase: number) {
  let d = '';
  for (let deg = 0; deg <= 360; deg++) {
    const a = (deg * Math.PI) / 180;
    const rr = r + amp * Math.sin(lobes * a + phase);
    d += `${deg ? 'L' : 'M'}${(C + rr * Math.cos(a)).toFixed(1)},${(C + rr * Math.sin(a)).toFixed(1)}`;
  }
  return d + 'Z';
}

const band = (n: number, r: number, amp: number, lobes: number) =>
  Array.from({ length: n }, (_, k) => wave(r, amp, lobes, (2 * Math.PI * k) / n));

// Computed once: banknote-style engraving, three interleaved bands.
const GUILLOCHE = [...band(12, 248, 16, 20), ...band(10, 172, 34, 10), ...band(8, 94, 26, 7)];

export function Guilloche({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={0.6}>
      {GUILLOCHE.map((d, i) => (
        <path key={i} d={d} />
      ))}
      {[290, 282, 212, 136, 58].map((r) => (
        <circle key={r} cx={C} cy={C} r={r} />
      ))}
    </svg>
  );
}

// Caltha palustris, the marsh marigold: five broad overlapping petals around a ring of stamens.
export function Flower({ className }: { className?: string }) {
  const id = useSvgId();
  return (
    <svg viewBox="-120 -120 240 240" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0" stopColor="#EAD7AA" />
          <stop offset="0.55" stopColor="#C6A068" />
          <stop offset="1" stopColor="#8C6A38" />
        </linearGradient>
      </defs>
      {[0, 72, 144, 216, 288].map((deg) => (
        <g key={deg} transform={`rotate(${deg})`}>
          <path
            d="M0,-8 C-46,-24 -54,-94 0,-110 C54,-94 46,-24 0,-8Z"
            fill={`url(#${id})`}
            stroke="#7A5C31"
            strokeOpacity={0.55}
            strokeWidth={1.2}
          />
          <path d="M0,-18 L0,-92" stroke="#7A5C31" strokeOpacity={0.35} strokeWidth={1.2} />
        </g>
      ))}
      <circle r={24} fill="#0A2C22" stroke="#C6A068" strokeWidth={1.5} />
      {Array.from({ length: 14 }, (_, i) => {
        const a = (i * 2 * Math.PI) / 14;
        return <circle key={i} cx={15 * Math.cos(a)} cy={15 * Math.sin(a)} r={2.4} fill="#DCC292" />;
      })}
      <circle r={5} fill="#DCC292" />
    </svg>
  );
}

export function Seal({ text, className }: { text: string; className?: string }) {
  const id = useSvgId();
  return (
    <div className={className}>
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path id={id} d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <circle cx={100} cy={100} r={97} fill="var(--paper)" stroke="var(--brass)" />
        <circle cx={100} cy={100} r={89} fill="none" stroke="var(--brass)" strokeWidth={0.6} />
        <circle cx={100} cy={100} r={58} fill="none" stroke="var(--brass)" strokeWidth={0.6} />
        <g className="seal-ring">
          <text fill="var(--emerald-800)" fontFamily="Jost, sans-serif" fontSize={12.5} fontWeight={500} letterSpacing={3}>
            <textPath href={`#${id}`} textLength={462} lengthAdjust="spacing">
              {text.toUpperCase()}
            </textPath>
          </text>
        </g>
      </svg>
      <Flower className="seal-flower" />
    </div>
  );
}

export const Arrow = () => (
  <svg width="18" height="10" viewBox="0 0 18 10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
    <path d="M0 5h17M13 1l4 4-4 4" />
  </svg>
);
