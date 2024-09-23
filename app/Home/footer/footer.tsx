const Footer = () => {
  return (
    <div>
      <footer className="bg-themeColor dark:bg-neutral-900">
        <div className="container mx-auto px-5 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <p className="text-neutral-200 dark:text-neutral-300 text-sm">
                &copy; 2024 All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
