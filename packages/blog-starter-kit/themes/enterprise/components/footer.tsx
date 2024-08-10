import { IconPaidreUnpadded } from "../assets/icon-paidre-unpadded";
import Link from "next/link";
import { useEffect, useState } from "react";


export const Footer = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const [windowOrigin, setWindowOrigin] = useState('/');


  useEffect(() => {
    typeof window !== undefined && setWindowOrigin(window?.location?.origin);
  }, []);

  // console.log("apple",window?.location.origin)
  return (
    <footer className="flex bg-gradient-to-r from-[#f8f8f8] to-white border-t border-[#ddd] w-full bg-[#fff] pt-20 pb-[16px]">
      <div className="mx-auto my-auto w-full max-w-screen-xl items-center justify-between px-4">
        <div className="mb-10 grid gap-10 md:grid-cols-6">
          <div className="my-4 grid auto-rows-min gap-4 col-span-2">
            {/*<div className="hover:text-[#0fa0fa] text-[#555]" href="/" >
				  <IconPaidreUnpadded className="w-[88px] md:w-[88px]" />
				</Link> */}

           <div onClick={()=>window.open(`${windowOrigin}/`)} >
              <span className="flex items-center justify-start text-[24px] font-black">
                <IconPaidreUnpadded className="w-10 mr-2 md:mr-4" />
                Paidre
              </span>
           </div>
            {/* <div className="my-4 text-[#888] text-[16px] md:text-[14px] max-w-[300px]">Resolve late payments online, before lawyers or collectors.</div> */}
            {/* <div className="my-4 text-[#888] text-[16px] max-w-[300px]">Accounts Receivable & Credit Control platform for aging debts</div> */}
            <p className="my-4 text-[#888] text-[16px] max-w-[300px]">Late payment platform for creditors to manage aging debtors on the internet.</p>

            <div className="my-10"></div>
          </div>
          <div className="mb-[16px] grid auto-rows-min gap-4">
            <h6 className="font-[600] mt-4">Product</h6>
           <div className="hover:text-[#0fa0fa] text-[#555]" onClick={()=>window.open(`${windowOrigin}/`)} >
              Submit a claim
           </div>
           <div className="hover:text-[#0fa0fa] text-[#555]" onClick={()=>window.open(`${windowOrigin}/`)} >
              Bulk claims upload
           </div>
            <h6 className="font-[600] mt-4">Cases</h6>
           <div className="hover:text-[#0fa0fa] text-[#555]" onClick={()=>window.open(`${windowOrigin}/`)} >
              Overdue invoices
           </div>
           <div className="hover:text-[#0fa0fa] text-[#555]" onClick={()=>window.open(`${windowOrigin}/`)} >
              Default on loans
           </div>
           <div className="hover:text-[#0fa0fa] text-[#555]" onClick={()=>window.open(`${windowOrigin}/`)} >
              Outstanding salaries
           </div>
           <div className="hover:text-[#0fa0fa] text-[#555]" onClick={()=>window.open(`${windowOrigin}/`)} >
              Unprocessed refunds
           </div>
          </div>
          <div className="mb-[16px] grid auto-rows-min gap-4">
            <h6 className="font-[600] mt-4">Solutions</h6>

           <div className="hover:text-[#0fa0fa] text-[#555]" onClick={()=>window.open(`${windowOrigin}/`)} >
              Business debtors
           </div>
           <div className="hover:text-[#0fa0fa] text-[#555]" onClick={()=>window.open(`${windowOrigin}/`)} >
              Individual debtors
           </div>
           <div className="hover:text-[#0fa0fa] text-[#555]" onClick={()=>window.open(`${windowOrigin}/`)} >
              Business creditors
           </div>
           <div className="hover:text-[#0fa0fa] text-[#555]" onClick={()=>window.open(`${windowOrigin}/`)} >
              Individual creditors
           </div>
          </div>
          <div className="mb-[16px] grid auto-rows-min gap-4">
            <h6 className="font-[600] mt-4">Company</h6>
           <div className="hover:text-[#0fa0fa] text-[#555]" onClick={()=>window.open(`${windowOrigin}/about-us`)} >
              About us
           </div>
           <div className="hover:text-[#0fa0fa] text-[#555]" onClick={()=>window.open(`${windowOrigin}/contact-us`)}>
              Contact us
           </div>
           <div className="hover:text-[#0fa0fa] text-[#555]" onClick={()=>window.open(`${windowOrigin}/blog`)}>
              Blog
           </div>

           <a className="hover:text-[#0fa0fa] text-[#555]" href="https://linkedin.com/company/paidre" target="_blank" rel="nofollow">
              LinkedIn
           </a>
           <a className="hover:text-[#0fa0fa] text-[#555]" href="https://facebook.com/paidredotcom" target="_blank" rel="nofollow">
              Facebook
           </a>
           <a className="hover:text-[#0fa0fa] text-[#555]" href="https://paidre.betteruptime.com" target="_blank" rel="nofollow">
              System status
           </a>
          </div>
          <div className="mb-[16px] grid auto-rows-min gap-4">
            <h6 className="font-[600] mt-4">Legal</h6>
           {/* <a className="hover:text-[#0fa0fa] text-[#555]" href={`${windowOrigin}/privacy-policy`} target="_blank" rel="nofollow" >
              Privacy policy	
           </a>
           <a className="hover:text-[#0fa0fa] text-[#555]" href={`${windowOrigin}/terms-of-use`} target="_blank" rel="nofollow" >
              Terms of use
           </a> */}
          
		  
          </div>
        </div>

        <div className="md:flex items-center justify-between w-full text-[#555] text-[16px]">
          <div className="mb-4 md:mb-0">© Paidre {year}</div>
        </div>
      </div>
    </footer>
  );
};
