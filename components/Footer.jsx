export default function Footer() {
  return (
    <footer className="bg-[#0e1d34] py-12">
      <div className="container text-white text-sm">
        <div className="grid grid-cols-2">
          <h1 className="text-4xl font-bold">Mega Dispatch</h1>
          <div className="flex gap-8">
            <div>
              <h3 className="mb-2 text-lg font-bold">Useful Links</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="text-[#ffffff99] hover:text-[#fff]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#ffffff99] hover:text-[#fff]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#ffffff99] hover:text-[#fff]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#ffffff99] hover:text-[#fff]">
                    Our Team
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-bold">Our Expertise</h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#" className="text-[#ffffff99] hover:text-[#fff]">
                    Reefer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#ffffff99] hover:text-[#fff]">
                    Flatbed
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#ffffff99] hover:text-[#fff]">
                    Dry Van
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#ffffff99] hover:text-[#fff]">
                    Power Van
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#ffffff99] hover:text-[#fff]">
                    Box Truck
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4 text-base">
                <h3 className="mb-2 text-lg font-bold">Contact Us</h3>
                <small>F-55 PIA Housing Society,</small>
                <small>Lahore, Pakistan</small>
              </div>
              <div className="flex flex-col gap-4 text-base">
                <h3 className="mb-2 text-lg font-bold">Phone:</h3>
                <small>+92 322 433 7277</small>
                <small>+92 322 433 7277</small>
              </div>
              <div>
                <span>
                  <strong>Email:</strong> <span className="text-[#ffffff99]">info@megadispatch.org</span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col justify-end items-center h-max mt-12">
            <span>© Copyright Mega Dispatch. All Rights Reserved</span>
            <span>Build by System Heights</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
