import Header from "./Header";
import Navigation from "./Navigation";

export default function page(
  {
    children,
    title,
    prevSlug,
    nextSlug
  } : {
    children: React.ReactNode;
    title: string;
    prevSlug?: string;
    nextSlug?: string;
  }
) {
  return (
    <>

      <Header leftSubtitle={title}>
      </Header>

      {children}

      <Navigation
        title={title}
        prevLink={prevSlug}
        nextLink={nextSlug}
      />
    
    </>
  );
}
