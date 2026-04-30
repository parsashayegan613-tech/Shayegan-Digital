"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackMarketingEvent, type EventProperties } from "@/lib/analytics";
import { scrollToHash } from "@/lib/scroll-to-hash";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName: string;
  eventProperties?: EventProperties;
};

export default function TrackedLink({
  children,
  eventName,
  eventProperties,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackMarketingEvent(eventName, eventProperties);
        onClick?.(event);

        if (event.defaultPrevented || typeof props.href !== "string" || !props.href.startsWith("#")) {
          return;
        }

        event.preventDefault();
        scrollToHash(props.href);
      }}
    >
      {children}
    </a>
  );
}
