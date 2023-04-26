const { sendMail } =  require('../miscellaneousfiles/contactUsEmailManagement');

const sendEmailAgent = async(req, res) => {
    try {
        // {firstName,email,message} = req.body 
        let payLoad =  req.body;
        const emailResponse = await sendMail(payLoad);
        res.json({
            body:emailResponse,
            message:`Email has Send Success-Fully 👍`,
        })
    } catch (error) {
        console.log(error);
        res.json({
            message:error.message,
            data:false,
            result:null,
        })
    }
}


module.exports = {
    sendEmailAgent
}