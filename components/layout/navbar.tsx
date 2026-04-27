"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./container";
import { navLinks } from "@/data/navLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07172E]/85 backdrop-blur-xl">
        <Container className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#185FA5] via-[#378ADD] to-[#D4A017] text-white shadow-lg shadow-blue-500/20">
              <span className="text-lg font-bold">G</span>
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold tracking-tight text-white">
                Grow<span className="text-[#378ADD]">Pep</span>
              </span>
              <span className="mt-1 hidden text-[11px] text-[#85B7EB] sm:block">
                We Grow Brands. You Grow Bigger.
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#E6F1FB] transition hover:text-[#378ADD]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#185FA5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0C447C]"
            >
              Get Free Audit
            </Link>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition hover:bg-white/5 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-[#07172E]/70 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-4 top-[88px] z-50 rounded-3xl border border-white/10 bg-[#0C2442]/95 p-5 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium text-[#E6F1FB] transition hover:bg-white/5 hover:text-white"
                    >
                      <span>{item.label}</span>
                      <span className="text-[#378ADD]">→</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-5 border-t border-white/10 pt-5">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center rounded-full bg-[#185FA5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0C447C]"
                >
                  Get Free Audit
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}