import Pricing from "@/components/Pricing";
export default function Profile() {
  return (
    <section className="p-2">
      {/* <section>Profile</section> */}

      <h3 className="text-2xl font-bold mb-4  border-0 border-b-2 p-2 border-b-accent-foreground ">
        Public Profile
      </h3>
      <div className="p-2 flex md:flex-row-reverse flex-col justify-around items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-40 h-40  flex items-center justify-center rounded-full bg-[oklch(0.97_0_0)] text-[oklch(0.556_0_0)] text-[60px]">
            JD
          </div>
          <i className="text-1xl">No Badge</i>
        </div>

        <section className="mb-4 p-4 flex flex-col">
          <label className="mb-2 font-semibold text-[18px]">Name</label>
          <input
            defaultValue={`Jhon Doe`}
            type="text"
            className="px-4 py-2 border border-accent-foreground outline-none mb-1 bg-accent-foreground rounded-[10px]"
          ></input>
          <p className="text-[oklch(0.556_0_0)] text-sm mb-4">
            Your name may appear around Platform when you use our services.
          </p>

          <label className="mb-2 font-semibold text-[18px]">E-Mail</label>
          <input
            readOnly
            value={`xyz@abc.com`}
            type="email"
            className="px-4 py-2 border border-accent-foreground text-slate-500 cursor-not-allowed outline-none mb-1 bg-accent-foreground rounded-[10px]"
          ></input>
          <p className="text-[oklch(0.556_0_0)] text-sm">
            Your E-Mail may appear around Platform when you use our services.
          </p>

          <button className="mt-8 bg-blue-500 text-white px-4 py-2 rounded font-bold w-40 cursor-pointer">
            Update Profile
          </button>
        </section>
      </div>

      <h3 className="text-2xl font-bold mb-4  border-0 border-t-2 p-2 border-t-accent-foreground ">
        Upgrade
      </h3>
      <div className="mb-4">
        <Pricing />
      </div>
    </section>
  );
}
