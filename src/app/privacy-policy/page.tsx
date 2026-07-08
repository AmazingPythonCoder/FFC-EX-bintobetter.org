import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Bin to Better",
  description:
    "How the Bin to Better website handles analytics, cookies, and your information, and the choices you have.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0d1a14] font-sans text-white overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#8bc34a] text-xs uppercase tracking-[0.22em] font-semibold">
            Site Information
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-3 text-white/50 text-sm">Effective date: July 2026</p>

          <p className="mt-8 text-white/80 leading-relaxed">
            This policy explains what information the Bin to Better website
            (bintobetter.org) collects, how it is used, and the choices you have.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-3 text-[#8bc34a]">
            Analytics
          </h2>
          <p className="text-white/80 leading-relaxed">
            We use Google Tag Manager and Google Analytics 4 (GA4) to understand
            how visitors use our site in aggregate — for example, which pages are
            most popular. Analytics runs by default when you visit the site. GA4
            sets a cookie such as <code>_ga</code> to distinguish visitors and
            measure usage.
          </p>
          <p className="mt-4 text-white/80 leading-relaxed">
            You can opt out at any time. Our cookie-consent banner lets you
            decline analytics: declining stops analytics on this browser going
            forward and deletes the analytics cookies that were set. See our{" "}
            <Link href="/cookie-policy" className="text-[#8bc34a] hover:underline">
              Cookie Policy
            </Link>{" "}
            for details on the specific cookies and how to manage them.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3 text-[#8bc34a]">
            Cookies
          </h2>
          <p className="text-white/80 leading-relaxed">
            We use a small number of cookies: necessary and functional cookies
            that make the site work and remember your cookie choices, and
            analytics cookies described above. You control non-essential cookies
            through the cookie-consent banner. Full details are in our{" "}
            <Link href="/cookie-policy" className="text-[#8bc34a] hover:underline">
              Cookie Policy
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-3 text-[#8bc34a]">
            Information you share with us
          </h2>
          <p className="text-white/80 leading-relaxed">
            If you contact us or interact with links to our social media, any
            information you choose to provide is used only to respond to you and
            to operate our programs. We do not sell your personal information.
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
