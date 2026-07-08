import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | Bin to Better",
  description:
    "How the Bin to Better website uses cookies and similar technologies, and your choices.",
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-[#0d1a14] font-sans text-white overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#8bc34a] text-xs uppercase tracking-[0.22em] font-semibold">
            Site Information
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">Cookie Policy</h1>
          <p className="mt-3 text-white/50 text-sm">Effective date: July 2026</p>

          <p className="mt-8 text-white/80 leading-relaxed">
            This policy explains how the Bin to Better website (bintobetter.org)
            uses cookies and similar technologies, and how you can control them.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-3 text-[#8bc34a]">
            What are cookies?
          </h2>
          <p className="text-white/80 leading-relaxed">
            Cookies are small text files stored on your device. They help
            websites function, remember preferences, and measure how a site is
            used.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3 text-[#8bc34a]">
            How we use cookies
          </h2>
          <ul className="list-disc space-y-3 pl-6 text-white/80 leading-relaxed">
            <li>
              <strong className="text-white">Necessary and functional.</strong>{" "}
              A small amount of information may be stored to make the site work
              and to remember your cookie choices. These are set regardless of
              consent because the site cannot function without them.
            </li>
            <li>
              <strong className="text-white">Analytics (opt-out).</strong> We
              use Google Tag Manager and Google Analytics 4 to understand
              aggregate site usage. Analytics runs by default, and analytics
              cookies (for example, <code>_ga</code>) are set unless you decline
              through our cookie banner. Declining stops analytics on this
              browser and removes those cookies.
            </li>
            <li>
              <strong className="text-white">Third-party.</strong> Some pages
              link to or embed outside services (for example, Instagram or
              LinkedIn), and those services may set their own cookies when used.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-3 text-[#8bc34a]">
            Managing your choices
          </h2>
          <p className="text-white/80 leading-relaxed">
            Analytics runs by default so we can measure aggregate usage, but you
            are always free to opt out. Our cookie-consent banner lets you
            decline (or customize) non-essential cookies: declining stops
            analytics on this browser and removes analytics cookies such as{" "}
            <code>_ga</code>. You can also clear this site&apos;s cookies and
            stored data in your browser settings, which brings the banner back on
            your next visit so you can choose differently.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3 text-[#8bc34a]">
            Contact
          </h2>
          <p className="text-white/80 leading-relaxed">
            Questions about this policy can be directed to us through the contact
            links on our{" "}
            <Link href="/" className="text-[#8bc34a] hover:underline">
              home page
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
