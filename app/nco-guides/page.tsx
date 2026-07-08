import Link from "next/link";

const BOOKING_URL = "https://tidycal.com/edoyama/30-minute-meeting";

type Guide = {
  n: string;
  title: string;
  blurb: string;
  href: string;
};

const guides: Guide[] = [
  {
    n: "01",
    title: "Three Steps to Be Found on Google",
    blurb:
      "When someone in your town needs God, they Google \"churches near me.\" Make sure you show up, and that what they find is warm and current.",
    href: "https://docs.google.com/document/d/1t5fb8AntRrJ0K-XmBDcSrps_bLbDWsG4W8T0bwUr-Ck/edit",
  },
  {
    n: "02",
    title: "Three Keys to Your Church Website",
    blurb:
      "Almost everyone checks your website before they ever walk in. Build it for the stranger who found you first. Welcome mat, not members' lounge.",
    href: "https://docs.google.com/document/d/1wIQF7RAbPtzwcY9KU9dgASDyBVhYxtqBfmtLzaXSgF8/edit",
  },
  {
    n: "03",
    title: "Your Church on Social Media",
    blurb:
      "Social is where people who are not looking for you yet can still discover you. You do not need to be a creator. You need three things working.",
    href: "https://docs.google.com/document/d/1HxNuVOrurfVztidch5skdmFXzXe6RJZ47lq0UtGXzEg/edit",
  },
];

export const metadata = {
  title: "NCO Guides | Helping the Lost Find Your Church",
  description:
    "Practical guides for church leaders: be found on Google, build a website that welcomes newcomers, and show up on social media.",
};

export default function NcoGuides() {
  return (
    <main className="min-h-screen bg-cream text-navy font-body">
      {/* Header */}
      <header className="bg-white" style={{ boxShadow: "0 5px 15px rgba(0,0,0,0.07)" }}>
        <div className="max-w-[900px] mx-auto px-6 py-5">
          <Link href="/" className="font-heading font-bold text-navy hover:text-green transition-colors">
            Super Simple Marketing
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-[900px] mx-auto px-6 pt-14 pb-8 text-center">
        <p className="font-heading font-bold text-green tracking-wide text-[14px] uppercase mb-4">
          NCO Family Camp
        </p>
        <h1 className="font-heading font-bold text-navy text-[34px] md:text-[46px] leading-tight mb-5">
          Helping the Lost Find Your Church
        </h1>
        <p className="text-[17px] md:text-[19px] text-navy/80 max-w-[640px] mx-auto leading-relaxed">
          Three short guides to help your church be findable, watchable, and ready
          for the people already searching. Pick one and start this week.
        </p>
      </section>

      {/* Guides */}
      <section className="max-w-[900px] mx-auto px-6 pb-6">
        <div className="grid gap-5">
          {guides.map((g) => (
            <Link
              key={g.n}
              href={g.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-[20px] p-6 md:p-8 transition-shadow"
              style={{ boxShadow: "0 4px 18px rgba(21,39,65,0.08)" }}
            >
              <div className="flex items-start gap-5">
                <span className="font-heading font-bold text-green text-[22px] md:text-[26px] leading-none pt-1">
                  {g.n}
                </span>
                <div className="flex-1">
                  <h2 className="font-heading font-bold text-navy text-[21px] md:text-[24px] mb-2 group-hover:text-green transition-colors">
                    {g.title}
                  </h2>
                  <p className="text-[16px] text-navy/75 leading-relaxed">{g.blurb}</p>
                  <span className="inline-block mt-4 font-heading font-bold text-[15px] text-green">
                    Open the guide &#8594;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[900px] mx-auto px-6 py-14 text-center">
        <h3 className="font-heading font-bold text-navy text-[24px] md:text-[30px] mb-4">
          Want a hand putting this in place?
        </h3>
        <p className="text-[17px] text-navy/80 max-w-[600px] mx-auto leading-relaxed mb-7">
          As part of my work with the NCO district, I can sit down with you one-on-one,
          or bring in my team, to help get your church set up and found. You do not have
          to figure this out alone.
        </p>
        <Link
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green hover:bg-green-hover text-white font-heading font-bold text-[17px] md:text-[19px] px-7 py-4 rounded-[25px] transition-colors"
        >
          Book a time with Ed
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-black py-5">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <p className="text-gray-footer text-[12px]">
            Ed Oyama | Super Simple Marketing | Serving the NCO District
          </p>
        </div>
      </footer>
    </main>
  );
}
