## Projeto de desenvolvimento de jogo Web com WebRTC para a disciplina de Sistemas Multimídia do Curso de Engenharia de Telecomunicações do IFSC câmpus São José

## Projeto
 Projeto consiste em desenvolver um jogo de Sudoku que possibilite 2 ou mais jogadores resolver uma mesma tabela em tempo real.

 A aplicação permite o usuário criar um campo de sudoku de tamanho 9x9 com 4 níveis de dificuldade, sendo esses: easy, normal, hard e very hard. Quando o botão "new" é pressionado, o cronômetro será iniciado até o usuário parar ou resolver a tabela no botão "solve".

## Execução

Antes de iniciar a aplicação, deve-se instalar as dependências do backend e das bilbiotecas utilizadas. Para isso, deve-se executar o script build.sh com permissões.

```
    chmod +x build.sh
    ./build.sh
```
Assim que finalzar a instalação, o servidor já estará em executação e poderá ser acessado em http://localhost:42069

## Servidor Websocket

A aplicação possui 2 constas vinculadas que vão ser registradas em um Asterisk versão 16.16.0. Para acessar o primeiro usuário basta acessar http://localhost:42069/user1 e o segundo em http://localhost:42069/user2

## Chamada de vídeo entre os usuários

Para estabelecer a chamada é necessário inicialmente fazer a conexão com o Websocket clicando em 'Connect'. Após o websocket estar conectado, deve-se fazer o registro da conta clicando em 'Register-user'. Isso deve ser feito nos dois usários antes de tentar estabelecer a chamada.
Após ambos usuários estarem registrados, pode-se clicar em 'Iniate Video Session' e clicar em permitir que o navegador acesse seu device. O outro usuário deve conceder permissão para acessar o device também.



