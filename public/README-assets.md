# Assets — pasta /public

Coloque aqui os arquivos estáticos servidos diretamente.

## Logo (pendente)
- Salve o PNG oficial como `logo.png` nesta pasta.
- Depois, troque o ícone SVG placeholder em `components/Logo.jsx` por:
  ```jsx
  import Image from "next/image";
  <Image src="/logo.png" alt="EngeTech Reis" width={34} height={34} priority />
  ```

## Open Graph (recomendado)
- Adicione `og-image.png` (1200×630) para preview no WhatsApp/redes.

## Depoimentos
- Fotos reais dos clientes (ver `components/SocialProof.jsx`, marcado com TODO).
