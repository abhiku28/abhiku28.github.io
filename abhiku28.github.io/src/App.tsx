import { ArchitectureFlow } from "./components/ArchitectureFlow";
import { ArchitectureIdentity } from "./components/ArchitectureIdentity";
import { Capabilities } from "./components/Capabilities";
import { CaseStudies } from "./components/CaseStudies";
import { Contact } from "./components/Contact";
import { CurrentFocus } from "./components/CurrentFocus";
import { Hero } from "./components/Hero";
import { ImpactMetrics } from "./components/ImpactMetrics";

function App() {
  return (
    <main>
      <Hero />
      <ArchitectureIdentity />
      <ImpactMetrics />
      <ArchitectureFlow />
      <CaseStudies />
      <Capabilities />
      <CurrentFocus />
      <Contact />
    </main>
  );
}

export default App;
