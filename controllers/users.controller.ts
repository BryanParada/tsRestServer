import { Request, Response } from "express";
import User from '../models/user';


export const getUsers = async ( req: Request, res: Response) => {

    const users = await User.findAll();

    res.json({users});
}


export const getUser = async( req: Request, res: Response) => {

    const {id} = req.params;

    const user = await User.findByPk(id);
    
    if (user) { 
        res.json({ user }) ;
    } else{
        res.status(400).json({ msg: `There is no user with the id ${id}`});
    }
}

export const postUser = async( req: Request, res: Response) => {

    const {body} = req;

    try {

        const existsEmail = await User.findOne({
            where: {
                email: body.email
            }
        });

        if (existsEmail) {
            return res.status(400).json({
                msg: 'There is already an user with the email ' + body.email
            })
        }

        const user = await User.create(body); 

        res.json({ user })
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            msg: 'Contact the Admin' 
        })

    }
    

}

export const putUser = async( req: Request, res: Response) => {

    const {id}     = req.params;
    const { body } = req;
    
    try {

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(400).json({
                msg: 'There is no user with the id ' + id
            })
        }

        await user.update( body );

        res.json( user );
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            msg: 'Contact the Admin' 
        })

    }
}

export const deleteUser = async( req: Request, res: Response) => {

    const {id}     = req.params; 

    const user = await User.findByPk(id);
    if (!user) {
        return res.status(400).json({
            msg: 'There is no user with the id ' + id
        })
    }

    //☠☠☠ BORRAR FISICAMENTE ☠☠☠
    //await user.destroy();

    await user.update({status: false});
    
    res.json({
        msg: 'User deleted',
        user
    })
}


