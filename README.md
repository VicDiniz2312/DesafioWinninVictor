![cypress](https://github.com/VicDiniz2312/blogdoAgiVictor/assets/36644010/3d07cf70-8991-467b-89e2-3df0a0948d34)

### Desafio Winnin Victor

Este projeto contém cenários de testes automatizados em JavaScript com Cypress

## Antes de tudo:
Você vai precisar dos aplicativos listados a seguir, baixados e instalados em sua máquina👇
- Node (https://nodejs.org/en/download)
- Visual Studio Code (https://code.visualstudio.com/download)
- Git ou Git Bash (https://git-scm.com/downloads)
- Criar um repositório local

## Instalação do Cypress:
Pelo cmd normal navegar até a pasta do repositório local criado anteriormente, executar este comando👇
```js  

npm init –y 

```

## Clonando o repositório:
Abrir o Git bash e navegar até a pasta do repositório local, executar este comando👇
```js  

git clone https://github.com/VicDiniz2312/DesafioWinninVictor.git

```

## Executando os testes e Configurando:
- Abrir o Visual Studio Code e selecionar a pasta do repositório local
- No terminal do VS Code executar o comando👇
```js  

npm install -g cypress

```
- Em seguida, adicionar na estrutura de _scripts_ o script _“cypress:open”:”cypress open”_ no arquivo _package.json_ do projeto
- Pelo terminal do VS Code, agora temos a oportunidade de executar os testes de 2 maneiras👇
1. Através do "dashboard" do cypress: Executando o comando abaixo no terminal
```js  

npm run cypress:open

```
Neste momento o "dashboard" do cypress é aberto. O usuário precisa escolher o tipo do teste como "E2E Testing", selecionar o browser onde os testes serão executados e por fim clicar no teste que será executado(specs).


2. Em headless/cmd: Executando o comando abaixo no terminal
```js  

npm run headless_

```
Este script já está configurado no arquivo _package.json_ do projeto

## Integrando e Executando os testes no CI/CD do Github:

```
No menu Actions do projeto, é possível
visualizar e executar os cenários desenvolvidos.
Execução implementada através do workflow_dispatch
no Github Actions. Toda vez que é realizado um push
no projeto o workflow é executado.





