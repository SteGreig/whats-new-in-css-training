export default {
  content: (
    <>
      <h2 className="slide-heading ~mb-4/10 text-center">The original CSS mega specs</h2>

      <div className="flex flex-wrap gap-4">
        <div className="p-8 lg:py-12 border border-black dark:border-white content-center w-full md:w-auto md:flex-1 text-center">
          <p className="slide-heading">CSS 1.0</p>
          <span className="text-lg">Released 1996</span>
          <ul className="mt-2 text-sm">
            <li>Selectors</li>
            <li>Box Model</li>
            <li>Colors and Backgrounds</li>
            <li>etc.</li>
          </ul>
        </div>
        <div className="p-8 lg:py-12 border border-black dark:border-white content-center w-full md:w-auto md:flex-1 text-center">
          <p className="slide-heading">CSS 2.0</p>
          <span className="text-lg">Released 1998</span>
          <ul className="mt-2 text-sm">
            <li>Selectors</li>
            <li>Box Model</li>
            <li>Colors and Backgrounds</li>
            <li>etc.</li>
          </ul>
        </div>
        <div className="p-8 lg:py-12 border border-black dark:border-white content-center w-full md:w-auto md:flex-1 text-center">
          <p className="slide-heading">CSS 2.1</p>
          <span className="text-lg">Released 2011</span>
          <ul className="mt-2 text-sm">
            <li>Selectors</li>
            <li>Box Model</li>
            <li>Colors and Backgrounds</li>
            <li>etc.</li>
          </ul>
        </div>
      </div>

      <h2 className="slide-heading ~mb-4/10 ~mt-8/16 text-center">CSS 3</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
          <p className="font-primary ~text-base/xl font-normal leading-none">CSS Selectors Level 3</p>
        </div>
        <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
          <p className="font-primary ~text-base/xl font-normal leading-none">CSS Text Level 3</p>
        </div>
        <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
          <p className="font-primary ~text-base/xl font-normal leading-none">CSS Flexible Box Layout Level 1</p>
        </div>
        <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
          <p className="font-primary ~text-base/xl font-normal leading-none">CSS Transitions Level 1</p>
        </div>
        <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
          <p className="font-primary ~text-base/xl font-normal leading-none">CSS Colour Level 3</p>
        </div>
        <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
          <p className="font-primary ~text-base/xl font-normal leading-none">CSS Animations Level 1</p>
        </div>
        <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
          <p className="font-primary ~text-base/xl font-normal leading-none">CSS Box Model Level 3</p>
        </div>
        <div className="~p-2/8 border border-black dark:border-white content-center w-full md:w-auto text-center">
          <p className="font-primary ~text-base/xl font-normal leading-none">etc. etc.</p>
        </div>
      </div>

      <div className="~text-base/lg flex flex-col gap-5 ~mt-8/14 max-w-screen-md mx-auto">
        <p>After CSS 2.1, CSS was split into a vast collection of individual modules, which would be free to advance at their own pace.</p>

        <p>Some modules, such as CSS Selectors, began at "Level 3", to show their continuation from CSS 2.1.</p>

        <p>Other modules, such as Flexible Box Layout (Flexbox), were brand new and so began at Level 1.</p>

        <p>Regardless of their individual level, every CSS module from this point on would come under the umbrella of "CSS3".</p>

        <p>So this is why we could say, logically, there would never be a CSS4. There would only be, for example, CSS Selectors Level 4, or CSS Transitions Level 2.</p>
      </div>
    </>
  ),
};