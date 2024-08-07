import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';
import { IconPaidreUnpadded } from '../assets/icon-paidre-unpadded';


export const Footer = () => {

	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	const currentTime = new Date();
	const year = currentTime.getFullYear();
	return (
		<footer className="flex bg-gradient-to-r from-[#f8f8f8] to-white border-t border-[#ddd] w-full bg-[#fff] pt-20 pb-[16px]">
		  <div className="mx-auto my-auto w-full max-w-screen-xl items-center justify-between px-4">
			<div className="mb-10 grid gap-10 md:grid-cols-5">
			  <div className="my-4 grid auto-rows-min gap-4">
				{/* <Link className="hover:text-[#0fa0fa] text-[#555]" href="/" prefetch={false}>
				  <IconPaidreUnpadded className="w-[88px] md:w-[88px]" />
				</Link> */}
	
				<Link href="/" prefetch={false}>
				  <span className="flex items-center justify-start text-[24px] font-black">
					<IconPaidreUnpadded className="w-10 mr-2 md:mr-4" />
					Paidre
				  </span>
				</Link>
				{/* <div className="my-4 text-[#888] text-[16px] md:text-[14px] max-w-[300px]">Resolve late payments online, before lawyers or collectors.</div> */}
				{/* <div className="my-4 text-[#888] text-[16px] max-w-[300px]">Accounts Receivable & Credit Control platform for aging debts</div> */}
				<p className="my-4 text-[#888] text-[14px] max-w-[300px]">The late payment platform for creditors to manage aging debtors over the internet.</p>
	
				{/* <p className="my-4 text-[#555] text-[16px] max-w-[300px]">Helping anyone to deal with late payments quickly using the internet.</p> */}
	
				{/* <img onClick={() => window.open('https://startup.google.com/cloud/')}
				  className="hover:cursor-pointer my-10 max-h-18 bg-[#fff] rounded-xl border border-[#ddd] p-4" src="/google-for-startups.svg"
				  alt="Google for Startups badge"
				/> */}
				{/* <div className="my-10 flex flex-wrap">
				  <div className="border border-[#ddd] mr-4 mb-4 text-[14px] w-fit rounded-lg flex p-2 items-center justify-center whitespace-nowrap">Singapore</div>
				  <div className="border border-[#ddd] mr-4 mb-4 text-[14px] w-fit rounded-lg flex p-2 items-center justify-center whitespace-nowrap">United States</div>
				  <div className="border border-[#ddd] mr-4 mb-4 text-[14px] w-fit rounded-lg flex p-2 items-center justify-center whitespace-nowrap">Australia</div>
				  <div className="border border-[#ddd] mr-4 mb-4 text-[14px] w-fit rounded-lg flex p-2 items-center justify-center whitespace-nowrap">New Zealand</div>
				  <div className="border border-[#ddd] mr-4 mb-4 text-[14px]  w-fit rounded-lg flex p-2 items-center justify-center whitespace-nowrap">Hong Kong</div>
	
				</div> */}
	
				<div className="my-10"></div>
				{/* <div className="">
				  <span className="font-black">Paidre</span><br />
				  21 Collyer Quay<br />
				  Singapore 049320
				</div> */}
			  </div>
			  <div className="mb-[16px] grid auto-rows-min gap-4">
				<h6 className="font-[600] mt-4">Product</h6>
				<Link className="hover:text-[#0fa0fa] text-[#555]" href="/request" target="_blank" prefetch={false}>
				  Submit a claim
				</Link>
				<Link className="hover:text-[#0fa0fa] text-[#555]" href="/request" target="_blank" prefetch={false}>
				  Bulk claims upload
				</Link>
				<h6 className="font-[600] mt-4">Cases</h6>
				<Link className="hover:text-[#0fa0fa] text-[#555]" href="/request" target="_blank" prefetch={false}>
				  Overdue invoices
				</Link>
				<Link className="hover:text-[#0fa0fa] text-[#555]" href="/request" target="_blank" prefetch={false}>
				  Missed loan repayments
				</Link>
				<Link className="hover:text-[#0fa0fa] text-[#555]" href="/request" target="_blank" prefetch={false}>
				  Outstanding salaries
				</Link>
				<Link className="hover:text-[#0fa0fa] text-[#555]" href="/request" target="_blank" prefetch={false}>
				  Unprocessed refunds
				</Link>
			  </div>
			  <div className="mb-[16px] grid auto-rows-min gap-4">
				<h6 className="font-[600] mt-4">Debtors</h6>
	
				<Link className="hover:text-[#0fa0fa] text-[#555]" href="/request" target="_blank" prefetch={false}>
				  Business owing money
				</Link>
				<Link className="hover:text-[#0fa0fa] text-[#555]" href="/request" target="_blank" prefetch={false}>
				  Individual owing money
				</Link>
	
				<h6 className="font-[600] mt-4">Creditors</h6>
	
				<Link className="hover:text-[#0fa0fa] text-[#555]" href="/request" target="_blank" prefetch={false}>
				  Business claiming money
				</Link>
				<Link className="hover:text-[#0fa0fa] text-[#555]" href="/request" target="_blank" prefetch={false}>
				  Individual claiming money
				</Link>
			  </div>
			  <div className="mb-[16px] grid auto-rows-min gap-4">
				<h6 className="font-[600] mt-4">Company</h6>
				<Link className="hover:text-[#0fa0fa] text-[#555]" href="/about-us" target="_blank" prefetch={false}>
				  About us
				</Link>
				<Link className="hover:text-[#0fa0fa] text-[#555]" href="/contact-us" target="_blank" rel="nofollow">
				  Contact us
				</Link>
				<Link className="hover:text-[#0fa0fa] text-[#555]" href="https://www.linkedin.com/company/paidre" target="_blank" rel="nofollow">
				  LinkedIn
				</Link>
				{/* <Link className="hover:text-[#0fa0fa] text-[#555]"
				  href="https://www.paidre.com/universe.xml"
				  target="_blank"
				  rel="nofollow"
				>
				  Sitemap
				</Link> */}
			  </div>
			  <div className="mb-[16px] grid auto-rows-min gap-4">
				<h6 className="font-[600] mt-4">Legal</h6>
				<Link className="hover:text-[#0fa0fa] text-[#555]" href="/privacy-policy" target="_blank" rel="nofollow" prefetch={false}>
				  Privacy policy
				</Link>
				<Link className="hover:text-[#0fa0fa] text-[#555]" href="/terms-of-use" target="_blank" rel="nofollow" prefetch={false}>
				  Terms of use
				</Link>
				{/* <Link className="hover:text-[#0fa0fa] text-[#555]"
				  href="/community-guidelines"
				  target="_blank"
				  rel="nofollow"
				  prefetch={false}
				>
				  Community Guidelines
				</Link> */}
			  </div>
			</div>
	
			<div className="md:flex items-center justify-start w-full text-[#555] text-[16px]">
			  <div className="mb-4 md:mb-0">© Paidre {year}</div>
			  {/* <a href="https://cloud.google.com/startup" target="_blank"><div className="flex space-x-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none">
				<path d="M14.72 8.15838C14.72 7.66202 14.6754 7.18474 14.5927 6.72656H8V9.43747H11.7673C11.6018 10.3093 11.1054 11.0475 10.3609 11.5438V13.3066H12.6327C13.9564 12.0847 14.72 10.2902 14.72 8.15838Z" fill="#4285F4" />
				<path d="M7.99908 14.9996C9.88908 14.9996 11.4736 14.3759 12.6318 13.3068L10.36 11.5441C9.73635 11.9641 8.9409 12.2187 7.99908 12.2187C6.17908 12.2187 4.63272 10.9905 4.07909 9.33594H1.75V11.1432C2.90182 13.4278 5.26272 14.9996 7.99908 14.9996Z" fill="#34A853" />
				<path d="M4.08 9.33055C3.94 8.91055 3.85727 8.46509 3.85727 8.00055C3.85727 7.536 3.94 7.09055 4.08 6.67055V4.86328H1.75091C1.27364 5.8051 1 6.86782 1 8.00055C1 9.13327 1.27364 10.196 1.75091 11.1378L3.56454 9.72509L4.08 9.33055Z" fill="#FBBC05" />
				<path d="M7.99908 3.78727C9.02999 3.78727 9.94635 4.14363 10.6782 4.8309L12.6827 2.82636C11.4673 1.69364 9.88908 1 7.99908 1C5.26272 1 2.90182 2.57182 1.75 4.86272L4.07909 6.66999C4.63272 5.01545 6.17908 3.78727 7.99908 3.78727Z" fill="#EA4335" />
			  </svg><span className="text-[#888]"> Google for Startups</span></div></a> */}
			</div>
		  </div>
		</footer>
	  );
};
