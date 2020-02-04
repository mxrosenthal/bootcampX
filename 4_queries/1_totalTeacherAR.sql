SELECT COUNT(assistance_requests.id) AS total_assistance, teachers.name
FROM assistance_requests JOIN teachers ON teacher_id = teachers.id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.name