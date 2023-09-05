
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
        const {  menteeID, mentorID } = req.body;
        const query = `
            INSERT INTO reservations ( menteeID, mentorID)
            VALUES (?, ?);
        `;
    
        db.query(query, [menteeID, mentorID], (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    status: 500,
                    error: "An error occurred while making the reservation."
                });
            } else {
                res.json({
                    status: 200,
                    msg: "Reservation made successfully."
                });
            }
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
    deleteReservation(req,res){
        const query = `
        DELETE FROM Reservations
        WHERE resID =${req.params.id};
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
module.exports =reservations