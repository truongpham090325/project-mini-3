import banner from "../../assets/images/Frame 59.png";
import { FaPhone } from "react-icons/fa6";
import { SiLaravelhorizon } from "react-icons/si";

export const Section1 = () => {
  return (
    <>
      <section className="lg:mb-[80px] mb-[40px]">
        <div className="container mx-auto px-[15px]">
          <div className="flex justify-between items-center sm:flex-nowrap flex-wrap gap-y-[15px]">
            <div className="sm:w-1/2 w-full">
              <div className="flex gap-x-[11px] items-center mb-[10px]">
                <SiLaravelhorizon className="text-[20px] text-primary" />
                <nav className="text-[14px] font-[700] text-primary">
                  TRENDIEST TAILWIND TEMPLATES
                </nav>
              </div>
              <h1 className="lg:text-[60px] md:text-[40px] text-[28px] font-[800] text-dark mb-[24px]">
                Take your website to the next level with Horizon UI
              </h1>
              <p className="md:text-[16px] text-[14px] font-[500] text-light mb-[24px] md:w-[80%] w-full">
                Save hundreds of hours trying to create and develop a dashboard
                from scratch. The fastest, most responsive & trendiest dashboard
                is here. Seriously.
              </p>
              <div className="flex items-center gap-x-[24px] gap-y-[12px] md:flex-nowrap flex-wrap sm:justify-start justify-between">
                <a
                  href="/"
                  className="bg-primary px-[28px] py-[16px] rounded-[10px] tex-[14px] font-[700] text-white md:order-0 order-1"
                >
                  Get started now
                </a>
                <a
                  href="/"
                  className="flex items-center gap-x-[6px] md:order-1 order-0"
                >
                  <FaPhone className="text-[24px]" />
                  <nav className="text-[14px] font-[500]">Book a free call</nav>
                </a>
              </div>
            </div>
            <div className="sm:w-[40%] w-full aspect-[456/640]">
              <img
                src={banner}
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
