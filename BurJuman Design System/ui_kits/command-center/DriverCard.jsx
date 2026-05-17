/* DriverCard — source-color tagged, top-rule, title / sub / metric. */
const DRIVER_COLORS = {
  campaign: '#FF6B47',
  footfall: '#C7256D',
  crm:      '#8B2D8E',
  digital:  '#E5294A',
  ops:      '#A8A8B3',
};

const DRIVER_ICONS = {
  campaign: 'megaphone',
  footfall: 'users-round',
  crm:      'id-card',
  digital:  'activity',
  ops:      'sliders',
};

function DriverCard({ source = 'campaign', title, sub, metric, deltaLabel }) {
  const color = DRIVER_COLORS[source] || '#A8A8B3';
  return (
    <div style={{
      background: '#0E0E10',
      borderRadius: 12,
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
      padding: '18px 20px',
      display: 'flex', flexDirection: 'column', gap: 12,
      borderTop: `2px solid ${color}`,
      minHeight: 170,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <Icon name={DRIVER_ICONS[source]} size={14} stroke={1.7} color={color} />
        <span style={{
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
          color, fontWeight: 500,
        }}>{source}</span>
      </div>

      <span style={{
        fontFamily: 'var(--bj-font-ui)', fontWeight: 500, fontSize: 15,
        lineHeight: 1.3, color: '#fff',
      }}>{title}</span>

      {sub && (
        <span style={{ fontSize: 12, color: '#A8A8B3', lineHeight: 1.45 }}>{sub}</span>
      )}

      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
        <span style={{
          fontFamily: 'var(--bj-font-mono)', fontSize: 13, color: '#fff',
          fontVariantNumeric: 'tabular-nums',
        }}>{metric}</span>
        {deltaLabel && (
          <span style={{ fontSize: 11, color: '#2EE6A0', fontVariantNumeric: 'tabular-nums' }}>
            {deltaLabel}
          </span>
        )}
      </div>
    </div>
  );
}

window.DriverCard = DriverCard;
window.DRIVER_COLORS = DRIVER_COLORS;
