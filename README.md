# DevQuiz

Uma SPA de quizzes para devs utilizando reactjs.

Nesse projeto são geradas questões aleatórias pelo serviço externo `https://opentdb.com/`, e montadas em tela.
As respostas são salvas e enviadas para o backend com a pontuação.

Essa api não precisa de nenhum cadastro prévio e pode ser utilizada sem restrições. Há uma opção em que é necessário o login e utilização do token. Mas para esse projeto não é necessário.

Para mais detalhes acessa a documentação da api em https://opentdb.com/api_config.php

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
