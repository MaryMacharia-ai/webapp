import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-start gap-8">
        
        {/* Company Info */}
        <div className="space-y-1">
          <p className="text-sm md:text-base font-semibold">©2025 NilaWriters</p>
          <p className="text-xs text-gray-400">We Are Always Here To Serve You</p>
        </div>

{/* Company Links */}
<div className="space-y-2">
  <a href="/company" className="text-white hover:text-blue-400 font-medium">Company</a>
  <ul className="text-sm space-y-1">
    <li><a href="/company/about" className="text-white hover:text-blue-300">About Us</a></li>
    <li><a href="/company/writers" className="text-white hover:text-blue-300">Writers</a></li>
    <li><a href="/company/editors" className="text-white hover:text-blue-300">Editors</a></li>
    <li><a href="/company/offers" className="text-white hover:text-blue-300">Exclusive Offers</a></li>
  </ul>
</div>

        {/* Privacy */}
        <div className="space-y-2">
          <a href="/privacy" className="text-blue-400 hover:text-white font-medium">Privacy</a>
          <p className="text-sm text-gray-400">
            All orders are kept confidential to uphold our client's integrity.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <a href="/contact" className="text-blue-400 hover:text-white font-medium">Contact</a>
          <p className="text-sm">Email: <span className="text-gray-100">nilawriters@gmail.com</span></p>
          <p className="text-sm">Phone: <span className="text-gray-100">+254 728 305 732</span></p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://www.facebook.com/mary.macharia.58" className="hover:text-white" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.linkedin.com/in/mary-macharia-62499a397/" className="hover:text-white" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer