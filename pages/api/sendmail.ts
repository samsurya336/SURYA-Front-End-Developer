import type { NextApiRequest, NextApiResponse } from 'next'

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//     res.send("Email Sent");
// };

const mailTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>

        .card_wrapper{
            width: 100%;
            max-width: 400px;
            padding: 20px;
            padding-bottom: 50px;
            box-sizing: border-box;
        }
        .card{
            background-color: #181818;
            color: #7e7e7e;
            padding: 30px;
            border-radius: 10px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
            box-sizing: border-box;
        }
        h4{
            margin-bottom: 2px;
            padding-bottom: 1px;
        }
    </style>
</head>
<body>

    <div class='card_wrapper'>
        <div class='card'>
            <h4>Hiii name</h3>
            <p>This is Surya, hope your good and safe and thank you for showing intrest in messaging me i have received your email.</p>
            <p>I will contact you shortly.</p>
        </div>
    </div>
    
</body>
</html>
`;


export default function (req:NextApiRequest, res:NextApiResponse) {
    let nodemailer = require('nodemailer')
    // https://medium.com/nerd-for-tech/coding-a-contact-form-with-next-js-and-nodemailer-d3a8dc6cd645
    console.log('Mail api Called')

    const transporter = nodemailer.createTransport({
        port: 587,
        host: 'smtp.ethereal.email',
        auth: {
            user: 'u6xx3vxwoetb3xvx@ethereal.email',
            pass: 'Nwvt4MQDYtejBktYBf'
        },
        // secure: true,
    })
    // port: 587,
    // port: 465,
    
      const toMeMailData = {
        from: 'surya_dev@gmail.com',
        to: 'samsurya336@gmail.com',
        subject: `This message is to mySelf`,
        text: 'TEXT message',
        html: mailTemplate
      }

      transporter.sendMail(toMeMailData, function (err:any, info:any) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })

      // const toClientData = {
      //   from: 'surya_dev@gamil.com',
      //   to: 'samsurya336@gmail.com',
      //   subject: `This message is to Client`,
      //   text: 'TEXT message',
      //   html: `<div>Html Body sample</div><p>Sent from:
      //   SURYA </p>`
      // }

      // transporter.sendMail(toClientData, function (err:any, info:any) {
      //   if(err)
      //     console.log(err)
      //   else
      //     console.log(info)
      // })


      // res.status(200)
    console.log('MAil Sent')

}
  