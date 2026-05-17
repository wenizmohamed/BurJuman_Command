/* TenantCard — rich inline result (offer, fitting, table). */
function TenantCard({ tenant, type = 'offer', headline, sub, action = 'View', meta }) {
  const ICONS_BY_TYPE = {
    offer:   { icon: 'shopping-bag', color: '#FF6B47' },
    fitting: { icon: 'calendar',     color: '#C7256D' },
    dining:  { icon: 'clock',        color: '#8B2D8E' },
    map:     { icon: 'map-pin',      color: '#E5294A' },
  };
  const t = ICONS_BY_TYPE[type] || ICONS_BY_TYPE.offer;
  return (
    <div style={{
      background: '#15151A',
      borderRadius: 14,
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
      padding: 18,
      display: 'flex', alignItems: 'center', gap: 16,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12,
        background: 'rgba(255,255,255,0.04)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon name={t.icon} size={20} stroke={1.7} color={t.color} />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: t.color, fontWeight: 500,
          }}>{tenant}</span>
          {meta && (
            <span style={{ fontSize: 10, color: '#6E6E78', fontFamily: 'var(--bj-font-mono)' }}>
              · {meta}
            </span>
          )}
        </div>
        <span style={{ fontSize: 14, color: '#fff', fontWeight: 500, lineHeight: 1.35 }}>{headline}</span>
        {sub && <span style={{ fontSize: 12, color: '#A8A8B3', lineHeight: 1.4 }}>{sub}</span>}
      </div>
      <button style={{
        background: 'transparent', color: '#fff',
        border: '1px solid #34343C',
        padding: '9px 16px', borderRadius: 999,
        font: '500 12px/1 var(--bj-font-ui)',
        cursor: 'pointer', whiteSpace: 'nowrap',
        display: 'inline-flex', alignItems: 'center', gap: 6,
      }}>
        {action}
        <Icon name="arrow-right" size={12} stroke={2} />
      </button>
    </div>
  );
}
window.TenantCard = TenantCard;
