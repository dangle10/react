- <strong>useReducer</strong> là một React Hook dùng để quản lý state phức tạp trong các functional component, hoạt động tương tự như Redux reducer. Nó nhận vào một hàm reducer (state, action) -> new state và giá trị khởi tạo, trả về state hiện tại và hàm dispatch để cập nhật state thông qua các action type.<br> 

Các đặc điểm chính của useReducer:
1. Khi nào sử dụng: Thay thế useState khi state có cấu trúc phức tạp (object, array) hoặc logic cập nhật state phụ thuộc vào các giá trị trước đó.
2. Cú pháp: const [state, dispatch] = useReducer(reducer, initialArg, init);.
3. Tách biệt logic: Tách biệt logic cập nhật state (trong hàm reducer) ra khỏi giao diện (UI), giúp code dễ bảo trì và dễ debug.
4. Dispatch Action: Sử dụng dispatch({ type: 'ACTION_NAME', payload: ... }) để kích hoạt thay đổi, giúp các sự kiện rõ ràng.
- <strong>Context API</strong> trong React là tính năng cho phép chia sẻ dữ liệu (state) giữa các component mà không cần truyền props thủ công qua từng cấp (tránh prop drilling). Nó hoạt động như một kho lưu trữ toàn cục (global state), lý tưởng cho dữ liệu dùng chung như theme, ngôn ngữ, hoặc thông tin người dùng.<br> 

Các thành phần chính của Context API:
1. createContext: Tạo ra một context mới.
2. Context.Provider: Bao bọc các component cần sử dụng dữ liệu, cung cấp giá trị (value) cho các component con.
3. useContext (Hook) hoặc Context.Consumer: Đọc dữ liệu từ Context trong các functional component.
