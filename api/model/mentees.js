const db = require("../config")
const{hash,compare,hashSync}=require('bcrypt')
const {createToken} = require('../middleware/AuthenticateMentee')

class mentees{
    fetchMentees(req,res){
        const query = `
        SELECT menteeID, firstName, lastName, emailAdd,  menteePass,  menteeAge, menteeRole, image
        FROM mentees;
        `
 
        db.query(query, (err,results)=>{
            if(err) throw err
            res.json({
                status : res.statusCode,
                results
            })
        })

    }
    fetchMentee(req,res){
        const query = `
        SELECT menteeID, firstName, lastName, emailAdd,  menteePass,  menteeAge, menteeRole, image
        FROM mentees
        WHERE menteeID =${req.params.id};
        `
        db.query(query,(err,result)=>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                result
            })
        })
    }
    login(req, res) {
        const {emailAdd, menteePass} = req.body
        // query
        const query = `
        SELECT menteeID, firstName, lastName,   emailAdd,  menteePass,  menteeAge, menteeRole,image
        FROM mentees
        WHERE emailAdd = '${emailAdd}';
        `
        db.query(query, async (err, result)=>{
            if(err) throw err
            if(!result?.length){
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email."
                })
            }else {
                await compare(menteePass,
                    result[0].menteePass,
                    (cErr, cResult)=>{
                        if(cErr) throw cErr
                        // Create a token
                        const token =
                        createToken({
                            emailAdd,
                            menteePass
                        })
                        if(cResult) {
                            res.json({
                                msg: "You are Logged in",
                                token,
                                result: result[0]
                            })
                        }else {
                            res.json({
                                status: res.statusCode,
                                msg:
                                "Invalid password or you have not registered"
                            })
                        }
                    })
            }
        })
    }
    async addMentee(req,res){
        const data = req.body
        data.menteePass = await hash(data.menteePass,15)
        const mentee = {
            emailAdd : data.emailAdd,
            menteePass : data.menteePass
        }
        const query =` 
        INSERT INTO mentees
        SET ?;
        `
        db.query(query,[data], (err)=>{
        if(err) throw err
        let token = createToken(mentee)
        res.json({
            status : res.statusCode,
            token,
            msg: "you are now registered."
        })
    })
    }
    updateMentee(req,res){
        const data =req.body
        if(data.menteePass){
            data.menteePass = hashSync(data.menteePass,15)
        }
        const query =`
        UPDATE mentees
        SET ?
        WHERE menteeID=?;
        `
        db.query(query, [data, req.params.id],(err)=>{
           if (err) throw err
           res.json({
            status: res.statusCode,
            msg: "The mentee record was updated."

           })
     
        })
    }
    deleteMentee(req,res){
        const query = `
        DELETE FROM mentees
        WHERE menteeID =${req.params.id};
        `
        db.query(query,(err)=>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                msg: "A mentee record was deleted."
            })
        })
    }
}
module.exports = mentees