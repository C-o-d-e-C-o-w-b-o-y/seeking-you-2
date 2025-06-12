import Link from "next/link";
import { ArrowRight, Users, Heart, ShoppingBag, MapPin } from "lucide-react";
import { CollapsibleSection } from "@/components/ui/CollapsibleSection";
import { ComingSoonSections } from "@/components/comingSoonSections";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="p-6 bg-rose-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default function Home() {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Discover New Friends Today
        </h1>
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

      <div className="mb-20">
        <CollapsibleSection 
          title={`Our other projects which are coming at the end of ${currentMonth}!`} 
          children={<ComingSoonSections/>}
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <FeatureCard
          icon={<Users className="h-8 w-8 text-rose-600" />}
          title="New Business"
          description="Our advanced platform helps you connect with potential business partners and opportunities"
        />
        <FeatureCard
          icon={<Heart className="h-8 w-8 text-rose-600" />}
          title="Verified Profiles"
          description="Connect with real people who share your interests and values"
        />
        <FeatureCard
          icon={<ShoppingBag className="h-8 w-8 text-rose-600" />}
          title="Discover Your World"
          description="Explore exciting opportunities and expand your horizons"
        />
        <FeatureCard
          icon={<MapPin className="h-8 w-8 text-rose-600" />}
          title="Local Connections"
          description="Meet people in your area and create meaningful relationships"
        />
      </div>

      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80"
          alt="Platform Preview"
          className="rounded-xl shadow-2xl w-full object-cover h-[400px]"
        />
      </div>
    </div>
  );
}
