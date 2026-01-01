export default function Footer() {
  const openLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/gowtham-ravi-6b109a236/",
      "_blank"
    );
  };

  const sendEmail = () => {
    window.location.href = "gowthamravi06@gmail.com";
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/918122698567", "_blank");
  };

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20">
      <p className="text-[60px]/[60px] sm:text-[70px]/[70px] md:text-[80px]/[80px] lg:text-[110px] font-bold mb-32">
        <span className="text-[#ffffff80]">Let's</span> Connect
      </p>

      <p className="text-[26px] sm:text-[30px] lg:text-[34px] text-[#ffffff80] mb-2 sm:mb-5 lg:mb-10">
        Let's build something cool together!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 w-full mt-3 mb-20 gap-4">
        <button
          onClick={openLinkedIn}
          className="h-[108px] cursor-pointer text-2xl bg-[#1f1f1f] hover:bg-[#2a2a2a] transition flex items-center justify-center"
        >
          Connect on LinkedIn
        </button>

        <button
          onClick={sendEmail}
          className="h-[108px] cursor-pointer text-2xl bg-[#2e2e2e] hover:bg-[#3a3a3a] transition flex items-center justify-center"
        >
          Send an Email
        </button>

        <button
          onClick={openWhatsApp}
          className="h-[108px] cursor-pointer text-2xl bg-[#545454] hover:bg-[#666] transition flex items-center justify-center"
        >
          WhatsApp Me
        </button>
      </div>
    </section>
  );
}
