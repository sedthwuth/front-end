const loginUser = async (username, password) => {
    try {
        const response = await fetch('http://localhost:5000/api/login', { // 💡 ต้องใช้ URL เต็ม
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (!response.ok) {
            // จัดการ Error (เช่น Username/Password ไม่ถูกต้อง)
            throw new Error(data.error || 'Login Failed');
        }
        
        // จัดเก็บ Token ที่ได้รับจาก Backend
        localStorage.setItem('authToken', data.token); 
        return data;

    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};
// ใน component/service ของ Frontend (ตัวอย่างการดึง Profile)
const getProfile = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) throw new Error('No authentication token found.');
    
    const response = await fetch('http://localhost:5000/api/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // 💡 การส่ง Token กลับไป
        }
    });

    // ... (ประมวลผล Response) ...
};