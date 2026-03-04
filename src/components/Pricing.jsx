import {
  IconBadgesFilled,
  IconCircleCheck,
  IconCircleMinus,
  IconCircleX,
} from "@tabler/icons-react";

export default function Pricing() {
  return (
    <section className="flex md:flex-row flex-col items-stretch gap-4">
      {/* Free */}
      <div className="flex-1 border border-slate-500 rounded-2xl p-8 flex flex-col justify-between">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Free</h2>

          <h1>
            <span className="text-4xl font-bold">V0.00</span>
            <span className="text-[oklch(0.556_0_0)]"> /month</span>
          </h1>

          <ul className="space-y-4 text-sm text-[oklch(0.556_0_0)]">
            <li className="flex items-center gap-2">
              <IconCircleMinus stroke={2} className="text-slate-700 shrink-0" />
              30 Seconds Transfer timer.
            </li>
            <li className="flex items-center gap-2">
              <IconCircleMinus stroke={2} className="text-slate-700 shrink-0" />
              2% Transfer Fee.
            </li>
            <li className="flex items-center gap-2">
              <IconCircleMinus stroke={2} className="text-slate-700 shrink-0" />
              0.9% of balance as platfrom fee deducted every week.
            </li>
            <li className="flex items-center gap-2">
              <IconCircleMinus stroke={2} className="text-slate-700 shrink-0" />
              every week platfrom fee deduction.
            </li>
          </ul>
        </div>

        <button
          disabled
          className="mt-8 bg-blue-200 text-white px-4 py-2 rounded font-bold w-full cursor-not-allowed"
        >
          Choose Plan
        </button>
      </div>

      {/* Bronze */}
      <div className="flex-1 border border-slate-500 rounded-2xl p-8 flex flex-col justify-between">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <IconBadgesFilled className="text-[#CD7F32] shrink-0" />
            Bronze Badge
          </h2>

          <h1>
            <span className="text-4xl font-bold">V19.9</span>
            <span className="text-[oklch(0.556_0_0)]"> /month</span>
          </h1>

          <ul className="space-y-4 text-sm text-[oklch(0.556_0_0)]">
            <li className="flex items-center gap-2">
              <IconCircleCheck className="text-green-500 shrink-0" />
              10 Seconds less transfer time.
            </li>
            <li className="flex items-center gap-2">
              <IconCircleCheck className="text-green-500 shrink-0" />
              1% less Transfer Fee.
            </li>
            <li className="flex items-center gap-2">
              <IconCircleX className="text-red-500 shrink-0" />
              <s>2% Less Platform fee deduction</s>
            </li>
            <li className="flex items-center gap-2">
              <IconCircleX className="text-red-500 shrink-0" />
              <s>Fee consumption Timer reduction</s>
            </li>
          </ul>
        </div>

        <button className="mt-8 bg-blue-500 text-white px-4 py-2 rounded font-bold w-full cursor-pointer">
          Choose Plan
        </button>
      </div>

      {/* Silver */}
      <div className="flex-1 border border-slate-500 rounded-2xl p-8 flex flex-col justify-between">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <IconBadgesFilled className="text-[#C0C0C0] shrink-0" />
            Silver Badge
          </h2>

          <h1>
            <span className="text-4xl font-bold">V39.9</span>
            <span className="text-[oklch(0.556_0_0)]"> /month</span>
          </h1>

          <ul className="space-y-4 text-sm text-[oklch(0.556_0_0)]">
            <li className="flex items-center gap-2">
              <IconCircleCheck className="text-green-500 shrink-0" />
              20 Seconds less transfer time.
            </li>
            <li className="flex items-center gap-2">
              <IconCircleCheck className="text-green-500 shrink-0" />
              1% less Transfer Fee.
            </li>
            <li className="flex items-center gap-2">
              <IconCircleCheck className="text-green-500 shrink-0" />
              2% Less Platform fee deduction
            </li>
            <li className="flex items-center gap-2">
              <IconCircleCheck className="text-green-500  shrink-0" />
              Platform fee deducts after 2 extra days.
            </li>
          </ul>
        </div>

        <button className="mt-8 bg-blue-500 text-white px-4 py-2 rounded font-bold w-full cursor-pointer">
          Choose Plan
        </button>
      </div>

      {/* Golden */}
      <div className="flex-1 border border-slate-500 rounded-2xl p-8 flex flex-col justify-between">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <IconBadgesFilled className="text-yellow-400 shrink-0" />
            Golden Badge
          </h2>

          <h1>
            <span className="text-4xl font-bold">V49.9</span>
            <span className="text-[oklch(0.556_0_0)]"> /month</span>
          </h1>

          <ul className="space-y-4 text-sm text-[oklch(0.556_0_0)]">
            <li className="flex items-center gap-2">
              <IconCircleCheck className="text-green-500 shrink-0" />
              Transfer time removed.
            </li>
            <li className="flex items-center gap-2">
              <IconCircleCheck className="text-green-500 shrink-0" />
              1.5% less Transfer Fee.
            </li>
            <li className="flex items-center gap-2">
              <IconCircleCheck className="text-green-500 shrink-0" />
              2.5% Less Platform fee deduction
            </li>
            <li className="flex items-center gap-2">
              <IconCircleCheck className="text-green-500 shrink-0" />
              Platform fee deducts after 4 extra days.
            </li>
          </ul>
        </div>

        <button className="mt-8 cursor-pointer bg-blue-500 text-white px-4 py-2 rounded font-bold w-full">
          Choose Plan
        </button>
      </div>
    </section>
  );
}
