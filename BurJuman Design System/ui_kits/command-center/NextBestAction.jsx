/* Next Best Action — coral-ringed card with zap icon, Activate + Snooze. */
function NextBestAction({ title, sub, projection, snoozed, onActivate, onSnooze }) {
  return (
    <div style={{
      background: '#0E0E10',
      borderRadius: 14,
      boxShadow: 'inset 0 0 0 1px rgba(229,41,74,0.45), 0 12px 32px rgba(229,41,74,0.12)',
      padding: '20px 24px',
      display: 'flex', alignItems: 'center', gap: 22,
    }}>
      <div style={{
        width: 48, height: 48, borderRadius: 14,
        background: 'rgba(229,41,74,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon name="zap" size={22} stroke={1.7} color="#E5294A" />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <span style={{
          fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#E5294A', fontWeight: 500,
        }}>Next Best Action</span>
        <span style={{
          fontFamily: 'var(--bj-font-ui)', fontSize: 15, fontWeight: 500,
          color: '#fff', lineHeight: 1.35,
        }}>{title}</span>
        {projection && (
          <span style={{ fontSize: 12, color: '#A8A8B3', fontVariantNumeric: 'tabular-nums' }}>
            {projection}
          </span>
        )}
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={onActivate}
          disabled={snoozed}
          style={{
            border: 'none',
            background: snoozed ? '#26262C' : '#E5294A',
            color: snoozed ? '#A8A8B3' : '#fff',
            padding: '11px 22px', borderRadius: 999,
            font: '600 13px/1 var(--bj-font-ui)',
            boxShadow: snoozed ? 'none' : '0 8px 24px rgba(229,41,74,0.25)',
            cursor: snoozed ? 'default' : 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 6,
            transition: 'background 120ms cubic-bezier(.2,.6,.2,1)',
          }}
        >
          <Icon name="zap" size={13} stroke={2} />
          {snoozed ? 'Snoozed' : 'Activate'}
        </button>
        <button
          onClick={onSnooze}
          style={{
            background: 'transparent', color: '#A8A8B3',
            border: '1px solid #26262C',
            padding: '10px 18px', borderRadius: 999,
            font: '500 13px/1 var(--bj-font-ui)',
            cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}
        >
          <Icon name="bell-off" size={13} stroke={1.8} />
          Snooze
        </button>
      </div>
    </div>
  );
}
window.NextBestAction = NextBestAction;
