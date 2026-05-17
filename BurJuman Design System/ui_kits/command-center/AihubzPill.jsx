/* Charcoal delivery pill — bottom-left, 24px from edges. */
function AihubzPill() {
  return (
    <span style={{
      position: 'absolute',
      left: 24, bottom: 24,
      background: '#1A1A1A',
      color: '#F5F5F5',
      padding: '6px 14px',
      borderRadius: 999,
      font: '500 11px/1 var(--bj-font-ui)',
      letterSpacing: '0.02em',
      zIndex: 5,
    }}>Built by AIHUBZ</span>
  );
}
window.AihubzPill = AihubzPill;
