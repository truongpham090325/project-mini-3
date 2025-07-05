export const Section6 = () => {
  return (
    <>
      <section className="xl:py-[120px] py-[45px]">
        <div className="container mx-auto px-[15px]">
          <div className="flex justify-between items-center flex-wrap gap-y-[20px]">
            <h2 className="sm:text-[36px] text-[28px] text-dark">
              <div className="font-[800]">Save time with Horizon.</div>
              <div className="font-[600]">Turn your visitors into clients.</div>
            </h2>
            <div className="flex gap-x-[16px]">
              <a
                href="/"
                className="sm:h-[56px] sm:w-[120px] w-[96px] h-[48px] border-primary border-solid border-[1px] rounded-[12px] inline-flex justify-center items-center text-primary text-[14px] font-[700]"
              >
                Try Demo
              </a>
              <a
                href="/"
                className="sm:h-[56px] sm:w-[171px] h-[48px] w-[140px] bg-primary rounded-[12px] inline-flex justify-center items-center text-white text-[14px] font-[700]"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
