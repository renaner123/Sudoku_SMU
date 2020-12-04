## Projeto de desenvolvimento de jogo Web com WebRTC para a disciplina de Sistemas Multimídia do Curso de Engenharia de Telecomunicações do IFSC câmpus São José

## Projeto
 Projeto consiste em desenvolver um jogo de Sudoku que possibilite 3 ou mais jogadores resolver uma mesma tabela em tempo real.

 A aplicação permite o usuário criar um campo de sudoku de tamanho 9x9 com 4 níveis de dificuldade, sendo esses: easy, normal, hard e very hard. Quando o botão "new" é pressionado, o cronômetro será iniciado até o usuário parar ou resolver a tabela no botão "solve".

## Execução

Antes de iniciar a execução, deve-se instalar as dependências que se encontram no arquivo package.json. Um exemplo de instalação é através do npm conforme abaixo.

```
    npm i
```

Para iniciar a aplicação é necessário compilar/executar o arquivo server.ts que se que se encontra dentro da pasta backend, e logo em seguida abrir o arquivo index.html. 

Por terminal o arquivo ts pode ser compilado com stc para gerar um arquivo js da seguinte forma:

```shell
    stc server.ts
    node server.js
```
Ou se prefeir pode usar npx

```shell
    npx ts-node server.ts
```


