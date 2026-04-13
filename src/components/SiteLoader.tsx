"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const CENTER = 240;
const RADIUS = 112;
const STROKE_WIDTH = 18;

export function SiteLoader() {
  const [isReady, setIsReady] = useState(false);
  const prefersReducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    // Keep loader duration short and deterministic in production.
    const fallbackTimer = window.setTimeout(() => setIsReady(true), 550);

    return () => {
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isReady ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden bg-[#0F172A] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {/* الخلفية الداكنة مع توهج نيوني خفيف يعكس هوية كوبرا التقنية */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(58,157,145,0.18),transparent_20%),radial-gradient(circle_at_20%_20%,rgba(234,245,240,0.14),transparent_18%),radial-gradient(circle_at_80%_80%,rgba(58,157,145,0.08),transparent_18%)]" />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative flex w-full max-w-xl flex-col items-center px-6 text-center"
          >
            <div className="relative aspect-square w-[min(78vw,22rem)] sm:w-[min(72vw,26rem)]">
              {/* الإطار الخارجي: مسار دائري خافت يعطي إحساس الحركة المستمرة */}
              <svg
                viewBox="0 0 480 480"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
              >
                <defs>
                  <linearGradient
                    id="cobraSnakeGradient"
                    x1="120"
                    y1="120"
                    x2="360"
                    y2="360"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#EAF5F0" />
                    <stop offset="42%" stopColor="#A9D3BF" />
                    <stop offset="100%" stopColor="#56A17E" />
                  </linearGradient>
                  <linearGradient
                    id="cobraHeadGradient"
                    x1="160"
                    y1="140"
                    x2="320"
                    y2="300"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#F6FBF8" />
                    <stop offset="58%" stopColor="#EAF5F0" />
                    <stop offset="100%" stopColor="#56A17E" />
                  </linearGradient>
                  <filter id="cobraGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="8" />
                  </filter>
                  <filter id="cobraSoftGlow" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="16" />
                  </filter>
                </defs>

                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r={RADIUS + 26}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="2"
                  strokeDasharray="6 16"
                />

                <motion.g
                  animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: 1.7, repeat: Infinity, ease: "linear" }
                  }
                  style={{ transformOrigin: "240px 240px" }}
                >
                  {/* جسم الكوبرا: شريط دائري متحرك مع نهاية دائرية ناعمة */}
                    <motion.circle
                    cx={CENTER}
                    cy={CENTER}
                    r={RADIUS}
                    fill="none"
                    stroke="url(#cobraSnakeGradient)"
                    strokeLinecap="round"
                    strokeWidth={STROKE_WIDTH}
                    strokeDasharray="210 600"
                    initial={false}
                    animate={
                      prefersReducedMotion
                        ? { opacity: 0.95 }
                        : { strokeDashoffset: [0, -810], opacity: [0.9, 1, 0.9] }
                    }
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : {
                            strokeDashoffset: { duration: 1.55, repeat: Infinity, ease: "linear" },
                            opacity: { duration: 1.55, repeat: Infinity, ease: "easeInOut" },
                          }
                    }
                    filter="url(#cobraGlow)"
                  />

                  {/* طبقة أوسع وأخف لخلق عمق وتوهج حول الحركة */}
                  <motion.circle
                    cx={CENTER}
                    cy={CENTER}
                    r={RADIUS}
                    fill="none"
                    stroke="#EAF5F0"
                    strokeLinecap="round"
                    strokeWidth={STROKE_WIDTH + 10}
                    strokeDasharray="145 665"
                    initial={false}
                    animate={prefersReducedMotion ? { opacity: 0.24 } : { strokeDashoffset: [0, 720] }}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { strokeDashoffset: { duration: 1.9, repeat: Infinity, ease: "linear" } }
                    }
                    filter="url(#cobraSoftGlow)"
                  />

                  {/* رأس الكوبرا: دائرة متوهجة تتحرك مع المسار لتوحي بمطاردة الذيل */}
                  <motion.circle
                    cx={CENTER}
                    cy={CENTER - RADIUS}
                    r="15"
                    fill="url(#cobraHeadGradient)"
                    filter="url(#cobraSoftGlow)"
                    animate={
                      prefersReducedMotion
                        ? { opacity: 0.95, scale: 1 }
                        : { scale: [1, 1.08, 1], opacity: [0.92, 1, 0.92] }
                    }
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
                    }
                  />

                  <motion.circle
                    cx={CENTER}
                    cy={CENTER - RADIUS - 2}
                    r="5.5"
                    fill="#EAF5F0"
                    animate={prefersReducedMotion ? { opacity: 0.95 } : { opacity: [0.85, 1, 0.85] }}
                    transition={
                      prefersReducedMotion
                        ? undefined
                        : { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
                    }
                  />
                </motion.g>
              </svg>

              {/* النص الأوسط يعزز العلامة التجارية من دون إزعاج الحركة الرئيسية */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={prefersReducedMotion ? { opacity: 1 } : { scale: [1, 1.02, 1], opacity: [0.96, 1, 0.96] }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
                }
              >
                <div className="rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.5em] text-[#56A17E]">
                    COBRA
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="mt-8 text-[0.76rem] font-medium uppercase tracking-[0.5em] text-white/75"
            >
              Loading experience
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

