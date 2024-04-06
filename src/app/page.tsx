import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "../components";
import { herobg } from "../assets";

export const metadata = {
  title: "Home",
  description: "Portfolio website",
};

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div
        className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${herobg.src})`,
        }}
      >
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
