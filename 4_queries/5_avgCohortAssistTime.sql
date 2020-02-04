SELECT cohorts.name AS name, AVG(completed_at - started_at) AS average_assistance_time
FROM students
JOIN cohorts ON cohort_id = cohorts.id
JOIN assistance_requests ON student_id = students.id
GROUP BY cohorts.name
ORDER BY average_assistance_time