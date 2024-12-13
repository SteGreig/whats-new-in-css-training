
import SlidesList from "../../components/SlidesList";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

import slides from "../../slides/text-wrap-balance";

export default function page() {
  return (
    <>

      <Header leftSubtitle="text-wrap: balance">
      </Header>

      <SlidesList slides={slides} />

      <Navigation
        title="text-wrap: balance"
        prevLink="/"
        nextLink='/text-wrap-balance'
      />
    
    </>
  );
}
