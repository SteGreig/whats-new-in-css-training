import BaselineStatus from "@/app/components/BaselineStatus";

export default {
  boxClasses: "flex flex-col lg:flex-row justify-center ~gap-8/20",
  content: (
    <>
      <div className="lg:w-1/2">
        <h3 className="text-base mb-1">Standard CSS</h3>
        <div className="bg-blue-50 rounded-2xl p-8">
          <pre>
            <code>
                h1 {`{`}<br />
                  text-wrap: balance;<br />
                {`}`}
            </code>
          </pre>
        </div>
      </div>

      <div className="lg:w-1/2">
        <h3 className="text-base mb-1">Tailwind</h3>
        <div className="bg-blue-50 rounded-2xl p-8">
          <code>
            &lt;h1 class="text-balance"&gt;My headline that spans multiple lines&lt;/h1&gt;
          </code>
        </div>
      </div>
    </>
  ),
};