import React, { Fragment, useState } from "react";
import { Link } from "gatsby";
import mainNavigationData from "../../data/main-navigation-data";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LocationIcon from "../icons/location-pin";
import EmailIcon from "../icons/envelope";
import CallIcon from "../icons/telephone";
import useWindowPos from "../../hooks/useWindowPos";

const MainNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrolled } = useWindowPos({ target: 75 });

  return (
    <header className={`fixed top-0 z-20 w-full`}>
      <div
        className={`absolute ease-primary ${scrolled ? "opacity-100" : "opacity-0"} z50 inset-0 bg-primary-light backdrop-blur-md transition-opacity duration-500`}
      />
      <nav
        className={`mx-auto flex max-w-8xl items-center justify-between px-6 ${scrolled ? "py-4" : "py-8"} relative transition-all duration-500 ease-primary lg:px-8`}
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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-dark hover:text-secondary-semi-light"
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
                    <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-lg bg-primary-dark bg-secondary-gradient p-[1px] shadow-lg ring-1 ring-gray-900/5">
                      <div className="absolute inset-0 rounded-lg bg-secondary-gradient-light" />
                      <div className="rounded-lg bg-primary-dark p-3">
                        {navItem.children.map((navItemChild, childIndex) => (
                          <div
                            key={childIndex}
                            className="group relative flex items-center gap-x-6 rounded-lg px-3 py-2 text-sm leading-6"
                          >
                            <div className="flex-auto">
                              <Link
                                to={navItemChild.url}
                                className="block text-base font-light group-hover:text-tertiary-dark"
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
          <Link to={`mailto:${mainNavigationData.contact.email}`}>
            <EmailIcon className="h-10 w-10" />
          </Link>
          <Link to={`callto:${mainNavigationData.contact.call}`}>
            <CallIcon className="h-10 w-10" />
          </Link>
        </div>
      </nav>

      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setMobileMenuOpen(false)}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 z-50 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                <TransitionChild
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300 sm:duration-300"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300 sm:duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <DialogPanel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-primary-dark shadow-xl">
                      <div className="px-6 py-8 sm:px-6">
                        <div className="flex items-start justify-between">
                          <div className="mr-3 flex h-7 w-full items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                              <span className="sr-only">Your Company</span>
                              <img
                                className="h-auto w-40"
                                src={mainNavigationData.logo}
                                alt={mainNavigationData.logoAlt}
                              />
                            </Link>
                            <button
                              type="button"
                              className="ml-auto rounded-md text-secondary-dark hover:text-secondary-semi-light focus:outline-none"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex h-full flex-1 flex-col justify-between px-6 sm:px-6">
                        {/* Content goes here */}
                        <div className="mb-8 flex flex-col gap-6">
                          {mainNavigationData.navLinks.map((navItem, index) => (
                            <Fragment key={index}>
                              {navItem.children ? (
                                <Disclosure
                                  as="div"
                                  className="relative w-max rounded-2xl bg-primary-dark"
                                >
                                  <DisclosureButton className="flex items-center gap-x-1 text-2xl font-light leading-6 text-secondary-dark outline-0 transition-colors hover:text-tertiary-dark">
                                    {navItem.name}
                                    <ChevronDownIcon
                                      className="h-5 w-5 flex-none text-gray-400"
                                      aria-hidden="true"
                                    />
                                  </DisclosureButton>
                                  <div className="overflow-hidden">
                                    <Transition
                                      enter="duration-200 ease-out"
                                      enterFrom="opacity-0 -translate-y-6"
                                      enterTo="opacity-100 translate-y-0"
                                      leave="duration-300 ease-out"
                                      leaveFrom="opacity-100 translate-y-0"
                                      leaveTo="opacity-0 -translate-y-6"
                                    >
                                      <DisclosurePanel className="w-max origin-top pt-3 text-lg font-light text-secondary-dark transition">
                                        {navItem.children.map(
                                          (navItemChild, childIndex) => (
                                            <div
                                              key={childIndex}
                                              className="group relative flex items-center gap-x-6 rounded-lg px-3 py-2 leading-6"
                                            >
                                              <div className="flex-auto">
                                                <Link
                                                  to={navItemChild.url}
                                                  className="block text-lg font-light group-hover:text-tertiary-dark"
                                                >
                                                  {navItemChild.name}
                                                  <span className="absolute inset-0" />
                                                </Link>
                                              </div>
                                            </div>
                                          ),
                                        )}
                                      </DisclosurePanel>
                                    </Transition>
                                  </div>
                                </Disclosure>
                              ) : (
                                <Link
                                  to={navItem.url}
                                  className="w-max text-2xl font-light leading-6 text-secondary-dark transition-colors hover:text-tertiary-dark"
                                >
                                  {navItem.name}
                                </Link>
                              )}
                            </Fragment>
                          ))}
                        </div>
                        <div className="mt-auto flex flex-col gap-2 pb-6 lg:justify-end">
                          <Link to="/" className="flex items-center gap-1">
                            <LocationIcon className="h-10 w-10" />
                            <span className="text-base">
                              {mainNavigationData.contact.location[0]}
                            </span>
                          </Link>
                          <Link
                            to={`mailto:${mainNavigationData.contact.email}`}
                            className="flex items-center gap-1"
                          >
                            <EmailIcon className="h-10 w-10" />
                            <span className="text-base">
                              {mainNavigationData.contact.email}
                            </span>
                          </Link>
                          <Link
                            to={`callto:${mainNavigationData.contact.call}`}
                            className="flex items-center gap-1"
                          >
                            <CallIcon className="h-10 w-10" />
                            <span className="text-base">
                              {mainNavigationData.contact.call}
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </header>
  );
};

export default MainNavigation;
