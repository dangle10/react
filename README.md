# Thực tập Cơ sở – Kế hoạch & Tiến độ 08 Tuần

# internship-project-bine910

internship-project-bine910 created by GitHub Classroom

# Thực tập Cơ sở – Kế hoạch & Tiến độ 10 Tuần

---

## 1. Thông tin sinh viên

- **Họ tên:** Lê Hải Đăng
- **MSSV:** B23DCVT072
- **Lớp:** B23CQCE03-B
- **Email:** danglehai.1810@gmail.com
- **GitHub username:** dangle10
- **Link repository:** https://github.com/jnp2018/internship-project-dangle10

---

## 2. Định hướng & Mục tiêu

> Trả lời 3 câu hỏi này trước khi xác định kỹ năng:

**Tôi muốn làm vai trò gì sau khi ra trường?**

> Frontend Developer

**Kỹ năng tôi còn thiếu / yếu trong vai trò đó là gì?**

> Frameworks & State Management and CSS (SCSS/Tailwind)

**Tôi có thể học và thực hành được kỹ năng đó trong 8 tuần không?**

> Có

---

## 3. Đăng ký chủ đề thực tập

**Định hướng:**

- [ ] Cải thiện / củng cố kỹ năng đang có _(7–8)_
- [x] Học kỹ năng mới / theo trend _(8–9)_
- [ ] Gắn với nghiên cứu / đề tài / dự án _(9–10)_

**1–3 kỹ năng chính muốn học / cải thiện:**

1. Nâng cao kiến thức về React (hooks, lifecycle, tối ưu re-render)
2. Quản lý state hiệu quả (State Management)
3. Làm việc với REST API

**Bài toán / nội dung áp dụng cụ thể:**

> Bài toán: Xây dựng website bán quần áo bằng ngôn ngữ lập trình JavaScript, gồm:

- Trang sản phẩm
- Chi tiết sản phẩm
- Giỏ hàng
- Đăng nhập / đăng ký
- Thanh toán cơ bản

> Mục tiêu: Tạo ra một website thương mại điện tử cơ bản, cho phép người dùng xem sản phẩm, tìm hiểu thông tin chi tiết và thực hiện quy trình mua hàng.

> Áp dụng kỹ năng:

- Xây dựng giao diện bằng React và chia component hợp lý
- Quản lý state cho giỏ hàng và thông tin người dùng
- Gọi API để lấy dữ liệu sản phẩm và xử lý bất đồng bộ

**Làm việc nhóm (nếu có):** Hà Đình Bình-B23DCVT051

---

## 4. Kế hoạch thực hiện 08 tuần

> **Nguyên tắc:** Đọc → Hiểu → Thực hiện. Không bỏ qua bước nào.
>
> Mỗi tuần gồm **2 phần**:
>
> - **Tìm hiểu / Đọc:** Tài liệu, khái niệm, ví dụ tham khảo
> - **Thực hành:** Làm thử, ghi lại kết quả
>
> Kết quả đầu ra: file `.md` ghi chú, link code, screenshot, hoặc demo URL

---

### Tuần 1 – Khởi động & Tìm hiểu nền tảng

_Mục tiêu tuần: Nắm vững khái niệm cốt lõi trước khi thực hành_

**Tìm hiểu / Đọc:**
| Nội dung cần đọc / tìm hiểu | Nguồn tham khảo | Trạng thái | Ghi chú / Điều đã hiểu |
|---|---|---|---|
|React là gì |roadmap.sh | [ ] |React là thư viện JS dùng để xây dựng UI theo component |
|JSX, component |roadmap.sh | [ ] |JSX cho phép viết HTML trong JS, component là khối UI có thể tái sử dụng, giúp code dễ quản lý |
|useState cơ bản|roadmap.sh| [ ] |useState dùng để quản lý state trong component, khi state thay đổi thì UI tự động render lại|

**Thực hành:**
| Nhiệm vụ | Kết quả đầu ra | Trạng thái | Ghi chú |
|---|---|---|---|
|Tạo project bằng Vite |https://github.com/jnp2018/internship-project-dangle10 | [ ] | |
|Làm Counter App |codesandbox | [ ] | |

