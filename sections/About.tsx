import Image from "next/image";
import TENYEARCELEBRATION from "@/public/ten-year-celebration.png";
import TOPPRO from "@/public/top-pro.png";
import GOOGLE from "@/public/google.png";
import { gridImage } from "@/data/index";

const About = () => {
  return (
    <div className="container lg:px-0 pb-10">
      <div className="lg:flex py-8 lg:gap-16 items-center">
        {/* Text Section */}
        <div className="flex-1">
          <p className="paragraph">
            Wij zijn gespecialiseerd in Dak reparaties, -renovaties en
            -onderhoud. Dak lekkage? Spoedaanvragen? Dan bent u bij ons aan het
            juiste adres. Onze 24 uursservice zorgt ervoor dat wij u altijd op
            korte termijn een oplossing kunnen bieden. Wij brengen de
            verwachtingen van onze klanten in kaart en geven een duurzame
            passende oplossing voor uw klus. Dit wordt mogelijk gemaakt door
            onze vakmensen die jarenlang ervaring hebben. De specialisaties zijn
            o.a. het leveren en aanbrengen van Bitumen, Epdm en pannen daken.
            Maar ook het vernieuwen van lood en zink.
          </p>
          <p className="paragraph">
            Goed om te weten; Het materiaal dat wij gebruiken behoort tot de A
            klasse producten, dit zorgt voor een perfect eindresultaat. Het doel
            is u zo snel en goed mogelijk te helpen. Wij leggen de lat hoog en
            streven naar het beste eindresultaat. Hiervoor hebben wij uw hulp
            nodig; transparantie, goede communicatie en duidelijke afspraken.
            Heeft u vragen of wilt u meer informatie? Wij staan klaar om u
            verder te helpen. Dakonderhoud GMK uw specialist voor alle klussen
            in en rondom uw huis.
          </p>
          <div className="py-10 lg:py-0 lg:pt-8 flex items-center gap-8">
            <Image
              src={TENYEARCELEBRATION}
              width={186}
              alt="10 Year Celebration"
              className="object-contain"
            />
            <Image
              src={TOPPRO}
              width={59}
              alt="Top Pro Badge"
              className="object-contain"
            />
            <Image
              src={GOOGLE}
              width={115}
              alt="Google Badge"
              className="object-contain"
            />
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="flex-1">
          <div className="grid grid-cols-2">
            {gridImage.map((grid) => (
              <div
                key={grid.id}
                className="flex justify-center items-center w-full h-48"
              >
                <Image
                  src={grid.image}
                  alt={`Image ${grid.id}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
