
const db = require("../config")
class reservations{
    fetchReservations(req, res) {
        const query = `
        SELECT r.resID, a.firstName, a.lastName, a.image, a.availDate, a.startTime, a.endTime
        FROM reservations  r
        INNER JOIN mentors a ON r.mentorID=a.mentorID;
    `;
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
 addReservations(req, res) {
        const data = req.body;
        const query = `
        INSERT INTO reservations 
        SET ?;
        `;
        db.query(query, [data], (err) => {
            if (err) {
                console.error("Error registering favourite :", err);
                return res.status(500).json({
                    status: 500,
                    error: "Failed to make reservation "
                });
            }
            res.json({
                status: res.statusCode,
                msg: "favourite  registered successfully"
            });
        });
    }
    updateReservations(req, res) {
        const query = `
        UPDATE reservations
        SET ?
        WHERE resID = ?;
        `;
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "The record was updated."
            });
        });
    }
  deleteReservation(req, res, resID) {
    const query = `
        DELETE FROM reservations
        WHERE resID = ${resID};
        `;
    db.query(query,(err)=>{
        if (err){
            res.end(err)
        }
        res.status(200).json({
            msg: "A  record was deleted."
        });
    });
}
}
module.exports =reservations
