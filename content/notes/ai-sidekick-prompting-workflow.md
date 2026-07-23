---
title: "Quy Trình 7 Bước Đặt Câu Lệnh Cho Trợ Lý AI"
date: "2026-07-23"
publish: true
tags: ["ai", "workflow", "prompting", "learning", "vi"]
---

Trong hành trình học tập và phát triển ứng dụng web, việc sử dụng trí tuệ nhân tạo làm trợ lý đồng hành mang lại hiệu quả rất cao. Thay vì để máy móc tự sinh mã nguồn thụ động, việc kiểm soát quy trình từng bước từ kiến trúc đến kiểm thử giúp người lập trình làm chủ hoàn toàn sản phẩm và tích lũy kiến thức sâu sắc.

Dưới đây là tổng hợp quy trình 7 bước đặt câu lệnh tối ưu khi làm việc cùng trợ lý lập trình.

<Callout title="Mục đích bài viết">
Bài viết này hướng dẫn phương pháp thiết lập quy tắc cho các mô hình lập trình nhằm đảm bảo mã nguồn sinh ra luôn tối giản, dễ hiểu và dễ bảo trì.
</Callout>

## 1. Thiết Lập Hợp Đồng Học Tập

Trước khi gõ bất kỳ dòng mã nào, người lập trình cần đặt rõ quy tắc hành vi nhằm giữ quyền kiểm soát tiến độ.

* **Vai trò:** Yêu cầu trợ lý đóng vai trò cố vấn, giải thích rõ lý do kỹ thuật đằng sau mỗi giải pháp.
* **Giới hạn:** Quy định lượng mã nguồn tạo ra mỗi lần tối đa 40 dòng và ưu tiên dạng khác biệt mã nguồn.

```text
Hãy đóng vai trò là gia sư lập trình cho dự án này. Khi đưa ra giải pháp, hãy ưu tiên cách tiếp cận đơn giản nhất, giải thích ngắn gọn lý do chọn giải pháp đó và chỉ đưa ra tối đa 40 dòng mã mỗi lần dưới dạng diff. Đừng tự ý hoàn thiện toàn bộ mã nguồn nếu tôi chưa yêu cầu.
```

## 2. Định Hình Bối Cảnh Dự Án

Cung cấp đầy đủ thông tin về các công nghệ sử dụng cùng trình độ hiện tại để nhận được hướng dẫn phù hợp.

```text
Tôi đang xây dựng một ứng dụng web với bộ công nghệ: Next.js App Router, TypeScript, Tailwind CSS và SQLite. Năng lực của tôi hiện tại là đã nắm vững HTML/CSS và React cơ bản, nhưng chưa có nhiều kinh nghiệm về thiết kế API và xử lý dữ liệu.
```

## 3. Phân Tích Khoảng Trống Và Phỏng Vấn Mục Tiêu

Ép trợ lý đọc bản mô tả dự án và đặt câu hỏi ngược lại để làm rõ các chi tiết còn thiếu thay vì lập trình ngay.

```text
Hãy đóng vai trò là một kỹ sư cấp cao đang xem xét bản tóm tắt dự án này trước khi triển khai. Nhiệm vụ của bạn là tìm ra tất cả những phần còn thiếu, chưa rõ ràng hoặc có rủi ro về mặt kiến trúc, bảo mật, dữ liệu và kiểm thử. Đừng đề xuất giải pháp ngay. Hãy đặt cho tôi từng câu hỏi tập trung một để làm rõ các khoảng trống đó.
```

## 4. Thiết Lập Kế Hoạch Triển Khai

Yêu cầu trợ lý lập lộ trình phát triển bằng văn bản chi tiết trước khi bắt đầu viết mã.

```text
Dựa trên các yêu cầu đã làm rõ, hãy tạo một kế hoạch triển khai chi tiết. Hãy chia dự án thành các giai đoạn phát triển hợp lý, đề xuất cấu trúc thư mục, thiết kế mô hình dữ liệu và giải thích các quyết định kiến trúc cốt lõi. Đừng viết code vào lúc này.
```

## 5. Chia Nhỏ Thành Các Nhiệm Vụ Cụ Thể

Bóc tách lộ trình thành các bài tập nhỏ có thể tự kiểm thử và nghiệm thu từng bước.

```text
Hãy chia kế hoạch triển khai trên thành một chuỗi các nhiệm vụ phát triển nhỏ, có thứ tự phụ thuộc và có thể xem xét được. Mỗi nhiệm vụ phải cụ thể và tạo ra một kết quả có thể nhìn thấy như tạo mô hình dữ liệu, viết luồng xử lý hoặc viết bài kiểm thử.
```

## 6. Vòng Lặp Triển Khai Và Kiểm Thử Trường Hợp Biên

Thực hiện từng nhiệm vụ nhỏ và rà soát kỹ các kịch bản lỗi phát sinh ngoài dự kiến.

```text
Hãy liệt kê các trường hợp biên, các tổ hợp dữ liệu không hợp lý và các đầu vào có nguy cơ đe dọa bảo mật mà tôi cần viết bài kiểm thử cho tính năng này.
```

## 7. Rà Soát Và Tinh Chỉnh Toàn Bộ

Khi tính năng đã hoạt động ổn định, thực hiện một lượt rà soát cuối cùng để tối ưu chất lượng mã nguồn.

```text
Hãy xem xét lại tính năng đã triển khai đối với tài liệu đặc tả ban đầu và tiêu chí nghiệm thu. Hãy chỉ ra: thứ nhất là bất kỳ hành vi nào còn thiếu, thứ hai là sự phức tạp không cần thiết, thứ ba là đoạn mã cần đơn giản hóa và thứ tư là các bài kiểm thử còn sót.
```

<Callout title="Mẹo làm việc hiệu quả">
Nên duy trì một cửa sổ hội thoại riêng cho từng dự án nhỏ để giữ vững bối cảnh và luôn kiểm thử mã nguồn ngay sau khi nhận được gợi ý.
</Callout>
