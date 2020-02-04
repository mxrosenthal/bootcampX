SELECT DISTINCT(teachers.name) AS teacher, cohorts.name AS cohort, COUNT(assistance_requests.teacher_id) AS total_assistances
FROM assistance_requests
JOIN teachers ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id 
WHERE cohorts.name = 'JUL02'
GROUP BY teacher, cohort
ORDER BY teacher