import { Request,Response,NextFunction } from "express";
import {User} from '../models/User';
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()


export const Auth = {
    private: async (req:Request,res:Response,next:NextFunction)=>{
        //fazer verificação de auth
        let sucess = false // variavel para auxiliar na autenticação com basic 

        console.log(req.headers.authorization)//ver no console o authorizathion

        if(req.headers.authorization){
           const [authType, token] = req.headers.authorization.split(' ')//separando meu token e tipo 
           if(authType==='Bearer'){
               try{
                JWT.verify(token,process.env.JWT_SECRET_KEY as string)
                sucess= true
               }
               
               catch(err){ 

               }
              
           }
        }
        if(sucess){
            next()
        }else{
            res.status(403)//Não autorizado
            res.json('Não autorizado')
        }

    }

}