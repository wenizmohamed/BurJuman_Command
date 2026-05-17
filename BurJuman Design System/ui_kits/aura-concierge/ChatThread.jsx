/* ChatThread — alternating AURA bubbles + user bubbles, with inline cards. */
function ChatThread({ messages }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 24,
    }}>
      {messages.map((m, i) => (
        m.role === 'aura' ? (
          <AuraMessage key={i} text={m.text} cards={m.cards} />
        ) : (
          <UserMessage key={i} text={m.text} />
        )
      ))}
    </div>
  );
}

function AuraMessage({ text, cards }) {
  return (
    <div style={{ display: 'flex', gap: 14, maxWidth: '92%' }}>
      <div style={{
        width: 32, height: 32, borderRadius: 10,
        background: 'linear-gradient(135deg,#FF6B47 0%,#C7256D 50%,#8B2D8E 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon name="sparkles" size={16} stroke={1.8} color="#fff" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <div>
          <span style={{
            fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#A8A8B3', fontWeight: 500, marginBottom: 6, display: 'block',
          }}>AURA</span>
          <p style={{
            margin: 0,
            fontFamily: 'var(--bj-font-ui)',
            fontSize: 15, lineHeight: 1.55, color: '#fff', fontWeight: 400,
          }}>{text}</p>
        </div>
        {cards && cards.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {cards.map((c, i) => <TenantCard key={i} {...c} />)}
          </div>
        )}
      </div>
    </div>
  );
}

function UserMessage({ text }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{
        maxWidth: '70%',
        background: '#15151A',
        border: '1px solid #26262C',
        borderRadius: 14,
        padding: '12px 18px',
        fontSize: 14, lineHeight: 1.5, color: '#fff',
      }}>{text}</div>
    </div>
  );
}

window.ChatThread = ChatThread;
window.AuraMessage = AuraMessage;
window.UserMessage = UserMessage;
