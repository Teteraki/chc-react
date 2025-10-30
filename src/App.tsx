import "./App.css";
import { Banner } from "./assets/components/Banner";
import { UpcomingEvents } from "./assets/components/UpcomingEvents";
import { Header } from "./assets/components/Header";
import { Sponsors } from "./assets/components/Sponsors";
import { PastEvents } from "./assets/components/PastEvents";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Sponsors />
      <UpcomingEvents />
      <PastEvents />
    </>
  );
}

export default App;
