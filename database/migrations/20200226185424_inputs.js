exports.up = function (knex) {
    return knex.schema.createTable('inputs', tbl => {
        tbl.increments();
        tbl.string(`category`).notNullable();
        tbl.string(`item`).notNullable();
        tbl.string(`price`).notNullable();
        tbl.string(`location`).notNullable();
        tbl.string(`description`).notNullable();
        tbl
            .integer(`user_id`)
            .unsigned()
            .references(`id`)
            .inTable(`users`)
            .onDelete(`CASCADE`)
            .onUpdate(`CASCADE`);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('inputs');
};
