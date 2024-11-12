import Image from "next/image";

export default function ServiceIcon({ img }: { img: string }) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={`/animations/${img}.gif`}
        alt="Adeola"
        width={80}
        height={80}
        unoptimized
      />
    </div>
  );
}
