require("dotenv").config();

const knex = require("knex")(
	{
		client: "mysql",
		connection: {
		user: "admin",
        password: "Onstik1", 
		database: "ock",
		host: "127.0.0.1"
	}
}
)

const bookshelf = require("bookshelf")(knex) 

module.exports = bookshelf