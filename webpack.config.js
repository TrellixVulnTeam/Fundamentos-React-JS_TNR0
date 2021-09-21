// yarn webpack 

//const { dirname } = require('path')
const path = require('path') // utilizado para adaptação de caminho devido a posição da barra  "\" "/"
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const isDevelopment= process.env.NODE_ENV !== 'production' // utilizado para identificar se é ambiente de desenvolvimento 

module.exports = {
    mode: isDevelopment ? 'development':'production', // modo de execução do webpack 
    devtool: isDevelopment ? 'eval-source-map':'source-map'  , // Verificar Navegador. Utilizado para localizar o erro na linha correta, facilitar o debug
    entry: path.resolve(__dirname, 'src', 'index.jsx'),  // Arquivo inicial da aplicação
    output: {// arquivo de saída
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {// config. para leitura de arquivos
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: path.resolve(__dirname, "public")
       },
    plugins:[
new HtmlWebpackPlugin({
    template:path.resolve(__dirname,'public','index.html') //config para <script src="../dist/bundle.js"></script> colocado no index.html
})

    ],
    module: { // config. de como a aplicação irá se comportar diante de vários tipos de importação
        rules: [{
            test: /\.jsx$/, // verifica se o arquivo é JS ou não para a importação. Indicando a extensão dele.
            exclude: /node_modules/, // exclui todos os arquivos dentro desta pasta
            use: 'babel-loader', // utilizar para visualizar / reconhecer

        },

        {
            test: /\.scss$/, // 
            exclude: /node_modules/, 
            use: ['style-loader','css-loader','sass-loader'],

        }
    

        ],
    }
}