import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Mail, Trash2 } from "lucide-react";
import { SUPPORT_EMAIL, POLICY_UPDATED, COMPANY_NAME } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Chính sách quyền riêng tư — Elevator360" },
      {
        name: "description",
        content: "Chính sách quyền riêng tư của ứng dụng Elevator360 do EVOVI cung cấp.",
      },
      { property: "og:title", content: "Chính sách quyền riêng tư — Elevator360" },
      {
        property: "og:description",
        content: "Chính sách quyền riêng tư của ứng dụng Elevator360 do EVOVI cung cấp.",
      },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

const sections = [
  { id: "gioi-thieu", title: "1. Giới thiệu" },
  { id: "doi-tuong", title: "2. Đối tượng sử dụng" },
  { id: "du-lieu", title: "3. Các loại dữ liệu có thể được xử lý" },
  { id: "su-dung", title: "4. Cách chúng tôi sử dụng dữ liệu" },
  { id: "chia-se", title: "5. Chia sẻ dữ liệu" },
  { id: "luu-tru", title: "6. Lưu trữ và bảo mật dữ liệu" },
  { id: "quyen-nguoi-dung", title: "7. Quyền của người dùng" },
  { id: "quyen-truy-cap", title: "8. Quyền truy cập trên thiết bị" },
  { id: "xoa-tai-khoan", title: "9. Xóa tài khoản và dữ liệu" },
  { id: "thay-doi", title: "10. Thay đổi chính sách" },
  { id: "lien-he", title: "11. Liên hệ" },
];

const dataRows: Array<[string, string, string]> = [
  ["Thông tin tài khoản", "Họ tên, số điện thoại, email, vai trò công việc", "Đăng nhập, xác thực, phân quyền và hỗ trợ người dùng"],
  ["Thông tin doanh nghiệp", "Tên doanh nghiệp, đội nhóm, chức vụ", "Quản lý phạm vi truy cập và tổ chức công việc"],
  ["Dữ liệu khách hàng", "Tên khách hàng, thông tin liên hệ, địa điểm", "Quản lý khách hàng, hợp đồng và công việc dịch vụ"],
  ["Dữ liệu hợp đồng", "Loại hợp đồng, thời hạn, trạng thái, giá trị và tiến độ", "Quản lý hoạt động lắp đặt, bảo trì và theo dõi thực hiện"],
  ["Dữ liệu công việc", "Checklist, ghi chú, trạng thái, thời gian cập nhật", "Theo dõi việc thực hiện của đội ngũ kỹ thuật"],
  ["Ảnh, tệp và tài liệu", "Ảnh hiện trạng, ảnh trước và sau khi thực hiện, biên bản và tài liệu liên quan", "Ghi nhận bằng chứng công việc và hỗ trợ quản lý hồ sơ"],
  ["Dữ liệu vị trí", "Vị trí hoặc địa điểm công việc khi tính năng này được bật và người dùng cấp quyền", "Hỗ trợ xác định địa điểm thực hiện và điều hướng"],
  ["Thông tin kỹ thuật", "Thiết bị, phiên bản ứng dụng, nhật ký lỗi và lịch sử thao tác cần thiết", "Bảo mật, xử lý sự cố và cải thiện độ ổn định"],
  ["Thông báo", "Mã nhận thông báo của thiết bị khi người dùng bật thông báo", "Gửi nhắc việc và cập nhật liên quan đến công việc"],
];

const permissions = [
  {
    title: "Camera và thư viện ảnh",
    body: "Dùng để chụp hoặc tải ảnh phục vụ hồ sơ công việc khi người dùng chủ động sử dụng tính năng này.",
  },
  {
    title: "Vị trí",
    body: "Dùng để hỗ trợ điều hướng hoặc ghi nhận địa điểm công việc khi tính năng được bật và người dùng đồng ý cấp quyền.",
  },
  {
    title: "Thông báo",
    body: "Dùng để gửi nhắc lịch, công việc được giao và thông báo vận hành liên quan.",
  },
  {
    title: "Tệp và tài liệu",
    body: "Dùng để tải lên hoặc truy cập tài liệu do người dùng chủ động lựa chọn.",
  },
];

