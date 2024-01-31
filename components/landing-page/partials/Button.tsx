import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  className?: string;
  text: string
}

export default function Button({
  className,
  href= "",
  type = "button",
text,
  ...props
}: BtnProps) {
  return (
    <Link href={href}>
      <button
        type={type}
        {...props}
        className={cn(`inline-flex items-center justify-center rounded-[100px] px-6 py-2 text-gray-700 font-semibold ${className}`)}
      >
        {text}
      </button>
    </Link>
  );
}
