
# Rocketseat-Ignite-ReactJS - 2021

> Este curso está sendo de enorme valia para  a minha vida de formação e profissional. 
<hr>

> Aqui será registrado e apresentado todos os conceitos e práticas desde o preparo do Ambiente para codar até pontos mais avançados que é a capacidade de executar projetos. Irei tentar organizar e detalhar da melhor forma possível para que quem for consultar este material, consiga entender e compreender o quão magnifica é esta ferramenta. Seja Bem vindo, DEV ! 


# Arquivos, Pastas e Bibliotecas

###  1. Package.json (Arquivo)
Para inicializar projetos que envolvam JS <React, Node, React Native>, criamos o package.json:
 
	 yarn init -y
	 
	 

 - package.json  (Vide Arquivo)

>  é onde fica o registro de informações principais do projeto. O Nome, a Versão, qual é o Arquivo Principal que será executado, Licença e, por ultimo e não menos importante, as Dependências do Projeto (Bibliotecas instaladas).

###  2. React (Biblioteca)
	yarn add react
	
> pasta e arquivo criados são:
- ...nome_modules  (Vide Pasta)
     > estará presente em todos os projetos JavaScript.  Essa pasta armazena os códigos das dependências que são instaladas na aplicação.

 - nome_modules > react 
     > estará presente em todos os projetos JavaScript.  Essa pasta armazena os códigos das dependências que são instaladas na aplicação. O *react*, por exemplo, está contido nesta pasta. O react pode ser utilizado para Mobile em conjunto com react native, pode ser utilizado para criação de interfaces para Televisão, Realidade Virtual, ou seja, é utitilizado para criação de qualquer tipo de interface. 
 - yarn-lock (Vide Arquivo)
     >


###  2. React - Dom (Biblioteca)
	yarn add react-dom
	
 - ...nome_modules > react-dom
     > ela permite que o react se comunique com a árvore de elementos do HTML. Para que haja a possiblidade de inserção de elementos em tela, remover elementos em tela.

###  2.  src (Pasta)
		new folder
	
 -  src  (Vide Pasta)
     > aqui é onde fica todo o código criado pelo o desenvolvedor, principalmente o código JS.
     
###  2.  public (Pasta)
		new folder
	
 -  public  (Vide Pasta)
     > onde fica arquivos públicos como index.html, icones favicons robots.txt (que é usado para que o google reconheça quais páginas deve indexar ou ignotar ) .. por exemplo. Qualquer arquivo que precisa ser acessado diretamente do meio externo.
     - index.hmlt
	      >?

### 3. Babel (Biblioteca)
  > instalar e configurar o Babel no projeto para que seja possível transpilar o código escrito com react em um código que o browser consiga interpretar (JavaScript puro).

    yarn add @babel/core @babel/cli -D
    yarn add @babel/present-env -D
    yarn add babel-loader -D
    
 > "-D" : a dependência de desenvolvimento significa que a biblioteca não será utilizada quando o projeto for para produção, quando estiver Online.
 
 - nome_modules > @babel ...
   > babel serve para converter o código para uma maneira que todos os Browsers e todo o ambiente de aplicação consiga entender todos os códigos.  Isso porque tem várias funcionalidades do React a escrita de HTML dentro do próprio código do JS, que os navegadores não entendem, é aí que o Babel entra.
 - package.json 
   - @babel/cli: "versão"
     > é para poder executar o Babel pela a linha de comando. Digite yarn babel -h +ENTER no terminal, aparecerá um menu de opções para executar.
   -  @babel/core: "versão"
      > é basicamente a biblioteca do Babel, a grande maioria da funcionalidade do Babel estão contidas aqui.
   -  @babel/preset-env: "versão"
      >  é uma extensão do Babel que identifica qual ambiente a aplicação está sendo executada para converter o código da melhor maneira possível. Ex.: Browser ou NodeJS.
      -  babel-loader: "versão"
      >  é uma integração entre o Babel e o Webpack.

	new file
	
 -  babel.config.js  (Vide Arquivo)
     > usado para exportar a configuração do Babel.

###  4. Webpack (Biblioteca)
	yarn add webpack webpack-cli -D
	yarn add html-webpack-plugin -D
	yarn add webpack-dev-server -D
	
 - nome_modules > webpack
     >  configurar o Webpack para trabalhar em conjunto com o Babel. Enquanto o Babel transpila códigos JavaScript, o Webpack faz o mesmo mas para arquivos `.css`, `.png`, `.jpg`, `.sass`, etc, que são importados nos arquivos `.js` e `.jsx`.

- package.json 
   - webpack: "versão"
     > 
   -  webpack-cli: "versão"
     >
    - html-webpack-plugin:"versão"
	 > 
	-  webpack-dev-server
	> utillizado para automatizar o uso do comando "yarn webpack" para rodar a aplicação. Quando ocorrer alguma alteração, criará o arquivo Bundle.js automaticamente.
-  webpack
	> utillizado para automatizar o uso do comando "yarn webpack" para rodar a aplicação. Quando ocorrer alguma alteração, criará o arquivo Bundle.js automaticamente.
	
		 new file
		 
 - webpack.config.js  (Vide Arquivo)
     >aqui ficará contido todas as configurações.


###  4. Cross-Env (Biblioteca)
	yarn add cross-env -D
	
 - nome_modules > cross-env
     >  possibilita  a definição de variáveis ambiente independente do sistema operacional

- package.json 
   - cross-env: "versão"
     > 
   
	
		 new file
		 
 - webpack.config.js  (Vide Arquivo)
     >aqui ficará contido todas as configurações.

###  2.  style e css (Biblioteca)
	yarn add style-loader -D
	yarn add css-loader -D
	
 - nome_modules > css-loader
 - nome_modules > style-loader
     >  serve para fazer as configurações necessárias para que possamos importar arquivos `.css` dentro de arquivos JavaScript.

- package.json 
   - style-loader: "versão"
     > 
    - css-loader
   


		new folder
	
 -  styles  (Vide Pasta)
     > aqui é onde fica todo o código criado pelo o desenvolvedor, principalmente o código JS.
