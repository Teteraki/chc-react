import "./App.css";
import { Banner } from "./components/banner/Banner";
import { UpcomingEvents } from "./components/events/UpcomingEvents";
import { Header } from "./components/header/Header";
import { Sponsors } from "./components/sponsors/Sponsors";
import { PastEvents } from "./components/events/PastEvents";
import { Footer } from "./components/footer/Footer";
import { About } from "./components/about/About";
import { Analytics } from "@vercel/analytics/react";
import { StatusUpdateBar } from "./components/status-update/StatusUpdateBar";

function App() {
  return (
    <>
      {/* Vercel Analytics */}
      <Analytics />

      {/* Main Page Content */}
      <Header />
      <StatusUpdateBar />
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
