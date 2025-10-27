import { title } from "process";
import { MdDescription } from "react-icons/md";

export const metadata ={
title:"My Multi-language App",
description:"Next.js app with i18n",
};

export default function RootLayout({ children}) {
    return(
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}