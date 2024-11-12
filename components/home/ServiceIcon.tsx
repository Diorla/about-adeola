"use client";
import Image from "next/image";
import { createBreakpoint } from "react-use";

const useBreakpoint = createBreakpoint({
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
});

export default function ServiceIcon({ img }: { img: string }) {
  const breakpoint = useBreakpoint();

  if (breakpoint === "sm")
    return (
      <div className="flex items-center justify-center">
        <Image
          src={`/animations/${img}.gif`}
          alt="Adeola"
          width={80}
          height={80}
          unoptimized
        />
      </div>
    );
  return (
    <div className="flex items-center justify-center">
      <Image
        src={`/animations/${img}.gif`}
        alt="Adeola"
        width={80}
        height={80}
        unoptimized
      />
    </div>
  );
}
