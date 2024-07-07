"use client"
import Hero from "@/components/Hero";
import Particles from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <main className="flex relative z-10 flex-col items-center justify-between py-2 px-4 sm:p-10 lg:p-12 bg-background dark:text-white text-black">
      <Particles
        className="absolute inset-0 -z-0 hidden dark:block"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
      <Hero />
    </main>
  );
}
