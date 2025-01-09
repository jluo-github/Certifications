const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='border-t dark:border-t-slate-600 border-t-violet-300 text-white flex gap-6 flex-wrap items-center justify-end px-8 py-6'>
      <p className='text-violet-500 dark:text-slate-400 md:mr-4'>
        {" "}
        &copy;{year} Jin. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
