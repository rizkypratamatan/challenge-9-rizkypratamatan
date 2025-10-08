import Logo from "@/components/Store/Logo";
import MenuItem from "@/components/Store/MenuItem";
import Image from "next/image";
import React from "react";


const Sidebar: React.FC = () => {
    return (
        <div id="menu-seller" className="fixed flex flex-col gap-4 w-216_ h-[100vh] p-4 bg-contrast-0 border border-neutral-200 duration-500 hide-seller-sidebar">
            <div className="py-2">
                <Logo/>
            </div>
            <nav className="flex flex-col store-sidebar-menu">
                <MenuItem href={'/store/dashboard/'} src={'/images/icon-grid.png'} alt={'Grid Icon'} text={'Dashboard'} active={true}/>
                <MenuItem href={'/store/products/'} src={'/images/icon-archive.png'} alt={'Archive Icon'} text={'Products'} active={false}/>
                <MenuItem href={'/store/orders/'} src={'/images/icon-file.png'} alt={'File Icon'} text={'Order List'} active={false}/>
                <MenuItem href={'/store/reviews/'} src={'/images/icon-star-outline.png'} alt={'Star Outline Icon'} text={'Reviews'} active={false}/>
                <MenuItem href={'/store/settings/'} src={'/images/icon-gear.png'} alt={'Gear Icon'} text={'Settings'} active={false}/>
            </nav>
            <div className="fixed bottom-4 flex gap-2 items-center w-182_ h-12 px-4 py-2 rounded-md">
                <Image src={'/images/icon-logout.png'} width={20} height={20} alt={'Logout Icon'}/>
                <p className="text-sm text-red">Logout</p>
            </div>
        </div>
    );
};

export default Sidebar;
