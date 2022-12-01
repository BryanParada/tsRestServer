import express, {Application} from "express"; 
import userRoutes from '../routes/user.routes';
import cors from 'cors';        

class Server {

    //private app: express.Application; /7 usar esta sentencia para no importar {Application }^
    private app: Application;
    private port: string;
    private apiPaths = {
        //ruta del endpoint
        users: '/api/users' 
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8080';

        //Metodos iniciales
        this.middlewares(); 
        this.routes();
    }

    //TODO: conectar bd

    middlewares(){
        //CORS
        this.app.use( cors() );

        //LECTURA DEL BODY
        this.app.use( express.json() );

        //CARPETA PUBLICA
        this.app.use( express.static('public'));
    }

    routes(){
        this.app.use( this.apiPaths.users, userRoutes)
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Server running on port '+ this.port); 
        });
    }
}

export default Server;