/* Footer — Powered by AIHUBZ + center mode toggle + refresh-status. */
function Footer({ mode, onModeChange, refreshSec = 14 }) {
  return (
    <footer style={{
      height: 56,
      background: '#0E0E10',
      borderTop: '1px solid #26262C',
      display: 'flex', alignItems: 'center',
      padding: '0 28px', gap: 16,
      flexShrink: 0,
    }}>
      <span style={{ fontFamily: 'var(--bj-font-ui)', fontSize: 12, color: '#A8A8B3' }}>
        Powered by <span style={{ color: '#fff' }}>AIHUBZ AI Concierge</span>
      </span>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <ModeToggle value={mode} onChange={onModeChange} />
      </div>

      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        color: '#A8A8B3', font: '500 11px/1 var(--bj-font-ui)',
        fontVariantNumeric: 'tabular-nums',
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: '#2EE6A0',
          boxShadow: '0 0 0 4px rgba(46,230,160,0.18)',
          animation: 'bjPulse 2s cubic-bezier(.2,.6,.2,1) infinite',
        }} />
        live · refreshed {refreshSec}s ago
      </span>

      <button style={{
        background: 'transparent', color: '#A8A8B3',
        border: '1px solid #26262C',
        width: 30, height: 30, borderRadius: '50%',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
      }}>
        <Icon name="refresh-cw" size={13} stroke={1.8} />
      </button>
    </footer>
  );
}
window.Footer = Footer;
