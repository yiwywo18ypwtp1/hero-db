'use client';

import { useState } from "react";
import MenuItem from "./MenuItem";
import { MenuItemType } from "@/types/menuItemType";

const SideBar = () => {
    const [active, setActive] = useState<MenuItemType>("/");

    return (
        <section className="h-screen w-65 min-w-65 border-r border-white/5 brightness-">
            <h1 className="h-24 border-b border-white/5 text-2xl font-orbit font-semibold flex items-center justify-center tracking-widest">
                <span className="text-cyn text-shadow-cyn">H</span>
                <span>ERO DB</span>
            </h1>

            <div className="flex flex-col items-start gap-3 py-4 px-4">
                <MenuItem
                    path="/"
                    active={active}
                    setActive={setActive}
                    icon="/records.svg"
                    label="Records"
                />

                <MenuItem
                    path="/create"
                    active={active}
                    setActive={setActive}
                    icon="/create.svg"
                    label="Create New"
                />
            </div>
        </section>
    );
}

export default SideBar;