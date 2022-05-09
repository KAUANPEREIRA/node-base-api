import { Request,Response,NextFunction } from "express";
import {User} from '../models/User';


export const Auth = {
    private: async (req:Request,res:Response,next:NextFunction)=>{
        //fazer verificação de auth
        let sucess = false // variavel para auxiliar na autenticação com basic 

        console.log(req.headers.authorization)//ver no console o authorizathion

        if(req.headers.authorization){
            let hash:string =req.headers.authorization.substring(6)//subtring para começar da posição 6

            let decoded:string = Buffer.from(hash,'base64').toString()//converte base64 em string 
            let data:string []= decoded.split(':')//dividr o email e senha

            if(data.length === 2){
               let hasUser = await User.findOne({
                   where:{
                       email:data[0],
                       password:data[1]
                   }
               })
               if(hasUser){
                   sucess= true
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