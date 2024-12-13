const Header = ({
  children,
  classes,
  leftSubtitle,
  rightSubtitle
}:
{
  children?: React.ReactNode;
  classes?: string;
  leftSubtitle?: string;
  rightSubtitle?: string;
}) => {
  return (

    <header className={`${classes} sticky top-0 text-center pt-5 flex flex-col`}>
      <h1 className="font-primary text-5xl text-balance sm:text-[8.5vw] leading-none uppercase tracking-tight ~mb-4/6 sm:px-0">What's <span>new</span> in CSS?</h1>
      <p className="font-wide ~text-base/3xl tracking-[0.3vw] flex items-center ~gap-4/8 ~px-4/8">
        {leftSubtitle && (
          <span>{leftSubtitle}</span>
        )}
        <span className="flex-1 h-1 bg-black"></span>
        {rightSubtitle && (
          <span>{rightSubtitle}</span>
        )}
      </p>
      {children}
    </header>

  )
}

export default Header