"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";


const navLinks = [
    {name: 'Вход', href: '/login'},
    {name: 'Регистрация', href: '/register'},
    {name: 'Восстановление', href: '/forgot-pass'},
]

export default function AuthLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const pathName = usePathname()

    return (
        <div className="bg-green-200">
            <div className="flex gap-2 mb-4 bg-blue-200">
                {navLinks.map((link) => {
                    const isActive =
                        pathName === link.href || pathName.startsWith(link.href)
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={isActive ? "underline text-red-600" : "text-gray-600"}
                        >
                            {link.name}
                        </Link>
                    )
                })}
            </div>
            <div>{children}</div>
        </div>
    );
}