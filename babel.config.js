module.exports ={
 presets:[
     '@babel/preset-env',
     ['@babel/preset-react',{

        runtime:'automatic' // rodar a biblioteca react sem a importação
     }]
 ]

};