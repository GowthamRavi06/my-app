import Image from "next/image";

const projects = [
  {
    title: "Senior Full Stack Developer ",
    tech: ["Hyring Inc.", "Chennai", "Apr 2024 – Present "],
    bg: "#171717",
    text: "Worked on building and scaling an AI-powered interview platform using Next.js, NestJS, and PostgreSQL. Contributed across frontend and backend, including real-time video features, background processing, and AI integrations. Focused on building a performant, SEO-friendly, and scalable user experience.",
    image: "/hyring.webp",
  },
  {
    title: "Full Stack Engineer",
    tech: ["Domaincer®", "Chennai", "Jan 2023 – Mar 2024 "],
    bg: "#363636",
    text: "Developed responsive admin portals from Figma designs using Next.js and Redux, and built a cross-platform mobile application with React Native. Actively tested features, fixed UI and functional issues, and collaborated with backend services using Node.js and PostgreSQL to ensure smooth integration.",
    image: "/domaincer.webp",
  },
  {
    title: "Web Designer & Developer Intern",
    tech: ["Web D School", "Chennai", "Oct 2022 – Nov 2022 "],
    bg: "#171717",
    text: "Conducted competitor analysis to understand design and UX patterns, offered design solutions using Photoshop, and converted them into responsive, cross-browser compatible web pages using HTML, SCSS, and jQuery.",

    image: "/webd.webp",
  },
  {
    title: "Senior Executive Engineer",
    tech: ["AMI", "Chennai", "Mar 2017 – Jan 2022 "],
    bg: "#363636",
    text: "Managed month-wise order booking, supply planning, and inventory control to ensure timely fulfillment. Handled invoicing, sales tracking, customer follow-ups, and maintained financial records, ageing reports, and payment entries using Tally, while also supporting customer sales and issue resolution.",
    image: "/ami.webp",
  },
];

export default function ProjectCard() {
  return (
    <section id="work">
      <div className="flex sticky mt-10 top-20 items-center gap-10 px-6 md:px-12 lg:px-20 ">
        <h2 className=" text-[40px] sm:text-[58px] font-semibold whitespace-nowrap">
          Work
        </h2>
        <div className="h-px  mx-4   w-full bg-[#ffffff1a]"></div>
      </div>
      {projects.map((p, index) => (
        <div
          key={index}
          className=" w-full sticky top-[167px] h-[600px] lg:h-[440px]"
          style={{ background: p.bg }}
        >
          <div className=" px-6 md:px-12 lg:px-20 pt-6 md:pt-8 pb-3 md:pb-6   flex flex-col lg:flex-row gap-3 md:gap-6 lg:gap-10 lg:pt-20 lg:pb-16 max-w-[1560px] mx-auto">
            <div className="grow order-2 relative lg:order-1">
              <h2 className="text-[28px]/[34px] md:text-[38px]/[44px] font-semibold">
                {p.title}
              </h2>

              <div className="flex uppercase mt-2 text-xs md:text-sm text-[#ffffff40] items-center gap-1 md:gap-3">
                {p.tech.map((item, i) => (
                  <div
                    key={i}
                    className="border whitespace-nowrap rounded-full border-[#ffffff40] px-2 md:px-4 py-1"
                  >
                    {item}
                  </div>
                ))}
                <div className="h-px mx-5 w-full bg-[#ffffff1a]"></div>
              </div>

              <p className="mt-3  sm:mt-16 text-sm sm:text-base lg:absolute lg:bottom-0">
                {p.text}
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="overflow-hidden h-[180px]  lg:h-[250px] lg:w-[300px] relative">
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
