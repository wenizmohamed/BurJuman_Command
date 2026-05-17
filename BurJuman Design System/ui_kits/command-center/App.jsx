/* App — mode router (Story | Explore) + mock data. */
const { useState } = React;

/* Story Mode mock data — derived from the 26-KPI taxonomy. */
const STORY = {
  narrator: "Saturday traffic is tracking 11% above plan; the Saks evening window is doing most of the work — consider holding off on a discount push.",
  hero: {
    label: 'WEEKEND FOOTFALL · 16–17 MAY',
    value: '142,840',
    delta: +11.0,
    deltaUnit: '% vs plan',
    sparkline: [40, 46, 38, 52, 60, 58, 72, 78, 70, 84, 92, 96, 88, 104, 112, 108, 124, 132, 128, 142],
    footnote: 'Sat 09:00 · 17h ago through forecast close · benchmarked vs plan & 4-week median',
  },
  satellites: [
    { label: 'TENANT SALES · WEEK', value: 'AED 14.2M', delta: -1.8, deltaUnit: '% MoM',
      sparkline: [80,82,78,84,80,76,78,74,76,72,74,70], sparkColor: '#C7256D' },
    { label: 'B HUB ACTIVE',        value: '28,140',    delta: +4.0, deltaUnit: '% WoW',
      sparkline: [40,42,44,46,48,50,52,54,55,58,60,62], sparkColor: '#8B2D8E' },
    { label: 'CONVERSION',          value: '38%',       delta: +2.1, deltaUnit: 'pp',
      sparkline: [30,32,30,34,32,36,34,38,36,38,40,38], sparkColor: '#E5294A' },
  ],
  drivers: [
    { source: 'campaign', title: 'Saks Spring Push — “evening window”',
      sub: 'B Hub Gold within 2 km · 4 SMS + push waves',
      metric: '+4,210 visits', deltaLabel: '+38% vs avg' },
    { source: 'footfall', title: 'Saks evening 18:00–22:00 anchor draw',
      sub: 'Saturday surge, 4-week median 2,990',
      metric: '3,420 visits', deltaLabel: '+14.2% WoW' },
    { source: 'crm',      title: 'B Hub Gold activation cohort',
      sub: '2,140 members, 38% visit-rate this weekend',
      metric: 'AED 412K basket', deltaLabel: 'AOV +6.1%' },
  ],
  nba: {
    title: 'Activate Late Dining push to B Hub Gold within 2 km',
    projection: 'Projected uplift: +AED 84K basket value over the weekend window',
  },
};

function App() {
  const [mode, setMode] = useState('story');
  const [snoozed, setSnoozed] = useState(false);
  const [activated, setActivated] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      color: '#fff',
      display: 'flex', flexDirection: 'column',
      position: 'relative',
    }}>
      <BrandBar
        title={mode === 'story' ? 'Command Center · Story Mode' : 'Command Center · Explore Mode'}
        subtitle="Sheikh Khalifa Bin Zayed Rd · Bur Dubai"
      />
      <NarratorStrip
        quote={mode === 'story'
          ? STORY.narrator
          : "Explore Mode active — full 26-KPI retail-mall taxonomy below. Use search or zone filters to drill."}
        mode={mode}
        onModeChange={setMode}
      />

      <main style={{
        flex: 1,
        padding: '32px 40px 40px',
        maxWidth: 1480, width: '100%',
        margin: '0 auto',
        display: 'flex', flexDirection: 'column', gap: 24,
      }}>
        {mode === 'story' ? (
          <StoryView
            data={STORY}
            snoozed={snoozed} activated={activated}
            onActivate={() => setActivated(true)}
            onSnooze={() => setSnoozed(true)}
          />
        ) : (
          <ExploreView />
        )}
      </main>

      <Footer mode={mode} onModeChange={setMode} />
      <AihubzPill />
    </div>
  );
}

function StoryView({ data, snoozed, activated, onActivate, onSnooze }) {
  return (
    <>
      {/* Hero grid: 1 big tile + 3 satellites */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.6fr 1fr',
        gap: 16,
      }}>
        <HeroTile {...data.hero} />
        <div style={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gap: 12 }}>
          {data.satellites.map((s, i) => (
            <KPITile key={i} {...s} />
          ))}
        </div>
      </div>

      {/* Drivers row */}
      <section>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12,
        }}>
          <span style={{
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#A8A8B3', fontWeight: 500,
          }}>Why is this happening</span>
          <span style={{ flex: 1, height: 1, background: '#26262C' }} />
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12,
        }}>
          {data.drivers.map((d, i) => <DriverCard key={i} {...d} />)}
        </div>
      </section>

      {/* Next Best Action */}
      <NextBestAction
        title={activated ? '✓ ' + data.nba.title.replace('Activate ', '') + ' — campaign queued for 18:00' : data.nba.title}
        projection={data.nba.projection}
        snoozed={snoozed && !activated}
        onActivate={onActivate}
        onSnooze={onSnooze}
      />
    </>
  );
}

function ExploreView() {
  return (
    <>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4,
      }}>
        <div style={{
          flex: 1, display: 'flex', alignItems: 'center', gap: 10,
          background: '#0E0E10', border: '1px solid #26262C',
          borderRadius: 999, padding: '9px 16px',
        }}>
          <Icon name="search" size={14} stroke={1.8} color="#A8A8B3" />
          <input
            placeholder="Search tenants, zones, KPIs…"
            style={{
              flex: 1, background: 'transparent', border: 'none', outline: 'none',
              color: '#fff', font: '400 13px/1 var(--bj-font-ui)',
            }}
          />
        </div>
        {['All zones', 'Atrium', 'Saks wing', 'Dining', 'Cinema'].map((z, i) => (
          <button key={z} style={{
            background: i === 0 ? '#15151A' : 'transparent',
            color: i === 0 ? '#fff' : '#A8A8B3',
            border: '1px solid #26262C',
            padding: '8px 14px', borderRadius: 999,
            font: '500 11px/1 var(--bj-font-ui)',
            cursor: 'pointer',
          }}>{z}</button>
        ))}
      </div>

      <ExploreGrid />

      <section style={{ marginTop: 8 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12,
        }}>
          <span style={{
            fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#A8A8B3', fontWeight: 500,
          }}>Tenant performance · this week</span>
          <span style={{ flex: 1, height: 1, background: '#26262C' }} />
          <span style={{ fontSize: 11, color: '#6E6E78', fontFamily: 'var(--bj-font-mono)' }}>
            top 8 by sales · 142 tenants total
          </span>
        </div>
        <TenantTable />
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
