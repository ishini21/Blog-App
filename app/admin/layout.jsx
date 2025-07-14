import { assets } from "@/assets/assets";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer} from 'react-toastify';

export default function Layout({
    children
}){
    return(
        <>
        <div className="flex">
            <ToastContainer theme="dark"/>
            <Sidebar/>
            <div className="flex flex-col w-full bg-gradient-to-br from-green-100 to-blue-300 ">
                <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black bg-gradient-to-br from-green-100 to-blue-300 ">
                    <h3 className="text-xl text-black font-bold">Admin Panel</h3>
                    <Image src={assets.profile_icon} alt='' width={40} />
                </div>
                 {children}
            </div>
        </div>
       
        </>
    )
}