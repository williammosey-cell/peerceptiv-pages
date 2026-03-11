// app/berkeley/page.tsx
// Sales dealroom landing page for Berkeley Executive Education

import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Peerceptiv for Berkeley Executive Education',
  description: 'Peer assessment that proves your programs work — built for executive and professional education.',
};

const LOGOS = [
  { name: 'University of Pittsburgh', src: 'https://peerceptiv.com/wp-content/uploads/2018/08/pitt-logo-250x76.png' },
  { name: 'USC', src: 'https://peerceptiv.com/wp-content/uploads/2023/09/usc-logo-250x53.png' },
  { name: 'University of Virginia', src: 'https://peerceptiv.com/wp-content/uploads/2020/10/uva_logo_primary-250x61.png' },
  { name: 'UC Santa Cruz', src: 'https://peerceptiv.com/wp-content/uploads/2018/08/Ucsc-logo-250x69.png' },
  { name: 'Texas A&M', src: 'https://peerceptiv.com/wp-content/uploads/2018/08/TAM-PrimaryMarkB-1-250x83.png' },
  { name: 'Vanderbilt', src: 'https://peerceptiv.com/wp-content/uploads/2023/09/vanderbuilt-logo.png' },
  { name: 'University of Illinois', src: 'https://peerceptiv.com/wp-content/uploads/2021/10/gies_full_blue-250x53.png' },
  { name: 'NYU', src: 'https://peerceptiv.com/wp-content/uploads/2023/09/nyu-new.png' },
  { name: 'UW-Madison', src: 'https://peerceptiv.com/wp-content/uploads/2018/08/color-flush-UWlogo-print-1-250x84.png' },
  { name: 'Northwestern', src: 'https://peerceptiv.com/wp-content/uploads/2023/09/northwestern-u-logo-250x63.png' },
  { name: 'University of Michigan', src: 'https://peerceptiv.com/wp-content/uploads/2023/09/umichigan-logo-250x26.png' },
  { name: 'Syracuse', src: 'https://peerceptiv.com/wp-content/uploads/2021/10/syracuselogo-250x113.png' },
  { name: 'Arizona State', src: 'https://peerceptiv.com/wp-content/uploads/2018/08/Arizona_State_University_old_signature.svg_-250x74.png' },
  { name: 'Oregon State', src: 'https://peerceptiv.com/wp-content/uploads/2023/09/oregon-state-250x100.png' },
  { name: 'Nanyang Tech', src: 'https://peerceptiv.com/wp-content/uploads/2024/08/nanyang-tech-uni-250x90.png' },
];

