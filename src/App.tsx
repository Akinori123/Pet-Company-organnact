/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { ImpactNumbers } from "./components/sections/ImpactNumbers";
import { Mission } from "./components/sections/Mission";
import { Services } from "./components/sections/Services";
import { Team } from "./components/sections/Team";
import { Products } from "./components/sections/Products";
import { Gallery } from "./components/sections/Gallery";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";
import { FAQ } from "./components/sections/FAQ";
import { WhatsAppBot } from "./components/features/WhatsAppBot";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfUsePage } from "./pages/TermsOfUsePage";

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <ImpactNumbers />
        <Mission />
        <Services />
        <Team />
        <Products />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppBot />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-brand-100 font-sans selection:bg-gold-500/30">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
          <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
