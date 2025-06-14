import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ComingSoonSections } from "@/components/comingSoonSections";
import { CollapsibleSection } from "@/components/ui/CollapsibleSection";

export default function Home() {
  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Discover New Friends Today
        </h1>

        <div className="mb-20">
          <CollapsibleSection
            title={`Click to see our other projects which are coming at the end of ${currentMonth}!`}
          >
            <ComingSoonSections />
          </CollapsibleSection>
        </div>

        <div className="mb-10 overflow-hidden rounded-xl">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/asWJv5_1DUU?si=8Qo81dn4VKEhwT64"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-xl text-gray-600 mb-8">
          Connect with like-minded individuals in your area and build meaningful
          relationships
        </p>
        <Link
          href="/auth/sign-up"
          className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700"
        >
          Get Started <ArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}
