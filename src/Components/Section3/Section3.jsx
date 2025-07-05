import { Section3Item } from "./Section3Item";
import { HiOutlineMailOpen } from "react-icons/hi";
export const Section3 = () => {
  return (
    <>
      <section className="xl:py-[120px] py-[45px]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-x-[8px] gap-y-[8px]">
            <Section3Item
              title="Share team inboxes"
              descriptsion="Whether you have a team of 2 or 200, our shared team inboxes keep everyone "
            >
              <HiOutlineMailOpen />
            </Section3Item>
            <Section3Item
              title="Analytics dashboard"
              descriptsion="Whether you have a team of 2 or 200, our shared team inboxes keep everyone "
            ></Section3Item>
            <Section3Item
              title="Deliver instant answer"
              descriptsion="Whether you have a team of 2 or 200, our shared team inboxes keep everyone "
            ></Section3Item>
          </div>
        </div>
      </section>
    </>
  );
};
