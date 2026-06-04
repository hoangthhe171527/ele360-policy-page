import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="text-sm font-semibold text-foreground">
              Elevator360
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Giải pháp quản lý dịch vụ thang máy dành cho doanh nghiệp.
            </p>
          </div>
          <nav className="flex flex-col gap-2 text-sm md:items-end">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground">
              Chính sách quyền riêng tư
            </Link>
            <Link to="/account-deletion" className="text-muted-foreground hover:text-foreground">
              Yêu cầu xóa tài khoản
            </Link>
            <Link to="/support" className="text-muted-foreground hover:text-foreground">
              Hỗ trợ
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 EVOVI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
