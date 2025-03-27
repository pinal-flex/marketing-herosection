import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLink from "./ui/NavLink";
import Button from "./ui/Button";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <a href="#" className="-m-1.5 p-1.5">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
            className="h-8 w-auto"
          />
        </a>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex lg:justify-end">
          <NavLink href="#">Log in →</NavLink>
        </div>

        <div className="lg:hidden">
          <Button variant="secondary" onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <DialogPanel className="fixed inset-0 z-50 flex flex-col bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Logo"
                className="h-8 w-auto"
              />
            </a>
            <Button variant="secondary" onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6" />
            </Button>
          </div>

          <div className="mt-6">
            {navigation.map((item) => (
              <NavLink key={item.name} href={item.href} className="block py-2">
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-6">
            <NavLink href="#" className="block py-2">
              Log in
            </NavLink>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
