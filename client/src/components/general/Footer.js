const Footer = () => {
  return (
      <footer className="w-full flex flex-col gap-10 sm:gap-5 sm:flex-row items-center justify-between p-4 md:p-10 lg:p-12 mb-16 mt-16 xl:mb-0">
        <div className="w-full flex justify-evenly items-center sm:flex-col sm:items-start sm:justify-center gap-2">

          <div className="text-sm text-center sm:text-left">
            <p>{`Copyright © ${new Date().getFullYear()} - All rights reserved.`}</p>
            </div>
            </div>
      </footer>
  );
};
export default Footer;
