import Image from "next/image";
import Link from "next/link";

const BOOKING_URL = "https://tidycal.com/edoyama/30-minute-meeting";

function GreenButton({
  children,
  className = "",
  href = BOOKING_URL,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-green hover:bg-green-hover text-white font-heading font-bold text-[15px] md:text-[20px] px-5 py-4 rounded-[25px] transition-colors text-center ${className}`}
    >
      {children}
    </Link>
  );
}

/* ============================================================
   NAV
   ============================================================ */
function Nav() {
  return (
    <nav
      className="bg-white sticky top-0 z-50"
      style={{ boxShadow: "0 5px 15px rgba(0,0,0,0.07)" }}
    >
      <div className="max-w-[1170px] mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Super Simple Marketing"
            width={200}
            height={100}
            className="h-[60px] md:h-[100px] w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <Link
            href="#about"
            className="hidden md:inline text-navy hover:text-green font-heading font-bold text-[16px] transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="hidden md:inline text-navy hover:text-green font-heading font-bold text-[16px] transition-colors"
          >
            Contact
          </Link>
          <GreenButton className="text-[15px]!">Book a FREE call</GreenButton>
        </div>
      </div>
    </nav>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  return (
    <section
      className="relative bg-white py-5 md:py-[60px]"
      style={{
        backgroundImage: "url(/images/bg-hero.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1170px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left content */}
          <div className="md:w-[54.4%] order-2 md:order-1">
            {/* Mobile image */}
            <div className="md:hidden mb-6">
              <Image
                src="/images/ed-headshot.jpeg"
                alt="Ed Oyama"
                width={500}
                height={500}
                className="rounded-lg w-full max-w-[450px] mx-auto"
                style={{ boxShadow: "2px 2px 9px 0 #707070" }}
              />
            </div>

            <h1
              className="font-heading font-bold text-[33px] md:text-[55px] text-white leading-[1.3] mb-4"
              style={{ textShadow: "2px 2px 2px #787878" }}
            >
              Create a Marketing Message that Works.
            </h1>
            <h2 className="font-body font-bold text-[25px] md:text-[30px] text-navy leading-[1.3] mb-6">
              Clarify your message, build your platform, and grow your business
              with confidence.
            </h2>
            <GreenButton>Schedule a FREE call</GreenButton>
          </div>

          {/* Right image (desktop) */}
          <div className="hidden md:block md:w-[45.6%] order-1 md:order-2">
            <Image
              src="/images/ed-headshot.jpeg"
              alt="Ed Oyama"
              width={500}
              height={500}
              className="rounded-lg w-full"
              style={{ boxShadow: "2px 2px 9px 0 #707070" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICE PILLS
   ============================================================ */
function ServicePills() {
  const pills = [
    "FOCUSED GROWTH PROGRAMS",
    "ONE-ON-ONE COACHING",
    "KEYNOTES AND WORKSHOPS",
  ];

  return (
    <section className="-mt-[50px] relative z-10">
      <div className="max-w-[1170px] mx-auto px-6">
        <div
          className="bg-white rounded-[10px] flex flex-col md:flex-row"
          style={{ boxShadow: "2px 2px 2px 0 #707070" }}
        >
          {pills.map((pill) => (
            <div
              key={pill}
              className="flex-1 py-5 px-4 text-center font-heading font-bold text-[17px] text-navy"
            >
              {pill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROBLEM SECTION
   ============================================================ */
function ProblemSection() {
  const problems = [
    {
      title: "Stalled growth:",
      desc: "You struggle to attract new customers and close sales.",
    },
    {
      title: "Confused Customers:",
      desc: "Your audience doesn\u2019t understand what you offer or how it helps them.",
    },
    {
      title: "Hidden Losses:",
      desc: "Worst of all, you miss opportunities you never knew you had.",
    },
  ];

  return (
    <section className="py-10 md:pt-[40px] pb-[80px]">
      <div className="max-w-[1170px] mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="font-heading font-bold text-[40px] md:text-[53px] text-black leading-[1.2] mb-4">
            Is Your Marketing{" "}
            <em className="text-red not-italic">Losing You Money?</em>
          </h2>
          <p className="font-body text-[25px] md:text-[41px] text-navy leading-[1.1]">
            <strong>
              When your message is unclear, your audience is confused, and{" "}
              <em className="text-navy">confusion kills momentum</em>.
            </strong>
          </p>
        </div>

        {/* Bullet points */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {problems.map((p) => (
            <div key={p.title} className="flex items-start gap-3 px-5 py-5">
              <span className="text-red text-[20px] mt-1 shrink-0">&#10004;</span>
              <p className="font-body text-[23px] md:text-[25px] text-navy leading-[1.2]">
                <strong>{p.title}</strong> {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <GreenButton>Schedule a FREE call</GreenButton>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SOLUTIONS SECTION
   ============================================================ */
function SolutionsSection() {
  const solutions = [
    {
      heading: "Fix Your Message",
      body: "The Video Momentum Program is a six-month coaching program to help you craft a clear and compelling message through video, grow your audience, and connect with confidence.",
    },
    {
      heading: "Empower the Messenger",
      body: "The Purpose and Platform Retreat is a transformational six-day retreat to help you rediscover your purpose, clarify your strengths, and build influence with confidence.",
    },
    {
      heading: "Grow Your Business",
      body: "Our Business Made Simple coaching program helps you build your business like an airplane to go fast and far, and ensures every part works together to keep you moving forward.",
    },
  ];

  return (
    <section
      className="relative py-[80px] md:py-[140px]"
      style={{
        backgroundImage: "url(/images/bg-solutions.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
      />
      <div className="relative max-w-[1170px] mx-auto px-6">
        {/* Big heading */}
        <div className="text-center mb-12 rounded-t-[20px]">
          <h2 className="font-heading text-[25px] md:text-[48px] text-black leading-[1.2] mb-2">
            <strong>You Don&apos;t Have To Figure</strong>
            <br />
            <strong>It Out On Your Own.</strong>
          </h2>
          <p className="font-heading font-bold text-red text-[25px] md:text-[48px]">
            <em>We Can Help.</em>
          </p>
        </div>

        {/* Three columns */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {solutions.map((s) => (
            <div key={s.heading} className="px-5">
              <h3 className="font-heading font-bold text-[25px] text-navy leading-[1.3] text-center mb-4">
                {s.heading}
              </h3>
              <p className="font-body text-[16px] md:text-[20px] text-navy leading-[1.5]">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center rounded-b-[25px] pb-[40px]">
          <GreenButton>Schedule a FREE call</GreenButton>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ABOUT / TESTIMONIAL SECTION
   ============================================================ */
function AboutSection() {
  return (
    <section id="about" className="py-[80px] md:py-[80px]">
      <div className="max-w-[1170px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Ed photo + title */}
          <div className="md:w-1/2 text-center">
            <Image
              src="/images/ed-speaking.jpeg"
              alt="Ed Oyama speaking"
              width={500}
              height={500}
              className="rounded-lg mx-auto mb-4"
              style={{ boxShadow: "2px 2px 2px 0 #707070" }}
            />
            <p className="font-body text-[20px] md:text-[24px] text-navy font-medium">
              <strong>Ed Oyama,</strong>
            </p>
            <p className="font-body text-[20px] md:text-[24px] text-navy font-medium italic">
              Business Made Simple Certified Coach,
            </p>
            <p className="font-body text-[20px] md:text-[24px] text-navy font-medium italic">
              Consultant and Keynote Speaker
            </p>
            <div className="mt-4">
              <Image
                src="/images/bms-badge.png"
                alt="Business Made Simple Certified"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
          </div>

          {/* Right: testimonial */}
          <div className="md:w-1/2">
            <h2 className="font-heading text-[28px] md:text-[45px] text-black leading-[1.2] mb-6">
              <strong>We help businesses around the world.</strong>
            </h2>
            <p className="font-body text-[20px] md:text-[24px] text-navy leading-[1.3] font-medium mb-6">
              <strong>&ldquo;Ed is such a joy to work with.</strong> You can
              tell he loves what he does. I came with ZERO experience... he
              patiently and strategically walked me through the best way to get
              my message out there!&rdquo;
            </p>
            <p className="font-body text-[24px] text-navy font-medium">
              <strong className="text-orange">Sam Lee,</strong>
            </p>
            <p className="font-body text-[24px] text-navy font-medium">
              <strong className="text-orange">Author and Speaker</strong>
            </p>
            <div className="mt-8">
              <GreenButton>Schedule a FREE call</GreenButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   LOGOS BAR (Desktop only)
   ============================================================ */
function LogosBar() {
  const clients = [
    { src: "/images/client-1.png", alt: "Client logo" },
    { src: "/images/client-2.jpeg", alt: "Client logo" },
    { src: "/images/client-3.png", alt: "Client logo" },
    { src: "/images/client-4.png", alt: "Client logo" },
    { src: "/images/client-5.jpeg", alt: "Client logo" },
  ];

  return (
    <section className="hidden md:block bg-cream py-5">
      <div className="max-w-[1170px] mx-auto px-6">
        <p className="font-heading font-bold text-[23px] text-navy text-center mb-6">
          A FEW OF THE BUSINESSES AND ORGANIZATIONS WE&apos;VE WORKED WITH:
        </p>
        <div
          className="bg-white rounded-[20px] flex flex-wrap items-center justify-center gap-8 px-6 py-4"
          style={{ boxShadow: "2px 2px 2px 0 #707070" }}
        >
          {clients.map((c, i) => (
            <Image
              key={i}
              src={c.src}
              alt={c.alt}
              width={150}
              height={125}
              className="h-[80px] md:h-[100px] w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   HOW IT WORKS
   ============================================================ */
function HowItWorks() {
  const steps = [
    {
      step: "Step 1.",
      heading: "Book Your Free Discovery Call",
      desc: "Let\u2019s talk about your goals, what\u2019s holding you back, and how we can help you move forward.",
    },
    {
      step: "Step 2.",
      heading: "Get Your Customized Action Plan",
      desc: "Receive expert guidance tailored to help you craft your message, build your platform and your business.",
    },
    {
      step: "Step 3.",
      heading: "Put the Plan into Action and Win",
      desc: "With our coaching and support, you\u2019ll connect with your audience and grow your business with confidence.",
    },
  ];

  return (
    <section
      className="relative py-[80px] md:py-[140px]"
      style={{
        backgroundImage: "url(/images/bg-hero.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
      />
      <div className="relative max-w-[1170px] mx-auto px-6">
        <div className="text-center mb-8 rounded-t-[25px]">
          <h2 className="font-heading text-[32px] md:text-[48px] text-black leading-[1.2] mb-2">
            <strong>How does it work?</strong>
          </h2>
          <p className="font-body text-[23px] text-navy">
            Your growth plan has three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {steps.map((s) => (
            <div key={s.step} className="px-5">
              <p className="font-body text-orange text-[12px] md:text-[18px] uppercase tracking-[2px] text-center mb-1">
                <strong>{s.step}</strong>
              </p>
              <h3 className="font-heading font-bold text-[25px] md:text-[25px] text-navy text-center leading-[1.3] mb-4">
                {s.heading}
              </h3>
              <p className="font-body text-[16px] md:text-[20px] text-navy leading-[1.5]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center rounded-b-[25px] pb-[40px]">
          <GreenButton>Schedule a FREE call</GreenButton>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CTA SECTION
   ============================================================ */
function CtaSection() {
  return (
    <section id="contact" className="py-[60px] md:pt-[100px] pb-[40px]">
      <div className="max-w-[1170px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: image */}
          <div className="md:w-1/2">
            <Image
              src="/images/ed-cta.jpeg"
              alt="Ed Oyama"
              width={600}
              height={600}
              className="rounded-lg w-full"
              style={{ boxShadow: "2px 2px 2px 0 #707070" }}
            />
          </div>

          {/* Right: copy */}
          <div className="md:w-1/2">
            <h2 className="font-heading text-[32px] md:text-[38px] text-black leading-[1.2] mb-6">
              <strong>
                Create the Life and Business You Truly Want.
              </strong>
            </h2>
            <p className="font-body text-[18px] md:text-[21px] text-navy leading-[1.5] mb-4">
              Your business deserves a message that works. With Super Simple
              Marketing, you&apos;ll gain clarity and confidence in how you
              communicate, helping you attract more clients and close more sales.
            </p>
            <p className="font-body text-[18px] md:text-[21px] text-navy leading-[1.5] mb-8">
              Don&apos;t let confusion hold your business back. Schedule a free
              call today, and let&apos;s start building a marketing strategy
              that actually drives results.
            </p>
            <div className="text-center md:text-left">
              <GreenButton>Schedule a FREE call</GreenButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER LINKS
   ============================================================ */
function FooterLinks() {
  return (
    <section className="bg-cream py-5">
      <div className="max-w-[1170px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Logo + blurb */}
          <div className="md:w-[35%]">
            <Image
              src="/images/logo.png"
              alt="Super Simple Marketing"
              width={200}
              height={100}
              className="mb-4"
            />
            <p className="font-body text-[14px] text-navy font-medium leading-[1.3]">
              As a business coach that specializes in marketing and messaging, Ed
              Oyama helps businesses fix their marketing so they can sit back,
              relax, and let their marketing bring them new clients like
              clockwork.
            </p>
          </div>

          {/* Nav links */}
          <div className="md:w-[31%] pl-0 md:pl-10">
            <p className="font-body text-[20px] text-navy font-bold mb-2">
              About
            </p>
            <p className="font-body text-[20px] text-navy leading-[1.5]">
              Services
            </p>
            <p className="font-body text-[20px] text-navy leading-[1.5]">
              <Link
                href="https://edoyama.com/gg"
                className="text-black hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Small Business Growth Group
              </Link>
            </p>
            <p className="font-body text-[20px] text-navy leading-[1.5]">
              Other Coaching Packages
            </p>
          </div>

          {/* Legal links */}
          <div className="md:w-[33%] pl-0 md:pl-10">
            <p className="font-body text-[20px] text-navy leading-[1.5]">
              Terms of Service
            </p>
            <p className="font-body text-[20px] text-navy leading-[1.5]">
              Privacy Policy
            </p>
            <p className="font-body text-[20px] text-navy leading-[1.5]">
              Terms of Use
            </p>
            <p className="font-body text-[20px] text-navy leading-[1.5]">
              Disclaimers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COPYRIGHT FOOTER
   ============================================================ */
function CopyrightFooter() {
  const socials = [
    {
      icon: "/images/social-ig.png",
      url: "https://instagram.com/supersimplemarketing",
      alt: "Instagram",
    },
    {
      icon: "/images/social-fb.png",
      url: "https://www.facebook.com/supersimplemarketing.net",
      alt: "Facebook",
    },
    {
      icon: "/images/social-yt.png",
      url: "https://www.youtube.com/@supersimplemarketing",
      alt: "YouTube",
    },
    {
      icon: "/images/social-li.png",
      url: "https://www.linkedin.com/in/edoyama/",
      alt: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-black py-4">
      <div className="max-w-[1170px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-footer text-[12px] text-center md:text-left">
          Copyright 2024 | Super Simple Marketing | All Rights Reserved
        </p>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <Link
              key={s.alt}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.alt}
            >
              <Image
                src={s.icon}
                alt={s.alt}
                width={30}
                height={30}
                className="h-[30px] w-auto"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ServicePills />
      <ProblemSection />
      <SolutionsSection />
      <AboutSection />
      <LogosBar />
      <HowItWorks />
      <CtaSection />
      <FooterLinks />
      <CopyrightFooter />
    </>
  );
}
