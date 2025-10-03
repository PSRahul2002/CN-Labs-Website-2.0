import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SolutionsPage from "./components/SolutionsPage";
import AboutPage from "./components/AboutPage";
import ResourcesPage from "./components/ResourcesPage";
import CertificationsPage from "./components/CertificationsPage";
import TrainingPage from "./components/TrainingPage";
import ConsultingPage from "./components/ConsultingPage";
import AutomotivePage from "./components/AutomotivePage";
import NetworkingPage from "./components/NetworkingPage";
import CybersecurityPage from "./components/CybersecurityPage";
import AIMLKubernetesPage from "./components/AIMLKubernetesPage";
import CiscoSDWANPage from "./components/CiscoSDWANPage";
import KubernetesDockerPage from "./components/KubernetesDockerPage";
import AIMLNetworkingPage from "./components/AIMLNetworkingPage";
import ContactPage from "./components/ContactPage";

function App() {
  // Backend API call removed as it's not essential for the app functionality

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/automotive" element={<AutomotivePage />} />
          <Route path="/networking" element={<NetworkingPage />} />
          <Route path="/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/ai-ml-kubernetes" element={<AIMLKubernetesPage />} />
          <Route path="/cisco-sdwan-automation" element={<CiscoSDWANPage />} />
          <Route path="/kubernetes-docker-foundations" element={<KubernetesDockerPage />} />
          <Route path="/ai-ml-networking-engineers" element={<AIMLNetworkingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;