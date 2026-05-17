/* Narrator strip — h=64, Fraunces italic, Why? pill + Mode toggle right. */
function NarratorStrip({ quote, mode, onModeChange }) {
  return (
    <div style={{
      height: 64,
      background: '#0E0E10',
      borderBottom: '1px solid #26262C',
      display: 'flex', alignItems: 'center',
      padding: '0 32px', gap: 24,
      flexShrink: 0,
    }}>
      <span style={{
        fontFamily: 'var(--bj-font-narrator)',
        fontStyle: 'italic', fontWeight: 400, fontSize: 16,
        lineHeight: 1.2, color: '#fff',
        flex: 1,
      }}>"{quote}"</span>

      <button style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'transparent', color: '#A8A8B3',
        border: '1px solid #26262C',
        padding: '6px 14px', borderRadius: 999,
        font: '500 11px/1 var(--bj-font-ui)',
        cursor: 'pointer',
      }}>
        <Icon name="help-circle" size={12} stroke={1.7} />
        Why?
      </button>

      <ModeToggle value={mode} onChange={onModeChange} />
    </div>
  );
}

function ModeToggle({ value, onChange }) {
  const opt = (key, label, icon) => {
    const active = value === key;
    return (
      <button
        key={key}
        onClick={() => onChange && onChange(key)}
        style={{
          background: active ? '#15151A' : 'transparent',
          color: active ? '#fff' : '#A8A8B3',
          border: 'none',
          padding: '7px 14px', borderRadius: 999,
          font: '500 12px/1 var(--bj-font-ui)',
          display: 'inline-flex', alignItems: 'center', gap: 6,
          cursor: 'pointer',
          transition: 'color 120ms cubic-bezier(.2,.6,.2,1), background 120ms cubic-bezier(.2,.6,.2,1)',
        }}
      >
        <Icon name={icon} size={12} stroke={1.8} />
        {label}
      </button>
    );
  };
  return (
    <div style={{
      background: '#000',
      border: '1px solid #26262C',
      borderRadius: 999,
      padding: 3,
      display: 'inline-flex',
    }}>
      {opt('story', 'Story', 'layout')}
      {opt('explore', 'Explore', 'grid-3')}
    </div>
  );
}

window.NarratorStrip = NarratorStrip;
window.ModeToggle = ModeToggle;
