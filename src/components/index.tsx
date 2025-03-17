import { FaXmark } from "react-icons/fa6";

interface SidebarProps {
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
  pathname?: string;
}

export function Sidebar({
  isMobile = false,
  isOpen = false,
  onClose,
  pathname,
}: SidebarProps) {
  const links = [
    { href: "/", label: "Home" },
    { href: "/transactions", label: "Extrato" },
    { href: "/investments", label: "Investimentos" },
    { href: "/other-services", label: "Outros Serviços" },
  ];

  const mobileClasses = isOpen ? "translate-x-0" : "-translate-x-full";

  return (
    <section
      className={`${
        isMobile
          ? `fixed top-0 left-0 bg-[#E4EDE3] h-[256px] w-[172px]  shadow-lg pb-6 px-[11px] z-50 transform transition-transform p-2 flex flex-col gap-2 ${mobileClasses}`
          : "hidden md:block bg-[#E4EDE3] rounded-lg p-6 md:p-4 md:col-span-2 lg:col-span-1 lg:p-6"
      }`}
    >
      <button
        onClick={onClose}
        className="text-gray-500 flex justify-end text-right z-10 transition hover:text-sky md:hidden"
      >
        <FaXmark color="#47A138" />
      </button>

      <nav>
        <ul className="flex flex-col gap-4 md:flex-row md:justify-between lg:block">
          {links.map((link, index) => (
            <li
              className={`text-center ${
                index !== links.length - 1
                  ? "border-b border-[#47A138] pb-4"
                  : ""
              } md:text-normal`}
              key={link.href}
            >
              <a
                href={link.href}
                className={`${
                  pathname === link.href ? "font-bold text-[#FF5031] " : ""
                } ${
                  ["/investments", "/other-services"].includes(link.href)
                    ? "disabled"
                    : ""
                }`}
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={isMobile && onClose ? onClose : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
