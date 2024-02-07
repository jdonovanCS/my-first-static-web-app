
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const uniqueID = (req.query.uniqueID || (req.body && req.body.uniqueID));
    const algorithms = (req.query.algorithms || (req.body && req.body.algorithms));
    const responseMessage = algorithms
        ? "Hello! Algorithms have been saved and new ones have been returned."
        : "Algorithms failed";

    const database = new Database(config);
    database.executeQuery(`SELECT * from algorithm`).then(() => {console.log('Table queried');
    }).catch((err)=>{console.error(`Error querying table: ${err}`);
    });
    
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}