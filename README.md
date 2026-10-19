# Aurora UI

Biblioteca de componentes React documentada e padronizada com Storybook. O projeto centraliza os componentes de frontend reutilizáveis, descreve seu uso e comportamento em um catálogo navegável e os publica como pacote para as aplicações consumidoras.

## Sumário

- [Objetivo](#objetivo)
- [Componentes](#componentes)
- [Arquitetura](#arquitetura)
- [Stack](#stack)
- [Instalação e uso](#instalação-e-uso)
- [Desenvolvimento](#desenvolvimento)
- [Scripts](#scripts)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Adicionar um componente](#adicionar-um-componente)

## Objetivo

Evitar que cada aplicação reimplemente navegação, cabeçalho, rodapé e menus com estilos e comportamentos diferentes. A biblioteca oferece:

- componentes com aparência e API consistentes entre projetos;
- documentação viva no Storybook, com exemplos interativos e verificação de acessibilidade;
- tokens de design (cores, espaçamento, tipografia, breakpoints, sombras) compartilhados.

## Componentes

| Componente  | Categoria  | Descrição                                                              |
| ----------- | ---------- | ---------------------------------------------------------------------- |
| `Header`    | layout     | Cabeçalho com logo e itens de navegação.                               |
| `Footer`    | layout     | Rodapé com título, subtítulo e nome.                                   |
| `NavMenu`   | navigation | Menu de navegação horizontal para telas largas.                        |
| `DrawerNav` | navigation | Menu lateral em drawer com overlay, animações e suporte a dropdowns.   |
| `Dropdown`  | form       | Menu suspenso com controle de visibilidade e destaque.                 |

Hooks exportados: `useDropdown`, `useIsMobile` e `usePortalRenderer`. O último permite renderizar um componente em um elemento externo via portal.

Também são exportados o objeto `theme`, os tipos `NavItem` e `DropdownItem` e o `componentRegistry`, um catálogo programático dos componentes com id, categoria e props padrão.

## Arquitetura

- **Biblioteca desacoplada de aplicação**: a entrada `src/index.ts` define a API pública; tudo que não é exportado ali é interno.
- **Componentes controlados por dados**: itens de navegação são descritos por tipos (`NavItem` é uma união discriminada que diferencia link e botão com dropdown), o que dá segurança de tipos ao consumidor.
- **Estado visual por data attributes**: visibilidade e destaque são expressos em atributos, mantendo os estilos separados da lógica (`*.styles.ts`).
- **Hooks para comportamento reutilizável**: lógica de dropdown, detecção de mobile e portais fica fora dos componentes.
- **Tokens de design centralizados** em `src/theme`.
- **Build em múltiplos formatos**: Rspack gera os bundles UMD (`dist/index.js`) e ESM (`dist/index.esm.js`), e o `tsc` emite as declarações de tipos.
- **React como peer dependency**, para não duplicar a instância do React na aplicação.
- **Storybook com Rsbuild** como camada de documentação, com os addons de docs e de acessibilidade.

## Stack

| Área          | Tecnologia                           |
| ------------- | ------------------------------------ |
| UI            | React 19, Emotion                    |
| Linguagem     | TypeScript                           |
| Documentação  | Storybook 10 (Rsbuild), addon a11y   |
| Build         | Rspack (UMD e ESM), Rsbuild          |
| Roteamento    | React Router                         |
| Qualidade     | Biome                                |

## Instalação e uso

O pacote é consumido por tarball gerado pelo próprio projeto:

```bash
yarn add aurora-ui@<url-ou-caminho-do-tgz>
```

```tsx
import { DrawerNav, NavMenu, type NavItem } from "aurora-ui";

const items: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "Produtos",
    isButton: true,
    dropdownItems: [{ id: "1", label: "Camisetas", onClick: () => {} }],
  },
];

export function Menu() {
  return <DrawerNav items={items} />;
}
```

`DrawerNav` utiliza React Router; renderize-o dentro de um `Router`.

## Desenvolvimento

```bash
yarn install
yarn storybook        # catálogo em http://localhost:6006
yarn dev              # app de desenvolvimento (Rsbuild)
yarn package          # limpa, gera os bundles e o tarball (.tgz)
```

## Scripts

| Comando                | Descrição                                          |
| ---------------------- | -------------------------------------------------- |
| `yarn storybook`       | Executa o Storybook na porta 6006                  |
| `yarn build-storybook` | Gera a versão estática do Storybook                |
| `yarn dev`             | Servidor de desenvolvimento do Rsbuild             |
| `yarn build:lib`       | Gera os bundles UMD e ESM e as declarações de tipos |
| `yarn package`         | Gera o tarball para distribuição                   |
| `yarn clean`           | Remove `dist` e os tarballs                        |

## Estrutura do projeto

```
.storybook/       configuração do Storybook
src/
  components/     componentes e seus estilos
  hooks/          hooks reutilizáveis
  theme/          tokens de design
  types/          tipos públicos
  config/         registro programático de componentes
  stories/        stories do Storybook
  index.ts        API pública da biblioteca
rspack.config.*   configurações de build UMD e ESM
```

## Adicionar um componente

1. Crie o componente e seus estilos em `src/components/`.
2. Exporte-o em `src/index.ts`.
3. Registre-o em `src/config/component-registry.ts`.
4. Crie a story em `src/stories/` com descrição e variações de uso.
5. Valide a acessibilidade no painel a11y do Storybook e gere o pacote com `yarn package`.