---

### Tuần 2 – Triển khai cơ bản _(Buổi trao đổi 1)_

_Mục tiêu tuần: Áp dụng được kiến thức tuần 1 vào thực tế_

**Tìm hiểu / Đọc:**
| Nội dung | Nguồn | Trạng thái | Ghi chú |
|---|---|---|---|
|Props & Component reuse |roadmap | [ ] |Props giúp truyền dữ liệu từ component cha xuống con, giúp tái sử dụng component |
|Event handling | | [ ] |React dùng onClick, onChange... để xử lý sự kiện thay vì addEventListener |
|Conditional rendering | | [ ] |Có thể dùng if, && hoặc toán tử ? : để render UI theo điều kiện |

**Thực hành:**
| Nhiệm vụ | Kết quả đầu ra | Trạng thái | Ghi chú |
|---|---|---|---|
|Làm UI nhỏ (Todo / Counter nâng cao), tách component |https://codesandbox.io/p/sandbox/8p7jp6 | [ ] | |

> **Chuẩn bị cho buổi trao đổi:**
>
> - Đã đọc / tìm hiểu được gì?
> - Đã thực hành được gì? (link / file)
> - Vướng mắc ở đâu? Đã thử giải quyết chưa?

---

### Tuần 3 – Mở rộng & Đào sâu

_Mục tiêu tuần: Hiểu sâu hơn, bắt đầu mở rộng sang tính năng / trường hợp phức tạp hơn_

**Tìm hiểu / Đọc:**
| Nội dung | Nguồn | Trạng thái | Ghi chú |
|---|---|---|---|
|useEffect |roadmap | [ ] |dùng để xử lý side effect như gọi API, chạy sau khi component render |
|Fetch API | | [ ] |dùng để lấy dữ liệu từ server, trả về promise cần dùng then hoặc async/await |
|React Router | | [ ] |Dùng để tạo nhiều trang trong SPA, điều hướng bằng Route và Link |

**Thực hành:**
| Nhiệm vụ | Kết quả đầu ra | Trạng thái | Ghi chú |
|---|---|---|---|
|Làm multi-page app và gọi API |https://codesandbox.io/p/sandbox/7dczzg | [ ] |Hiểu cách chuyển trang mà không reload và Biết cách fetch dữ liệu và lưu vào state |

---

### Tuần 4 – Hoàn thiện giữa kỳ _(Buổi trao đổi 2)_

_Mục tiêu tuần: Có sản phẩm / kết quả giữa kỳ rõ ràng, có thể demo hoặc trình bày_

**Tìm hiểu / Đọc:**
| Nội dung | Nguồn | Trạng thái | Ghi chú |
|---|---|---|---|
|State nâng cao |roadmap | [ ] |Hiểu cách quản lý state phức tạp hơn và tránh lặp code |
|Context API | | [ ] |giúp chia sẻ dữ liệu toàn app mà không cần truyền props qua nhiều cấp |

**Thực hành:**
| Nhiệm vụ | Kết quả đầu ra | Trạng thái | Ghi chú |
|---|---|---|---|
|Dùng useReducer để quản lý state phức tạp (thay vì nhiều useState), useContext lấy data mà không cần props |https://codesandbox.io/p/sandbox/9ndj64 | [ ] | |

> **Tự đánh giá giữa kỳ:**
>
> - Đã hoàn thành được bao nhiêu % kế hoạch?
> - Kỹ năng nào đã hiểu chắc? Kỹ năng nào còn mơ hồ?
> - Điều chỉnh kế hoạch nửa sau nếu cần:

---

### Tuần 5 – Nâng cao / Tối ưu

_Mục tiêu tuần: Tìm hiểu thêm best practices, cải thiện chất lượng code / sản phẩm_

**Tìm hiểu / Đọc:**
| Nội dung | Nguồn | Trạng thái | Ghi chú |
|---|---|---|---|
|useRef | | [ ] |useRef dùng để lưu giá trị không làm re-render component, thường dùng để thao tác DOM hoặc lưu giá trị trước đó |
|useMemo | | [ ] |useMemo dùng để ghi nhớ (memoize) kết quả tính toán, tránh tính lại khi không cần thiết giúp tối ưu hiệu năng |

