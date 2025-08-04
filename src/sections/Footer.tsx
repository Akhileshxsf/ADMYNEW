import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container mx-auto px-4">
        {/* Gradient Text Logo */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
          ADmyBRAND
        </h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 mb-6 text-xs sm:text-sm">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>

        {/* Copyright */}
        <p className="text-xs text-[#888]">
          &copy; 2025 ADmyBRAND Technologies Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
