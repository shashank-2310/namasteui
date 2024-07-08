import Hero from "@/components/shared/Hero";
import Particles from "@/components/magicui/particles";

export default function Home() {

  return (
    <main className="flex relative overflow-hidden z-10 flex-col items-center justify-between py-2 px-4 sm:p-10 lg:p-12 bg-background dark:text-white text-black">
      <Particles
        className="absolute inset-0 -z-0 hidden dark:block"
        quantity={200}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <Hero />
    </main>
  );
}
