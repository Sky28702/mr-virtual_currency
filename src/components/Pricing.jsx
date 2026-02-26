import {
  IconBadgesFilled,
  IconCircleCheck,
  IconCircleX,
} from "@tabler/icons-react";

export default function Pricing() {
  return (
    <section className="flex md:flex-row flex-col items-center gap-2">
      <div className="border border-slate-500 rounded-2xl p-8 space-y-5 relative">
        <p className="font-semibold text-2xl flex flex-row items-center gap-1 absolute left-5">
          <IconBadgesFilled
            stroke={2}
            className="text-[#CD7F32] size-10  shadow-2xl shadow-[#CD7F32] rounded-full "
          />
          Bronze Badge
        </p>

        <h1 className="mt-14">
          <span className="text-4xl font-bold">
            <s>V</s>20 <nbsp></nbsp>
          </span>
          <span className=" text-[oklch(0.556_0_0)] "> /month </span>
        </h1>

        <ul className="[&>li]:flex [&>li]:flex-row [&>li]:items-center [&>li]:gap-1 text-sm space-y-4 text-[oklch(0.556_0_0)]">
          <li>
            {" "}
            <IconCircleCheck stroke={2} className="text-green-500" /> 10 Seconds
            less transfer time.
          </li>
          <li>
            <IconCircleCheck stroke={2} className="text-green-500" /> 1% less
            Transfer Fee.
          </li>
          <li>
            <IconCircleX stroke={2} className="text-red-500" />{" "}
            <s>2% Less Platform</s>
            fee deduction
          </li>
          <li>
            <IconCircleX stroke={2} className="text-red-500" />
            <s>Fee consumption Timer reduction </s>
          </li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded font-bold cursor-pointer w-full">
          Choose Plan
        </button>
      </div>

      <div className="border border-slate-500 rounded-2xl p-8 space-y-5 relative">
        <p className="font-semibold text-2xl flex flex-row items-center gap-1 absolute left-5">
          <IconBadgesFilled
            stroke={2}
            className="text-[#C0C0C0] size-10  shadow-2xl shadow-[#C0C0C0] rounded-full "
          />
          Silver Badge
        </p>

        <h1 className="mt-14">
          <span className="text-4xl font-bold">
            <s>V</s>39.9 <nbsp></nbsp>
          </span>
          <span className=" text-[oklch(0.556_0_0)] "> /month </span>
        </h1>

        <ul className="[&>li]:flex [&>li]:flex-row [&>li]:items-center [&>li]:gap-1 text-sm space-y-4 text-[oklch(0.556_0_0)]">
          <li>
            {" "}
            <IconCircleCheck stroke={2} className="text-green-500" /> 20 Seconds
            less transfer time.
          </li>
          <li>
            <IconCircleCheck stroke={2} className="text-green-500" /> 1% less
            Transfer Fee.
          </li>
          <li>
            <IconCircleCheck stroke={2} className="text-green-500" /> 2% Less
            Platform fee deduction
          </li>
          <li>
            <IconCircleCheck stroke={2} className="text-green-500" />
            Platform fee'll deduct after 2 extra days.
          </li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded font-bold cursor-pointer w-full">
          Choose Plan
        </button>
      </div>

      <div className="border border-slate-500 rounded-2xl p-8 space-y-5 relative">
        <p className="font-semibold text-2xl flex flex-row items-center gap-1 absolute left-5">
          <IconBadgesFilled
            stroke={2}
            className="text-yellow-300 size-10  shadow-2xl shadow-yellow-300 rounded-full "
          />
          Silver Badge
        </p>

        <h1 className="mt-14">
          <span className="text-4xl font-bold">
            <s>V</s>39.9 <nbsp></nbsp>
          </span>
          <span className=" text-[oklch(0.556_0_0)] "> /month </span>
        </h1>

        <ul className="[&>li]:flex [&>li]:flex-row [&>li]:items-center [&>li]:gap-1 text-sm space-y-4 text-[oklch(0.556_0_0)]">
          <li>
            {" "}
            <IconCircleCheck stroke={2} className="text-green-500" /> Transfer
            time removed.
          </li>
          <li>
            <IconCircleCheck stroke={2} className="text-green-500" /> 1.5% less
            Transfer Fee.
          </li>
          <li>
            <IconCircleCheck stroke={2} className="text-green-500" /> 2.5% Less
            Platform fee deduction
          </li>
          <li>
            <IconCircleCheck stroke={2} className="text-green-500" />
            Platform fee'll deduct after 4 extra days.
          </li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded font-bold cursor-pointer w-full">
          Choose Plan
        </button>
      </div>
    </section>
  );
}
