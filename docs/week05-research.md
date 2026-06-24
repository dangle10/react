- <strong>useRef</strong> trong React là một hook dùng để tạo ra một đối tượng tham chiếu (ref object) có thể thay đổi, tồn tại xuyên suốt vòng đời component. Nó lưu trữ giá trị trong thuộc tính .current mà không kích hoạt render lại khi giá trị thay đổi, thường dùng để truy cập DOM trực tiếp, lưu biến instance, hoặc timer. 

Các đặc điểm chính của useRef:

1. Cú pháp: const myRef = useRef(initialValue);.
2. Giá trị trả về: Một đối tượng { current: initialValue }.
3. Độ bền: Giá trị của myRef.current được bảo toàn giữa các lần render.
4. Không render lại: Thay đổi myRef.current không làm component re-render (khác với useState).
- <strong>useMemo</strong> là một React Hook giúp tối ưu hiệu năng bằng cách ghi nhớ (memoize) kết quả của một phép tính phức tạp giữa các lần re-render. Nó chỉ tính toán lại giá trị khi các dependencies (phụ thuộc) thay đổi, giúp tránh việc thực hiện lại logic nặng nề không cần thiết. Cú pháp: const memoizedValue = useMemo(() => compute(a, b), [a, b]);. 

Chi tiết về useMemo trong React:<br>

Tác dụng chính: Tối ưu hóa hiệu suất (performance) bằng cách cache kết quả tính toán.<br>

Khi nào nên dùng:
1. Thực hiện các phép tính toán tốn nhiều tài nguyên (ví dụ: lọc mảng lớn, tính toán phức tạp).
2. Tránh tạo mới object/array không cần thiết để tối ưu cho React.memo hoặc các hook như useEffect.<br>

Tham số:
1. calculateValue: Hàm chứa logic tính toán, trả về giá trị muốn ghi nhớ.
2. dependencies: Danh sách các biến phụ thuộc. Nếu các biến này không đổi, useMemo trả về giá trị đã cache.
