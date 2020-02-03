SELECT name, id, email, cohort_id
FROM students
WHERE phone IS NULL
AND email NOT LIKE '%gmail.com';