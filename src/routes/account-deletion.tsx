import { createFileRoute } from "@tanstack/react-router";
import { Mail, Smartphone, AlertTriangle } from "lucide-react";
import { SUPPORT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/account-deletion")({
  head: () => ({
    meta: [
      { title: "Yêu cầu xóa tài khoản — Elevator360" },
      {
        name: "description",
        content:
          "Hướng dẫn gửi yêu cầu xóa tài khoản và dữ liệu liên quan trên Elevator360.",
      },
      { property: "og:title", content: "Yêu cầu xóa tài khoản — Elevator360" },
      {
        property: "og:description",
        content:
          "Hướng dẫn gửi yêu cầu xóa tài khoản và dữ liệu liên quan trên Elevator360.",
      },
      { property: "og:url", content: "/account-deletion" },
    ],
    links: [{ rel: "canonical", href: "/account-deletion" }],
  }),
  component: AccountDeletionPage,
});

const scopeRows: Array<[string, string]> = [
  ["Tài khoản đăng nhập", "Xóa hoặc vô hiệu hóa sau khi xác minh"],
  ["Thông tin hồ sơ cá nhân", "Xóa hoặc ẩn danh hóa theo phạm vi phù hợp"],
  ["Token đăng nhập và token thông báo", "Thu hồi"],
  [
    "Dữ liệu công việc",
    "Xử lý theo phạm vi quyền hạn và nghĩa vụ lưu trữ của doanh nghiệp",
  ],
  ["Dữ liệu cần giữ lại theo quy định", "Có thể được lưu trong thời gian cần thiết"],
];

function AccountDeletionPage() {
  const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
    "Yêu cầu xóa tài khoản Elevator360",
  )}&body=${encodeURIComponent(
    "Họ tên: \nSố điện thoại hoặc email đăng nhập: \nTên doanh nghiệp đang sử dụng Elevator360: \nNội dung yêu cầu: ",
  )}`;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="border-b border-border pb-8">
        <p className="text-xs font-medium uppercase tracking-wider text-primary">
          Tài khoản
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          YÊU CẦU XÓA TÀI KHOẢN ELEVATOR360
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Người dùng Elevator360 có thể yêu cầu xóa tài khoản và dữ liệu liên quan bằng
          một trong các phương thức dưới đây.
        </p>
      </header>

      <section className="mt-10">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-primary">
            <Smartphone className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold sm:text-2xl">Cách 1 — Thực hiện trong ứng dụng</h2>
        </div>
        <ol className="mt-4 space-y-2 rounded-lg border border-border bg-card p-5 text-sm text-foreground sm:text-base">
          <li>1. Mở ứng dụng Elevator360</li>
          <li>2. Đăng nhập</li>
          <li>3. Chọn <span className="font-semibold">Cá nhân</span></li>
          <li>4. Chọn <span className="font-semibold">Cài đặt tài khoản</span></li>
          <li>5. Chọn <span className="font-semibold">Yêu cầu xóa tài khoản</span></li>
          <li>6. Đọc thông tin và xác nhận yêu cầu</li>
        </ol>
        <div className="mt-4 flex gap-3 rounded-lg border-l-4 border-yellow-500 bg-yellow-50 p-4 text-sm text-yellow-900 dark:bg-yellow-950/40 dark:text-yellow-200">
          <AlertTriangle className="h-5 w-5 shrink-0" />
          <p>
            Chỉ hiển thị hướng dẫn này nếu tính năng yêu cầu xóa tài khoản đã thực sự tồn
            tại trong ứng dụng. Nếu ứng dụng chưa có tính năng này, cần bổ sung trước khi
            phát hành chính thức.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-secondary text-primary">
            <Mail className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold sm:text-2xl">Cách 2 — Gửi yêu cầu qua email</h2>
        </div>
        <div className="mt-4 space-y-3 rounded-lg border border-border bg-card p-5 text-sm sm:text-base">
          <p>
            <span className="font-semibold text-foreground">Gửi email đến:</span>{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-primary hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p>
            <span className="font-semibold text-foreground">Tiêu đề email:</span> Yêu cầu
            xóa tài khoản Elevator360
          </p>
          <div>
            <p className="font-semibold text-foreground">Vui lòng cung cấp:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-muted-foreground">
              <li>Họ tên</li>
              <li>Số điện thoại hoặc email đăng nhập</li>
              <li>Tên doanh nghiệp đang sử dụng Elevator360</li>
              <li>Nội dung yêu cầu</li>
            </ul>
          </div>
        </div>
        <a
          href={mailto}
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          <Mail className="h-4 w-4" /> Gửi email yêu cầu xóa tài khoản
        </a>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-bold sm:text-2xl">Phạm vi dữ liệu xử lý</h2>
        <div className="mt-4 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-secondary text-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Nhóm dữ liệu</th>
                <th className="px-4 py-3 font-semibold">Xử lý dự kiến</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {scopeRows.map(([a, b]) => (
                <tr key={a}>
                  <td className="px-4 py-3 align-top font-medium text-foreground">{a}</td>
                  <td className="px-4 py-3 align-top text-muted-foreground">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Sau khi tiếp nhận yêu cầu, EVOVI hoặc đơn vị quản trị tài khoản có thể liên hệ
          để xác minh danh tính. Việc xử lý được thực hiện theo phạm vi dữ liệu, quyền
          quản trị doanh nghiệp và quy định pháp luật áp dụng.
        </p>
      </section>
    </div>
  );
}
