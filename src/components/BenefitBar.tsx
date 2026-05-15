import { benefits } from '../data/benefits';

export default function BenefitBar() {
  const topBenefits = benefits.slice(0, 4);
  const bottomBenefits = benefits.slice(4);

  return (
    <section className="bg-white relative z-20 py-6 border-b border-gray-200">
      <div className="w-full xl:max-w-screen-2xl mx-auto px-4 lg:px-8 flex flex-col gap-6">
        <div className="flex flex-wrap justify-center lg:justify-center items-start gap-x-8 gap-y-6">
          {topBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.id} className="flex items-start gap-3 w-full sm:w-[calc(50%-1.5rem)] lg:w-auto lg:max-w-[280px]">
                <div className="flex-shrink-0">
                  <Icon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-[#009088]" />
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="font-bold text-[#009088] text-sm md:text-base leading-tight mb-1">{benefit.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-snug">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {bottomBenefits.length > 0 && (
          <div className="flex flex-wrap justify-center items-start gap-x-8 gap-y-6">
            {bottomBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.id} className="flex items-start gap-3 w-full sm:w-[calc(50%-1.5rem)] lg:w-auto lg:max-w-[280px]">
                  <div className="flex-shrink-0">
                    <Icon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10 text-[#009088]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <h3 className="font-bold text-[#009088] text-sm md:text-base leading-tight mb-1">{benefit.title}</h3>
                    <p className="text-gray-500 text-xs md:text-sm leading-snug">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
