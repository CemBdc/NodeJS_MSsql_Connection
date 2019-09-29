const sql = require('mssql');
 
let config = {
    user: 'dbuser1',
    password: 'psw',
    server: '127.0.0.1', // You can use 'localhost\\instance' to connect to named instance 
    database: 'TempDB'
 
}
 
const connection1 = new sql.Connection(config, (err) => {
    if(err) {
        throw err;
    }
 
    let request = new sql.Request(connection1); // or: var request = connection1.request(); 
    request.query('select * from Training', (err, recordset) => {
        // ... error checks 
 
        console.dir(recordset);
    });
 
});