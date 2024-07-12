import React from "react";
import Title from "../common/title";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import ArrowRightCircle from "../icons/arrow-right-circle";

const AccordionContent = ({ title = "", data = [], className = "" }) => {
  return (
    <section className={`mx-auto max-w-6xl px-8 ${className}`}>
      {title && (
        <Title variant="secondary" className="mb-10 lg:mb-24">
          {title}
        </Title>
      )}
      <div className="space-y-6 md:space-y-10">
        {data.map((entry, index) => (
          <Disclosure key={index} as="div">
            {({ open }) => (
              <div
                className={`mx-auto max-w-4xl overflow-hidden rounded-2xl p-[1px] ${open ? "bg-primary-gradient" : "bg-secondary-gradient"}`}
              >
                <div className="relative w-full rounded-2xl bg-primary-dark p-4 md:p-10">
                  <DisclosureButton
                    className={`flex w-full items-center justify-between text-left text-base font-light transition-colors duration-200 hover:text-secondary-semi-dark md:text-xl ${open ? "text-tertiary-dark hover:text-tertiary-dark" : "text-secondary-dark"}`}
                  >
                    <div className="absolute inset-0 bg-secondary-gradient-light" />
                    {entry.title}
                    <ArrowRightCircle
                      className={`aspect-square h-11 w-11 transition-transform duration-500 ${open ? "-rotate-90" : "rotate-90"}`}
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
                      <DisclosurePanel className="max-w-3xl origin-top pt-3 text-base font-light text-secondary-dark transition md:text-lg">
                        {entry.description}
                      </DisclosurePanel>
                    </Transition>
                  </div>
                </div>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default AccordionContent;
