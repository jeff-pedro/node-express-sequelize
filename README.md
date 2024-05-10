# Explorando Sequelize com Express.js e SQLite

> Repositório usado para explorar o [ORM Sequelize](https://sequelize.org/), utilizando-o para integrar uma API Rest desenvolvida com [Express.js](https://expressjs.com/) a uma base de dados [SQLite](https://www.sqlite.org/).


## 🤖 Tecnologias

<div align="center">
  <a href='https://nodejs.org/' target='_blank'><img src="https://img.shields.io/badge/Node.js-white?style=for-the-badge&logo=node.js&logoColor=green">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <a href='https://expressjs.com/en/starter/installing.html target='_blank'><img src="https://img.shields.io/badge/Express-1572B6?style=for-the-badge&logo=express&logoColor=white">
  <a href='https://www.alura.com.br/artigos/sqlite-da-instalacao-ate-primeira-tabela' target='_blank'><img src="https://img.shields.io/badge/SQLite-F6F5F2?style=for-the-badge&logo=sqlite&logoColor=blue"/></a>
  <a href='https://sequelize.org/docs/v6/getting-started/' target='_blank'><img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white"/></a>
  <a href='https://nodemon.io/' target='_blank'><img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white"/></a>
  <a href='https://eslint.org/' target='_blank'><img src="https://img.shields.io/badge/Code Style-eslint-ff69b4.svg?style=for-the-badge&logo=eslint"></a>
</div>


## 🧑🏽‍💻 Usando

Instalando as dependências
```shell
npm install
```

Criando o bando de dados
```shell
npx sequelize-cli db:create
```

Migrando as tabelas para o banco
```shell
npx sequelize-cli db:migrate
```

Populando as tabelas com dados
```shell
npx sequelize-cli db:seed:all
```

Subindo a aplicação
```shell
npm run dev
```


## 🔎 Explorado 

- Estruturação do projeto utilizando o padrão MVC;
- Abstração do acesso aos dados através da camada de _Services_;
- Utilização da herança de classes nas camadas de _Services_ e _Controller_ para reutilizar os métodos comuns de CRUD;
- [Criação de Modelos](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-model-and-migration), [Migragrações](https://sequelize.org/docs/v6/other-topics/migrations/) e [Seeders](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed) através do Sequelize-CLI;
- Uso de [Associações](https://sequelize.org/docs/v6/core-concepts/assocs/) e aplicação de seus [métodos especiais/mixins](https://sequelize.org/docs/v6/core-concepts/assocs/#special-methodsmixins-added-to-instances).
- Exclusão de registros usando a estratégia *Soft Delete* ao aplicar o conceito de [Paranaid Tables](https://sequelize.org/docs/v6/core-concepts/paranoid) suportado pelo sequelize.
- Adicionar novas migrações para fazer alteração rastreáveis na base de dados.
- Criacação de [escopos de modelo](https://sequelize.org/docs/v6/other-topics/scopes/).
- Criacação de [escopos de associação](https://sequelize.org/docs/v6/advanced-association-concepts/association-scopes/).
- [Validação](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/) de campos usando métodos buit-in do sequelize e validações customizadas.


## 📚 Referências
- 📚 [Sequelize docs](https://sequelize.org/docs/v6/)
- 🗞️ [REST: conceito e fundamento](https://www.alura.com.br/artigos/rest-conceito-e-fundamentos?_gl=1*1afry39*_ga*NzQ2MzgwODAwLjE3MTEyMjQ1NDA.*_ga_1EPWSW3PCS*MTcxNDc2OTY5NC45OS4xLjE3MTQ3NzAyMDguMC4wLjA.*_fplc*WERlTTljV0tqQ3FBVFRMeTQ5OEVGckxMY3FTSHZGaFhJbTcycEFrOTluYSUyRjhDaURvcEclMkZSbWlOZW80R2hocXNQQW50OEFlJTJCSyUyRmZCSUVpd3cxTlZRRTlRMEVCYmRyZkFGYVRlJTJGOG5DQjNQMiUyRjhsOTNkMjNvenRodjV1R2tRJTNEJTNE)
- 🗞️ [API Best Practices](https://www.sitepoint.com/build-restful-apis-best-practices/)
- 🎬 [Clean Architecture](https://cursos.alura.com.br/extra/alura-mais/clean-architecture-arquitetura-limpa-o-que-e--c204)
- 🗞️ [Normalização em banco de dados](https://www.alura.com.br/artigos/normalizacao-banco-de-dados-estrutura?_gl=1*wcsgsi*_ga*NzQ2MzgwODAwLjE3MTEyMjQ1NDA.*_ga_1EPWSW3PCS*MTcxNDc0ODgyMC45Ny4xLjE3MTQ3NDkzNzEuMC4wLjA.*_fplc*eVFSQUhObnJMY2YxYTIlMkZrNTRoS2R5MnFoOUpKdUI1ZTVCR1glMkJ4V3AxbFNqMjBhODdBN1NkaDlWNmpWaEV5QzNiTkFaZFh4OHRjUGhvWmNWYUVFRDJVeTVLdGNzck9sNyUyRko2M29NV2N6UlI1Wk9UczlES3c4U3U0VlZxQ1JRJTNEJTNE)
- [SQLite Tutoria - CHECK Constraint](https://www.sqlitetutorial.net/sqlite-check-constraint/)
