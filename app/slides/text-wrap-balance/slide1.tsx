import BaselineStatus from "@/app/components/BaselineStatus";

export default {
  boxClasses: "flex flex-col lg:flex-row justify-center ~gap-8/20",
  content: (
    <>
      <div className="flex flex-col gap-5 lg:w-7/12 mx-auto">
        <h2 className="slide-heading">text-wrap: balance</h2>
        <p>This wonderfully simple property will split multi-line text evenly across each line.</p>
        <p>It eliminates the need to put max-widths on your headlines, or insert br / span tags to control how the text wraps. One of my most used new features!</p>
        <BaselineStatus featureId="text-wrap-balance" classes="mt-3" />
      </div>
      <div className="lg:w-5/12">
        <p className="text-slate-600 text-sm mb-1"><code>text-wrap: wrap</code> (default)</p>
        <div className="bg-blue-50 text-slate-500 rounded-2xl p-8 max-w-[460px]">
          <p className="font-primary font-normal max-w-[396px] text-xl">A headline spanning multiple lines</p>
        </div>
        <p className="text-slate-600 text-sm mb-1 mt-8"><code>text-wrap: balance</code></p>
        <div className="bg-blue-50 text-slate-500 rounded-2xl p-8 max-w-[460px]">
          <p className="font-primary font-normal max-w-[396px] text-xl text-balance">A headline spanning multiple lines</p>
        </div>
      </div>
    </>
  ),
};