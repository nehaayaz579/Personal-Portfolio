import Hero from "./component/Hero";
import Contact from "./Contact/page";
import About from "./About/page";
import Skills from "./Skills/page";

export default function Home() {
  return (
    <div className="bg-purple-50">
      <Hero />
      <About />
      <Contact />
      <Skills />
    </div>
  );
}
