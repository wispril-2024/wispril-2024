"use client";

import Navbar from "@/components/ui/navbar";
import { Toaster } from "@/components/ui/sonner";
import {
  PHProvider,
  PostHogIdentifyOrReset,
  PostHogPageview,
} from "@/lib/posthog-client";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

// Client component layout
const BodyLayout = ({ children }: { children: React.ReactNode }) => {
  // Navbar State
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  // Reset navbar everytime path changes
  const pathname = usePathname();
  useEffect(() => {
    setIsNavbarExpanded(false);
  }, [pathname]);

  return (
    <SessionProvider>
      <PHProvider>
        <Suspense>
          <PostHogPageview />
          <PostHogIdentifyOrReset />
        </Suspense>

        <body
          className={`flex min-h-screen flex-col ${
            isNavbarExpanded && "overflow-hidden"
          }`}
        >
          {/* Navbar */}
          <Navbar
            isNavbarExpanded={isNavbarExpanded}
            setIsNavbarExpanded={setIsNavbarExpanded}
          />

          {/* Page Content */}
          {children}

          {/* Toaster */}
          <Toaster richColors={true} closeButton={true} position="top-center" />
        </body>
      </PHProvider>
    </SessionProvider>
  );
};

export default BodyLayout;
