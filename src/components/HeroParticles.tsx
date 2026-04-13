"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function HeroParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      background: {
        color: "transparent",
      },
      fpsLimit: 120,
      detectRetina: true,
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            width: 800,
            height: 800,
          },
        },
        color: {
          value: "#155682",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.45,
        },
        size: {
          value: { min: 2, max: 4 },
        },
        move: {
          enable: true,
          speed: 1.8,
          direction: "top",
          outModes: {
            default: "out",
          },
        },
        links: {
          enable: false,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: false,
          },
          onClick: {
            enable: false,
          },
          resize: {
            enable: true,
          },
        },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#eef5f3_0%,#edf5f2_34%,#f4f9f7_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(21,82,123,0.14),transparent_36%),radial-gradient(circle_at_84%_14%,rgba(58,157,145,0.10),transparent_34%),radial-gradient(circle_at_52%_84%,rgba(58,157,145,0.08),transparent_36%)]" />

      <Particles
        id="hero-particles"
        className="absolute inset-0 h-full w-full"
        options={options}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.10)_44%,rgba(255,255,255,0.16)_100%)]" />
    </div>
  );
}