import app from "./app.js";
import {sequelize} from "./database/database.js"
//estos import sirven para crear las tablas en base a modelos
//cuando la base de datos esta vacia
//import "./models/Project.js";
//import "./models/Task.js";

async function main() {

    try {
        //await sequelize.authenticate();
        //la función sync() sirve para crear los modelos en la base de datos
        //pero para que los reconozca es necesario importar el modelo
        await sequelize.sync({force: false});
        console.log("Coneccion establecida con exito");
        const PORT = process.env.PORT || 3000;
        app.listen(PORT);
    
        console.log("servidor corriendo en el puerto", 3000);
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
   
}

main();
