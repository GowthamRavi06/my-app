import Image from "next/image";

export default function ProjectCard({ title, tech, image, bg }: any) {
  return (
    <div
      className={`h-[380px] w-full sticky top-24`}
      style={{ background: bg }}
    >
      <div className="px-20 flex gap-10 py-20 max-w-[1560px] mx-auto">
        <div className="grow">
          <h2 className="text-[38px]/[44px] font-semibold">{title}</h2>

          <div className="flex uppercase mt-2 text-sm text-[#ffffff40] items-center gap-3">
            {tech.map((item: string, i: number) => (
              <div
                key={i}
                className="border whitespace-nowrap rounded-full border-[#ffffff40] px-4 py-1"
              >
                {item}
              </div>
            ))}

            <div className="h-px mx-5 w-full bg-[#ffffff1a]"></div>
          </div>
        </div>

        <div className="overflow-hidden h-[250px] w-[300px] relative">
          <Image
            src={image}
            fill
            alt={title}
            className="object-cover absolute"
          />
        </div>
      </div>
    </div>
  );
}
