import fs from "fs";
import path from "path";

// Đọc danh sách dữ liệu đã xuất bản từ .velite/
const veliteDir = path.join(process.cwd(), ".velite");

function validateBuild() {
  console.log("🔍 Đang chạy kịch bản kiểm thử bảo mật & liên kết tự động (CI Validation)...");

  let hasError = false;

  // 1. Kiểm tra rò rỉ dữ liệu Private
  const collections = ["notes.json", "posts.json", "projects.json"];

  collections.forEach((file) => {
    const filePath = path.join(veliteDir, file);
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      const leakedItems = data.filter((item: any) => item.publish !== true);

      if (leakedItems.length > 0) {
        console.error(`❌ CẢNH BÁO BẢO MẬT: Phát hiện ${leakedItems.length} mục publish: false bị rò rỉ trong file ${file}!`);
        hasError = true;
      } else {
        console.log(`✅ [BẢO MẬT] File ${file} đã lọc sạch 100% dữ liệu private.`);
      }
    }
  });

  // 2. Kiểm tra Broken WikiLinks trong Second Brain Notes
  const notesPath = path.join(veliteDir, "notes.json");
  if (fs.existsSync(notesPath)) {
    const notes = JSON.parse(fs.readFileSync(notesPath, "utf-8"));
    const validSlugs = new Set(notes.map((n: any) => n.slug));

    notes.forEach((note: any) => {
      // Tìm các đường dẫn internal link trong nội dung MDX
      const internalLinkRegex = /\/notes\/([a-zA-Z0-9_-]+)/g;
      let match;
      while ((match = internalLinkRegex.exec(note.body)) !== null) {
        const targetSlug = match[1];
        if (!validSlugs.has(targetSlug)) {
          console.warn(`⚠️ [BROKEN LINK]: Ghi chú "${note.title}" (/notes/${note.slug}) trỏ tới link không tồn tại hoặc private: "/notes/${targetSlug}"`);
        }
      }
    });
  }

  if (hasError) {
    console.error("💥 Kiểm thử thất bại! Quá trình build bị dừng để đảm bảo an toàn.");
    process.exit(1);
  } else {
    console.log("🎉 Tất cả các bài kiểm tra CI Validation đều THÀNH CÔNG!\n");
  }
}

validateBuild();
