import React from "react";

const footerLinks = [
  {
    title: "Home",
    items: ["Process", "Listing", "Popular Property", "Our Agents", "Testimonial"],
  },
  {
    title: "Services",
    items: ["Site map", "Property type", "Terms and conditions", "Privacy policy"],
  },
  {
    title: "About",
    items: ["About us", "Why choose us?", "Events", "Blog"],
  },
];

const socialLinks = [
  { icon: "fab fa-facebook-f", label: "Facebook", href: "#" },
  { icon: "fab fa-twitter", label: "Twitter", href: "#" },
  { icon: "fab fa-instagram", label: "Instagram", href: "#" },
  { icon: "fab fa-linkedin-in", label: "LinkedIn", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-[#f5fcfc] w-full py-16 px-6 text-[#0f0f0f]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Logo & Description */}
        <div className="space-y-5 max-w-xs">
          <div className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="Building Logo"
              className="w-6 h-6"
            />
            <span className="font-semibold text-base">Building</span>
          </div>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam turpis sed ut fam tortor pharetra.
          </p>
          <div className="flex gap-4 text-[#0d9db7] text-lg">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="hover:text-[#0a7a8a]"
              >
                <i className={icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Nav Links */}
        {footerLinks.map(({ title, items }) => (
          <div key={title}>
            <h3 className="font-semibold text-base mb-4">{title}</h3>
            <ul className="space-y-2 text-sm">
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Info */}
        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-2">
            <img className="text-[#0d9db7]" src="/phone.svg" />
            <a href="tel:+888561258" className="hover:underline">+888 561 258</a>
          </div>
          <div className="flex items-center gap-2">
            <img className=" text-[#0d9db7]" src="/google.png" />
            <a href="mailto:webmail@gmail.com" className="hover:underline">webmail@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/playstore.svg"
              alt="Google Play Logo"
              className="w-5 h-5"
            />
            <a href="#" className="hover:underline">Google Play</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
