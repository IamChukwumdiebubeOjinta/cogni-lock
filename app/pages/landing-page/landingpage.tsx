import { Features, Hero, HowItWorks, Navbar } from "@/components/landing-page";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[calc(100vh-90px)] w-full flex-col items-center">
        <Hero />
        <Features />
        <HowItWorks />
        {/* <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
         
        </div> */}
      </main>
    </>
  );
}
