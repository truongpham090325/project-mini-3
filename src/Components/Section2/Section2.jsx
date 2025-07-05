import { Section2Item } from "./Section2Item";

export const Section2 = () => {
  return (
    <>
      <section className="xl:py-[120px] py-[30px]">
        <div className="container mx-auto px-[15px]">
          <div className="text-center mb-[60px]">
            <h2 className="text-dark sm:text-[36px] text-[27px] font-[800] mb-[10px]">
              How Horizon works?
            </h2>
            <p className="text-light sm:text-[16px] text-[13px] font-[500]">
              Tellus rutrum tellus pellentesque eu tincidunt tortor condimentum.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[40px] gap-y-[40px]">
            <Section2Item
              number="1"
              title="Create your Account"
              descriptsion="Condimentum vit pellemsque habitant morbi at molestie."
            />
            <Section2Item
              number="2"
              title="Setup your Account"
              descriptsion="Condimentum vit pellemsque habitant morbi at molestie."
            />
            <Section2Item
              number="3"
              title="Start creating with Horizon"
              descriptsion="Condimentum vit pellemsque habitant morbi at molestie."
            />
          </div>
        </div>
      </section>
    </>
  );
};
