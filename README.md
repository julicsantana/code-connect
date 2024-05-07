# Projeto Next.js 14 com Docker, Prisma e PostgreSQL

Este é um projeto Next.js 14 que utiliza Docker para gerenciar o ambiente de desenvolvimento, Prisma como ORM e PostgreSQL como banco de dados.

## Requisitos

Certifique-se de ter o Docker instalado em sua máquina antes de prosseguir.

## Instalação

1. Clone este repositório em sua máquina local:

```
git clone https://github.com/julicsantana/code-connect.git
cd code-connect
```

2. Instale as dependências do projeto:

```
npm install
```

## Configuração do Banco de Dados

Este projeto utiliza PostgreSQL como banco de dados e Docker para gerenciar o ambiente. Siga as instruções abaixo para configurar o ambiente de banco de dados:

1. Suba o ambiente do banco de dados PostgreSQL com Docker:

```
docker-compose up -d
```

2. Execute as migrations do Prisma para criar as tabelas necessárias:

```
npx prisma migrate dev
```

3. Opcionalmente, você pode adicionar dados iniciais ao banco de dados executando as seeds:

```
npx prisma db seed --preview-feature
```

## Configuração do Arquivo .env

O arquivo `.env` é usado para armazenar variáveis de ambiente sensíveis e personalizadas. Neste projeto, você deve configurar as seguintes variáveis:

- `POSTGRES_PRISMA_URL`: Esta variável deve conter a URL de conexão com o banco de dados PostgreSQL para o Prisma.
- `POSTGRES_URL_NON_POOLING`: Esta variável deve conter a URL de conexão com o banco de dados PostgreSQL para operações não agrupadas (non-pooling), como migrações e seeds.

Certifique-se de configurar corretamente essas variáveis no arquivo `.env` para que a aplicação possa se conectar ao banco de dados corretamente.

Exemplo de conteúdo do arquivo `.env`:

## Executando a Aplicação

Para iniciar o servidor Next.js, execute o seguinte comando:

```
npm run dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Comandos Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento do Next.js.
- `npm run build`: Compila o projeto para produção.
- `npm run start`: Inicia o servidor Next.js em produção.
- `npm run prisma`: CLI do Prisma para execução de comandos relacionados ao banco de dados.

<!-- ## Estrutura do Projeto

Aqui está a estrutura de diretórios do projeto:

```
.
├── prisma/ # Configurações e migrations do Prisma
├── public/ # Arquivos estáticos públicos
├── src/ # Código-fonte da aplicação
│ ├── actions/ # Ações da aplicação
│ ├── app/ # Componente principal da aplicação
│ ├── components/ # Componentes React reutilizáveis
│ ├── models/ # Modelos de dados da aplicação
├── docker-compose.yml # Configurações do Docker Compose
├── error.log # Arquivo de log de erros
├── combined.log # Arquivo de log combinado
├── .env # Arquivo de variáveis de ambiente
├── package.json # Dependências e scripts do projeto
└── README.md # Este arquivo
``` -->

## Contribuindo

Sinta-se à vontade para contribuir com este projeto enviando pull requests ou abrindo novas issues.

Este README.md fornece uma visão geral do projeto, os passos necessários para configurar e executar a aplicação, bem como informações sobre os comandos disponíveis e a estrutura do projeto. Sinta-se à vontade para adaptá-lo conforme necessário para o seu projeto específico.
