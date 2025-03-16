"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeEngine = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    initializeEngine();
  }, []);

  const particlesLoaded = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_container?: Container): Promise<void> => {},
    []
  );

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "#1d1d2e" },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: false },
          onHover: { enable: false },
        },
      },
      particles: {
        number: {
          value: 100,
          density: { enable: true, area: 800 },
        },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
          value: 0.8,
          random: true,
          anim: {
            enable: true,
            speed: 3,
            opacity_min: 0.3,
            sync: false,
          },
        },
        size: {
          value: 2,
          random: { enable: true, minimumValue: 1 },
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: MoveDirection.none,
          random: true,
          straight: false,
          outModes: { default: OutMode.out },
        },
        links: {
          enable: false,
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesComponent;
