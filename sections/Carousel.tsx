import ImageCarousel from "@/components/ImageCarousel ";

export default function Carousel() {
  return (
    <div className="container py-20 overflow-hidden">
      <div className="text-center py-10">
        <ImageCarousel />
      </div>
      <div>
        <p className="paragraph pt-20">
          Bij GMK Dakonderhoud combineren we vakmanschap met passie voor daken.
          Onze specialisten zijn deskundig in het aanbrengen en onderhouden van
          diverse soorten dakbedekkingen, waaronder dakpannen, bitumen en EPDM.
          Of het nu gaat om dakisolatie, dakreiniging of het repareren van
          lekkages, wij behandelen elke klus met de hoogste zorg en aandacht.
        </p>
        <p className="paragraph">
          Onze focus ligt op kwaliteit en duurzaamheid, zodat uw dak niet alleen
          functioneel is, maar ook esthetisch aantrekkelijk. Klanten waarderen
          onze snelle service en professionele oplossingen. Bekijk onze
          projecten en ontdek hoe wij uw dak kunnen transformeren met de juiste
          materialen en technieken voor een langdurige bescherming
        </p>
      </div>
    </div>
  );
}
