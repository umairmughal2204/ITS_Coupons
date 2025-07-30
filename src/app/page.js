import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import FeaturedStores from "@/components/FeaturedStores";

export default function Home() {
  return (
    <main>
      {/* Other content here */}
      <Header/>
      <HeroSlider/>
      <FeaturedStores/>
      <Newsletter />
      <Footer />
    </main>
  );
}
