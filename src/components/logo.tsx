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
      <div className="relative h-8 w-8 shrink-0">
        <Image
          src="/img/logo.png"
          alt="Soft Warehouse Logo"
          width={32}
          height={32}
          className="h-8 w-8 rounded-md object-contain"
          priority
        />
      </div>
      <span className="text-xl font-bold tracking-tight">Soft Warehouse</span>
    </div>
  );
}