import type { NextApiRequest, NextApiResponse } from 'next'
import { clientMailTemplate, toMeMailTemplate } from '../../templates/mailtemplates';



export default function (req:NextApiRequest, res:NextApiResponse) {
    let nodemailer = require('nodemailer')
    require('dotenv').config()
    // https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        // host: 'smtp.ethereal.email',
        auth: {
            user: 'surya.master.dev@gmail.com',
            pass: process.env.PASSWORD
        },
        // secure: true,
    })
    // port: 587,
    // port: 465,

    // user: 'u6xx3vxwoetb3xvx@ethereal.email',
    // pass: 'Nwvt4MQDYtejBktYBf'
    
      const toMeMailData = {
        from: 'surya.master.dev@gmail.com',
        to: 'samsurya336@gmail.com',
        subject: `CLIENT ${req.body.name} ${req.body.email} Messaged You`,
        text: 'TEXT message',
        html: toMeMailTemplate(req.body.msg)
      }

      transporter.sendMail(toMeMailData, function (err:any, info:any) {
        if(err){
            console.log(err)
            throw err;
        }
        else{
            console.log(info)
        }
      })

      const toClientData = {
        from: 'surya_dev@gamil.com',
        to: req.body.email,
        subject: `Surya Dev confirmation email`,
        text: 'TEXT message',
        html: clientMailTemplate(req.body.name)
      }

      transporter.sendMail(toClientData, function (err:any, info:any) {
        if(err){
            throw err;
        }
        // else{
        //     console.log(info)
        // }
      })

    res.status(200).json({
        status:'SUCCESS',
        body:'Email Sent'
    })

}
  