import DashboardItem from "@/components/Store/DashboardItem";
import Header from "@/components/Store/Header";
import Sidebar from "@/components/Store/Sidebar";
import React from "react";


const StoreDashboard: React.FC = () => {
    return (
        <>
            <Sidebar/>
            <Header/>
            <main className="pt-64_ store-content">
                <h2 className="px-6 pt-6 text-28_ font-bold">Dashboard</h2>
                <div className="grid grid-cols-4 gap-3 p-6">
                    <DashboardItem src={'/images/icon-archive.png'} alt={'Archive Icon'} title={'Total Product'} value={'24'}/>
                    <DashboardItem src={'/images/icon-file.png'} alt={'File Icon'} title={'Total Orders'} value={'13'}/>
                    <DashboardItem src={'/images/icon-money.png'} alt={'Money Icon'} title={'Total Revenue'} value={'Rp1.920.000'}/>
                    <DashboardItem src={'/images/icon-file-check.png'} alt={'File Check Icon'} title={'Completed Orders'} value={'8'}/>
                </div>
            </main>
        </>
    );
};

export default StoreDashboard;
