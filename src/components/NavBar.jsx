import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLink from "./ui/NavLink";
import Button, { buttonVariants } from "./ui/Button";
import { cn } from "../lib/utils";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6">
        <NavLink href="#" className="-m-1.5 p-1.5 flex lg:flex-1">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
            className="h-8 w-auto"
          />
        </NavLink>
        <ul className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink key={item.name} href={item.href} className="text-sm/6">
              {item.name}
            </NavLink>
          ))}
        </ul>
        <NavLink
          href="#"
          className={cn(buttonVariants({ variant: "ghost" }), "hidden lg:flex lg:flex-1 lg:justify-end")}
       
        >
          Log in &rarr;
        </NavLink>
        <div className="flex lg:hidden">
          <Button
            variant="hidden"
            type="button"
            size="icon"
            className="-m-2.5 inline-flex items-center justify-center"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="size-6" />
          </Button>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
       
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Logo"
                className="h-8 w-auto"
              />
            </a>
            <Button
              variant="hidden"
              type="button"
              size="icon"
              className="-m-2.5 inline-flex items-center justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon aria-hidden="true" className="size-6" />
            </Button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 hover:bg-gray-50"
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <NavLink
                  href="#"
                  className="py-2.5 -mx-3 block rounded-lg px-3 text-base/7 hover:bg-gray-50"
                >
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
