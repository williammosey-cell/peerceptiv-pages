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
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
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
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-3 max-w-2xl">
            Clear ROI Data for Corporate Sponsors
          </h1>
          <p className="text-xl text-gray-500 font-normal mb-6 max-w-xl leading-relaxed">
            Your participants do the work. Now you can prove it.
          </p>
          <p className="text-base text-gray-600 max-w-xl leading-relaxed mb-8">
            Peerceptiv turns the real work inside your executive programs into structured skill evidence —
            giving you the outcome data your sponsors need and your faculty cannot generate alone.
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

          {/* Stats */}
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

          {/* Scrolling logo carousel */}
          <div className="overflow-hidden relative mb-12">
            <div className="flex gap-12 animate-scroll whitespace-nowrap">
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div key={i} className="inline-flex items-center justify-center flex-shrink-0 h-12 w-36">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-10 max-w-[130px] w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2 max-w-xl">
            Executive Education Flatlined in 2025
          </h2>
          <p className="text-gray-500 text-sm mb-10 max-w-xl">
            UNICON 2025 data shows enrollment growth has stalled. The programs winning sponsor renewals are the ones that can prove behavioral change — not just completion.
          </p>
          <div className="space-y-6">
            {[
              {
                title: 'Sponsors want proof, not completion certificates',
                body: 'Corporate sponsors investing $50K+ per seat need evidence of behavior change, not satisfaction surveys. When renewal conversations come up, "they completed the program" is not a defensible answer.',
              },
              {
                title: '"Day One Readiness" is the new bar',
                body: 'Sponsors are not paying for awareness. They want executives who can lead transformation immediately. Your program needs to show readiness data, not just attendance records.',
              },
              {
                title: 'Differentiation against global competitors and internal academies',
                body: 'Corporate universities and global competitors are eroding the traditional executive education value proposition. Programs that can deliver measurable skill proof have a structural advantage.',
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
          <div className="flex justify-center">
            <Image
              src="/how-it-works.png"
              alt="How Peerceptiv Works: Real Work, Peer Review, Skills Insights"
              width={800}
              height={300}
              className="w-full max-w-2xl"
            />
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
              See if Peerceptiv fits Berkeley&apos;s programs
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">
              15 minutes. No pressure. We&apos;ll show you exactly how it works for executive cohorts and answer any questions about fit.
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
