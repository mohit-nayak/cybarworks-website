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
    <section className={`mx-auto max-w-6xl ${className}`}>
      {title && (
        <Title variant="secondary" className="mb-24">
          {title}
        </Title>
      )}
      <div className="space-y-10">
        {data.map((entry, index) => (
          <Disclosure key={index} as="div">
            {({ open }) => (
              <div
                className={`mx-auto max-w-4xl overflow-hidden rounded-2xl p-[1px] ${open ? "bg-primary-gradient" : "bg-secondary-gradient"}`}
              >
                <div className="relative w-full rounded-2xl bg-primary-dark p-10">
                  <DisclosureButton className="flex w-full items-center justify-between text-left text-xl font-light text-secondary-dark hover:text-secondary-semi-dark">
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
                      <DisclosurePanel className="fontli\\ max-w-3xl origin-top pt-3 text-lg text-secondary-dark transition">
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
