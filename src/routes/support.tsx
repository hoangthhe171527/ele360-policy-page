import { createFileRoute, Link } from "@tanstack/react-router";
import { UserCog, Wrench, ShieldCheck, Trash2, Mail, Clock } from "lucide-react";
import { SUPPORT_EMAIL } from "@/lib/site";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Hỗ trợ người dùng — Elevator360" },
      {
        name: "description",
        content: "Thông tin hỗ trợ người dùng ứng dụng Elevator360.",
      },
      { property: "og:title", content: "Hỗ trợ người dùng — Elevator360" },
      {
        property: "og:description",
        content: "Thông tin hỗ trợ người dùng ứng dụng Elevator360.",
      },
      { property: "og:url", content: "/support" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: SupportPage,
});

const cards = [
  {
    icon: UserCog,
    title: "Hỗ trợ tài khoản",
    body: "Đăng nhập, cập nhật thông tin và phân quyền.",
  },
  {
    icon: Wrench,
    title: "Hỗ trợ kỹ thuật",
    body: "Báo lỗi ứng dụng, tải ảnh hoặc đồng bộ dữ liệu.",
  },
  {
    icon: ShieldCheck,
    title: "Quyền riêng tư",
    body: "Câu hỏi về dữ liệu cá nhân và quyền truy cập thiết bị.",
  },
  {
    icon: Trash2,
    title: "Xóa tài khoản",
    body: "Gửi yêu cầu xóa tài khoản và dữ liệu liên quan.",
  },
];

function SupportPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="border-b border-border pb-8">
        <p className="text-xs font-medium uppercase tracking-wider text-primary">Hỗ trợ</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          HỖ TRỢ NGƯỜI DÙNG ELEVATOR360
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Chọn nội dung phù hợp với vấn đề bạn đang gặp hoặc liên hệ trực tiếp với bộ
          phận hỗ trợ qua email.
        </p>
      </header>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-primary">
              <c.icon className="h-5 w-5" />
            </div>
            <h2 className="mt-4 text-base font-semibold text-card-foreground">
              {c.title}
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-xl border border-border bg-secondary/40 p-6 sm:p-8">
        <h2 className="text-xl font-bold sm:text-2xl">Thông tin liên hệ</h2>
        <dl className="mt-5 space-y-3 text-sm sm:text-base">
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-primary" />
            <div>
              <dt className="font-semibold text-foreground">Email hỗ trợ</dt>
              <dd>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="text-primary hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
              </dd>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 text-primary" />
            <div>
              <dt className="font-semibold text-foreground">Thời gian hỗ trợ</dt>
              <dd className="text-muted-foreground">
                [SUPPORT_HOURS — CẦN BỔ SUNG]
              </dd>
            </div>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Hỗ trợ Elevator360")}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" /> Gửi email hỗ trợ
          </a>
          <Link
            to="/privacy-policy"
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
          >
            Xem chính sách quyền riêng tư
          </Link>
          <Link
            to="/account-deletion"
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
          >
            Yêu cầu xóa tài khoản
          </Link>
        </div>
      </section>
    </div>
  );
}
