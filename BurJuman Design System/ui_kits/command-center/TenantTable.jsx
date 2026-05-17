/* TenantTable — mono tenant rows with deltas. Compact, institutional. */
const TENANTS = [
  { id: 'tnt_sa_ks_001',  name: 'Saks Fifth Avenue',  cat: 'Luxury',   sales: 'AED 1,420,800', delta: +8.4, dwell: '2h 14m' },
  { id: 'tnt_zara_014',   name: 'Zara',               cat: 'Apparel',  sales: 'AED   642,000', delta: +3.1, dwell: '0h 38m' },
  { id: 'tnt_carre_007',  name: 'Carrefour',          cat: 'Grocery',  sales: 'AED   510,200', delta: -1.8, dwell: '0h 28m' },
  { id: 'tnt_apple_002',  name: 'Apple BurJuman',     cat: 'Tech',     sales: 'AED   488,400', delta: +12.0, dwell: '0h 24m' },
  { id: 'tnt_mango_021',  name: 'Mango',              cat: 'Apparel',  sales: 'AED   412,700', delta: +1.4, dwell: '0h 31m' },
  { id: 'tnt_sephora_09', name: 'Sephora',            cat: 'Beauty',   sales: 'AED   388,150', delta: +6.2, dwell: '0h 22m' },
  { id: 'tnt_vox_006',    name: 'VOX Cinemas',        cat: 'Leisure',  sales: 'AED   264,000', delta: +18.6, dwell: '3h 04m' },
  { id: 'tnt_dxhf_003',   name: 'Dean & DeLuca',      cat: 'Dining',   sales: 'AED   188,940', delta: -0.4, dwell: '0h 52m' },
];

function TenantTable() {
  return (
    <div style={{
      background: '#0E0E10',
      borderRadius: 12,
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
      overflow: 'hidden',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '180px 1fr 110px 140px 70px 80px',
        gap: 14,
        padding: '12px 20px',
        borderBottom: '1px solid #26262C',
        fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: '#6E6E78', fontWeight: 500,
        fontFamily: 'var(--bj-font-mono)',
      }}>
        <span>tenant_id</span><span>name</span><span>cat</span>
        <span style={{ textAlign: 'right' }}>sales · week</span>
        <span style={{ textAlign: 'right' }}>Δ</span>
        <span style={{ textAlign: 'right' }}>dwell</span>
      </div>
      {TENANTS.map((t, i) => (
        <div key={t.id} style={{
          display: 'grid',
          gridTemplateColumns: '180px 1fr 110px 140px 70px 80px',
          gap: 14,
          padding: '11px 20px',
          borderBottom: i === TENANTS.length - 1 ? 'none' : '1px solid #26262C',
          fontFamily: 'var(--bj-font-mono)',
          fontSize: 12,
          color: '#A8A8B3',
          alignItems: 'center',
        }}>
          <span style={{ color: '#6E6E78' }}>{t.id}</span>
          <span style={{ color: '#fff' }}>{t.name}</span>
          <span>{t.cat}</span>
          <span style={{ textAlign: 'right', color: '#fff', fontVariantNumeric: 'tabular-nums' }}>{t.sales}</span>
          <span style={{
            textAlign: 'right',
            color: t.delta >= 0 ? '#2EE6A0' : '#FF4D6A',
            fontVariantNumeric: 'tabular-nums',
          }}>{t.delta >= 0 ? '+' : '−'}{Math.abs(t.delta).toFixed(1)}%</span>
          <span style={{ textAlign: 'right' }}>{t.dwell}</span>
        </div>
      ))}
    </div>
  );
}

window.TenantTable = TenantTable;
