import "./App.css";
import { Banner } from "./assets/components/Banner";
import { UpcomingEvents } from "./assets/components/UpcomingEvents";
import { Header } from "./assets/components/Header";
import { Sponsors } from "./assets/components/Sponsors";
import { PastEvents } from "./assets/components/PastEvents";
import { Footer } from "./assets/components/Footer";
import { About } from "./assets/components/About";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Sponsors />
      <section id="upcoming">
        <UpcomingEvents />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="past">
        <PastEvents />
      </section>
      <Footer />
    </>
  );
}

export default App;
