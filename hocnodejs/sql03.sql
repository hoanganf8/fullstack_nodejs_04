-- Hàm tổng hợp: COUNT, SUM, AVG, MAX, MIN
-- Khi dùng hàm tổng hợp --> Kết hợp với mệnh đề GROUP BY
-- Lọc dữ liệu theo mệnh đề group by --> Dùng mệnh đề HAVING

-- SELECT status, count(id) FROM users GROUP BY status
-- HAVING count(id) > 2;

-- Câu 1: Hiển thị danh sách users và số lượng bài viết của từng users
-- (Nếu user nào ko có bài viết --> Hiển thị số 0)

-- Câu 2: Sắp xếp thứ tự hiển thị số lượng bài viết giảm dần

-- Câu 3: Hiển thị user có số bài viết lớn nhất
SELECT users.*, COUNT(posts.user_id) AS post_count
FROM users 
LEFT JOIN posts
ON users.id = posts.user_id
GROUP BY users.id
-- ORDER BY post_count DESC
HAVING COUNT(posts.user_id)=(
	SELECT MAX(posts_count)
	FROM (
		--Bảng tạm
		SELECT count(id) AS posts_count 
		FROM posts 
		GROUP BY user_id
	)
);

-- Số lượng bài viết từng users
-- SELECT count(id) AS posts_count FROM posts GROUP BY user_id

-- Tìm số lượng bài viết lớn nhất
-- SELECT MAX(posts_count)
-- FROM (
-- 	SELECT count(id) AS posts_count 
-- 	FROM posts 
-- 	GROUP BY user_id
-- )