//migrate:latest

exports.up = function(knex, Promise) {
    return knex.schema.createTable('students',(table)=>{
        table.increments()
        table.text('firstName')
        table.text('lastName')
        table.text('photo')
        table.text('hometownLat')
        table.text('hometownLong')
        table.text('prevOccupation')
    })
};
//migrate:rollback

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students')
};
