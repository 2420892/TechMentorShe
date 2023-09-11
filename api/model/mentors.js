const db = require("../config")
const{hash,compare,hashSync}=require('bcrypt')
const {createToken} = require('../middleware/AuthenticateMentor')

class mentors{
    fetchMentors(req,res){
        const query = `
        SELECT mentorID, firstName, lastName, emailAdd,  mentorPass,  mentorAge, mentorRole, image,techField,
        techPosition, describtion, availDate, startTime, endTime 
        FROM mentors;
        `
 
        db.query(query, (err,results)=>{
            if(err) throw err
            res.json({
                status : res.statusCode,
                results
            })
        })

    }
    fetchMentor(req,res){
        const query = `
        SELECT mentorID, firstName, lastName, emailAdd,  mentorPass,  mentorAge, mentorRole, image,techField,
        techPosition, describtion, availDate, startTime, endTime
        FROM mentors
        WHERE mentorID =${req.params.id};
        `
        db.query(query,(err,result)=>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                result
            })
        })
    }
    login2(req, res) {
        const {emailAdd, mentorPass} = req.body
        // query
        const query = `
        SELECT mentorID, firstName, lastName, emailAdd,  mentorPass,  mentorAge, mentorRole, image,techField,
        techPosition, describtion, availDate, startTime, endTime
        FROM mentors
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
                await compare(mentorPass,
                    result[0].mentorPass,
                    (cErr, cResult)=>{
                        if(cErr) throw cErr
                        // Create a token
                        const token =
                        createToken({
                            emailAdd,
                            mentorPass
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
    async register(req,res){
        const data = req.body
        data.mentorPass = await hash(data.mentorPass,10)
        const mentor = {
            emailAdd : data.emailAdd,
            mentorPass : data.mentorPass
        }
        const query =` 
        INSERT INTO mentors
        SET ?;
        `
        db.query(query,[data], (err)=>{
        if(err) throw err
        let token = createToken(mentor)
        res.json({
            status : res.statusCode,
            token,
            msg: "you are now registered."
        })
    })
    }
    updateMentor(req,res){
        const data =req.body
        if(data.mentorPass){
            data.mentorPass = hashSync(data.mentorPass,10)
        }
        const query =`
        UPDATE mentors
        SET ?
        WHERE mentorID=?;
        `
        db.query(query, [data, req.params.id],(err)=>{
           if (err) throw err
           res.json({
            status: res.statusCode,
            msg: "The mentor record was updated."

           })
     
        })
    }
    deleteMentor(req,res){
        const query = `
        DELETE FROM mentors
        WHERE mentorID =${req.params.id};
        `
        db.query(query,(err)=>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                msg: "A mentor record was deleted."
            })
        })
    }
}
module.exports = mentors
