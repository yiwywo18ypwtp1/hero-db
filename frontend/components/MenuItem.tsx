import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItemType } from "@/types/menuItemType";

type MenuItemProps = {
    path: MenuItemType;
    active: MenuItemType;
    setActive: (value: MenuItemType) => void;
    icon: string;
    label: string;
};

function MenuItem({ path, active, setActive, icon, label }: MenuItemProps) {
    const pathname = usePathname();
    const isActive = pathname === path;

    return (
        <Link
            href={path}
            onClick={() => setActive(path)}
            className={`
                flex items-center gap-3 h-11 w-full rounded-md text-xl
                border border-blu/30 cursor-pointer
                hover:border-blu
                transition-all duration-200
                ${isActive ? "py-1 pl-2 bg-linear-to-r from-blu/50 to-transparent" : "py-1"}
            `}
        >
            <div
                className={`
                    bg-cyn h-2/3
                    transition-all duration-200
                    ${isActive ? "w-0.5 rounded-full shadow-blu-s" : "w-0"}
                `}
            />

            <img src={icon} alt="" className="h-6 pl-2" />
            <span>{label}</span>
        </Link>
    );
}

export default MenuItem;