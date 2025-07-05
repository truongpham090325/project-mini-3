import item from "../../assets/images/Ellipse 1.png";

export const Section5 = () => {
  return (
    <>
      <section className="xl:py-[120px] py-[45px]">
        <div className="container mx-auto">
          <div className="text-center mx-auto mb-[74px]  max-w-[686px]">
            <h2 className="text-dark sm:text-[36px] text-[30px] font-[800] mb-[16px]">
              Customer Testimonials
            </h2>
            <p className="text-light sm:text-[16px] text-[14px] font-[500]">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-[18px]">
            <div className="sm:p-[32px] p-[12px] text-center bg-[#F6F8FD] rounded-[16px]">
              <div className="text-dark sm:text-[20px] text-[18px] font-[700] mb-[37px]">
                “A must needed kit for every single software arhitect. It makes
                your coding life easier and your final product will be
                blooming.”
              </div>
              <div className="text-center">
                <a href="/">
                  <img
                    src={item}
                    alt=""
                    className="w-[40px] h-[40px] mx-auto"
                  ></img>
                  <h3 className="text-dark text-[18px] font-[800] mt-[16px]">
                    Tiana Schleifer
                  </h3>
                  <p className="text-light text-[12px] font-[600]">
                    CEO & Founder
                  </p>
                </a>
              </div>
            </div>

            <div className="sm:p-[32px] p-[12px] text-center bg-[#F6F8FD] rounded-[16px]">
              <div className="text-dark sm:text-[20px] text-[18px] font-[700] mb-[37px]">
                “A must needed kit for every single software arhitect. It makes
                your coding life easier and your final product will be
                blooming.”
              </div>
              <div className="text-center">
                <a href="/">
                  <img
                    src={item}
                    alt=""
                    className="w-[40px] h-[40px] mx-auto"
                  ></img>
                  <h3 className="text-dark text-[18px] font-[800] mt-[16px]">
                    Tiana Schleifer
                  </h3>
                  <p className="text-light text-[12px] font-[600]">
                    CEO & Founder
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
