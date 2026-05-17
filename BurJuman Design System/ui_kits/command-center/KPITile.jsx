/* DeltaChip — tabular delta with sign + unit. */
function DeltaChip({ value, unit = '', positive }) {
  const isPos = positive ?? value >= 0;
  const color = isPos ? '#2EE6A0' : '#FF4D6A';
  const bg = isPos ? 'rgba(46,230,160,0.12)' : 'rgba(255,77,106,0.12)';
  const sign = isPos ? '▲' : '▼';
  const abs = typeof value === 'number' ? Math.abs(value).toFixed(1).replace(/\.0$/,'') : value;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      background: bg, color,
      padding: '3px 9px', borderRadius: 999,
      font: '500 11px/1 var(--bj-font-ui)',
      fontVariantNumeric: 'tabular-nums',
      whiteSpace: 'nowrap',
    }}>
      <span style={{ fontSize: 9 }}>{sign}</span>
      {isPos ? '+' : '−'}{abs}{unit}
    </span>
  );
}

/* Sparkline — tiny SVG line. data: array of numbers. */
function Sparkline({ data, color = '#FF6B47', height = 36, fill = false }) {
  if (!data || !data.length) return null;
  const w = 200;
  const h = height;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - 4 - ((v - min) / span) * (h - 8);
    return `${x},${y}`;
  }).join(' ');
  const area = fill ? `0,${h} ${pts} ${w},${h}` : null;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} preserveAspectRatio="none"
         style={{ display: 'block' }}>
      {fill && <polygon points={area} fill={color} opacity="0.12"/>}
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

/* KPITile — eyebrow / number / sparkline / delta. */
function KPITile({ label, value, suffix, delta, deltaUnit, sparkline, sparkColor = '#FF6B47', tone }) {
  return (
    <div style={{
      background: '#0E0E10',
      borderRadius: 12,
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
      padding: '18px 20px',
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <span style={{
        fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: tone || '#A8A8B3', fontWeight: 500,
      }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
        <span style={{
          fontFamily: 'var(--bj-font-ui)', fontWeight: 600, fontSize: 30,
          lineHeight: 1, color: '#fff', fontVariantNumeric: 'tabular-nums',
          letterSpacing: '-0.01em',
        }}>{value}</span>
        {suffix && <span style={{ fontSize: 13, color: '#A8A8B3' }}>{suffix}</span>}
      </div>
      {sparkline && <Sparkline data={sparkline} color={sparkColor} />}
      {delta != null && (
        <div><DeltaChip value={delta} unit={deltaUnit} /></div>
      )}
    </div>
  );
}

window.DeltaChip = DeltaChip;
window.Sparkline = Sparkline;
window.KPITile = KPITile;
