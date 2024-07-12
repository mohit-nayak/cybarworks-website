import React from "react";
import Title from "../../common/title";
import SupportCard from "../support-card";
import SupportTicketIcon from "../../icons/support-ticket";
import RemoteSupportIcon from "../../icons/remote-support";

const SupportOptions = () => {
  return (
    <section className="px-8 pb-10 pt-20 md:pt-0">
      <div className="mx-auto max-w-6xl">
        <Title variant="secondary" className="mb-10 md:mb-16 lg:mb-28">
          Get our support just the way you want
        </Title>
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-10 md:gap-6 md:grid-cols-2 items-stretch lg:gap-20">
            <div className="lg:col-span-1">
              <SupportCard
                title="Open Support Ticket"
                description="Need assistance outside business hours? Submit a ticket for prompt
                    assistance. Rest assured, our team will track and manage your IT
                    issues until resolved, minimizing disruptions."
                actionBtnText="Get Support Ticket"
                actionBtnHref="https://cybarworks.sherpadesk.com/widget?class=45811"
                mainIcon={{ IconEle: SupportTicketIcon }}
              />
            </div>
            <div className="lg:col-span-1">
              <SupportCard
                title="BeyondTrust Remote Support"
                description="Get instant assistance from our IT specialists through secure remote sessions. 
                Resolve technical issues efficiently without in-person visits. Experience tailored troubleshooting."
                actionBtnText="Get Support Ticket"
                actionBtnHref="https://www.beyondtrust.com/"
                mainIcon={{ IconEle: RemoteSupportIcon }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportOptions;
