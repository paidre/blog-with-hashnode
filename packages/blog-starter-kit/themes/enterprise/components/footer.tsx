import { IconPaidreUnpadded } from "../assets/icon-paidre-unpadded";

export const Footer = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();

  return (
    <footer className="flex bg-gradient-to-r from-[#f8f8f8] to-white border-t border-[#ddd] w-full bg-[#fff] pt-20 pb-[16px]">
      <div className="mx-auto my-auto w-full max-w-screen-xl items-center justify-between px-4">
        <div className="mb-10 grid gap-10 md:grid-cols-6">
          <div className="my-4 grid auto-rows-min gap-4 md:col-span-2">
            <div onClick={() => window.open(window?.location?.origin)}>
              <span className="flex items-center justify-start text-[24px] font-black">
                <IconPaidreUnpadded className="w-10 mr-2 md:mr-4" />
                Paidre
              </span>
            </div>

            <p className="my-4 text-[#888] text-[16px] max-w-[300px]">Late payment platform for creditors to manage aging debtors on the internet.</p>

            <div className="my-10"></div>
          </div>
          <div className="mb-[16px] grid auto-rows-min gap-4">
            <h6 className="font-[600] mt-4">Product</h6>
            <div className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/`)}>
              Submit a claim
            </div>
            <div className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/`)}>
              Bulk claims upload
            </div>
            <h6 className="font-[600] mt-4">Cases</h6>
            <div className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/`)}>
              Overdue invoices
            </div>
            <div className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/`)}>
              Default on loans
            </div>
            <div className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/`)}>
              Outstanding salaries
            </div>
            <div className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/`)}>
              Unprocessed refunds
            </div>
          </div>
          <div className="mb-[16px] grid auto-rows-min gap-4">
            <h6 className="font-[600] mt-4">Solutions</h6>

            <div className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/for-business-debtors`)}>
              Business debtors
            </div>
            <div className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/for-personal-debtors`)}>
              Personal debtors
            </div>
            <div className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/for-business-creditors`)}>
              Business creditors
            </div>
            <div className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/for-personal-creditors`)}>
              Personal creditors
            </div>
          </div>
          <div className="mb-[16px] grid auto-rows-min gap-4">
            <h6 className="font-[600] mt-4">Company</h6>
            <div className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/about-us`)}>
              About us
            </div>
            <div className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/contact-us`)}>
              Contact us
            </div>
            <div className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/pricing`)}>
              Pricing
            </div>
            <div className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/blog`)}>
              Blog
            </div>

            <a className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`https://linkedin.com/company/paidre`)} target="_blank" rel="nofollow">
              LinkedIn
            </a>
            <a className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`https://facebook.com/getpaidre`)} target="_blank" rel="nofollow">
              Facebook
            </a>
            <a className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`https://paidre.betteruptime.com`)} target="_blank" rel="nofollow">
              System status
            </a>
          </div>
          <div className="mb-[16px] grid auto-rows-min gap-4">
            <h6 className="font-[600] mt-4">Legal</h6>
            <a className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/privacy-policy`)}>
              Privacy policy
            </a>
            <a className="hover:text-[#0fa0fa] text-[#555] cursor-pointer" onClick={() => window.open(`${window?.location?.origin}/terms-of-use`)}>
              Terms of use
            </a>
          </div>
        </div>

        <div className="md:flex items-center justify-between w-full text-[#555] text-[16px]">
          <div className="mb-4 md:mb-0">© Paidre {year}</div>
        </div>
      </div>
    </footer>
  );
};
