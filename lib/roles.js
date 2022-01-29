const db = require('../db/connection');

getRoles = () => {
  return new Promise((res, rej)=>{
  const sql = `SELECT role.title, role.id, department.name, role.salary FROM role INNER JOIN department ON role.department_id=department.id`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      return rej(err)
    }
    res(rows);
  })
  })
}

addRole = (title, salary, department) => {
  return new Promise((res, rej)=>{
  const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
    
  db.query(`SELECT id FROM department WHERE name = '${department}'`, (err, data) => {
        const deptId = data[0].id;
        const params = [title, salary, deptId];
        db.query(sql, params, (err, rows) => {
        if (err) {
          return rej(err)
        }
        res(console.log('New role added.'));
    });
  });
  })
}

updateEmployeeRole = (employee, title) => {
  return new Promise((res, rej)=>{
  const sql = `UPDATE employee SET role_id = ? WHERE CONCAT(first_name, ' ',last_name)='${employee}'`;
      
  db.query(`SELECT id FROM role WHERE title='${title}'`, (err, data) => {
    const role_id = data[0].id;
    console.log(role_id);
    const params = role_id
    db.query(sql, params, (err, rows) => {
        if (err) {
          return rej(err)
        }
        resolve(console.log('Employee role was updated.'))
    });
  });
  })
};


module.exports = {getRoles, addRole, updateEmployeeRole}