import { GoArrowUpRight } from "react-icons/go";

const Card = () => {
  return (
    <div className="@container">
      <div className="card rounded-2xl bg-indigo-100 font-sans">
        <img className="rounded-2xl" src="https://picsum.photos/seed/picsum/600/300" alt="Random demo image from picsum CDN" />
        <div className="p-3 @xs:p-5 @lg:p-7">
          <div className="flex items-center justify-between">
            <p className="text-base @xs:text-lg @lg:text-2xl font-wide font-normal">My Card Title</p>
            <GoArrowUpRight className="hidden @xs:block" />
          </div>
          <p className="text-base/snug mt-2 hidden @lg:block font-normal">A short blurb lorem ipsum dolor sit amet, consectetur adipiscing elitsc. Maecenas a quam semper, vestibulum arcu id, venenatis erat.</p>
        </div>
      </div>
    </div>
  )
}

export default Card