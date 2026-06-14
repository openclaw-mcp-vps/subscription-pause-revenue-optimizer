export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Subscription Retention
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Turn Cancellations Into{' '}
          <span className="text-[#58a6ff]">Pauses</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Embed a smart pause flow in minutes. Offer flexible pause lengths and incentives so customers stay instead of churning — protecting your MRR automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Retaining Subscribers — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required to try. Cancel anytime.</p>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
          <div>
            <div className="text-2xl font-bold text-white">42%</div>
            <div className="text-xs text-[#8b949e] mt-1">avg churn reduction</div>
          </div>
          <div className="border-x border-[#30363d]">
            <div className="text-2xl font-bold text-white">3 min</div>
            <div className="text-xs text-[#8b949e] mt-1">to integrate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">$0</div>
            <div className="text-xs text-[#8b949e] mt-1">per saved subscriber</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-semibold text-white text-center mb-8">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { step: '1', title: 'Embed the widget', desc: 'Add one script tag or call our API when a customer clicks cancel.' },
            { step: '2', title: 'Show pause options', desc: 'Customers choose a 1–3 month pause with optional discount incentive.' },
            { step: '3', title: 'Track & optimize', desc: 'Dashboard shows saves, revenue retained, and best-performing offers.' },
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="w-8 h-8 rounded-full bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-bold flex items-center justify-center mb-3">{item.step}</div>
              <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
              <div className="text-xs text-[#8b949e] leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-xl font-semibold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/5">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-sm text-[#8b949e] mb-6">/month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited pause flows',
              'JS widget + REST API',
              'Configurable pause lengths',
              'Discount & incentive offers',
              'Analytics dashboard',
              'Email notifications',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-xl font-semibold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How do I integrate the pause flow?',
              a: 'Add a single <script> tag to your site and call PauseRetain.show() when a customer clicks your cancel button. Full API docs are included.',
            },
            {
              q: 'Which subscription platforms are supported?',
              a: 'Works with any platform — Stripe, Paddle, Lemon Squeezy, Chargebee, or custom billing. You control when to trigger the flow.',
            },
            {
              q: 'What happens after the pause period ends?',
              a: 'You receive a webhook and can automatically resume the subscription or send a re-engagement email — fully configurable.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white text-sm mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Pause &amp; Retain. All rights reserved.
      </footer>
    </main>
  )
}
