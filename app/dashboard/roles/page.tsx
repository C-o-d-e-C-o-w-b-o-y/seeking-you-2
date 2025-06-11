import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import {
  Users,
  Shield,
  HeadsetIcon,
  Eye,
  Briefcase,
  Wallet,
} from "lucide-react";

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  responsibilities: string[];
}

const RoleCard: React.FC<RoleCardProps> = ({
  icon,
  title,
  responsibilities,
}) => {
  return (
    <div className="bg-rose-50 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-rose-100 rounded-lg mr-3">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="mr-2">•</span>
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default async function RolesPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  const roles = [
    {
      icon: <Users className="h-6 w-6 text-rose-600" />,
      title: "Community Manager",
      responsibilities: [
        "Moderates user content and interactions",
        "Handles user reports and conflicts",
        "Maintains community guidelines",
        "Manages user engagement initiatives",
      ],
    },
    {
      icon: <Shield className="h-6 w-6 text-rose-600" />,
      title: "Technical Operations",
      responsibilities: [
        "System administrator for platform maintenance",
        "Database administrator for data management",
        "Security specialist for protecting user data",
        "DevOps engineer for deployment and scaling",
      ],
    },
    {
      icon: <HeadsetIcon className="h-6 w-6 text-rose-600" />,
      title: "Customer Support",
      responsibilities: [
        "Handles user inquiries and issues",
        "Provides technical support",
        "Processes payment-related queries",
        "Manages account-related concerns",
      ],
    },
    {
      icon: <Eye className="h-6 w-6 text-rose-600" />,
      title: "Content Moderation Team",
      responsibilities: [
        "Reviews user-generated content",
        "Enforces platform guidelines",
        "Monitors live streams",
        "Handles content reports",
      ],
    },
    {
      icon: <Briefcase className="h-6 w-6 text-rose-600" />,
      title: "Business Development",
      responsibilities: [
        "Manages partnerships",
        "Handles business account relations",
        "Develops growth strategies",
        "Manages creator relationships",
      ],
    },
    {
      icon: <Wallet className="h-6 w-6 text-rose-600" />,
      title: "Financial Operations",
      responsibilities: [
        "Manages payment processing",
        "Handles creator payouts",
        "Monitors transaction security",
        "Manages financial compliance",
      ],
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Team Structure
        </h1>
        <p className="text-xl text-gray-600">
          The dedicated professionals who keep Seeking-You running smoothly
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role, index) => (
          <RoleCard key={index} {...role} />
        ))}
      </div>
    </div>
  );
}
