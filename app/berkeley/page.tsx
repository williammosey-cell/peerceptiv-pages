// app/berkeley/page.tsx
// Sales dealroom landing page for Berkeley Executive Education
// Dock-style: clean, premium, purpose-built feel

import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Peerceptiv for Berkeley Executive Education',
  description: 'Peer assessment that proves your programs work — built for executive and professional education.',
};

export default function BerkeleyPage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── STICKY NAV ── */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Image src="/logo.png" alt="Peerceptiv" width={160} height={40} className="h-9 w-auto" />
          <a
            href="#book"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Book a 15-Minute Demo
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6">

        {/* ── HERO ── */}
        <section className="py-20 border-b border-gray-100">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">
            Prepared for Berkeley Executive Education
          </p>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-6 max-w-2xl">
            Your participants do the work. Now you can prove it.
          </h1>
          <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-8">
            Peerceptiv turns the real work inside your executive programs into structured skill evidence —
            giving you the outcome data your sponsors need and your faculty can't generate alone.
          </p>
          <a
            href="#book"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-base transition-colors shadow-sm"
          >
            Book a 15-Minute Demo →
          </a>
        </section>

        {/* ── SOCIAL PROOF ── */}
        <section className="py-16 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-10">
            Trusted by leading institutions
          </p>
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-1">150+</p>
              <p className="text-sm text-gray-500">Universities using Peerceptiv</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-1">35%</p>
              <p className="text-sm text-gray-500">Better learning outcomes</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-gray-900 mb-1">20 yrs</p>
              <p className="text-sm text-gray-500">Research at Univ. of Pittsburgh</p>
            </div>
          </div>

          {/* CFA callout */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <p className="text-sm font-semibold text-blue-800 mb-1">High-stakes validation</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              CFA Institute trusts Peerceptiv to validate skill acquisition in its professional certification programs —
              where the credentialing standard is non-negotiable. If it works for CFA, it works for your executive cohorts.
            </p>
          </div>
        </section>

        {/* ── THE PROBLEM ── */}
        <section className="py-16 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">The challenge</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-10 max-w-xl">
            Executive education programs are built for outcomes. Proving those outcomes is another problem.
          </h2>
          <div className="space-y-6">
            {[
              {
                title: 'Sponsors want proof, not completion certificates',
                body: 'Corporate sponsors invest tens of thousands per participant. When they ask "what did they actually learn?" — completion data and satisfaction scores are not enough. They want skill evidence.',
              },
              {
                title: 'Faculty bandwidth limits meaningful feedback at scale',
                body: 'Your faculty are world-class practitioners. But reviewing every submission from every participant in every cohort is not a sustainable model. The feedback gap widens as programs scale.',
              },
              {
                title: 'No unified view of skill progression across your program',
                body: 'Without structured measurement, you know your participants engaged — you don\'t know which competencies moved and which didn\'t. That makes program improvement a guessing game.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mt-0.5">
                  <span className="text-red-500 text-sm font-semibold">{i + 1}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="py-16 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-10">
            Three steps. No new workflows.
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Upload',
                body: 'Participants submit the work they\'re already doing — case analyses, strategy deliverables, leadership reflections. No new assignments required.',
                color: 'bg-blue-50 border-blue-100',
                numColor: 'text-blue-600',
              },
              {
                step: '02',
                title: 'Feedback',
                body: 'Peers evaluate each other\'s work against your rubric. Structured, consistent, and calibrated — without adding burden to your faculty.',
                color: 'bg-purple-50 border-purple-100',
                numColor: 'text-purple-600',
              },
              {
                step: '03',
                title: 'Insights',
                body: 'You get a competency-level skill heatmap for every participant and every cohort. Promotion-ready data for sponsors. Evidence your program is working.',
                color: 'bg-green-50 border-green-100',
                numColor: 'text-green-600',
              },
            ].map((item) => (
              <div key={item.step} className={`rounded-xl border p-6 ${item.color}`}>
                <p className={`text-2xl font-bold mb-3 ${item.numColor}`}>{item.step}</p>
                <p className="font-semibold text-gray-900 mb-2">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── VIDEO ── */}
        <section className="py-16 border-b border-gray-100">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">See it in action</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            A quick walkthrough built for Berkeley
          </h2>
          <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm text-gray-500">Video walkthrough</p>
              <p className="text-xs text-gray-400 mt-1">Customized for Berkeley Executive Education</p>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA / BOOK ── */}
        <section id="book" className="py-16 mb-8">
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-10 text-center mb-10">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Next step</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              See if Peerceptiv fits Berkeley's programs
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">
              15 minutes. No pressure. We'll show you exactly how it works for executive cohorts and answer any questions about fit.
            </p>
          </div>

          {/* HubSpot meeting embed */}
          <div
            className="meetings-iframe-container rounded-xl overflow-hidden border border-gray-200"
            data-src="https://meetings.hubspot.com/william777?embed=true"
          />
          <script
            type="text/javascript"
            src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
            async
          />
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Image src="/logo.png" alt="Peerceptiv" width={120} height={30} className="h-7 w-auto" />
          <p className="text-xs text-gray-400">
            Validated by 20 years of research at the University of Pittsburgh
          </p>
        </div>
      </footer>

    </div>
  );
}