export default function BerkeleyPage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── STICKY NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
          <Image src="/logo.png" alt="Peerceptiv" width={140} height={36} className="h-7 sm:h-9 w-auto flex-shrink-0" />
          <a
            href="#book"
            className="px-4 sm:px-5 py-2 sm:py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors shadow-sm whitespace-nowrap"
          >
            {/* Shorter label on mobile, full label on desktop */}
            <span className="sm:hidden">Book a Demo</span>
            <span className="hidden sm:inline">Book a 15-Minute Demo</span>
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div className="bg-gradient-to-b from-blue-50/60 to-white">
        <main className="max-w-4xl mx-auto px-4 sm:px-6">

          <section className="py-14 sm:py-24 border-b border-gray-100">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5 sm:mb-6 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block flex-shrink-0" />
              Prepared for Berkeley Executive Education
            </div>
            {/* Headline: smaller on mobile, large on desktop */}
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-5 max-w-2xl">
              Clear ROI Data for Corporate Sponsors
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed mb-6 sm:mb-8">
              Peerceptiv turns the real work inside your executive programs into structured skill evidence —
              giving you the outcome data your sponsors need and your faculty cannot generate alone.
            </p>
            <a
              href="#book"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm sm:text-base transition-colors shadow-md hover:shadow-lg"
            >
              Book a 15-Minute Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </section>

          {/* ── SOCIAL PROOF ── */}
          <section className="py-12 sm:py-16 border-b border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8 sm:mb-10">
              Trusted by leading institutions
            </p>

            {/* Stats: 1 column on mobile, 3 on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6 text-center">
                <p className="text-4xl font-bold text-blue-600 mb-1">150+</p>
                <p className="text-sm text-gray-500">Universities using Peerceptiv</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6 text-center">
                <p className="text-4xl font-bold text-blue-600 mb-1">35%</p>
                <p className="text-sm text-gray-500">Better learning outcomes</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6 text-center">
                <p className="text-4xl font-bold text-blue-600 mb-1">20 yrs</p>
                <p className="text-sm text-gray-500">Research at Univ. of Pittsburgh</p>
              </div>
            </div>

            {/* Scrolling logo carousel */}
            <div className="overflow-hidden relative mb-10 sm:mb-12">
              <div className="flex gap-10 sm:gap-12 animate-scroll whitespace-nowrap">
                {[...LOGOS, ...LOGOS].map((logo, i) => (
                  <div key={i} className="inline-flex items-center justify-center flex-shrink-0 h-10 w-28 sm:h-12 sm:w-36">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-8 sm:max-h-10 max-w-[110px] sm:max-w-[130px] w-auto object-contain opacity-50 grayscale hover:opacity-90 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CFA callout */}
            <div className="border border-blue-100 rounded-xl p-5 sm:p-6 bg-blue-50/50 flex gap-4">
              <div className="flex-shrink-0 w-1 rounded-full bg-blue-400" />
              <div>
                <p className="text-sm font-semibold text-blue-800 mb-1">High-stakes validation</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  CFA Institute trusts Peerceptiv to validate skill acquisition in its professional certification programs —
                  where the credentialing standard is non-negotiable. If it works for CFA, it works for your executive cohorts.
                </p>
              </div>
            </div>
          </section>

          {/* ── THE PROBLEM ── */}
          <section className="py-12 sm:py-16 border-b border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">The challenge</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 max-w-2xl leading-snug">
              The Market Has Shifted. The Programs Thriving Are the Ones That Saw It Coming.
            </h2>
            <p className="text-gray-500 text-sm mb-8 sm:mb-10 max-w-2xl leading-relaxed">
              UNICON&apos;s July 2025 Pulse Survey found that US executive education programs saw an 18% decrease in both custom and open enrollment demand — the steepest decline of any region globally. At the same time, more than half of exec ed leaders report increased pressure from institutional leadership on revenue and financial performance.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: 'Sponsors are cutting programs they cannot measure',
                  body: 'L&D budgets are under review everywhere. When sponsors cannot see evidence of skill change, renewal is a negotiation — not a given. Completion certificates and satisfaction scores are no longer enough to justify a six-figure investment.',
                },
                {
                  title: 'The new buying question is "what changed?"',
                  body: 'Corporate buyers are not asking whether participants finished. They are asking what participants can do differently on Monday morning. If your program cannot answer that question with data, a competitor will find one that can.',
                },
                {
                  title: 'Internal academies and AI are closing the differentiation gap',
                  body: 'Corporate universities now offer many of the same topics as executive programs — faster, cheaper, and increasingly AI-enhanced. The programs that retain sponsor relationships are the ones that deliver something internal teams cannot: verified, third-party skill evidence tied to real work.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-0 rounded-xl border border-gray-100 shadow-sm overflow-hidden bg-white">
                  <div className="w-1 bg-red-400 flex-shrink-0" />
                  <div className="px-4 sm:px-6 py-4 sm:py-5">
                    <p className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── HOW IT WORKS ── */}
          <section className="py-12 sm:py-16 border-b border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Three steps. No new workflows.
            </h2>
            <p className="text-gray-500 text-sm mb-8 sm:mb-10 max-w-xl leading-relaxed">
              Peerceptiv works inside your existing courses — using the projects, presentations, and capstones you already assign — to surface real skill data you can bring to every sponsor conversation.
            </p>
            <div className="flex justify-center">
              <Image
                src="/how-it-works.png"
                alt="How Peerceptiv Works: Real Work, Peer Review, Skills Insights"
                width={800}
                height={300}
                className="w-full max-w-2xl rounded-xl"
              />
            </div>
          </section>

          {/* ── VIDEO ── */}
          <section className="py-12 sm:py-16 border-b border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">See it in action</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5 sm:mb-6">
              A quick walkthrough built for Berkeley
            </h2>
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl aspect-video flex items-center justify-center border border-gray-200">
              <div className="text-center px-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-gray-600">Video walkthrough</p>
                <p className="text-xs text-gray-400 mt-1">Customized for Berkeley Executive Education</p>
              </div>
            </div>
          </section>

          {/* ── FINAL CTA / BOOK ── */}
          <section id="book" className="py-12 sm:py-16 mb-6 sm:mb-8">
            {/* Bold CTA banner */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-10 text-center mb-8 sm:mb-10 shadow-lg">
              <p className="text-xs font-semibold text-blue-200 uppercase tracking-widest mb-2 sm:mb-3">Next step</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
                See if Peerceptiv fits Berkeley&apos;s programs
              </h2>
              <p className="text-blue-100 text-sm max-w-md mx-auto">
                15 minutes. No pressure. We&apos;ll show you exactly how it works for executive cohorts and answer any questions about fit.
              </p>
            </div>

            {/* HubSpot meeting embed — direct iframe, height adjusted for mobile */}
            <iframe
              src="https://meetings.hubspot.com/william777?embed=true"
              className="w-full rounded-2xl border border-gray-200 shadow-sm"
              style={{ height: '680px', minHeight: '500px' }}
              frameBorder={0}
              title="Book a meeting with Will Mosey"
            />
          </section>

        </main>
      </div>

      {/* ── FOOTER — stacks on mobile ── */}
      <footer className="border-t border-gray-100 bg-gray-50 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-3 sm:justify-between">
          <Image src="/logo.png" alt="Peerceptiv" width={120} height={30} className="h-6 sm:h-7 w-auto" />
          <p className="text-xs text-gray-400 text-center sm:text-right">
            Validated by 20 years of research at the University of Pittsburgh
          </p>
        </div>
      </footer>

    </div>
  );
}
