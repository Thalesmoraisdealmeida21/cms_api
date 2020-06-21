<h1 align="center">
    CMS API
    <img alt="" src="./web/src/assets/logo.svg">
      
</h1>






<p align="center"
  Este é uma api para gerenciamento de públicações em blog, permitindo slavar públicações editar e excluir
</p>




<p align="center">
  <a href="https://github.com/Thalesmoraisdealmeida21">
    <img alt="Made by Thales Morais" src="https://img.shields.io/badge/Feito%20por-Thales%20Morais-brightgreen">
  </a>

  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/Thalesmoraisdealmeida21/cms_api">


</p>




---

## Sumario

<ul>
  <li><a href="#-ponto-de-partida">Ponto de Partida</a></li>
  <li><a href="#-funcionalidades-do-aplicativo">Funcionaldiades do Aplicativo</a></li>
  <li><a href="#-funcionalidades-do-aplicativo">Tecnologias</a></li>

</ul>

---



## 🚀 Ponto de Partida
Para executar este projeto execute o comando `npm install` para instalar todas as depedências do projeto

# Configurando o banco de dados
Após instalado as depêndencias do projeto configure o seu banco dados no arquivo que se encontra em `src/database/config/config.json`
com ele configurado execute o comando `npx sequelize db:create` para criar os eu banco de dados, feito isto execute o comando de migrações 
`npx sequelize db:migrate` após executado estes procedimentos o banco de dados ja está configurado.`

# Executando a API
Após o banco de dados configurado execute o comando `npm run dev` para executar o servidor de desenvolvimento.


## Observação
Caso queira executar está aplicações com o front-end baixe o projeto do dashboard no link <a href="https://github.com/Thalesmoraisdealmeida21/dashboardCms">https://github.com/Thalesmoraisdealmeida21/dashboardCms</a>




## 📋 Funcionalidades do Aplicativo
Estas são as funcionalidades da aplicação em cada um dos ambientes (Web, Mobile)

 - [x] Criação de Públicações
 - [x] Exclusão de Públicação
 - [x] Edição da Públicação
 - [x] Upload de imagem
 - [x] Autenticação JWT
 





### Tecnologias
Foi utilizado para construção deste projeto as seguitnes tecnologias:
- **Node.js**
- **Nodemailer**
- **sequelize**
- **Javascript**
- **Autenticação JWT**






