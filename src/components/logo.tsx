import { cn } from "@/lib/utils";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-foreground font-semibold",
        className
      )}
    >
      <Image
        src="/logo.png"
        alt="Soft Warehouse Logo"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
        priority
      />
      <span className="text-xl font-bold tracking-tight">Soft Warehouse</span>
    </div>
  );
}