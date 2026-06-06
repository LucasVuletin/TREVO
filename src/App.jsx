import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Process from "./components/Process";
import WhyTrevo from "./components/WhyTrevo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-surface text-ink">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(86,199,173,0.08),transparent_16%),linear-gradient(180deg,#f8f8f5_0%,#f4f8f5_42%,#eef3ef_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[linear-gradient(rgba(16,37,35,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,37,35,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,black_0%,transparent_86%)]" />

      <Header />

      <main>
        <Hero />
        <Problems />
        <Process />
        <WhyTrevo />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
