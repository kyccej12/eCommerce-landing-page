export default function Footer() {
    return (
      <footer className="bg-[#f6f3ec] text-[#0a0a0a] px-6 py-12">
        <div className="max-w-7xl mx-auto md:grid-cols-3 gap-12 text-sm">
          
          <div className="flex flex-col items-center md:items-center text-center md:text-left space-y-2 space-x-2">
            <div className="text-2xl">🌐</div>
            <div className="text-xl font-bold tracking-widest mb-6">MONDE</div>
          </div>
  
          
          <div className="grid grid-cols-3 md:grid-cols-3 text-center mt-6">
            <div>
                <h3 className="uppercase font-semibold text-xs mb-4 text-center">Company</h3>
                <ul className="space-y-2">
                <li><a href="#">About Us</a></li>
                <li><a href="#">The Team</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Press</a></li>
                </ul>
            </div>
    
            <div>
                <h3 className="uppercase font-semibold text-xs mb-4">Find</h3>
                <ul className="space-y-2">
                <li><a href="#">Women’s Clothing</a></li>
                <li><a href="#">Women’s Bags</a></li>
                <li><a href="#">Women’s Shoes</a></li>
                <li><a href="#">Women’s Jewellery</a></li>
                <li><a href="#">Makeup</a></li>
                <li><a href="#">Skin Care</a></li>
                <li><a href="#">Men’s Clothing</a></li>
                <li><a href="#">Men’s Bags</a></li>
                <li><a href="#">Men’s Shoes</a></li>
                </ul>
            </div>
    
            <div>
                <h3 className="uppercase font-semibold text-xs mb-4">Top Brands</h3>
                <ul className="space-y-2">
                <li><a href="#">Gucci</a></li>
                <li><a href="#">ASOS</a></li>
                <li><a href="#">Sass & Bide</a></li>
                <li><a href="#">Alice & Olivia</a></li>
                <li><a href="#">Tibi</a></li>
                </ul>
            </div>
          </div>

        </div>
  
        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-600">
          <div className="flex flex-col items-center md:flex-row gap-4">
            <span className="uppercase font-semibold">Follow Us</span>
            <div className="flex gap-4 text-lg">
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-pinterest-p" /></a>
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-facebook-f" /></a>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            <span>© 2025 Monde</span>
            <span>|</span>
            <a href="#">Terms</a>
            <span>|</span>
            <a href="#">Privacy</a>
          </div>
        </div>
      </footer>
    );
  }
  