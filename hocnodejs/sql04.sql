/*
BÀI TẬP: Truy vấn lấy ra danh sách khóa học của user có id = 2
*/
SELECT courses.*, users.name as username, users.email
FROM courses 
INNER JOIN courses_users
ON courses.id = courses_users.course_id
INNER JOIN users
ON users.id = courses_users.user_id
WHERE courses_users.user_id = 2;

/*
BÀI TẬP: Thêm đánh giá cho khóa học và hiển thị trung bình đánh giá sao
*/

SELECT courses.*, 
	ROUND(CAST(SUM(review_star.star) / COUNT(review_star.star) AS NUMERIC), 2) AS review_rate
FROM courses
INNER JOIN review_star
ON courses.id = review_star.course_id
GROUP BY courses.id