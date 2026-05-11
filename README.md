# Auto Viação Leste

Repositório do site institucional da **Auto Viação Leste**, desenvolvido como entrega profissional para apresentação da empresa, seus serviços de turismo rodoviário, frota, roteiros sob consulta e canais de atendimento.

O projeto foi estruturado para oferecer uma experiência moderna, responsiva e de fácil manutenção, com geração estática para publicação em ambientes como GitHub Pages.

## Objetivo

O site tem como objetivo fortalecer a presença digital da Auto Viação Leste, centralizando informações institucionais e comerciais em uma interface clara, confiável e compatível com diferentes dispositivos.

Principais finalidades:

- Apresentar a empresa, sua proposta de valor e seus serviços.
- Divulgar frota, roteiros, excursões e viagens sob consulta.
- Facilitar solicitações de orçamento por WhatsApp e canais de contato.
- Disponibilizar páginas institucionais, dúvidas frequentes e informações legais.
- Gerar uma versão estática do site para publicação simplificada.

## Tecnologias Utilizadas

- **Next.js 15** com App Router
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**
- **Swiper**

## Requisitos

- Node.js 20 ou superior
- npm

## Instalação

```bash
npm install
```

## Ambiente de Desenvolvimento

```bash
npm run dev
```

Após iniciar o servidor local, acesse:

```text
http://localhost:3000
```

## Scripts Disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento. |
| `npm run build` | Gera a versão estática do projeto na pasta `out/`. |
| `npm run build:pages` | Gera a versão preparada para GitHub Pages e copia o resultado para `docs/`. |
| `npm run start` | Inicia o servidor de produção do Next.js. |
| `npm run lint` | Executa a verificação de lint configurada no projeto. |

## Estrutura do Projeto

```text
src/
  app/                  Páginas e rotas do App Router
  components/           Componentes reutilizáveis da interface
  lib/                  Configurações, contatos e utilitários
  styles/               Estilos globais e utilitários do Tailwind
public/
  images/               Logos, favicon e imagens públicas
scripts/
  build-pages.mjs       Script de build para GitHub Pages
docs/                   Saída estática utilizada para publicação
```

## Páginas Implementadas

- `/` - página inicial
- `/passagens` - solicitação de orçamento
- `/frota` - apresentação da frota
- `/destinos` - roteiros e destinos sob consulta
- `/servicos` - serviços oferecidos
- `/institucional` - informações institucionais
- `/contato` - canais de atendimento
- `/faq` - perguntas frequentes
- `/horarios` - informações de atendimento e horários
- `/area-do-cliente` - área do cliente
- `/minhas-viagens` - acompanhamento de solicitações
- `/politica-de-privacidade` - política de privacidade
- `/termos-de-uso` - termos de uso

## Publicação

O projeto utiliza exportação estática por meio da configuração:

```ts
output: "export"
```

Para gerar a versão de publicação em GitHub Pages, execute:

```bash
npm run build:pages
```

Esse comando:

1. Executa o build do Next.js com configuração específica para GitHub Pages.
2. Gera os arquivos estáticos em `out/`.
3. Copia a saída final para `docs/`.
4. Cria o arquivo `.nojekyll`, necessário para evitar processamento indevido pelo GitHub Pages.

No GitHub Pages, a publicação deve ser configurada para utilizar a pasta `docs/` da branch principal.

## Configurações Importantes

- Dados oficiais de contato: `src/lib/contact.ts`
- Caminhos públicos e suporte ao `basePath`: `src/lib/site.ts`
- Metadados globais do site: `src/app/layout.tsx`
- Tema visual: `tailwind.config.mjs`
- Estilos globais: `src/styles/globals.css`
- Build para publicação: `scripts/build-pages.mjs`

## Manutenção

Para alterações de conteúdo, layout ou comportamento, a edição deve ser feita preferencialmente nos arquivos em `src/`. As pastas `out/` e `docs/` representam saídas geradas pelo processo de build.

Fluxo recomendado:

1. Editar os arquivos fonte em `src/` ou ativos em `public/`.
2. Validar localmente com `npm run dev`.
3. Gerar o build com `npm run build`.
4. Para publicação no GitHub Pages, executar `npm run build:pages`.
5. Revisar a saída estática em `docs/`.

## Observações Técnicas

- O projeto utiliza `next/image` com imagens não otimizadas, adequado para exportação estática.
- O `basePath` é aplicado automaticamente durante o build para GitHub Pages.
- Ativos públicos usados nos componentes devem considerar `publicPath()` quando necessário.
- Formulários e chamadas comerciais priorizam contato direto por WhatsApp, telefone e e-mail.

## Status

Projeto institucional em desenvolvimento e manutenção contínua.
