import Image from "next/image";

const projects = [
  {
    title: "Service worker & browser indexDB",
    tech: ["Next js", "Nest js", "Postgres"],
    bg: "#171717",
    image: "/profile-image.jpeg",
  },
  {
    title: "Service worker & browser indexDB",
    tech: ["Next js", "Nest js", "Postgres"],
    bg: "#363636",
    image: "/profile-image.jpeg",
  },
  {
    title: "Service worker & browser indexDB",
    tech: ["Next js", "Nest js", "Postgres"],
    bg: "#171717",
    image: "/profile-image.jpeg",
  },
];

export default function ProjectCard() {
  return (
    <section>
      {projects.map((p, index) => (
        <div
          key={index}
          className="h-[440px] w-full sticky top-24"
          style={{ background: p.bg }}
        >
          <div className="px-20 flex gap-10 py-20 max-w-[1560px] mx-auto">
            <div className="grow">
              <h2 className="text-[38px]/[44px] font-semibold">{p.title}</h2>

              <div className="flex uppercase mt-2 text-sm text-[#ffffff40] items-center gap-3">
                {p.tech.map((item, i) => (
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

            <div>
              <div className="overflow-hidden h-[250px] w-[300px] relative">
                <Image
                  src={p.image}
                  alt="project-image"
                  fill
                  className="absolute object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
