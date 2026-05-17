/* Composer — input + suggestion chips above. */
function Composer({ suggestions, value, onChange, onSend }) {
  const handleKey = (e) => { if (e.key === 'Enter' && value.trim()) onSend(); };
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      {suggestions && suggestions.length > 0 && (
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => { onChange(s); }}
              style={{
                background: '#0E0E10',
                color: '#A8A8B3',
                border: '1px solid #26262C',
                padding: '8px 14px', borderRadius: 999,
                font: '400 12px/1 var(--bj-font-ui)',
                cursor: 'pointer',
                display: 'inline-flex', alignItems: 'center', gap: 6,
              }}
            >
              <Icon name="sparkles" size={11} stroke={1.8} color="#C7256D" />
              {s}
            </button>
          ))}
        </div>
      )}

      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        background: '#15151A',
        border: '1px solid #26262C',
        borderRadius: 16,
        padding: '6px 6px 6px 18px',
      }}>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ask AURA — plan a visit, hold a table, find a fit…"
          style={{
            flex: 1, background: 'transparent', border: 'none', outline: 'none',
            color: '#fff', font: '400 14px/1.4 var(--bj-font-ui)',
            padding: '12px 0',
          }}
        />
        <button
          onClick={() => value.trim() && onSend()}
          disabled={!value.trim()}
          style={{
            border: 'none',
            background: value.trim() ? '#E5294A' : '#26262C',
            color: value.trim() ? '#fff' : '#6E6E78',
            width: 40, height: 40, borderRadius: 12,
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            cursor: value.trim() ? 'pointer' : 'default',
            boxShadow: value.trim() ? '0 6px 16px rgba(229,41,74,0.2)' : 'none',
            transition: 'background 120ms cubic-bezier(.2,.6,.2,1)',
          }}
        >
          <Icon name="send" size={15} stroke={2} />
        </button>
      </div>
    </div>
  );
}
window.Composer = Composer;
