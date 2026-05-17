/* Brand bar — h=80, gradient ribbon, wordmark left, title center, pills+avatar right. */
function BrandBar({ title = 'Command Center', subtitle, dateLabel = '16 May 2026', avatar = 'MH' }) {
  return (
    <header style={{
      height: 80,
      background: 'linear-gradient(90deg,#FF6B47 0%,#C7256D 50%,#8B2D8E 100%)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 32px',
      gap: 24,
      flexShrink: 0,
    }}>
      <span style={{
        fontFamily: 'var(--bj-font-wordmark)',
        fontWeight: 300,
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#fff',
      }}>BURJUMAN</span>

      <span style={{
        width: 1, height: 22, background: 'rgba(255,255,255,0.32)',
      }} />

      <span style={{
        fontFamily: 'var(--bj-font-ui)',
        fontSize: 12, fontWeight: 500, letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.92)',
      }}>Mawarid Holding</span>

      <div style={{ flex: 1, textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--bj-font-ui)', fontSize: 14, fontWeight: 500, color: '#fff' }}>
          {title}
        </div>
        {subtitle && (
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.78)', marginTop: 2 }}>{subtitle}</div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(0,0,0,0.22)', color: '#fff',
          padding: '6px 14px', borderRadius: 999,
          font: '500 11px/1 var(--bj-font-ui)',
          fontVariantNumeric: 'tabular-nums',
        }}>{dateLabel}</span>
        <div style={{
          width: 34, height: 34, borderRadius: '50%',
          background: 'rgba(0,0,0,0.22)',
          border: '1px solid rgba(255,255,255,0.28)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', font: '600 12px/1 var(--bj-font-ui)',
        }}>{avatar}</div>
      </div>
    </header>
  );
}
window.BrandBar = BrandBar;
