# DevQuiz

Uma SPA de quizzes para devs utilizando reactjs.

## Execution

Criando o build da imagem no docker:

```sh
docker build . -t devquiz-frontend
```

Criando o container e rodando-o:

```sh
docker run -d --name devquiz-frontend -p 5173:5173 devquiz-frontend
```

Aplicação está agora rodando em `http://localhost:5173`
