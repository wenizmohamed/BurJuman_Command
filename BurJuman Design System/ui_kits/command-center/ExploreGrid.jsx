/* ExploreGrid — honeycomb 26-KPI taxonomy, dense ops view. */
const KPI_FAMILIES = [
  { key: 'footfall', label: 'FOOTFALL', color: '#FF6B47', items: [
    { label: 'Total · today',   value: '42,310',  delta: '+8.4%' },
    { label: 'Total · week',    value: '294,180', delta: '+5.1%' },
    { label: 'By zone (top)',   value: 'Atrium',  delta: '36% share' },
    { label: 'By hour (peak)',  value: '18–20',   delta: '4,820/hr' },
    { label: 'Peak-trough Δ',   value: '3.8×',    delta: 'within band' },
  ]},
  { key: 'sales', label: 'SALES', color: '#C7256D', items: [
    { label: 'Tenant sales · wk', value: 'AED 14.2M', delta: '−1.8%' },
    { label: 'Per sqft · wk',     value: 'AED 412',   delta: '+0.4%' },
    { label: 'Top tenant',        value: 'Saks',      delta: 'AED 1.42M' },
    { label: 'Category mix',      value: 'Luxury 38%',delta: '+2pp' },
    { label: 'Avg basket',        value: 'AED 612',   delta: '+3.2%' },
  ]},
  { key: 'conversion', label: 'CONVERSION', color: '#8B2D8E', items: [
    { label: 'Footfall → purchase', value: '38%',  delta: '+2.1pp' },
    { label: 'Dwell → purchase',    value: '54%',  delta: '+1.4pp' },
    { label: 'Anchor draw (Saks)',  value: '72%',  delta: '+4pp' },
    { label: 'Cross-zone flow',     value: '2.3',  delta: 'zones/visit' },
  ]},
  { key: 'crm', label: 'B HUB · CRM', color: '#E5294A', items: [
    { label: 'Active loyalty', value: '28,140', delta: '+4.0%' },
    { label: 'Visit frequency', value: '2.8 / mo', delta: '+0.3' },
    { label: 'AOV per member', value: 'AED 894', delta: '+6.1%' },
    { label: 'Churn (90d)',    value: '4.2%',    delta: '−0.4pp' },
  ]},
  { key: 'digital', label: 'DIGITAL', color: '#FF6B47', items: [
    { label: '.com sessions · wk', value: '94,210', delta: '+12.0%' },
    { label: 'Campaign CTR',       value: '3.8%',   delta: '+0.6pp' },
    { label: 'Landing → visit',    value: '11.2%',  delta: '+1.4pp' },
    { label: 'Brand page views',   value: '38,400', delta: '+8.7%' },
  ]},
  { key: 'ops', label: 'OPERATIONS', color: '#A8A8B3', items: [
    { label: 'Avg dwell',          value: '1h 48m', delta: '+6m' },
    { label: 'Parking utilisation',value: '74%',    delta: 'in band' },
    { label: 'Amenity usage',      value: '38%',    delta: '+4pp' },
    { label: 'Tenant satisfaction',value: '96%',    delta: 'green' },
  ]},
];

function ExploreGrid() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {KPI_FAMILIES.map(fam => (
        <section key={fam.key}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            marginBottom: 12,
          }}>
            <span style={{
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: fam.color, fontWeight: 500,
            }}>{fam.label}</span>
            <span style={{ flex: 1, height: 1, background: '#26262C' }} />
            <span style={{ fontSize: 10, color: '#6E6E78', fontFamily: 'var(--bj-font-mono)' }}>
              {fam.items.length} kpi
            </span>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${fam.items.length}, 1fr)`,
            gap: 12,
          }}>
            {fam.items.map((kpi, i) => (
              <div key={i} style={{
                background: '#0E0E10',
                borderRadius: 12,
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
                padding: '16px 18px',
                display: 'flex', flexDirection: 'column', gap: 8,
                minHeight: 110,
              }}>
                <span style={{
                  fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: '#A8A8B3', fontWeight: 500,
                }}>{kpi.label}</span>
                <span style={{
                  fontFamily: 'var(--bj-font-ui)', fontWeight: 600, fontSize: 22,
                  color: '#fff', fontVariantNumeric: 'tabular-nums', letterSpacing: '-0.01em',
                }}>{kpi.value}</span>
                <span style={{
                  marginTop: 'auto', fontSize: 11,
                  color: kpi.delta.startsWith('−') || kpi.delta.startsWith('-') ? '#FF4D6A' :
                         /^[+0-9]/.test(kpi.delta) ? '#2EE6A0' : '#A8A8B3',
                  fontVariantNumeric: 'tabular-nums', fontFamily: 'var(--bj-font-mono)',
                }}>{kpi.delta}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

window.ExploreGrid = ExploreGrid;
