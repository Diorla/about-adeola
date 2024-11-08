import Image from "next/image";

export default function ServiceIcon({
  animated,
  img,
}: {
  animated: boolean;
  img: string;
}) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={animated ? `/animations/${img}.gif` : `/animations/${img}.png`}
        alt="Adeola"
        width={80}
        height={80}
        unoptimized
      />
    </div>
  );
}
