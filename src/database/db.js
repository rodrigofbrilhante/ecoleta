//importar a dependencia do sqlite3
//verbose: dar informacoes
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer alteracoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

//exportar o objeto para ser usado em outro local
module.exports = db

 //utilizar o objeto de banco de dados para nossas operacoes
 /*db.serialize(()=>{

    //criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );

    `)

    //inserir dados na tabela
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`
    const values=[
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
        "Colectoria",
        "Guilherme Gemballa, Jardim América",
        "Numero 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos eletrônicos, Lâmpadas"
    ]
    function afterInsertData(err){
        if(err){
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    //db.run(query, values, afterInsertData)

    //consultar os dados
    db.all(`SELECT name FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }
        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })
    
    //deletar dados
    db.run(`DELETE FROM places WHERE id=?`, [3], function(err){
        if(err){
            return console.log(err)
        }
        console.log("Registros deletados com sucesso!")
    })


 })*/