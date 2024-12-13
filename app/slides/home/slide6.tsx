import Image from "next/image";
import cssLogo from '/public/new-css-logo.svg'
import cssLogoWithOthers from '/public/new-css-logo-with-others.png'

export default {
  boxClasses: "flex flex-col lg:flex-row justify-center items-start ~gap-8/20",
  content: (
    <>
      <Image
        src={cssLogo}
        alt="The new CSS logo"
        width={400}
        height={400}
      />
      <div>
      <h2 className="slide-heading ~mb-4/10">A New Official CSS Logo</h2>
        <div className="flex flex-col ~gap-5/8">
          <p>The first step of this new push to market the new CSS eras is a brand new logo!</p>
          <p>There was a <a href="https://github.com/CSS-Next/css-next/issues/105">vote on GitHub</a>, and this was the winner!</p>
          <p>One of the conditions was that it should work with or without a number. It's also in-keeping with the logos used for other languages, and the colour choice (rebeccapurple) has a <a href="https://dev.to/joacod/the-special-meaning-behind-the-new-css-logo-rebeccapurple-2205">moving backstory</a>.</p>
        </div>
        <Image
          src={cssLogoWithOthers}
          alt="The new CSS logo with other coding language logos"
          width={1061}
          height={221}
          className="~mt-5/8"
        />
      </div>
    </>
  ),
};