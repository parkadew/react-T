import { Outlet, useLocation } from "react-router-dom";
import React from "react";

const LAYOUT_METADATE = {
    "/": {
        header: true,
        footer: true,
    },
    "/todo": {
        header: false,
        footer: true,
    },
};

function dynamicLayoutMetadata(pathname) {
    // "/todo" -> "/todo/3", split slice
    console.log(pathname.split("/"));
    const basePath = pathname.split("/").slice(0, 2).join("/");
    return LAYOUT_METADATE[basePath];
}

const RootLayout = () => {
    const location = useLocation()
    console.log(location.pathname)
    const metadate = dynamicLayoutMetadata(location.pathname)
    console.log(metadate)

    //Outlet - react-router-dom
    // 하위에 있는 경로를 상위 경로(route)
    return <>
        {metadate.header && <header>header</header >}
        <Outlet></Outlet>
        {metadate.footer && <footer>footer</footer>}
    </>
};
export default RootLayout;