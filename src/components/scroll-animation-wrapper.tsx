"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollAnimationWrapper({
  children,
  className,
}: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity duration-1000 ease-in",
        isVisible ? "opacity-100" : "opacity-0",
        isVisible && "animate-fade-in-up",
        className
      )}
    >
      {children}
    </div>
  );
}
