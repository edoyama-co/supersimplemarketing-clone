import Link from "next/link";

function GreenButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <Link
      href="#"
      className={`inline-block bg-green hover:bg-green-hover text-white font-heading font-bold text-sm uppercase tracking-wider px-8 py-4 rounded transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}

function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-heading font-bold text-3xl md:text-4xl text-navy leading-tight ${className}`}>
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      {/* ========== NAV ========== */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading font-bold text-xl text-navy">
            Super Simple Marketing
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-navy hover:text-green text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-navy hover:text-green text-sm font-medium transition-colors">
              Contact
            </Link>
            <GreenButton>Book a FREE call</GreenButton>
          </div>
          {/* Mobile CTA */}
          <div className="md:hidden">
            <GreenButton>Book a FREE call</GreenButton>
          </div>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-navy leading-tight mb-6">
            Create a Marketing Message that Works.
          </h1>
          <p className="text-lg md:text-xl text-navy/70 max-w-2xl mx-auto mb-10">
            Clarify your message, build your platform, and grow your business with confidence.
          </p>
          <GreenButton className="mb-12">Schedule a FREE call</GreenButton>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["Focused Growth Programs", "One-on-One Coaching", "Keynotes and Workshops"].map((pill) => (
              <span
                key={pill}
                className="bg-light-blue text-navy font-heading font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-full"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROBLEM ========== */}
      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading className="mb-4">Is Your Marketing Losing You Money?</SectionHeading>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto mb-12">
            When your message is unclear, your audience is confused &mdash; and confusion kills momentum.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto mb-12">
            {[
              {
                title: "Stalled Growth",
                desc: "You struggle to attract new customers and close sales.",
              },
              {
                title: "Confused Customers",
                desc: "Your audience doesn't understand what you offer or how it helps them.",
              },
              {
                title: "Hidden Losses",
                desc: "Worst of all, you miss opportunities you never knew you had.",
              },
              {
                title: "Stagnant Sales",
                desc: "Your sales plateau, and you struggle to attract new customers.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-1">{item.title}</h3>
                  <p className="text-navy/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <GreenButton>Schedule a FREE call</GreenButton>
        </div>
      </section>

      {/* ========== SOLUTION ========== */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <SectionHeading className="mb-4">
            You Don&rsquo;t Have To Figure It Out On Your Own.
          </SectionHeading>
          <p className="font-heading text-2xl md:text-3xl font-bold text-green mb-16">We Can Help.</p>

          {/* Three Offer Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Fix Your Message",
                desc: "The Video Momentum Program is a six-month coaching program to help you craft a clear and compelling message through video, grow your audience, and connect with confidence.",
                icon: (
                  <svg className="w-8 h-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                ),
              },
              {
                title: "Empower the Messenger",
                desc: "The Purpose and Platform Retreat is a transformational six-day retreat to help you rediscover your purpose, clarify your strengths, and build influence with confidence.",
                icon: (
                  <svg className="w-8 h-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ),
              },
              {
                title: "Grow Your Business",
                desc: "Our Business Made Simple coaching program helps you build your business like an airplane to go fast and far, and ensures every part works together to keep you moving forward.",
                icon: (
                  <svg className="w-8 h-8 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-100 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow text-left"
              >
                <div className="w-14 h-14 rounded-full bg-green/10 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-navy mb-3">{card.title}</h3>
                <p className="text-navy/70 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <GreenButton>Schedule a FREE call</GreenButton>
        </div>
      </section>

      {/* ========== ABOUT / TESTIMONIAL ========== */}
      <section id="about" className="bg-light-blue py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-heading font-semibold text-sm uppercase tracking-widest text-green mb-4">
            Meet Your Coach
          </p>
          <SectionHeading className="mb-2">Ed Oyama</SectionHeading>
          <p className="text-navy/70 text-lg mb-12">
            Business Made Simple Certified Coach, Consultant and Keynote Speaker
          </p>
          <p className="text-navy/70 text-xl mb-12 max-w-2xl mx-auto">
            We help businesses around the world.
          </p>

          {/* Testimonial */}
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-md max-w-3xl mx-auto mb-12">
            <svg className="w-10 h-10 text-green/30 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
            </svg>
            <p className="text-navy/80 text-lg md:text-xl leading-relaxed italic mb-6">
              &ldquo;Ed is such a joy to work with. You can tell he loves what he does. I came with ZERO
              experience... he patiently and strategically walked me through the best way to get my message out
              there!&rdquo;
            </p>
            <p className="font-heading font-bold text-navy">Sam Lee</p>
            <p className="text-navy/60 text-sm">Author and Speaker</p>
          </div>

          <GreenButton className="mb-16">Schedule a FREE call</GreenButton>

          {/* Logo Strip */}
          <div>
            <p className="font-heading font-semibold text-xs uppercase tracking-widest text-navy/40 mb-8">
              A few of the businesses and organizations we&rsquo;ve worked with
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-30">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-24 h-12 bg-navy/10 rounded flex items-center justify-center text-xs text-navy/40 font-heading">
                  Logo {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading className="mb-4">How does it work?</SectionHeading>
          <p className="text-lg text-navy/70 mb-16">Your growth plan has three simple steps.</p>

          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {[
              {
                step: "1",
                title: "Book Your Free Discovery Call",
                desc: "Let's talk about your goals, what's holding you back, and how we can help you move forward.",
              },
              {
                step: "2",
                title: "Get Your Customized Action Plan",
                desc: "Receive expert guidance tailored to help you craft your message, build your platform and your business.",
              },
              {
                step: "3",
                title: "Put the Plan into Action and Win",
                desc: "With our coaching and support, you'll connect with your audience and grow your business with confidence.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-green text-white font-heading font-bold text-2xl flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-lg text-navy mb-3">{item.title}</h3>
                <p className="text-navy/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <GreenButton>Schedule a FREE call</GreenButton>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section id="contact" className="bg-cream py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading className="mb-6">
            Create the Life and Business You Truly Want.
          </SectionHeading>
          <p className="text-navy/70 text-lg leading-relaxed mb-10">
            Your business deserves a message that works. With Super Simple Marketing, you&rsquo;ll gain clarity
            and confidence in how you communicate, helping you attract more clients and close more sales.
            Don&rsquo;t let confusion hold your business back &mdash; schedule a free call today, and let&rsquo;s
            start building a marketing strategy that actually drives results.
          </p>
          <GreenButton>Schedule a FREE call</GreenButton>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-navy text-white/70 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-white/50 text-sm leading-relaxed max-w-2xl mx-auto mb-10">
            As a business coach that specializes in marketing and messaging, Ed Oyama helps businesses fix their
            marketing so they can sit back, relax, and let their marketing bring them new clients like clockwork.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-10">
            {[
              "About",
              "Services",
              "Small Business Growth Group",
              "Other Coaching Packages",
              "Terms of Service",
              "Privacy Policy",
              "Terms of Use",
              "Disclaimers",
            ].map((link) => (
              <Link key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </Link>
            ))}
          </div>
          <p className="text-center text-white/30 text-xs">
            Copyright 2024 | Super Simple Marketing | All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}
