const mysql =require('mysql2');

const pool =mysql.createPool({
    host : 'localhost',
    user: 'root',
    database: 'node-complete',
    password: '#Maddy@1036'
});


module.exports=pool.promise();
