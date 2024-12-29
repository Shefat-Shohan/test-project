export default function Title({ title }: { title: string }) {
  return (
    <div className="overflow-hidden">
      <h2 className="font-nobile font-bold text-[65px] leading-[80px] md:text-[180px] md:leading-[225px] lg:text-[347px] lg:leading-[391px] text-primary text-nowrap">
        {title}
      </h2>
    </div>
  );
}
