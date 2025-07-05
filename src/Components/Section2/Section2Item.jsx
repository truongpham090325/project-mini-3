export const Section2Item = (props) => {
  const { number, title, descriptsion } = props;

  return (
    <>
      <div className="flex gap-x-[18px]">
        <div className="w-[48px] h-[48px] rounded-[50%] bg-primary text-white text-[16px] font-[700] inline-flex justify-center items-center">
          {number}
        </div>
        <div className="flex-1">
          <h3 className="text-dark text-[16px] font-[700]">{title}</h3>
          <div className="text-light  md:text-[16px] text-[13px] font-[500]">
            {descriptsion}
          </div>
        </div>
      </div>
    </>
  );
};
