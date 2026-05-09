# Documentacao do Projeto

## Visao geral

Este projeto e o site institucional da Auto Viacao Leste. Ele foi construido como uma aplicacao Next.js estatica, com foco em apresentacao comercial, solicitacao de orcamento e contato por WhatsApp/e-mail.

O codigo fonte principal fica em `src/`. A pasta `docs/` contem a versao estatica gerada para publicacao no GitHub Pages. A pasta `out/` e a saida padrao do `next build` quando o projeto esta configurado com `output: "export"`.

## Stack

- Framework: Next.js 15
- UI: React 19
- Linguagem: TypeScript
- Estilos: Tailwind CSS
- Animacoes: Framer Motion
- Icones: Lucide React
- Carrossel: Swiper
- Deploy previsto: GitHub Pages via export estatico

## Arquitetura de pastas

```text
.
|-- src/
|   |-- app/
|   |-- components/
|   |-- lib/
|   `-- styles/
|-- public/
|   `-- images/
|-- scripts/
|   `-- build-pages.mjs
|-- docs/
|-- out/
|-- next.config.ts
|-- tailwind.config.mjs
|-- eslint.config.mjs
|-- package.json
`-- tsconfig.json
```

## Codigo fonte

### `src/app/`

Contem as rotas do App Router. Cada pasta representa uma pagina do site.

Rotas atuais:

- `src/app/page.tsx` - home
- `src/app/passagens/page.tsx` - formulario/fluxo de orcamento
- `src/app/frota/page.tsx` - informacoes de frota
- `src/app/destinos/page.tsx` - roteiros e destinos
- `src/app/servicos/page.tsx` - servicos oferecidos
- `src/app/institucional/page.tsx` - historia, valores e indicadores
- `src/app/contato/page.tsx` - atendimento e envio de mensagem
- `src/app/faq/page.tsx` - perguntas frequentes
- `src/app/horarios/page.tsx` - horarios e atendimento sob consulta
- `src/app/area-do-cliente/page.tsx` - area do cliente
- `src/app/minhas-viagens/page.tsx` - acompanhamento de solicitacoes
- `src/app/politica-de-privacidade/page.tsx` - politica de privacidade
- `src/app/termos-de-uso/page.tsx` - termos de uso

O arquivo `src/app/layout.tsx` define metadados globais, fontes e o layout HTML base.

### `src/components/`

Componentes reutilizaveis organizados por dominio:

- `booking/` - busca e solicitacao de orcamento
- `destinations/` - destaques de destinos
- `fleet/` - apresentacao da frota
- `hero/` - hero da home e chamada final
- `institutional/` - depoimentos e blocos institucionais
- `layout/` - navbar e footer
- `services/` - servicos comerciais

### `src/lib/`

- `contact.ts` centraliza telefone, e-mails, cidade, numero do WhatsApp e montagem de URL do WhatsApp.
- `site.ts` centraliza `basePath` e `publicPath`, importantes para funcionamento correto no GitHub Pages.
- `utils.ts` contem o helper `cn`, usado para juntar classes CSS com `clsx` e `tailwind-merge`.

### `src/styles/`

`globals.css` importa Tailwind e define:

- variaveis CSS de cor
- reset basico
- scrollbar customizada
- classes reutilizaveis como `glass-card`, `btn-primary`, `section-padding`, `heading-xl` e `body-md`

## Configuracao do Next.js

O arquivo `next.config.ts` usa export estatico:

```ts
output: "export"
```

As imagens usam:

```ts
images: {
  unoptimized: true
}
```

Isso e necessario para export estatico e GitHub Pages, onde o otimizador de imagens do Next nao roda em servidor.

Quando `GITHUB_ACTIONS=true`, o projeto aplica:

```text
basePath: /autoviacaoleste
assetPrefix: /autoviacaoleste/
NEXT_PUBLIC_BASE_PATH=/autoviacaoleste
```

Por isso, ativos publicos usados em componentes devem passar por `publicPath()`.

Exemplo:

