import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  Wrench,
  ClipboardCheck,
  Image as ImageIcon,
  CalendarClock,
  ShieldCheck,
  ArrowRight,
  ShieldHalf,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elevator360 — Quản lý dịch vụ thang máy" },
      {
        name: "description",
        content:
          "Elevator360 là nền tảng quản lý khách hàng, hợp đồng, lắp đặt và bảo trì thang máy dành cho doanh nghiệp.",
      },
      { property: "og:title", content: "Elevator360 — Quản lý dịch vụ thang máy" },
      {
        property: "og:description",
        content:
          "Elevator360 là nền tảng quản lý khách hàng, hợp đồng, lắp đặt và bảo trì thang máy dành cho doanh nghiệp.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const features = [
  { icon: Users, title: "Quản lý khách hàng và hợp đồng" },
  { icon: Wrench, title: "Theo dõi công việc lắp đặt và bảo trì" },
  { icon: ClipboardCheck, title: "Cập nhật tiến độ dành cho kỹ thuật viên" },
  { icon: ImageIcon, title: "Quản lý hình ảnh và tài liệu công việc" },
  { icon: CalendarClock, title: "Theo dõi lịch thực hiện" },
  { icon: ShieldCheck, title: "Phân quyền theo vai trò trong doanh nghiệp" },
];

function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-b from-secondary/40 to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              EVOVI · Elevator360
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Elevator360
              <span className="mt-2 block text-2xl font-semibold text-primary sm:text-3xl">
                Nền tảng quản lý dịch vụ thang máy dành cho doanh nghiệp
              </span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Elevator360 hỗ trợ doanh nghiệp theo dõi khách hàng, hợp đồng, công việc lắp
              đặt, lịch bảo trì và hoạt động của đội ngũ kỹ thuật trên một hệ thống thống
              nhất.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/privacy-policy"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Xem chính sách quyền riêng tư
              </Link>
              <Link
                to="/account-deletion"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Yêu cầu xóa tài khoản
              </Link>
              <Link
                to="/support"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Liên hệ hỗ trợ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Chức năng chính
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Các tính năng cốt lõi của Elevator360.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-card-foreground">
                {f.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-col gap-6 rounded-xl border border-border bg-background p-8 md:flex-row md:items-start">
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ShieldHalf className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Minh bạch trong việc xử lý dữ liệu
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                EVOVI tôn trọng quyền riêng tư của người dùng. Chúng tôi chỉ xử lý dữ liệu
                cần thiết để cung cấp và vận hành các tính năng của Elevator360. Người dùng
                có thể xem chính sách quyền riêng tư, liên hệ hỗ trợ hoặc gửi yêu cầu xóa
                tài khoản tại website này.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/privacy-policy"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Chính sách quyền riêng tư <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/account-deletion"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Yêu cầu xóa tài khoản <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/support"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Hỗ trợ <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
