- <strong>React:</strong> Là một thư viện JavaScript dùng để xây dựng giao diện người dùng (UI). Nó tập trung vào việc tạo ra các ứng dụng web nhanh, hiệu quả nhờ cơ chế cập nhật chỉ những phần thay đổi trên trang (Virtual DOM).
- <strong>JSX (JavaScript XML):</strong> Là một cú pháp mở rộng cho phép viết mã HTML trực tiếp trong JavaScript. Nó giúp cấu trúc giao diện trông trực quan và dễ đọc hơn.
- <strong>Component:</strong> Là những khối mã độc lập, có thể tái sử dụng để tạo nên giao diện. Ví dụ: mỗi nút bấm, thanh menu hay form nhập liệu là một Component; khi ghép chúng lại, ta có một ứng dụng hoàn chỉnh.
- <strong>useState:</strong> Là một Hook cơ bản giúp lưu trữ và quản lý trạng thái (state) của một Component. Khi giá trị trong useState thay đổi, React sẽ tự động vẽ lại (re-render) giao diện để cập nhật thông tin mới nhất.<br>
const [state, setState] = useState(initialValue);
