
const db = require("../config")
class availability{
    fetchAvailability(req, res) {
       
        const query = `
        SELECT a.availID, u.firstName, u.lastName, c.describtion,
        c.availDate, c.startTime, c.endTime
        FROM availability  a
        JOIN users u ON a.userID = u.userID
        JOIN careers AS c ON a.careerID = c.careerID;
    `;
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    
    // fetchAvailability(req, res) {
       
    //     const query = `
    //     SELECT a.availID, u.firstName, u.lastName, c.describtion,
    //     a.availDate, a.startTime, a.endTime
    //     FROM availability AS a
    //     JOIN users AS u ON a.userID = u.userID
    //     JOIN careers AS c ON a.careerID = c.careerID
    //     WHERE a.availID = ${req.params.id};
    
    //     `;
    //     db.query(query, (err, results) => {
    //         if (err) throw err;
    //         res.json({
    //             status: res.statusCode,
    //             results
    //         });
    //     });
    // }
    addAvailability(req, res) {
        const query = `
        INSERT INTO availability
        SET ?;
        `;

        db.query(query, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Your record was added"
            });
        });
    }
    
    
 
    updateAvailability(req, res) {
        const query = `
        UPDATE availability
        SET ?
        WHERE availID = ?;
        `;
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The record was updated."
            });
        });
    }
    
    deleteAvailability(req,res){
        const query = `
        DELETE FROM availability
        WHERE availID =${req.params.id};
        `;
        db.query(query,(err)=>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                msg: "A  record was deleted."
            });
        });
    }


}
module.exports =availability