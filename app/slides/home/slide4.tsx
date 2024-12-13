import Image from "next/image";
import css3GoogleTrends from '/public/css3-google-trends.webp'

export default {
  boxClasses: "flex flex-col gap-8",
  content: (
    <>
      <h2 className="slide-heading text-center">The decline of "CSS3"</h2>
      <figure>
        <Image
          src={css3GoogleTrends}
          alt="CSS3 Google Trends Graph"
          width={1186}
          height={463}
        />
        <figcaption>Global Google searches for "CSS3" from 2007 to 2024</figcaption>
      </figure>
      <div className="flex flex-col gap-5 max-w-screen-md mx-auto">
        <p>With the individual CSS modules now advancing independently of each other, the "CSS3" term has naturally died off, but this has had unintended consequences.</p>
        <p>It's created a perception that CSS is a bit static, with developers seemingly paying less attention to new CSS features.</p>
        <p>It's a lot harder to promote lots of little advancements compared to a memorable catch-all buzzword.</p>
        <p>And that is seemingly the realisation that the CSS Working Group have arrived at...</p>
      </div>
    </>
  ),
};