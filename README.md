# Demonstração de Arquitetura Limpa

Este repositório contém um exemplo de aplicação TypeScript que demonstra o uso de Arquitetura Limpa com a implementação de técnicas de plugins. A aplicação é desenvolvida seguindo os princípios da Arquitetura Limpa para manutenção, testabilidade e escalabilidade.

<img src="https://github.com/Cahmoraes/clean-architecture-example-typescript/blob/master/references/clean_arch.png" width="400" align="center">

## Requisitos

- Node.js (v14 ou superior)
- npm (ou yarn)

## Configuração

Clone o repositório:

```sh
   git clone git@github.com:Cahmoraes/clean-architecture-example-typescript.git
   cd clean-architecture-example-typescript
```

Instale as dependências:

```sh
  npm install
```

Crie um arquivo `.env` na raiz do projeto e defina a variável `BASE_URL`:

```env
BASE_URL=https://jsonplaceholder.typicode.com
HTTP_CLIENT=AXIOS | FETCH | TEST
```

## Uso

Execute o exemplo com o seguinte comando:

```sh
npm start
```

Isso irá usar o URL base fornecido no arquivo `.env` para demonstrar o uso da Arquitetura Limpa. O código fonte relevante está no arquivo `main.ts`.

## Estrutura do Projeto

- `todo/`: Contém a implementação dos casos de uso e as abstrações de gateway e presenter do bounded context todo.
- `post/`: Contém a implementação dos casos de uso e as abstrações de gateway e presenter do bounded context post.
- `core/`: Configurações gerais da aplicação, como variáveis de ambiente (`env.ts`).
- `infra/`: Implementações concretas, como o cliente HTTP e gateways.
- `main.ts`: Ponto de entrada do aplicativo.
