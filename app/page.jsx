import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import PainPoints from "@/components/PainPoints";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits";
import SocialProof from "@/components/SocialProof";
import Projetos from "@/components/Projetos";
import Offer from "@/components/Offer";
import SecondaryOffer from "@/components/SecondaryOffer";
import Objections from "@/components/Objections";
import Guarantee from "@/components/Guarantee";
import Urgency from "@/components/Urgency";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      {/* Grão sutil sobre toda a página (decorativo) */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Skip link — pula a navegação para usuários de teclado/leitor de tela.
          Fica acima da viewport (translate) e desliza pra dentro ao focar,
          sem causar layout shift. */}
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>

      <Header />
      <main id="conteudo">
        {/* 1. Hero / Headline (Variação A) */}
        <Hero />
        {/* 2. Abertura / Proposta de valor */}
        <ValueProp />
        {/* 3. Identificação da dor */}
        <PainPoints />
        {/* 4. Apresentação da solução */}
        <Solution />
        {/* 5. Benefícios */}
        <Benefits />
        {/* 6. Prova social + fundador */}
        <SocialProof />
        {/* 7. Portfólio — Nossos Projetos */}
        <Projetos />
        {/* 8. Oferta principal — Pacote Presença Digital Completa */}
        <Offer />
        {/* 8. Oferta secundária — Site Institucional */}
        <SecondaryOffer />
        {/* 9. Quebra de objeções */}
        <Objections />
        {/* 10. Garantia */}
        <Guarantee />
        {/* 11. Urgência */}
        <Urgency />
        {/* 12. FAQ */}
        <FAQ />
        {/* 13. CTA final */}
        <FinalCTA />
      </main>
      {/* 14. Footer */}
      <Footer />

      {/* Barra de CTA fixa (mobile) */}
      <StickyCTA />
    </>
  );
}
