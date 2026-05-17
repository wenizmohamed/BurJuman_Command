/* AuraHero — gradient strip with "Meet AURA" intro. Appears once, top of chat. */
function AuraHero({ member }) {
  return (
    <section style={{
      borderRadius: 20,
      overflow: 'hidden',
      background: '#0E0E10',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
    }}>
      <div style={{
        background: 'linear-gradient(135deg,#FF6B47 0%,#C7256D 50%,#8B2D8E 100%)',
        padding: '32px 36px 28px',
        display: 'flex', alignItems: 'center', gap: 22,
      }}>
        <div style={{
          width: 64, height: 64, borderRadius: 18,
          background: 'rgba(0,0,0,0.22)',
          border: '1px solid rgba(255,255,255,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Icon name="sparkles" size={28} stroke={1.7} color="#fff" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.85)', fontWeight: 500,
          }}>BURJUMAN · AURA CONCIERGE</div>
          <h1 style={{
            margin: '6px 0 0',
            fontFamily: 'var(--bj-font-ui)',
            fontWeight: 600, fontSize: 28, lineHeight: 1.15,
            color: '#fff', letterSpacing: '-0.01em',
          }}>Good afternoon, {member.name.split(' ')[0]}.</h1>
        </div>
      </div>
      <div style={{
        padding: '20px 36px 24px',
        display: 'flex', alignItems: 'center', gap: 20,
      }}>
        <span style={{
          fontFamily: 'var(--bj-font-narrator)',
          fontStyle: 'italic', fontWeight: 400, fontSize: 16,
          lineHeight: 1.35, color: '#fff', flex: 1,
        }}>
          "I can plan your visit, book a fitting at Saks, hold a table at Dean &amp; DeLuca, or surface offers tailored to your B Hub Gold tier."
        </span>
      </div>
    </section>
  );
}
window.AuraHero = AuraHero;
