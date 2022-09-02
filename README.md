# Orange Notes | Esquenta Programa de Formação FCamara (em andamento)

<div id='top'></div>

_[Read it in English](#English)_

O **Orange Notes** é uma plataforma onde você pode organizar seus cursos, vídeo aulas, artigos e tudo que envolve seu aprendizado através de cards e checklists.

Esse projeto foi desenvolvido para um desafio proposto pela empresa [FCamara](https://www.fcamara.com.br/) como uma forma de preparação para o Programa de Formação de trainees que acontece periodicamente. Trata-se de uma simulação da etapa final do programa oficial, que consiste em um _**hackathon**_ com duração de 15 dias. No entanto, há a diferença de que, neste desafio, os projetos são individuais.

_Caso queira ver o projeto desenvolvido por mim e minha equipe no último Programa de Formação da FCamara, basta acessar [este repositório](https://github.com/catiuu/TechnicalShare_FCamara_front)._

| 🪧 Vitrine.Dev |                                                                                                                                         |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ✨ Nome        | **Orange Notes**                                                                                                                        |
| 🏷️ Tecnologias | React, Vite, Sass, HTML, json-server, headless-ui, react-icons                                                                          |
| 🚀 URL         | Veja como rodar localmente no item [**⚙️ Como usar**](#howto)                                                                           |
| 🔥 Desafio     | [Orange Notes - Regulamento e problemática](https://raw.githubusercontent.com/sucodelarangela/orange-notes/main/public/Regulamento.pdf) |

![](https://raw.githubusercontent.com/sucodelarangela/orange-notes/main/public/og-image.png#vitrinedev)

## Detalhes do projeto

<div>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <a href="https://sass-lang.com/" target='_blank'><img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/></a>
  <a href='https://headlessui.com/react/menu' target='_blank'><img src="https://img.shields.io/badge/Headless UI-66E3FF?style=for-the-badge&logo=headlessui&logoColor=black"/></a>
</div>

<div id="howto"></div>

### ⚙️ Como usar

Para experimentar a aplicação em sua totalidade, você pode roda-lo localmente. Para isso, siga as etapas a seguir:

1. Faça o download deste repositório através do botão verde **Code** no topo da página e, em seguida, clicando em **Download ZIP**. Ou, se preferir, através do terminal (Git Bash, Powershell, etc.), use o comando:

```
git clone https://github.com/sucodelarangela/orange-notes.git
```

2. Acesse a pasta do projeto com seu terminal;

3. Rode o comando `npm install` para instalar as dependências (você precisa ter o [Node.js](https://nodejs.org/en/download/) instalado);

4. Inicie o servidor localmente com o comando `npm run server`. Você deve receber a seguinte mensagem de confirmação:

```
> orange-notes@0.0.0 server
> json-server --watch src/data/db.json --port 8000


  \{^_^}/ hi!

  Loading src/data/db.json
  Done

  Resources
  http://localhost:8000/cards

  Home
  http://localhost:8000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

5. Para iniciar a aplicação, rode o comando `npm run dev` no terminal. Você deve receber a seguinte mensagem de confirmação:

```
> orange-notes@0.0.0 dev
> vite


  VITE v3.0.9  ready in 13504 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
```

6. Para usar a aplicação, abra o seu browser preferido e acesse o endereço `http://localhost:5173/`

<a href='#top'>🔼 Voltar ao topo</a>

---

<div id="English">

_English version_

## 🔎 Overview

**Orange Notes** is a web application where you can organize your training courses, videos, articles and everything about your studies through cards and checklists.

This project was developed for a challenge proposed by the company [FCamara](https://www.fcamara.com.br/) as preparation for their Selection and Training Program, which happens periodically. It works as a simulation of the final stage of the Program, which is a 15-day-long _**hackathon**_. However, in this challenge, the projects are developed individually instead of in groups.

_In case you want to see the project developed by my team during the last Program, you can visit [this repo](https://github.com/catiuu/TechnicalShare_FCamara_front)._

### ⚙️ How to use it

For full access to the app functionalities, you can run it locally on your machine. In order to do so, follow the steps below:

1. Download this repository by clicking the green **Code** button on top of the page and then clicking **Download ZIP** option. Or use the following command on your terminal (Git Bash, Powershell, etc.):

```
git clone https://github.com/sucodelarangela/orange-notes.git
```

2. Access the project root folder on your terminal;

3. Run `npm install` to install all project dependencies (you must have [Node.js](https://nodejs.org/en/download/) installed);

4. Start the json-server locally with the command `npm run server`. You should receive the following message:

```
> orange-notes@0.0.0 server
> json-server --watch src/data/db.json --port 8000


  \{^_^}/ hi!

  Loading src/data/db.json
  Done

  Resources
  http://localhost:8000/cards

  Home
  http://localhost:8000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

5. To start the application, run `npm run dev` on your terminal. You should receive the following message:

```
> orange-notes@0.0.0 dev
> vite


  VITE v3.0.9  ready in 13504 ms

  ➜  Local:   http://127.0.0.1:5173/
  ➜  Network: use --host to expose
```

6. To use the app, open your favorite browser and go to the URL `http://localhost:5173/`

<a href='#top'>🔼 Voltar ao topo</a>

---

Developed with 🧡 by [@sucodelarangela](https://angelacaldas.vercel.app)
