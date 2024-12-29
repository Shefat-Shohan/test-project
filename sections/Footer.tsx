import Title from "@/components/Title";

export default function Footer() {
  return (
    <footer className="min-h-[100vh] flex flex-col justify-end">
      <div className="flex flex-col lg:flex-row lg:justify-between p-4 md:p-8">
        <div className="pb-4 md:pb-0 flex-1">
          <h2 className="font-oranienbaum text-[26px] leading-[30px] md:text-[96px] md:leading-[100px]">
            Overtuigd van de nummer 1 in Noord Holland ?
          </h2>
        </div>
        <Title title="GMK" />
      </div>
      <div className="border-t border-[#11162E]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between p-4 md:p-8">
          {/* footer bottom element */}
          <div>
            <p className="paragraph">GMK Dakonderhoud B.V.</p>
            <p className="paragraph">Leidsekade 57 1016 CX Amsterdam</p>
          </div>
          <div>
            <p className="paragraph">info@dakonderhoudgmk.nl</p>
            <p className="paragraph">(020) 26 12 257</p>
          </div>
          <div>
            <p className="paragraph">Privacy verklaring</p>
            <p className="paragraph">Algemene Voorwaarden</p>
          </div>
          <div>
            <p className="paragraph">(C) MMXXIV GMK Dakonderhoud B.V.</p>
            <p className="paragraph">Concept by Nakatori Amsterdam</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
