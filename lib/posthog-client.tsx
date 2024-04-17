"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider, usePostHog } from "posthog-js/react";
import { useEffect } from "react";

if (
  typeof window !== "undefined" &&
  !window.location.host.includes("localhost") &&
  !window.location.host.includes("127.0.0.1")
) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_REWRITE_HOST,
    ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}

export function PostHogPageview(): JSX.Element {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname;
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return <></>;
}

export function PostHogIdentifyOrReset(): JSX.Element {
  const { data: session } = useSession();
  const posthog = usePostHog();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const phState = searchParams.get("phState");

  useEffect(() => {
    if (session && session.username && session.name && phState === "identify") {
      // Session exists (just after register / sign in / session is updated) and phState is identify
      posthog.identify(session.id, {
        username: session.username,
        name: session.name,
        nim: session.nim,
        faculty: session.faculty,
        major: session.major,
      });
      router.replace(pathname);
    } else if (!session && phState === "reset") {
      // Session doesnt exists (after sign out) and phState is reset
      posthog.reset();
      router.replace(pathname);
    }
  }, [session, phState, pathname, posthog, router]);

  return <></>;
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
