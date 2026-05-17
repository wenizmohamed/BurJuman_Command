/* HeroTile — Story Mode centerpiece. 72px number, gradient left rail, sparkline. */
function HeroTile({ label, value, delta, deltaUnit, sparkline, footnote }) {
  return (
    <div style={{
      background: '#0E0E10',
      borderRadius: 16,
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
      padding: '32px 36px',
      display: 'flex', flexDirection: 'column', gap: 16,
      position: 'relative',
      overflow: 'hidden',
      minHeight: 260,
    }}>
      <div style={{
        position: 'absolute', left: 0, top: 0,
        width: 4, height: '100%',
        background: 'linear-gradient(180deg,#FF6B47 0%,#C7256D 50%,#8B2D8E 100%)',
      }} />
      <span style={{
        fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: '#A8A8B3', fontWeight: 500,
      }}>{label}</span>

      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
        <span style={{
          fontFamily: 'var(--bj-font-ui)', fontWeight: 600, fontSize: 72,
          lineHeight: 1, letterSpacing: '-0.02em',
          fontVariantNumeric: 'tabular-nums', color: '#fff',
        }}>{value}</span>
        {delta != null && (
          <div style={{ marginBottom: 12 }}>
            <DeltaChip value={delta} unit={deltaUnit} />
          </div>
        )}
      </div>

      {sparkline && (
        <div style={{ marginTop: 'auto' }}>
          <Sparkline data={sparkline} color="#FF6B47" height={56} fill />
        </div>
      )}

      {footnote && (
        <span style={{ fontSize: 12, color: '#A8A8B3', fontVariantNumeric: 'tabular-nums' }}>
          {footnote}
        </span>
      )}
    </div>
  );
}
window.HeroTile = HeroTile;
