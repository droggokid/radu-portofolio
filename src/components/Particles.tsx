"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import dynamic from "next/dynamic";

const Particles = dynamic(
  () => import("@tsparticles/react").then((mod) => mod.default),
  { ssr: false }
);

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(
    async (container?: Container): Promise<void> => {
      console.log(container);
    },
    []
  );

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "#000000" },
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
          value: 150,
          density: { enable: true, area: 800 },
        },
        color: { value: "#ffffff" },
        shape: { type: "star" },
        opacity: {
          value: 0.8,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
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
          speed: 0.5,
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

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return null;
};

export default ParticlesComponent;
