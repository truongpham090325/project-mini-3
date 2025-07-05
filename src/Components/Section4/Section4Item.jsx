export const Section4Item = (props) => {
  const { number, title, descriptsion } = props;

  return (
    <>
      <div className="">
        <div className="text-dark md:text-[36px] text-[30px] font-[800] mb-[2px]">
          {number}
        </div>
        <div className="text-dark text-[16px] font-[700] mb-[2px]">{title}</div>
        <div className="text-light md:text-[16px] text-[14px] font-[500]">
          {descriptsion}
        </div>
      </div>
    </>
  );
};
