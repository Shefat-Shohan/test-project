import Avatar from "@/public/Avatar.png";
import Image from "next/image";

export default function Card() {
  return (
    <div className="bg-white pl-4 rounded-xl flex justify-between items-center text-right gap-4 max-w-xs overflow-clip">
      <div>
        <h3 className="font-nobile text-xl">Fermin vargas</h3>
        <p className="font-actorFont text-sm">Construction manager</p>
      </div>
      <div>
        <Image src={Avatar} alt="avatar" width={97}/>
      </div>
    </div>
  );
}
