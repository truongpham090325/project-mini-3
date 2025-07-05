import background from "../../assets/images/Image.png";
import { Section4Item } from "./Section4Item";
export const Section4 = () => {
  return (
    <>
      <section className="xl:py-[120px] py-[45px]">
        <div className="container mx-auto px-[15px]">
          <div className="flex lg:justify-between items-center justify-start gap-x-[20px]">
            <div className="lg:w-[45%]">
              <div className="md:text-left text-center mb-[60px]">
                <h2 className="text-dark md:text-[30px] text-[28px] font-[800]">
                  Boost your workflow with Horizon
                </h2>
                <p className="text-light md:text-[16px] text-[15px] font-[500]">
                  Urna duis convallis convallis tellus interdum velit laoreet
                  pentesque aliquam tortor consequat porta.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-[40px] gap-y-[60px]">
                <Section4Item
                  number="340+"
                  title="Successful Projects"
                  descriptsion="Urna duis convallis convallis tellus interdum velit laoreet."
                ></Section4Item>
                <Section4Item
                  number="$10m"
                  title="Annual Percentage Rate"
                  descriptsion="Urna duis convallis convallis tellus interdum velit laoreet."
                ></Section4Item>
                <Section4Item
                  number="2.8k+"
                  title="Clients Worldwide"
                  descriptsion="Urna duis convallis convallis tellus interdum velit laoreet."
                ></Section4Item>
                <Section4Item
                  number="7000+"
                  title="Daily Visits"
                  descriptsion="Urna duis convallis convallis tellus interdum velit laoreet."
                ></Section4Item>
              </div>
            </div>
            <div className="lg:w-[43%] md:block hidden aspect-[515/504]">
              <img
                src={background}
                alt=""
                className="w-full h-full object-cover"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
