let name =  password = 'nicko" OR "1" = "1' //input dari user

let sql = `SELECT * from users where username = "${name}" AND password = "${password}"`

console.log(sql)

//string escape => connection.escape
//placeholder => ? -> untuk value, ?? = untuk identifier (users, order by, dll)