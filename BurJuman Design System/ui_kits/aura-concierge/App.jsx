/* AURA Concierge — chat session driving the consumer experience. */
const { useState } = React;

const MEMBER = { name: 'Layla Hassan', initials: 'LH', tier: 'Gold' };

const SCRIPT = [
  {
    role: 'user',
    text: "I'm at BurJuman on Saturday afternoon — looking for a navy summer dress and a quiet place to have lunch around 13:30.",
  },
  {
    role: 'aura',
    text: "Got it. Two paths I'd suggest, both within a 4-minute walk of each other on the upper level.",
    cards: [
      {
        tenant: 'Saks Fifth Avenue · Upper Level',
        type: 'fitting',
        headline: 'Three navy summer dresses pulled in your size (S)',
        sub: "Personal-stylist Reem can hold them for you — fitting room booked 13:00–13:25.",
        meta: 'fitting',
        action: 'Hold fitting',
      },
      {
        tenant: 'Dean & DeLuca · Upper Level',
        type: 'dining',
        headline: 'Quiet 2-top by the window, 13:30',
        sub: 'Average wait <5 min for B Hub Gold · valet runs from gate 4.',
        meta: '13:30',
        action: 'Hold table',
      },
    ],
  },
  {
    role: 'user',
    text: 'Anything I should know before I come? Parking, etc.',
  },
  {
    role: 'aura',
    text: "Two notes. Gate 4 (basement P2) has the shortest queue right now and is the closest entrance to Saks. And the lunchtime crowd peaks 13:45 — your 13:30 table puts you just ahead.",
    cards: [
      {
        tenant: 'BurJuman Parking · Gate 4',
        type: 'map',
        headline: 'Park P2 · gate 4 — 4-min walk to Saks',
        sub: "Live occupancy 68%. I'll route you the moment you set off.",
        meta: 'live',
        action: 'Open route',
      },
    ],
  },
];

const SUGGESTIONS = [
  "What's open late tonight?",
  "Plan a 2-hour visit with kids",
  "Show me my B Hub rewards",
  "Pick a gift for my mum",
];

function App() {
  const [messages, setMessages] = useState(SCRIPT);
  const [draft, setDraft] = useState('');

  function send() {
    const text = draft.trim();
    if (!text) return;
    const next = [...messages, { role: 'user', text }];
    setMessages(next);
    setDraft('');
    /* Mock AURA response */
    setTimeout(() => {
      setMessages(curr => [...curr, {
        role: 'aura',
        text: "Let me check that — pulling live tenant availability and your B Hub Gold offers. One moment…",
      }]);
    }, 600);
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      color: '#fff',
      display: 'flex', flexDirection: 'column',
      position: 'relative',
    }}>
      <SiteHeader member={MEMBER} />

      <main style={{
        flex: 1,
        maxWidth: 880, width: '100%',
        margin: '0 auto',
        padding: '32px 24px 140px',
        display: 'flex', flexDirection: 'column', gap: 28,
      }}>
        <AuraHero member={MEMBER} />
        <ChatThread messages={messages} />
      </main>

      <div style={{
        position: 'sticky', bottom: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 30%, #000 100%)',
        padding: '32px 24px 28px',
      }}>
        <div style={{ maxWidth: 880, width: '100%', margin: '0 auto' }}>
          <Composer
            suggestions={messages.length <= 4 ? SUGGESTIONS : null}
            value={draft}
            onChange={setDraft}
            onSend={send}
          />
        </div>
      </div>

      <AihubzPill />
    </div>
  );
}

/* Local AihubzPill — fixed not absolute since this page scrolls. */
function AihubzPill() {
  return (
    <span style={{
      position: 'fixed',
      left: 24, bottom: 24,
      background: '#1A1A1A',
      color: '#F5F5F5',
      padding: '6px 14px',
      borderRadius: 999,
      font: '500 11px/1 var(--bj-font-ui)',
      letterSpacing: '0.02em',
      zIndex: 50,
    }}>Built by AIHUBZ</span>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
