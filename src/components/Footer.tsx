export default function Footer() {
  return (
    <footer className="bg-white border-t py-10 px-6 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-bold mb-2">SHOP</h4>
          <ul className="space-y-1 text-gray-600">
            <li>CANDLES</li>
            <li>SOAPS</li>
            <li>SALE</li>
            <li>BUNDLES</li>
            <li>GIFT CARD</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">FRAIS</h4>
          <ul className="space-y-1 text-gray-600">
            <li>OUR STORY</li>
            <li>CONTACT US</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">HELP</h4>
          <ul className="space-y-1 text-gray-600">
            <li>TERMS & CONDITIONS</li>
            <li>PRIVACY POLICY</li>
            <li>SHIPPING & RETURNS</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">CONTACT US</h4>
          <ul className="text-gray-600">
            <li>123-456-7890</li>
            <li>INFO@MYSITE.COM</li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-10 text-xs text-gray-400">
        © 2025 by Vincent Corp.
      </p>
    </footer>
  );
}
