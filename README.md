# Auto Viacao Leste

Site institucional da Auto Viacao Leste, desenvolvido com Next.js, React, TypeScript e Tailwind CSS. O projeto apresenta servicos de turismo rodoviario, frota, roteiros, atendimento, solicitacao de orcamento e paginas institucionais.

## Tecnologias

- Next.js 15 com App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Swiper

## Requisitos

- Node.js 20 ou superior recomendado
- npm

## Instalacao

```bash
npm install
```

## Desenvolvimento local

```bash
npm run dev
```

Depois acesse:

```text
http://localhost:3000
```

## Scripts disponiveis

```bash
npm run dev
```

Inicia o servidor de desenvolvimento.

```bash
npm run build
```

Gera o build estatico do Next.js na pasta `out/`.

```bash
npm run build:pages
```

Executa o build com configuracao de GitHub Pages e copia o resultado para `docs/`, incluindo `.nojekyll`.

```bash
npm run start
```

Inicia o servidor de producao do Next.js. Observacao: como o projeto usa `output: "export"`, o fluxo principal de publicacao e estatico.

```bash
npm run lint
```

Executa a checagem de lint configurada no projeto.

## Estrutura principal

```text
src/
  app/                  Paginas do App Router
  components/           Componentes reutilizaveis da interface
  lib/                  Utilitarios, contatos e helpers de caminho publico
  styles/               Estilos globais do Tailwind
public/
  images/               Logos, favicon e imagens publicas
scripts/
  build-pages.mjs       Build estatico para GitHub Pages
docs/                   Saida estatica usada para publicacao no GitHub Pages
```

## Paginas

- `/` - pagina inicial
- `/passagens` - solicitacao de orcamento
- `/frota` - frota e certificacoes
- `/destinos` - roteiros sob consulta
- `/servicos` - servicos detalhados
- `/institucional` - historia, valores e numeros da empresa
- `/contato` - canais de atendimento
- `/faq` - perguntas frequentes
- `/horarios` - opcoes de atendimento e horarios sob consulta
- `/area-do-cliente` - area de acompanhamento
- `/minhas-viagens` - resumo de solicitacoes
- `/politica-de-privacidade` - politica de privacidade
- `/termos-de-uso` - termos de uso

## Publicacao no GitHub Pages

O arquivo `next.config.ts` detecta `GITHUB_ACTIONS=true` e aplica:

- `basePath: "/autoviacaoleste"`
- `assetPrefix: "/autoviacaoleste/"`
- `NEXT_PUBLIC_BASE_PATH=/autoviacaoleste`

Para gerar os arquivos estaticos para GitHub Pages:

```bash
npm run build:pages
```

O conteudo final fica em `docs/`. Configure o GitHub Pages para publicar a partir da pasta `docs` da branch principal.

## Configuracoes importantes

- Dados de contato: `src/lib/contact.ts`
- Caminhos publicos com base path: `src/lib/site.ts`
- Metadados globais: `src/app/layout.tsx`
- Tema visual: `tailwind.config.mjs` e `src/styles/globals.css`

## Observacoes

- Imagens locais devem ficar em `public/images/` quando usadas por componentes Next.
- Para imagens com `next/image`, use `publicPath("/images/nome-do-arquivo.ext")` quando o ativo precisar respeitar o base path do GitHub Pages.
- O projeto possui tambem arquivos HTML exportados na raiz e em `docs/`; as alteracoes de codigo devem ser feitas preferencialmente em `src/`.
