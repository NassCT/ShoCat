CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT,
    is_user BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
