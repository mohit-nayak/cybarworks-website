import React, { Fragment, useState } from "react";
import { Link } from "gatsby";
import mainNavigationData from "../../data/main-navigation-data";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LocationIcon from "../icons/location-pin";
import EmailIcon from "../icons/envelope";
import CallIcon from "../icons/telephone";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MainNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 z-20 w-full bg-transparent">
      <nav
        className="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-auto w-44"
              src={mainNavigationData.logo}
              alt={mainNavigationData.logoAlt}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-9">
          {mainNavigationData.navLinks.map((navItem, index) => (
            <Fragment key={index}>
              {navItem.children ? (
                <Popover className="relative">
                  <PopoverButton className="flex items-center gap-x-1 text-xl font-light leading-6 text-secondary-dark outline-0 transition-colors hover:text-tertiary-dark">
                    {navItem.name}
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                  </PopoverButton>

                  <Transition
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-primary-dark shadow-lg ring-1 ring-gray-900/5">
                      <div className="p-4">
                        {navItem.children.map((navItemChild, childIndex) => (
                          <div
                            key={childIndex}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-secondary-semi-dark"
                          >
                            <div className="flex-auto">
                              <Link
                                to={navItemChild.url}
                                className="block font-semibold text-secondary-dark"
                              >
                                {navItemChild.name}
                                <span className="absolute inset-0" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </PopoverPanel>
                  </Transition>
                </Popover>
              ) : (
                <Link
                  to={navItem.url}
                  className="text-xl font-light leading-6 text-secondary-dark transition-colors hover:text-tertiary-dark"
                >
                  {navItem.name}
                </Link>
              )}
            </Fragment>
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-6">
          <Link to="/">
            <LocationIcon className="h-10 w-10" />
          </Link>
          <Link to="/">
            <EmailIcon className="h-10 w-10" />
          </Link>
          <Link to="/">
            <CallIcon className="h-10 w-10" />
          </Link>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src={mainNavigationData.logo}
                alt={mainNavigationData.logoAlt}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {mainNavigationData.navLinks.map((navItem, index) => (
                  <Fragment key={index}>
                    {navItem.children ? (
                      <Disclosure as="div" className="-mx-3">
                        {({ open }) => (
                          <>
                            <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-xl font-semibold leading-7 text-secondary-dark hover:bg-gray-50">
                              <ChevronDownIcon
                                className={classNames(
                                  open ? "rotate-180" : "",
                                  "h-5 w-5 flex-none",
                                )}
                                aria-hidden="true"
                              />
                            </DisclosureButton>
                            <DisclosurePanel className="mt-2 space-y-2">
                              {navItem.children.map(
                                (navItemChild, childIndex) => (
                                  <DisclosureButton
                                    key={childIndex}
                                    as="a"
                                    href={navItemChild.url}
                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-secondary-dark hover:bg-gray-50"
                                  >
                                    {navItemChild.name}
                                  </DisclosureButton>
                                ),
                              )}
                            </DisclosurePanel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <Link
                        to="#"
                        className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-secondary-dark hover:bg-gray-50"
                      >
                        Features
                      </Link>
                    )}
                  </Fragment>
                ))}
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-6">
                <Link to="/">
                  <LocationIcon className="h-10 w-10" />
                </Link>
                <Link to="/">
                  <EmailIcon className="h-10 w-10" />
                </Link>
                <Link to="/">
                  <CallIcon className="h-10 w-10" />
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default MainNavigation;
