- <strong>useEffect</strong> là một React Hook cho phép thực hiện các tác vụ phụ (side effects) như gọi API, cập nhật DOM, hoặc thiết lập subscription trong functional component. Nó chạy sau khi component được render và giúp quản lý vòng đời (lifecycle) thay cho componentDidMount, componentDidUpdate, và componentWillUnmount ở class component.<br>

     useEffect(() => {<br>
     return () => {<br> 
     };
   }, [dependencies]);<br>
- <strong>Fetch API</strong> trong React là cách hiện đại, sử dụng fetch() dựa trên Promise để gọi HTTP requests (GET, POST,...) tới server, thường được tích hợp sẵn trong trình duyệt. Dữ liệu được lấy và cập nhật vào Component thông qua hook useEffect và useState.<br>

Các bước thực hiện Fetch API trong React:
1. Khởi tạo State: Sử dụng useState để lưu trữ dữ liệu trả về và trạng thái tải (loading).
2. Gọi API trong useEffect: Sử dụng useEffect để chạy fetch khi component render, tránh gọi lại API liên tục.
3. Sử dụng fetch(): Gửi yêu cầu với URL, chuyển đổi phản hồi sang JSON.
- <strong>React Router</strong> (thường dùng react-router-dom) là thư viện tiêu chuẩn để quản lý định tuyến trong ứng dụng React, giúp đồng bộ giao diện người dùng với URL trên trình duyệt mà không cần tải lại trang. Nó cho phép tạo các ứng dụng trang đơn (SPA) với nhiều trang/component khác nhau, điều hướng mượt mà, hỗ trợ lồng route (nested routes) và tham số URL.<br>

Các thành phần và hook chính trong React Router (v6+):
1. BrowserRouter: Thành phần cha bao bọc toàn bộ ứng dụng, sử dụng HTML5 History API để đồng bộ URL.
2. Routes & Route: Định nghĩa các tuyến đường. Routes thay thế cho Switch ở phiên bản cũ, dùng để nhóm các Route.
3. Link / NavLink: Dùng để tạo liên kết điều hướng giữa các trang thay cho thẻ <a>, tránh reload trang.
4. useNavigate: Hook điều hướng lập trình, thay thế useHistory, dùng để chuyển trang sau khi thực hiện hành động (như sau khi login).
5. useParams: Hook lấy các tham số từ URL (ví dụ: /user/:id).
6. Outlet: Dùng trong Nested Routes (tuyến đường lồng nhau) để hiển thị thành phần con bên trong thành phần cha. 
