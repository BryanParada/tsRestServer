import express, {Application} from "express"; 
import userRoutes from '../routes/user.routes';

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

         //Definir rutas
         this.routes();
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