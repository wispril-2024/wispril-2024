"use client";

import { Toaster } from "@/components/ui/sonner";
import {
  PHProvider,
  PostHogIdentifyOrReset,
  PostHogPageview,
} from "@/lib/posthog-client";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

const BodyLayout = ({ children }: { children: React.ReactNode }) => {
  // Navbar State
  const [navBarExpanded, setNavBarExpanded] = useState(false);

  // Reset navbar everytime path changes
  const pathname = usePathname();
  useEffect(() => {
    setNavBarExpanded(false);
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
            navBarExpanded && "overflow-hidden"
          }`}
        >
          {/* Navbar */}

          {/* Content */}
          {children}

          {/* Footer */}
          <Toaster richColors={true} closeButton={true} position="top-center" />
        </body>
      </PHProvider>
    </SessionProvider>
  );
};

export default BodyLayout;
