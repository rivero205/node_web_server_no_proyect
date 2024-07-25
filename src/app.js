const { envs } = require ('./config/env')
const { startServer } = require ('./server/server')

const main = ()=> {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// Funcion agnostica autoconvocada
// Agnostica pues no tiene nombres
// Autoconvocada porque se ejecuta con los parentesis

(async () => {
    main()
})()