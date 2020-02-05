const { Pool } = require('pg');

const args = process.argv.slice(2);
let cohortQueried = args[0];

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool
  .query(
    `
        SELECT DISTINCT(teachers.name) AS teacher, cohorts.name AS cohort
    FROM assistance_requests
    JOIN teachers ON teacher_id = teachers.id
    JOIN students ON student_id = students.id
    JOIN cohorts ON cohort_id = cohorts.id
    WHERE cohorts.name LIKE '%${cohortQueried}%'
    ORDER BY teacher;
`
  )
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.cohort}: ${user.teacher}`);
    });
  })
  .catch(err => console.error('query error', err.stack));
