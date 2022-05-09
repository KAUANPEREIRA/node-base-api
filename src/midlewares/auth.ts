import { Request,Response,NextFunction } from "express";


export const Auth = {
    private: (req:Request,res:Response,next:NextFunction)=>{
        //fazer verificação de auth
        let sucess = false

        if(sucess){
            next()
        }else{
            res.status(403)//Não autorizado
            res.json({'Não autorizado'})
        }

    }

}