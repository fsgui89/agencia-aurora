# Agência Aurora

[English](#english) | [Português](#portugues)

[Live Demo](https://fsgui89.github.io/agencia-aurora/) · [Repository](https://github.com/fsgui89/agencia-aurora)

<a id="english"></a>

## English

A responsive digital agency landing page built with reusable React components and CSS Modules.

### Overview

A presentation interface for a fictional digital agency, organizing its message, service offering and contact call to action into a short, scannable page.

### Tech Stack

Next.js • React • TypeScript • CSS Modules

Tailwind CSS is present in the development dependencies, but the implemented interface is styled with CSS Modules and global CSS.

### Features

- Hero section with an illustration and contact call to action.
- Four service cards: Web Design, Digital Marketing, SEO and Consulting.
- In-page links to the services section and contact footer.
- Responsive header, hero and service grid.

### Technical Highlights

- Next.js App Router composes the page from Header, HeroSection, ServicesSection and Footer.
- A typed ServiceCard component renders service data from an array.
- CSS Modules scope each section's styles, with media queries changing the column layout.
- next/image displays the existing local SVG illustration.
- Static export is configured in next.config.ts; the existing workflow publishes the out directory to GitHub Pages.

### Getting Started

Prerequisites: Git, Node.js 22.12 or later compatible with the dependencies, and npm.

```bash
git clone https://github.com/fsgui89/agencia-aurora.git
cd agencia-aurora
npm ci
npm run dev
```

Open [http://localhost:3000/](http://localhost:3000/) (or the port reported by Next.js).

Available commands:

```bash
npm run build
npm run lint
```

The build exports a static site to `out/`, as configured by `output: 'export'`. The existing workflow publishes that directory to GitHub Pages. Although a `start` script exists, this project uses static export; preview its build with a static file server serving `out/`.

### Project Structure

- `app/`: page, root layout, metadata and global styles.
- `components/`: section components and their CSS Modules.
- `public/hero-aurora.svg`: hero illustration.
- `next.config.ts`: static export and GitHub Pages base path.

### Implementation Scope

This is a presentation page with static content. The contact call to action points to the footer; there is no contact submission service. The header also contains Results and Clients links whose target sections are not implemented.

### Preview

Existing project preview maintained in the portfolio repository.

![Agência Aurora preview](https://raw.githubusercontent.com/fsgui89/portfolio-guilherme-ferreira/main/public/images/projects/agencia-aurora.png)

### Author

**Guilherme Ferreira**  
React Developer

[GitHub](https://github.com/fsgui89) · [LinkedIn](https://linkedin.com/in/guilhermefsdev) · [Portfolio](https://fsgui89.github.io/portfolio-guilherme-ferreira/)

---

<a id="portugues"></a>

## Português

Landing page responsiva de agência digital, construída com componentes React reutilizáveis e CSS Modules.

### Visão geral

Interface de apresentação para uma agência digital fictícia, organizando proposta, serviços e chamada de contato em uma página curta e fácil de consultar.

### Tecnologias

Next.js • React • TypeScript • CSS Modules

Tailwind CSS está nas dependências de desenvolvimento, mas a interface implementada utiliza CSS Modules e CSS global.

### Funcionalidades

- Seção principal com ilustração e chamada para contato.
- Quatro cards de serviços: Web Design, Marketing Digital, SEO e Consultoria.
- Links internos para a seção de serviços e o rodapé de contato.
- Cabeçalho, seção principal e grade de serviços responsivos.

### Destaques técnicos

- O App Router do Next.js compõe a página com Header, HeroSection, ServicesSection e Footer.
- O componente tipado ServiceCard renderiza os serviços a partir de um array.
- CSS Modules isolam os estilos de cada seção, com media queries para ajustar as colunas.
- next/image exibe a ilustração SVG local existente.
- A exportação estática está configurada em next.config.ts; o workflow existente publica a pasta out no GitHub Pages.

### Como executar

Pré-requisitos: Git, Node.js 22.12 ou superior compatível com as dependências, e npm.

```bash
git clone https://github.com/fsgui89/agencia-aurora.git
cd agencia-aurora
npm ci
npm run dev
```

Abra [http://localhost:3000/](http://localhost:3000/) (ou a porta indicada pelo Next.js).

Comandos disponíveis:

```bash
npm run build
npm run lint
```

O build gera o site estático em `out/`, conforme `output: 'export'`. O workflow existente publica essa pasta no GitHub Pages. Apesar de existir um script `start`, este projeto usa exportação estática; para visualizar o resultado do build, utilize um servidor de arquivos estáticos em `out/`.

### Estrutura do projeto

- `app/`: página, layout raiz, metadados e estilos globais.
- `components/`: componentes de seção e seus CSS Modules.
- `public/hero-aurora.svg`: ilustração principal.
- `next.config.ts`: exportação estática e caminho base do GitHub Pages.

### Escopo da implementação

Página de apresentação com conteúdo estático. A chamada de contato leva ao rodapé; não há serviço de envio de formulário. O cabeçalho também contém links de Resultados e Clientes cujas seções de destino não estão implementadas.

### Prévia

A imagem existente na seção Preview acima é mantida no repositório do portfólio. A versão interativa está no link Live Demo no início deste README.

### Autor

**Guilherme Ferreira**  
React Developer

[GitHub](https://github.com/fsgui89) · [LinkedIn](https://linkedin.com/in/guilhermefsdev) · [Portfolio](https://fsgui89.github.io/portfolio-guilherme-ferreira/)

