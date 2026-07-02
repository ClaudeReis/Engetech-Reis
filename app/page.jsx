import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
import ChatBot from "@/components/ChatBot";

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
        {/* 2. Identificação da dor (absorveu a antiga ValueProp) */}
        <PainPoints />
        {/* 3. Apresentação da solução */}
        <Solution />
        {/* 4. Benefícios */}
        <Benefits />
        {/* 5. Prova social + fundador */}
        <SocialProof />
        {/* 6. Oferta principal — sobe na página: preço chega mais cedo
            (padrão price → proof; portfólio vira prova logo depois) */}
        <Offer />
        {/* 7. Portfólio — Nossos Projetos (prova pós-preço) */}
        <Projetos />
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

      {/* Assistente de qualificação — demo viva do chatbot que vendemos */}
      <ChatBot />
    </>
  );
}
