# Angular 2 CLI Test

Um projeto de teste desenvolvido em Angular 2, utilizando Angular CLI. Desenvolvido por Bruno Duarte Brito.

Consiste em:

  * [Template Website](https://github.com/brunodb3/angular2-starter)

> Este projeto foi desenvolvido Bruno Duarte Brito mantendo em mente o código open-source.

### Versão
0.0.1

### Tecnologia envolvida

Lista de tecnologias e linguagens de programação envolvidas:

* [CSS3](http://www.w3schools.com/css/css3_intro.asp)
* [HTML5](http://www.w3schools.com/html/html5_intro.asp)
* [NodeJS](https://nodejs.org)
* [TypeScript](https://www.typescriptlang.org/)
* [Angular CLI](https://cli.angular.io/)
* [AngularJS 4.0.0](https://angular.io/)

### Instalação

Antes de baixar o repositório, tenha certeza que sua máquina possui [NodeJS](https://nodejs.org/en/) e [Angular CLI](https://cli.angular.io/)

Clone o repositório em sua máquina:

```sh
$ git clone [url-do-repositorio]
$ cd [pasta-do-repositorio]
```

Então, prepare a plataforma, baixe os módulos e abra o projeto no navegador:

```sh
$ npm install # instala todos os módulos do npm
$ ng serve # abre um servidor local de desenvolvimento
```

Os arquivos do website estarão na pasta ```src```.

### Produção

Para realizar a build final do projeto (versão para produção, minificada), execute o seguinte comando:

```sh
$ ng build --prod  # realiza a build em ambiente produção do projeto
```


Os arquivos minificados e prontos para envio ao servidor estarão na pasta ```dist```.

*Passe o argumento ```--aot``` para realizar a compilação [ahead-of-time](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)*

Para abrir um servidor local em modo produção, basta executar:

```sh
$ ng serve --prod
```

*Para saber mais sobre o processo de build utilizado, visite [Angular CLI](https://cli.angular.io/)*

### Demo

Estou deixando uma demo do projeto rodando em um servidor Firebase, você pode acessá-la por [aqui](https://angular2-starter-6867f.firebaseapp.com/)

**Bruno Duarte Brito - 2017**
