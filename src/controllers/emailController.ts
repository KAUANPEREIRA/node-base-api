import { Request, Response } from 'express';
import { User } from '../models/User';
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const contato = async(req:Request, res:Response)=>{
    //passo 1 : configurar o transporter 
    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "8e890cc2d77573",
          pass: "3e910b4a61a04e"
        }
      });
    //passo 2 configurar a mensagem
    let message ={
        from:req.body.from,
        to:'kauanauan71@gmail.com',
        subject:req.body.subject,
        html:req.body.email,
        text:req.body.email

    }
    //passo 3 enviar a mensagem
    let info = await transport.sendMail(message)
    console.log('acredita',info)

    res.json({sucesso:true})
}