"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, Menu, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Heart className="h-8 w-8 text-rose-600" />
              <span className="ml-2 text-xl font-bold text-gray-800 flex items-center gap-x-1.5">
                Seeking You <span className="text-rose-600 text-3xl">2</span>
              </span>
            </Link>
          </div>

          {!loading && (
            <div className="hidden md:flex items-center space-x-4">
              <Link href='/about' className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">About</Link>
              {user ? (
                <>
                  <Link
                      href="/dashboard/roles"
                      className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
                  >
                <span className="flex items-center">
                  Team Roles
                </span>
                  </Link>
                  <Link
                    href="/dashboard"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={signOut}
                    className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
                  >
                    <LogOut className="h-5 w-5 mr-1" />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
                  >
                    Login
                  </Link>
                  <Link
                    href="/auth/sign-up"
                    className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          )}

          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-gray-900">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