```tsx
import { publicPath } from "@/lib/site";

<Image src={publicPath("/images/logo-transparente.webp")} alt="Auto Viacao Leste" />
```

## Build e publicacao

### Build local

```bash
npm run build
```

Gera o site estatico em `out/`.

### Build para GitHub Pages

```bash
npm run build:pages
```

Esse script executa `scripts/build-pages.mjs`, que:

1. roda `next build` com `GITHUB_ACTIONS=true`
2. remove a pasta `docs/` anterior
3. copia o conteudo de `out/` para `docs/`
4. cria `docs/.nojekyll`

Depois disso, a pasta `docs/` pode ser usada como origem do GitHub Pages.

## Fluxo recomendado de alteracao

1. Alterar arquivos em `src/`, `public/`, `tailwind.config.mjs` ou configuracoes.
2. Rodar `npm run dev` para validar localmente.
3. Rodar `npm run build` para validar export estatico.
4. Se a mudanca for para publicacao no GitHub Pages, rodar `npm run build:pages`.
5. Conferir arquivos gerados em `docs/`.

## Dados editaveis frequentes

### Contato

Arquivo:

```text
src/lib/contact.ts
```

Campos principais:

- `phoneDisplay`
- `phoneHref`
- `email`
- `ombudsmanEmail`
- `city`
- `whatsappNumber`

### Navegacao

Arquivo:

```text
src/components/layout/Navbar.tsx
```

Edite o array `navItems` para adicionar, remover ou renomear links do menu.

### Rodape

Arquivo:

```text
src/components/layout/Footer.tsx
```

Edite `footerLinks` e os blocos de contato para atualizar links e chamadas do rodape.

### Tema visual

Arquivos:

```text
tailwind.config.mjs
src/styles/globals.css
```

Use `tailwind.config.mjs` para cores, sombras, fontes e animacoes. Use `globals.css` para classes globais reutilizaveis.

## Ativos e imagens

Ativos usados no site devem ficar preferencialmente em:

```text
public/images/
```

Quando o ativo for referenciado por componentes React, use caminhos iniciados por `/images/...` junto com `publicPath()` quando houver risco de quebrar no GitHub Pages.

O projeto tambem possui copias de imagens em `images/` e arquivos exportados em `docs/images/`. A fonte preferencial para desenvolvimento e `public/images/`.

## Formularios e integracoes

Os formularios atuais sao voltados a experiencia de front-end e contato direto. Em geral:

- chamadas de orcamento montam mensagens para WhatsApp
- contatos usam `mailto:` ou links externos
- newsletter no footer confirma o cadastro localmente, sem integracao de backend

Para adicionar backend, CRM ou servico de e-mail, a recomendacao e criar uma camada dedicada em `src/lib/` e manter os componentes apenas chamando funcoes de servico.

## Cuidados com GitHub Pages

- Nao remover `output: "export"` sem mudar a estrategia de hospedagem.
- Nao referenciar imagens publicas com caminho absoluto manual se elas precisarem respeitar `basePath`.
- Rodar `npm run build:pages` antes de publicar alteracoes estaticas.
- Manter `docs/.nojekyll` para evitar processamento Jekyll no GitHub Pages.

## Qualidade e manutencao

Antes de abrir pull request ou publicar:

```bash
npm run build
```

Opcionalmente:

```bash
npm run lint
```

Se o lint falhar por incompatibilidade de script com a versao do Next, ajuste o script em `package.json` para usar ESLint diretamente.

## Problemas comuns

### Imagem aparece no desenvolvimento, mas nao no GitHub Pages

Verifique se o caminho passa por `publicPath()` e se o arquivo existe em `public/images/`.

### Links ou assets apontam para a raiz do dominio

Confirme se o build foi feito com:

```bash
npm run build:pages
```

Esse comando define `GITHUB_ACTIONS=true` durante o build.

### Alterei `src/`, mas o site publicado nao mudou

Rode novamente:

```bash
npm run build:pages
```

A pasta `docs/` precisa ser regenerada porque ela contem a versao publicada.
