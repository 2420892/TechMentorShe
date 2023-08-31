const db = require("../config");

class careers {
    fetchCareers(req, res) {
        const query = `
        SELECT careerID , userID, techField, techPosition, describtion, availDate, startTime, endTime
        FROM careers;
        `;

        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    fetchCareer(req, res) {
        const query = `
        SELECT careerID , userID,techField, techPosition, describtion, availDate, startTime, endTime
        FROM careers
        WHERE careerID = ${req.params.id};
        `;
        
        db.query(query, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result
            });
        });
    }

    addCareer(req, res) {
        const query = `
        INSERT INTO careers
        SET ?;
        `;

        db.query(query, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Your career bio was added"
            });
        });
    }

    updateCareer(req, res) {
        const query = `
        UPDATE careers
        SET ?
        WHERE careerID = ?;
        `;

        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Your career bio was successfully updated"
            });
        });
    }

    deleteCareer(req, res) {
        const query = `
        DELETE FROM careers
        WHERE careerID = ${req.params.id};
        `;

        db.query(query, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "A career bio was deleted."
            });
        });
    }
}

module.exports = careers;
