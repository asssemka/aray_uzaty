import Hero from "./components/Hero";
import InviteText from "./components/InviteText";
import CountdownBlock from "./components/CountdownBlock";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";
import WeddingHeader from "./components/WeddingHeader";

function App() {
  return (
    <div className="font-sans text-center">
      <WeddingHeader />
      <Hero />
      <InviteText />
      <RSVPForm />
      <CountdownBlock />

    </div>
  );
}

export default App;
