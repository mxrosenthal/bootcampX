const { Pool } = require('pg');

const args = process.argv.slice(2);
let cohortQueried = args[0];
let listLength = args[1];

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool
  .query(
    `
    SELECT students.id AS id, students.name AS name, cohorts.name AS cohort
    FROM students
    JOIN cohorts
    ON cohort_id = cohorts.id
    WHERE cohorts.name LIKE '%${cohortQueried}%'
    LIMIT ${listLength || 5};
    `
  )
  .then(res => {
    res.rows.forEach(user => {
      console.log(
        `${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`
      );
    });
  })
  .catch(err => console.error('query error', err.stack));
