const db = require('../db/connection');
getDepartments = () => {
  return new Promise((res, rej)=>{
  const sql = `SELECT * FROM department`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      return rej(err)
    }
    res(rows);
  })
})
}

addDepartment = (name) => {
  return new Promise((res, rej)=>{
  const sql = `INSERT INTO department (name) VALUES (?)`;
  const params = name;
      
  db.query(sql, params, (err, rows) => {
    if (err) {
      return rej(err) 
    }
    res(console.log('New department added.'));
  });
  })
}

module.exports = {getDepartments, addDepartment}