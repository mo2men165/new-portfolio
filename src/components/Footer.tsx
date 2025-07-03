
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Mo'men Abdeltawab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;