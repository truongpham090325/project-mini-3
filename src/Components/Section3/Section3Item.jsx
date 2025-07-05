import { HiOutlineMailOpen } from "react-icons/hi";

export const Section3Item = (props) => {
  const { title, descriptsion } = props;

  return (
    <>
      <div className="px-[8px] py-[22px] text-center">
        <div className="w-[64px] h-[64px] bg-primary rounded-[16px] text-[24px] text-white inline-flex justify-center items-center">
          <HiOutlineMailOpen />
        </div>
        <div className="mt-[24px]">
          <h3 className="text-dark text-[24px] font-[800] mb-[8px]">{title}</h3>
          <p className="text-light text-[16px] font-[500]">{descriptsion}</p>
        </div>
      </div>
    </>
  );
};
