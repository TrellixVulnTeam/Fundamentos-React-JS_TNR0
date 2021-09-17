# Rocketseat-Ignite-ReactJS - 2021

> Este curso está sendo de enorme valia para  a minha vida de formação e profissional. 
<hr>

> Aqui será registrado e apresentado todos os conceitos e práticas desde o preparo do Ambiente para codar até pontos mais avançados que é a capacidade de executar projetos. Irei tentar organizar e detalhar da melhor forma possível para que quem for consultar este material, consiga entender e compreender o quão magnifica é esta ferramenta. Seja Bem vindo, DEV ! 


# Arquivos e Bibliotecas

###  1. Package.json (Arquivo)
Para inicializar projetos que envolvam JS <React, Node, React Native>, criamos o package.json:
 
	 yarn init -y
	 
	 

 - *package.json*

>  é onde fica o registro de informações principais do projeto. O Nome, a Versão, qual é o Arquivo Principal que será executado, Licença e, por ultimo e não menos importante, as Dependências do Projeto (Bibliotecas instaladas).

###  2. React (Biblioteca)
	yarn add react
	
> pastas criados são:

 - nome_modules > react
     > estará presente em todos os projetos JavaScript.  Essa pasta armazena os códigos das dependências que são instaladas na aplicação. O *react*, por exemplo, está contido nesta pasta.
 - yarn-lock
     >


###  2. React - Dom (Biblioteca)
	yarn add react-dom
	
 - nome_modules > react-dom
     > ela permite que o react se comunique com a árvore de elementos do HTML. Para que haja a possiblidade de inserção de elementos em tela, remover elementos em tela.

### 3. Babel (Biblioteca)
    yarn add @babel/core @babel/cli -D
    yarn add @babel/present-env -D
    yarn add babel-loader -D
    
 > "-D" : a dependência de desenvolvimento significa que a biblioteca não será utilizada quando o projeto for para produção, quando estiver Online.
 > 
 - nome_modules > @babel ...
   > babel serve para converter o código para uma maneira que todos os Browsers e todo o ambiente de aplicação consiga entender todos os códigos.  Isso porque tem várias funcionalidades do React a escrita de HTML dentro do próprio código do JS, que os navegadores não entendem, é aí que o Babel entra.
 - package.json 
   - @babel/cli
     > é para poder executar o Babel pela a linha de comando. Digite yarn babel -h +ENTER no terminal, aparecerá um menu de opções para executar.
   -  @babel/core
      > é basicamente a biblioteca do Babel, a grande maioria da funcionalidade do Babel estão contidas aqui.
   -  @babel/preset-env
      >  é uma extensão do Babel que identifica qual ambiente a aplicação está sendo executada para converter o código da melhor maneira possível. Ex.: Browser ou NodeJS.
      -  babel-loader
      >  é uma integração entre o Babel e o Webpack.


###  4. Webpack (Biblioteca)
	yarn add webpack webpack-cli -D
	
 - nome_modules > react-dom
     > Nessa aula iremos configurar o Webpack para trabalhar em conjunto com o Babel. Enquanto o Babel transpila códigos JavaScript, o Webpack faz o mesmo mas para arquivos `.css`, `.png`, `.jpg`, `.sass`, etc, que são importados nos arquivos `.js` e `.jsx`.
