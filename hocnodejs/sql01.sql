-- Đây là comment của SQL

-- THÊM DỮ LIỆU
-- INSERT INTO users(id, name, email, password, status, created_at, updated_at)
-- VALUES (2, 'User 2', 'user2@gmail.com', '123456', true, NOW(), NOW());

-- INSERT INTO users(id, name, email, password, status, created_at, updated_at)
-- VALUES (3, 'User 3', 'user3@gmail.com', '123456', false, NOW(), NOW());

-- INSERT INTO users(id, name, email, password, status, created_at, updated_at)
-- VALUES (5, 'User 5', 'user5@gmail.com', '123456', false, NOW(), NOW());

-- SỬA DỮ LIỆU
UPDATE users 
SET updated_at=NULL
WHERE id = 3;

-- Xóa dữ liệu
-- DELETE FROM users
-- WHERE id = 1;

-- LỌC DỮ LIỆU
-- SELECT *
-- FROM users
-- WHERE LOWER(email) LIKE LOWER('%USER 1%') OR LOWER(name) LIKE LOWER('%USER 1%');

INSERT INTO users(id, email, password)
VALUES (6, 'user7@gmail.com', '123456');


