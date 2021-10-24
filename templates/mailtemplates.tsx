
const clientMailTemplate = (name:string):string => {
    return(
        `
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
                    box-sizing: border-box;
                }
                .card{
                    background: rgb(61,218,89);
                    background: linear-gradient(54deg, rgba(61,218,89,1) 0%, rgba(36,180,126,1) 100%);
                    color: #ffff;
                    padding: 30px;
                    border-radius: 10px;
                    box-sizing: border-box;
                }
                h4{
                    margin-bottom: 2px;
                    padding-bottom: 1px;
                }
        
                ::selection {
                    background-color: #24b47e;
                }
            </style>
        </head>
        <body>
        
            <div class='card_wrapper'>
                <div class='card'>
                    <h4>Hiii ${name},</h3>
                    <p>This is Surya, hope your good and safe and thank you for showing intrest in messaging me i have received your email and i will contact you shortly</p>
                    <p>Untill then, have a good day and cheers</p>
                </div>
            </div>
            
        </body>
        </html>
        `
    );
} 


const toMeMailTemplate = (data:string):string => {
    return(
        `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        
        </head>
        <body>
        
            <div>
                <p>${data}</p>
            </div>
            
        </body>
        </html>
        `
    );
} 


export {clientMailTemplate,toMeMailTemplate}