function Accordion({ items }: { items: { title: string; body: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-lg border border-border">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.title}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium text-foreground hover:bg-accent"
              aria-expanded={isOpen}
            >
              <span>{it.title}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                {it.body}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="border-b border-border pb-8">
        <p className="text-xs font-medium uppercase tracking-wider text-primary">
          Chính sách
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          CHÍNH SÁCH QUYỀN RIÊNG TƯ
        </h1>
        <p className="mt-1 text-lg font-semibold text-foreground">Ứng dụng Elevator360</p>
        <p className="mt-3 text-sm text-muted-foreground">
          Cập nhật lần cuối: {POLICY_UPDATED}
        </p>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <nav className="rounded-lg border border-border bg-card p-4">
            <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Mục lục
            </p>
            <ul className="space-y-1 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block rounded px-2 py-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className="space-y-12 text-sm leading-relaxed text-foreground sm:text-base">
          <section id="gioi-thieu" className="scroll-mt-20">
            <h2 className="text-xl font-bold sm:text-2xl">1. Giới thiệu</h2>
            <p className="mt-3 text-muted-foreground">
              Chính sách quyền riêng tư này mô tả cách {COMPANY_NAME} (“EVOVI”, “chúng tôi”) xử
              lý dữ liệu khi người dùng sử dụng ứng dụng Elevator360.
            </p>
            <p className="mt-3 text-muted-foreground">
              Elevator360 là ứng dụng quản lý dịch vụ thang máy dành cho doanh nghiệp, hỗ
              trợ quản lý khách hàng, hợp đồng, công việc lắp đặt, lịch bảo trì, tình
              trạng thực hiện và hoạt động của nhân sự được phân quyền.
            </p>
            <p className="mt-3 text-muted-foreground">
              Bằng việc sử dụng Elevator360, người dùng xác nhận đã đọc chính sách này.
              Trường hợp không đồng ý với nội dung của chính sách, vui lòng ngừng sử dụng
              ứng dụng và liên hệ với đơn vị quản lý tài khoản của bạn.
            </p>
          </section>

          <section id="doi-tuong" className="scroll-mt-20">
            <h2 className="text-xl font-bold sm:text-2xl">2. Đối tượng sử dụng</h2>
            <p className="mt-3 text-muted-foreground">
              Elevator360 là ứng dụng phục vụ hoạt động quản lý doanh nghiệp và không
              được thiết kế cho trẻ em.
            </p>
            <p className="mt-3 text-muted-foreground">
              Ứng dụng không hướng đến người dùng dưới 18 tuổi. Chúng tôi không chủ động
              thu thập dữ liệu cá nhân của trẻ em. Nếu phát hiện dữ liệu của trẻ em được
              cung cấp không phù hợp, vui lòng liên hệ EVOVI để được hỗ trợ xử lý.
            </p>
          </section>

          <section id="du-lieu" className="scroll-mt-20">
            <h2 className="text-xl font-bold sm:text-2xl">
              3. Các loại dữ liệu có thể được xử lý
            </h2>
            <div className="mt-4 overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-secondary text-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Nhóm dữ liệu</th>
                    <th className="px-4 py-3 font-semibold">Ví dụ</th>
                    <th className="px-4 py-3 font-semibold">Mục đích sử dụng</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-card">
                  {dataRows.map(([a, b, c]) => (
                    <tr key={a}>
                      <td className="px-4 py-3 align-top font-medium text-foreground">{a}</td>
                      <td className="px-4 py-3 align-top text-muted-foreground">{b}</td>
                      <td className="px-4 py-3 align-top text-muted-foreground">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 rounded-lg border-l-4 border-primary bg-primary/5 p-4 text-sm text-foreground">
              <strong className="font-semibold">Lưu ý:</strong> Ứng dụng chỉ yêu cầu quyền
              truy cập phù hợp với các tính năng thực tế đang được sử dụng. Người dùng có
              thể từ chối hoặc thu hồi một số quyền trong phần cài đặt của thiết bị. Một
              số tính năng liên quan có thể không hoạt động đầy đủ nếu quyền truy cập bị
              tắt.
            </div>
          </section>

          <section id="su-dung" className="scroll-mt-20">
            <h2 className="text-xl font-bold sm:text-2xl">4. Cách chúng tôi sử dụng dữ liệu</h2>
            <p className="mt-3 text-muted-foreground">EVOVI xử lý dữ liệu để:</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground">
              <li>Cung cấp và vận hành các tính năng của Elevator360.</li>
              <li>Xác thực tài khoản và phân quyền truy cập.</li>
              <li>Quản lý khách hàng, hợp đồng, dự án, lịch bảo trì và công việc kỹ thuật.</li>
              <li>Cho phép người dùng tải lên hình ảnh, tài liệu và ghi chú phục vụ công việc.</li>
              <li>Gửi thông báo liên quan đến nhiệm vụ, lịch thực hiện hoặc sự kiện trong hệ thống.</li>
              <li>Hỗ trợ người dùng và xử lý lỗi kỹ thuật.</li>
              <li>Bảo vệ hệ thống trước các hành vi truy cập trái phép.</li>
              <li>Tuân thủ nghĩa vụ pháp lý áp dụng khi cần thiết.</li>
            </ul>
          </section>

          <section id="chia-se" className="scroll-mt-20">
            <h2 className="text-xl font-bold sm:text-2xl">5. Chia sẻ dữ liệu</h2>
            <p className="mt-3 text-muted-foreground">
              EVOVI không bán dữ liệu cá nhân của người dùng.
            </p>
            <p className="mt-3 text-muted-foreground">
              Dữ liệu chỉ có thể được chia sẻ trong phạm vi cần thiết với:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground">
              <li>Doanh nghiệp hoặc đơn vị quản lý tài khoản của người dùng.</li>
              <li>Nhân sự được phân quyền phù hợp trong cùng hệ thống.</li>
              <li>
                Nhà cung cấp hạ tầng lưu trữ, máy chủ hoặc dịch vụ kỹ thuật hỗ trợ việc
                vận hành ứng dụng.
              </li>
              <li>
                Cơ quan có thẩm quyền khi việc cung cấp dữ liệu được yêu cầu theo quy
                định pháp luật.
              </li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              Các đơn vị xử lý dữ liệu thay mặt EVOVI chỉ được sử dụng dữ liệu trong phạm
              vi cần thiết để cung cấp dịch vụ liên quan.
            </p>
          </section>

          <section id="luu-tru" className="scroll-mt-20">
            <h2 className="text-xl font-bold sm:text-2xl">6. Lưu trữ và bảo mật dữ liệu</h2>
            <p className="mt-3 text-muted-foreground">
              EVOVI áp dụng các biện pháp kỹ thuật và tổ chức phù hợp để bảo vệ dữ liệu,
              bao gồm cơ chế xác thực, phân quyền truy cập và kiểm soát phạm vi sử dụng
              dữ liệu.
            </p>
            <p className="mt-3 text-muted-foreground">
              Dữ liệu được lưu trữ trong khoảng thời gian cần thiết để cung cấp dịch vụ,
              đáp ứng yêu cầu vận hành doanh nghiệp hoặc tuân thủ nghĩa vụ pháp lý áp
              dụng.
            </p>
            <p className="mt-3 text-muted-foreground">
              Không có phương thức truyền tải hoặc lưu trữ dữ liệu nào bảo đảm an toàn
              tuyệt đối. Trong trường hợp phát hiện sự cố, EVOVI sẽ thực hiện các bước
              xử lý phù hợp theo phạm vi trách nhiệm của mình.
            </p>
          </section>

          <section id="quyen-nguoi-dung" className="scroll-mt-20">
            <h2 className="text-xl font-bold sm:text-2xl">7. Quyền của người dùng</h2>
            <p className="mt-3 text-muted-foreground">
              Tùy thuộc vào phạm vi áp dụng và quyền quản trị của doanh nghiệp sử dụng
              Elevator360, người dùng có thể:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground">
              <li>Yêu cầu xem hoặc cập nhật thông tin cá nhân.</li>
              <li>Yêu cầu chỉnh sửa thông tin không chính xác.</li>
              <li>Yêu cầu xóa tài khoản và dữ liệu liên quan.</li>
              <li>Thu hồi một số quyền truy cập trong phần cài đặt thiết bị.</li>
              <li>Liên hệ bộ phận hỗ trợ để đặt câu hỏi về cách xử lý dữ liệu.</li>
            </ul>
            <p className="mt-3 text-muted-foreground">
              Một số dữ liệu có thể cần được giữ lại trong thời gian hợp lý để đáp ứng
              nghĩa vụ pháp lý, yêu cầu kiểm toán, phòng chống gian lận hoặc giải quyết
              tranh chấp.
            </p>
            <div className="mt-5">
              <Link
                to="/account-deletion"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                <Trash2 className="h-4 w-4" />
                Gửi yêu cầu xóa tài khoản
              </Link>
            </div>
          </section>

          <section id="quyen-truy-cap" className="scroll-mt-20">
            <h2 className="text-xl font-bold sm:text-2xl">8. Quyền truy cập trên thiết bị</h2>
            <div className="mt-4">
              <Accordion items={permissions} />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong className="text-foreground">Lưu ý:</strong> Không mô tả quyền nào
              chưa thực sự được ứng dụng sử dụng. Các mục này cần được đối chiếu với
              AndroidManifest.xml và cấu hình ứng dụng trước khi phát hành.
            </p>
          </section>

          <section id="xoa-tai-khoan" className="scroll-mt-20">
            <h2 className="text-xl font-bold sm:text-2xl">9. Xóa tài khoản và dữ liệu</h2>
            <p className="mt-3 text-muted-foreground">
              Người dùng có thể gửi yêu cầu xóa tài khoản và dữ liệu liên quan thông qua
              trang Yêu cầu xóa tài khoản.
            </p>
            <p className="mt-3 text-muted-foreground">
              Sau khi tiếp nhận yêu cầu hợp lệ, EVOVI hoặc đơn vị quản trị tài khoản sẽ
              xác minh danh tính, xác định phạm vi dữ liệu cần xử lý và phản hồi theo quy
              trình áp dụng.
            </p>
            <p className="mt-3 text-muted-foreground">
              Một số dữ liệu có thể được lưu giữ khi cần thiết để tuân thủ nghĩa vụ pháp
              lý, phục vụ kiểm toán hoặc bảo vệ quyền lợi hợp pháp của các bên liên quan.
            </p>
            <div className="mt-5">
              <Link
                to="/account-deletion"
                className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
              >
                Mở trang yêu cầu xóa tài khoản
              </Link>
            </div>
          </section>

          <section id="thay-doi" className="scroll-mt-20">
            <h2 className="text-xl font-bold sm:text-2xl">10. Thay đổi chính sách</h2>
            <p className="mt-3 text-muted-foreground">
              EVOVI có thể cập nhật chính sách quyền riêng tư này khi cần thiết. Phiên
              bản mới sẽ được đăng tại trang này và ghi rõ ngày cập nhật gần nhất.
            </p>
          </section>

          <section id="lien-he" className="scroll-mt-20">
            <h2 className="text-xl font-bold sm:text-2xl">11. Liên hệ</h2>
            <dl className="mt-4 space-y-2 rounded-lg border border-border bg-card p-5 text-sm">
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <dt className="font-semibold text-foreground sm:w-40">Đơn vị cung cấp:</dt>
                <dd className="text-muted-foreground">{COMPANY_NAME}</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <dt className="font-semibold text-foreground sm:w-40">Ứng dụng:</dt>
                <dd className="text-muted-foreground">Elevator360</dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <dt className="font-semibold text-foreground sm:w-40">Email hỗ trợ:</dt>
                <dd>
                  <a
                    href={`mailto:${SUPPORT_EMAIL}`}
                    className="text-primary hover:underline"
                  >
                    {SUPPORT_EMAIL}
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
                <dt className="font-semibold text-foreground sm:w-40">Website:</dt>
                <dd className="text-muted-foreground">
                  evovi.vn
                </dd>
              </div>
            </dl>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="mt-5 inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
            >
              <Mail className="h-4 w-4" /> Liên hệ qua email
            </a>
          </section>
        </article>
      </div>
    </div>
  );
}
