/* Slim site header — wordmark left, B Hub Gold chip + nav right. */
function SiteHeader({ member }) {
  return (
    <header style={{
      height: 72,
      background: '#0E0E10',
      borderBottom: '1px solid #26262C',
      display: 'flex', alignItems: 'center',
      padding: '0 40px', gap: 28,
      position: 'sticky', top: 0, zIndex: 10,
    }}>
      <span style={{
        fontFamily: 'var(--bj-font-wordmark)',
        fontWeight: 300,
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        fontSize: 18, color: '#fff',
      }}>BURJUMAN</span>

      <nav style={{ display: 'flex', gap: 22, marginLeft: 12 }}>
        {['Shop', 'Dine', 'Entertain', 'Visit', 'B Hub'].map((label, i) => (
          <a key={label} href="#"
             style={{
               textDecoration: 'none',
               color: i === 1 ? '#fff' : '#A8A8B3',
               fontSize: 13, fontWeight: 500,
             }}>{label}</a>
        ))}
      </nav>

      <div style={{ flex: 1 }} />

      <button style={{
        background: 'transparent', color: '#A8A8B3',
        border: '1px solid #26262C',
        width: 34, height: 34, borderRadius: '50%',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
      }}>
        <Icon name="search" size={14} stroke={1.8} />
      </button>

      {/* B Hub Gold chip */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 10,
        background: '#15151A',
        border: '1px solid #26262C',
        padding: '6px 12px 6px 6px', borderRadius: 999,
      }}>
        <span style={{
          width: 26, height: 26, borderRadius: '50%',
          background: 'linear-gradient(135deg,#FF6B47 0%,#C7256D 60%,#8B2D8E 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', font: '600 11px/1 var(--bj-font-ui)',
        }}>{member.initials}</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ fontSize: 12, color: '#fff', fontWeight: 500, lineHeight: 1 }}>{member.name}</span>
          <span style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A8A8B3', lineHeight: 1 }}>
            B Hub · {member.tier}
          </span>
        </div>
      </div>
    </header>
  );
}
window.SiteHeader = SiteHeader;