**Thực hành:**
| Nhiệm vụ | Kết quả đầu ra | Trạng thái | Ghi chú |
|---|---|---|---|
|Thực hành demo với useRef, useMemo |https://codesandbox.io/p/sandbox/useref-usememo-2z7rc6 | [ ] | |

---

### Tuần 6 – Kiểm thử & Đánh giá _(Buổi trao đổi 3)_

_Mục tiêu tuần: Kiểm thử, phát hiện và xử lý vấn đề, đánh giá lại những gì đã làm_

**Tìm hiểu / Đọc:**
| Nội dung | Nguồn | Trạng thái | Ghi chú |
|---|---|---|---|
|Cấu trúc project React | | [ ] |Cấu trúc một dự án React cơ bản tập trung vào thư mục src để chứa mã nguồn, chia nhỏ theo components (thành phần). Các thành phần chính bao gồm: node_modules (thư viện), public (tài nguyên tĩnh), và src (code chính: App.js, main.js) |
|UI/UX cơ bản | | [ ] |UI/UX trong React là việc kết hợp giao diện thành phần (Component) đồng nhất với trạng thái dữ liệu (State) mượt mà để tối ưu hóa tốc độ phản hồi và sự tiện dụng cho người dùng |

**Thực hành:**
| Nhiệm vụ | Kết quả đầu ra | Trạng thái | Ghi chú |
|---|---|---|---|
|Setup project shop | | [ ] | |
|Layout (Header, Footer) | | [ ] | |
|Trang Home (mock data) |<img width="1302" height="700" alt="Screenshot 2026-04-02 191449" src="https://github.com/user-attachments/assets/196d7e59-4605-4a32-b7e7-00e4179e3bb2" />
| [ ] | |

---

### Tuần 7 – Hoàn thiện cuối

_Mục tiêu tuần: Hoàn chỉnh sản phẩm, chuẩn bị tài liệu, dọn dẹp repo_

**Thực hành:**
| Nhiệm vụ | Kết quả đầu ra | Trạng thái | Ghi chú |
|---|---|---|---|
| Product list + detail |<img width="1302" height="700" alt="Screenshot 2026-04-17 224020" src="https://github.com/user-attachments/assets/b64d883b-d5b9-47c1-838a-5d1ca63be5d4" />
| [ ] | |
| Add to cart | | [ ] | |
| Hoàn thiện `src/project/` | | [ ] | |
| Hoàn thiện `docs/` (ghi chú học tập) | | [ ] | |
| Viết README tổng kết | | [ ] | |

---

### Tuần 8 – Tổng kết _(Buổi trao đổi 4)_

_Mục tiêu tuần: Demo, báo cáo, phản ánh lại toàn bộ quá trình_

**Thực hành:**
| Nhiệm vụ | Kết quả đầu ra | Trạng thái | Ghi chú |
|---|---|---|---|
| Demo / báo cáo cuối kỳ | Demo URL / Report | [ ] | |

> **Phản ánh cuối kỳ:**
>
> - Kỹ năng nào tôi thực sự đã học và hiểu được?
> - Nếu làm lại, tôi sẽ thay đổi gì trong kế hoạch?
> - Kỹ năng này hữu ích như thế nào cho định hướng nghề nghiệp của tôi?

---

## 5. Checklist & Tổng kết

- [ ] Nộp kế hoạch trước **23/02/2026**
- [ ] Tham gia đủ **04 buổi trao đổi**
- [ ] Cập nhật `timeline-08tuan.md` **mỗi tuần**
- [ ] Có ghi chú tìm hiểu trong `docs/` (ít nhất 4 tuần)
- [ ] Sản phẩm cuối chạy được / demo được
- [ ] Có thể **giải thích** những gì đã làm mà không cần nhìn code

**Tự đánh giá mức độ hoàn thành:** ……%

**Điều tôi tự hào nhất trong đợt thực tập này:**

**Vướng mắc / nội dung cần giảng viên hỗ trợ thêm:**

**Link repository cuối cùng:** https://github.com/jnp2018/internship-project-dangle10
