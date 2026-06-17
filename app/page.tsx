import { GridFloor } from "./_components/GridFloor";
import { Nav } from "./_components/Nav";
import { Hero } from "./_components/Hero";
import { Apps } from "./_components/Apps";
import { Services } from "./_components/Services";
import { About } from "./_components/About";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Divider } from "./_components/Divider";

export default function Home() {
  return (
    <>
      <GridFloor />
      <Nav />
      <main style={{ position: "relative", zIndex: 1, paddingTop: 62 }}>
        <Hero />
        <Apps />
        <Divider />
        <Services />
        <Divider />
        <About />
        <Divider />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
