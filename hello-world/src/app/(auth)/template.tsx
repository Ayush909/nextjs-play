"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [input, setInput] = useState("");
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <div>
        <label htmlFor="textinput">Text Input</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <nav>
        {navLinks.map((link, index) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={index}
              href={link.href}
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {children}
    </>
  );
}
