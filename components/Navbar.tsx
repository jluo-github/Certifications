"use Client";

import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";
import { FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full max-w-7xl bg-violet-100/[0.8] dark:bg-slate-900/[0.8] p-3 md:p-4 gap-4 fixed top-0 left-0 right-0 z-10 shadow-lg shadow-violet-500/[0.3] mx-auto dark:shadow-violet-400/[0.4] '>
      <Link href='/' className='font-bold text-2xl ml-4' aria-label='my-certs'>
        MyCerts
      </Link>

      <div className='flex gap-6 mr-4 items-center'>
        <Link
          href='https://github.com/jluo-github'
          target='_blank'
          className='bg-transparent'>
          <SiGithub className='w-9 h-9 hover:scale-110 active:scale-95 transition-all shadow-xl shadow-violet-400 bg-transparent' />
        </Link>

        <Link
          href='https://linkedin.com/in/jluo23'
          target='_blank'
          className='bg-transparent'>
          <FaLinkedin className='bg-transparent w-9 h-9 hover:scale-110 active:scale-95 transition-all shadow-xl shadow-violet-400' />
        </Link>

        <DarkModeToggle />
      </div>
    </div>
  );
};
export default Navbar;
