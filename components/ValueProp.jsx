import Reveal from "./Reveal";

export default function ValueProp() {
  return (
    <section className="section-pad">
      <div className="section-wrap">
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-muted">
          <Reveal>
            <p className="text-ink">
              Você trabalha duro. Atende bem. Tem produto ou serviço de
              qualidade.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p>
              Mas quando alguém pesquisa o que você oferece no Google, seu nome
              não aparece. E quando alguém manda mensagem no Instagram às 22h, a
              resposta só chega no dia seguinte — se chegar.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="font-heading text-xl font-semibold text-ink">
              Esse lead foi embora.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              A EngeTech Reis resolve exatamente isso:{" "}
              <span className="text-ink">
                presença digital que aparece onde a busca acontece
              </span>{" "}
              e{" "}
              <span className="text-ink">
                automação que atende na hora certa
              </span>{" "}
              — sem você precisar estar online o tempo todo.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
