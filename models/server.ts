import express, {Application} from "express";


class Server {

    //private app: express.Application; /7 usar esta sentencia para no importar {Application }^
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8080';
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Server running on port '+ this.port);
            
        });
    }
}

export default Server;