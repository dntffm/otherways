'use client';

import React from "react";
import cn from "classnames";
import Menu from "./Menu";
import { Plus_Jakarta_Sans } from "next/font/google";

const jkt = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: "700",
})


export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <header>
            {isOpen && <Menu setIsOpen={setIsOpen} />}
            <nav className="p-6 w-full fixed flex top-0 h-20">
                <div className="p-6">
                    <button
                        onClick={() => setIsOpen(true)}
                        className={cn('font-bold', jkt.className)}
                    >
                        MENU {isOpen}
                    </button>
                </div>
            </nav>
        </header>
    )
}