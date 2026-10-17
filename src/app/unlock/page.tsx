"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { Lock, Unlock, CheckCircle, ArrowRight, ShieldAlert, KeyRound, Tag, Copy, Check } from "lucide-react";

const VALID_PINS = ["ORY-9842-K9TX-7731", "ORY-9842", "9842"];
const LAVA_TIP_URL = "https://app.lava.top/products/11a39231-d939-4f57-ad18-23ee8cb5ffb5";
const PROMO_CODE = "ITSMOHAMEDWAEL2026";

function UnlockContent() {
  const searchParams = useSearchParams();
  const [pin, setPin] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const urlPin = searchParams.get("pin");
    if (urlPin) {
      setPin(urlPin);
      validatePin(urlPin);
    }
  }, [searchParams]);

  const validatePin = (inputPin: string) => {
    const cleaned = inputPin.trim().toUpperCase();
    if (VALID_PINS.includes(cleaned)) {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validatePin(pin);
  };

  const copyPromoCode = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#04080F] text-[#E0F7FA] font-sans flex flex-col justify-between selection:bg-[#00D4FF] selection:text-black">
      {/* Top Bar */}
      <header className="border-b border-neutral-900 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm tracking-widest text-[#00D4FF] hover:opacity-80">
          MOHAMED WAEL // PORTAL
        </Link>
        <span className="font-mono text-xs px-2.5 py-1 rounded border border-[#00D4FF]/30 bg-[#00D4FF]/10 text-[#00D4FF]">
          GATEWAY v1.0
        </span>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg bg-[#071320] border border-[#00D4FF]/30 rounded-2xl p-8 sm:p-10 shadow-[0_0_50px_rgba(0,212,255,0.15)]">
          {!isUnlocked ? (
            <div>
              <div className="w-14 h-14 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/40 flex items-center justify-center text-[#00D4FF] mb-6">
                <Lock className="w-7 h-7" />
              </div>

              <span className="font-mono text-xs text-[#00FF88] tracking-widest uppercase block mb-1">
                Access Verification Gate
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-white mb-3">
                Unlock ORYVEO
              </h1>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                Enter the secret verification PIN received on Lava.top after purchase to instantly unlock the private repository and live demo credentials.
              </p>

              {/* Promo Banner */}
              <div className="mb-6 p-4 rounded-xl border border-[#00D4FF]/30 bg-[#00D4FF]/5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#00D4FF] font-semibold">
                    <Tag className="w-4 h-4" />
                    <span>PROMO CODE · 50% OFF</span>
                  </div>
                  <div className="font-mono text-xs">
                    <span className="line-through text-neutral-500 mr-2">$20.00</span>
                    <span className="text-[#00FF88] font-bold text-sm">$10.00</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-400">
                  Use coupon code at Lava checkout to get 50% off:
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 px-3 py-2 rounded-lg bg-[#030911] border border-neutral-800 font-mono text-xs text-[#00D4FF] font-bold tracking-wider select-all">
                    {PROMO_CODE}
                  </div>
                  <button
                    type="button"
                    onClick={copyPromoCode}
                    className="px-3 py-2 rounded-lg bg-[#00D4FF] hover:bg-[#38E1FF] text-black text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="pin" className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                    Secret Verification PIN
                  </label>
                  <div className="relative">
                    <input
                      id="pin"
                      type="text"
                      value={pin}
                      onChange={(e) => {
                        setPin(e.target.value);
                        setError(false);
                      }}
                      placeholder="e.g. ORY-9842-K9TX-7731"
                      className="w-full bg-[#030911] border border-neutral-800 focus:border-[#00D4FF] rounded-xl px-4 py-3.5 text-white font-mono text-base placeholder:text-neutral-600 focus:outline-none transition-colors"
                      required
                    />
                    <KeyRound className="w-5 h-5 text-neutral-500 absolute right-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {error && (
                  <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/50 flex items-start gap-2.5 text-xs text-red-300">
                    <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>
                      Invalid verification PIN. Please verify the code you received on Lava.top after payment.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#00D4FF] hover:bg-[#38E1FF] text-black font-semibold rounded-xl py-3.5 px-4 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,212,255,0.3)] cursor-pointer"
                >
                  <Unlock className="w-4 h-4" />
                  Verify &amp; Unlock Project
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-neutral-900 text-center">
                <p className="text-xs text-neutral-500 mb-3">Don&apos;t have a PIN yet?</p>
                <a
                  href={LAVA_TIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FF416C] hover:text-[#FF6584] transition-colors"
                >
                  Purchase on Lava.top ($20 → $10 with code {PROMO_CODE}) <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-[#00FF88]">
                <CheckCircle className="w-7 h-7" />
              </div>

              <div>
                <span className="font-mono text-xs text-[#00FF88] tracking-widest uppercase block mb-1">
                  ● Access Granted
                </span>
                <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
                  Welcome to ORYVEO
                </h1>
                <p className="text-sm text-neutral-400">
                  Your verification PIN is confirmed. You now have full access to the project assets below:
                </p>
              </div>

              {/* Unlocked Credentials Box */}
              <div className="bg-[#030911] border border-neutral-800 rounded-xl p-5 space-y-4">
                <div>
                  <span className="font-mono text-[11px] uppercase text-neutral-500 block mb-1">
                    Live Demo Sandbox
                  </span>
                  <a
                    href="https://oryveo.itsmohamedwael.info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-[#00D4FF] hover:underline flex items-center gap-1.5"
                  >
                    https://oryveo.itsmohamedwael.info <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="pt-3 border-t border-neutral-900">
                  <span className="font-mono text-[11px] uppercase text-neutral-500 block mb-1">
                    Private GitHub Repository
                  </span>
                  <p className="text-xs text-neutral-300 mb-2">
                    Send an email to{" "}
                    <a href="mailto:mohamed261207@bue.edu.eg" className="text-[#00FF88] underline">
                      mohamed261207@bue.edu.eg
                    </a>{" "}
                    with your GitHub Username and your verified PIN:
                  </p>
                  <div className="px-3 py-2 bg-neutral-900/80 rounded border border-neutral-800 font-mono text-xs text-[#00D4FF]">
                    PIN: ORY-9842-K9TX-7731 [VERIFIED]
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href="/work/oryveo"
                  className="flex-1 bg-white hover:bg-neutral-200 text-black text-center text-sm font-semibold rounded-xl py-3 transition-colors"
                >
                  View Case Study
                </Link>
                <button
                  onClick={() => setIsUnlocked(false)}
                  className="px-4 border border-neutral-800 hover:border-neutral-700 text-neutral-400 text-xs rounded-xl transition-colors"
                >
                  Lock
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 px-6 py-4 text-center font-mono text-xs text-neutral-600">
        © {new Date().getFullYear()} Mohamed Wael • All Rights Reserved
      </footer>
    </div>
  );
}

export default function UnlockPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <UnlockContent />
    </Suspense>
  );
}
