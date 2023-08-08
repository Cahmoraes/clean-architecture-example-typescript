````markdown
# Demonstração de Arquitetura Limpa

Este repositório contém um exemplo de aplicação TypeScript que demonstra o uso de Arquitetura Limpa com a implementação de técnicas de plugins. A aplicação é desenvolvida seguindo os princípios da Arquitetura Limpa para manutenção, testabilidade e escalabilidade.

## Requisitos

- Node.js (v14 ou superior)
- npm (ou yarn)

## Configuração

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```
````

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto e defina a variável `BASE_URL`:
   ```env
   BASE_URL=https://api.example.com
   ```

## Uso

Execute o exemplo com o seguinte comando:

```sh
npm start
```

Isso irá usar o URL base fornecido no arquivo `.env` para demonstrar o uso da Arquitetura Limpa com técnicas de plugins. O código fonte relevante está no arquivo `main.ts`.

## Estrutura do Projeto

- `domain/`: Contém a implementação dos casos de uso e as abstrações de gateway.
- `core/`: Configurações gerais da aplicação, como variáveis de ambiente (`env.ts`).
- `infra/`: Implementações concretas, como o cliente HTTP e gateways.
- `main.ts`: Ponto de entrada do aplicativo.
