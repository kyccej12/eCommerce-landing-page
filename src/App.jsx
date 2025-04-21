import Header from './components/header';
import Hero from './components/hero';
import JustLandedSection from "./components/justLandedSection";
import ShopNav from './components/shopNav';
import Brands from './components/brands';
import Stores from './components/stores';
import EditionSection from './components/edition';
import MondeEdits from './components/mondeEdits';
import NewsletterSection from './components/newsLetterSection';
import Footer from './components/footer';



export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className="flex flex-col md:flex-row w-full">
          <ShopNav
            image="/category/women.png"
            title="Women"
            href="/women"
            reverse={false}
          />
          <ShopNav
            image="/category/men.png"
            title="Men"
            href="/men"
            reverse={false} // optional to flip layout
          />
          <ShopNav
            image="/category/beauty.png"
            title="Beauty"
            href="/beauty"
            reverse={false} // optional to flip layout
          />
          <ShopNav
            image="/category/living.png"
            title="Living"
            href="/living"
            reverse={false} // optional to flip layout
          />
      </div>
      <Brands />
      <JustLandedSection />
      <Stores />
      <EditionSection />
      <MondeEdits />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

