"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Timer,
  Gift,
  Heart,
  CreditCard,
  Bitcoin,
  Calendar,
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  label: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  icon,
  title,
  value,
  label,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
    </div>
  );
};

const PaymentSettings = () => {
  const [paymentMethod, setPaymentMethod] = useState("bank");
  const [cryptoAddress, setCryptoAddress] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Payment Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Payment Method
          </label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="radio"
                id="bank"
                name="payment"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-rose-600 focus:ring-rose-500"
              />
              <label htmlFor="bank" className="ml-2 flex items-center">
                <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                Bank Account
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="crypto"
                name="payment"
                value="crypto"
                checked={paymentMethod === "crypto"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="h-4 w-4 text-rose-600 focus:ring-rose-500"
              />
              <label htmlFor="crypto" className="ml-2 flex items-center">
                <Bitcoin className="h-5 w-5 text-gray-400 mr-2" />
                Cryptocurrency Wallet
              </label>
            </div>
          </div>
        </div>

        {paymentMethod === "bank" ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bank Account Number
              </label>
              <input
                type="text"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                placeholder="Enter your bank account number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Routing Number
              </label>
              <input
                type="text"
                value={routingNumber}
                onChange={(e) => setRoutingNumber(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                placeholder="Enter your routing number"
              />
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cryptocurrency Wallet Address
            </label>
            <input
              type="text"
              value={cryptoAddress}
              onChange={(e) => setCryptoAddress(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
              placeholder="Enter your wallet address"
            />
          </div>
        )}

        <button className="w-full bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700 transition-colors">
          Save Payment Settings
        </button>
      </div>
    </div>
  );
};

const LiveStreamSettings = () => {
  const [duration, setDuration] = useState(30);
  const [giftPrice, setGiftPrice] = useState({
    heart: 5,
    star: 10,
    diamond: 50,
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Live Stream Settings</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Stream Duration (minutes)
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
          >
            <option value={15}>15 minutes</option>
            <option value={30}>30 minutes</option>
            <option value={45}>45 minutes</option>
            <option value={60}>60 minutes</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Gift Pricing
          </label>
          <div className="space-y-3">
            <div className="flex items-center">
              <Heart className="h-5 w-5 text-rose-500 mr-2" />
              <input
                type="number"
                value={giftPrice.heart}
                onChange={(e) =>
                  setGiftPrice({ ...giftPrice, heart: Number(e.target.value) })
                }
                className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                min="1"
              />
              <span className="ml-2 text-gray-600">USD</span>
            </div>
            <div className="flex items-center">
              <Gift className="h-5 w-5 text-yellow-500 mr-2" />
              <input
                type="number"
                value={giftPrice.star}
                onChange={(e) =>
                  setGiftPrice({ ...giftPrice, star: Number(e.target.value) })
                }
                className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                min="1"
              />
              <span className="ml-2 text-gray-600">USD</span>
            </div>
            <div className="flex items-center">
              <Gift className="h-5 w-5 text-blue-500 mr-2" />
              <input
                type="number"
                value={giftPrice.diamond}
                onChange={(e) =>
                  setGiftPrice({
                    ...giftPrice,
                    diamond: Number(e.target.value),
                  })
                }
                className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-rose-500"
                min="1"
              />
              <span className="ml-2 text-gray-600">USD</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700 transition-colors">
          Save Stream Settings
        </button>
      </div>
    </div>
  );
};

const BusinessSubscription = ({ user }: { user: User }) => {
  const [hasActiveSubscription, setHasActiveSubscription] = useState(false);
  const [loading, setLoading] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    checkSubscription();
  }, []);

  const checkSubscription = async () => {
    try {
      const { data } = await supabase
        .from("business_subscriptions")
        .select("*")
        .eq("user_id", user?.id)
        .eq("status", "active")
        .single();

      setHasActiveSubscription(!!data);
    } catch (error) {
      console.error("Error checking subscription:", error);
    }
  };

  const handleSubscribe = async () => {
    try {
      setLoading(true);
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + 30);

      const { error } = await supabase.from("business_subscriptions").insert({
        user_id: user?.id,
        end_date: endDate.toISOString(),
        status: "active",
        amount_paid: 30.0,
      });

      if (error) throw error;
      setHasActiveSubscription(true);
    } catch (error) {
      console.error("Error subscribing:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-rose-50 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6 flex items-center">
        <Calendar className="h-6 w-6 text-rose-600 mr-2" />
        Business Subscription
      </h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">
            30-Day Business Package
          </h3>
          <ul className="space-y-2 text-gray-600 mb-4">
            <li>• 30 days of premium advertising</li>
            <li>• Featured in news feed</li>
            <li>• Business suite access</li>
            <li>• Priority support</li>
          </ul>
          <div className="text-2xl font-bold text-gray-900 mb-4">£30.00</div>
          {!hasActiveSubscription ? (
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className="w-full bg-rose-600 text-white py-2 px-4 rounded-md hover:bg-rose-700 transition-colors disabled:opacity-50"
            >
              {loading ? "Processing..." : "Subscribe Now"}
            </button>
          ) : (
            <div className="text-green-600 font-medium">
              Active Subscription
            </div>
          )}
        </div>
        <p className="text-sm text-gray-500">
          * Subscription auto-renews monthly. You&apos;ll receive a reminder 3
          days before expiration.
        </p>
      </div>
    </div>
  );
};

interface DashboardClientProps {
  user: User;
}

const DashboardClient: React.FC<DashboardClientProps> = ({ user }) => {
  const [profile, setProfile] = useState<{
    username?: string;
    account_type?: string;
  } | null>(null);
  const supabase = createClient();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      setProfile(data);
    } catch {
      // Profile might not exist in current system, that's okay
      console.log("Profile not found, using user data");
    }
  };

  const username = profile?.username || user.email?.split("@")[0] || "User";
  const accountType = profile?.account_type || "personal";

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {username}!
        </h1>
        <p className="text-gray-600">
          Manage your profile, payments, and live streams
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          icon={<Users className="h-6 w-6 text-blue-600" />}
          title="Followers"
          value="2,345"
          label="Total Followers"
        />
        <DashboardCard
          icon={<Timer className="h-6 w-6 text-rose-600" />}
          title="Stream Time"
          value="24h"
          label="Total Live Time"
        />
        <DashboardCard
          icon={<Gift className="h-6 w-6 text-green-600" />}
          title="Earnings"
          value="$1,256"
          label="This Month"
        />
        <DashboardCard
          icon={<Heart className="h-6 w-6 text-purple-600" />}
          title="Gifts"
          value="486"
          label="Received"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <PaymentSettings />
        {accountType === "creator" ? (
          <LiveStreamSettings />
        ) : (
          <BusinessSubscription user={user} />
        )}
      </div>
    </div>
  );
};

export default DashboardClient;
