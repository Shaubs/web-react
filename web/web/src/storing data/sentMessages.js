
exports.up = function(knex, Promise) {
	return knex.schema.createTable('sentMessages',function(table){
		table.increments();
		table.string('Phone number').notNullable();
		table.string('PV').notNullable();
		table.string('Password').notNullable();
		table.string('Source address').notNullable();
		table.string('Command type').notNullable();
		table.string('time of execution').notNullable();
		table.string('Command description');
		table.timestamps();
	});
  
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('sentMessages');
  
};
