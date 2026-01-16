# Construction Issues Management

Painel de gestão de apontamentos para obras, permitindo que engenheiros e gestores visualizem e filtrem problemas identificados em canteiros de obra.

**Demo:** [https://construction-issues-12rpud5bz-lrhernandes-projects.vercel.app/](https://construction-issues-12rpud5bz-lrhernandes-projects.vercel.app/)

## Funcionalidades

- Visualização de apontamentos em grid responsivo
- Filtro por status (OPEN, IN_PROGRESS, DONE) via GraphQL
- Busca por título (client-side)
- Indicadores visuais de prioridade (LOW, MEDIUM, HIGH)
- Estados de loading, empty state e error
- Server-side rendering (SSR) com Next.js

## Stack Tecnológica

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **TailwindCSS 4** - Estilização
- **Apollo Client** - Cliente GraphQL
- **Tailwind Variants** - Gestão de variantes de componentes

## Pré-requisitos

- Node.js 18+ instalado
- npm, yarn, pnpm ou bun

## Configuração do Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/lrhernandes/construction-issues.git
cd construction-issues
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
API_KEY=sua_chave_api_aqui
```

A chave de API é necessária para autenticação com o backend GraphQL.

### 4. Execute o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm start        # Inicia servidor de produção
npm run lint     # Executa linter
```

## Estrutura do Projeto

```
src/
├── actions/         # Server Actions (fetch de dados)
├── app/            # Rotas e páginas (App Router)
├── components/
│   ├── cards/      # Componente de card de issue
│   ├── containers/ # Container principal (Home)
│   ├── forms/      # Formulários e filtros
│   ├── icons/      # Ícones SVG
│   ├── lists/      # Listas de issues
│   └── ui/         # Componentes de UI reutilizáveis
└── types/          # Definições de tipos TypeScript
```

## Backend GraphQL

**URL:** `https://issues-fake-backend.vercel.app/graphql`

**Autenticação:** Header `x-api-key`

### Schema

```graphql
type Issue {
  id: ID!
  title: String!
  location: String!
  priority: Priority!
  status: Status!
  created_at: String!
}

enum Priority {
  LOW
  MEDIUM
  HIGH
}

enum Status {
  OPEN
  IN_PROGRESS
  DONE
}
```

### Query de Exemplo

```graphql
query GetIssues($status: Status) {
  issues(status: $status) {
    id
    title
    location
    priority
    status
    created_at
  }
}
```

## Deploy na Vercel

### Via Dashboard

1. Importe o repositório no Vercel
2. Configure a variável de ambiente:
   - Key: `API_KEY`
   - Value: sua chave da API
3. Deploy automático

### Via CLI

```bash
vercel
vercel env add API_KEY
vercel --prod
```

## Arquitetura

### Server Actions

O projeto utiliza Server Actions do Next.js para manter a API key segura no servidor. A função `getIssues()` em `src/actions/issues.ts` executa queries GraphQL no servidor e retorna os dados para o client.

### Otimizações

- **SSR (Server-Side Rendering):** Primeira carga já vem com dados
- **useMemo:** Filtragem de busca otimizada
- **useRef:** Evita fetches duplicados no mount inicial
- **Error Handling:** Try/catch em todas as requisições
