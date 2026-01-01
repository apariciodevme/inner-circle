import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Membership from "./components/Membership";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black overflow-x-hidden selection:bg-gold-500 selection:text-black">
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Membership />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}
