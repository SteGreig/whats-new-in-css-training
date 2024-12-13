import Image from "next/image";
import css3Logo from '/public/css3-logo.svg'

export default {
  boxClasses: "flex flex-col lg:flex-row justify-center items-center ~gap-8/20",
  content: (
    <>
      <Image
        src={css3Logo}
        alt="CSS3 Logo"
        width={350}
        height={493}
      />
      <div>
        <h2 className="slide-heading ~mb-4/10 text-left">The CSS3 Era</h2>
        <div className="flex flex-col ~gap-5/8">
          <p>There was a time when everything new in CSS was referred to as "CSS3".</p>
          <p>That era began well over a decade ago now, and it was really quite the buzzword for a number of years, receiving a huge amount of coverage.</p>
          <p>The term has somewhat fizzled out over the last few years, and rather than being displaced by a "CSS4", everyone just went back to calling it plain old CSS again.</p>
          <p>In fact, it was pretty categorically stated that there would never be a CSS4.</p>
          <p>To understand why (and why that may no longer be the case 😄), we need to look at how CSS has evolved over time.</p>
        </div>
      </div>
    </>
  ),
};