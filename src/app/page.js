import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
import BravoDealInfo from "@/components/BravoDealInfo";
import StoresComponent from "@/components/StoresComponent";
import TopDeals from "@/components/TopDeals";
import PromoCodesSection from "@/components/PromoCodesSection";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import FeaturedStores from "@/components/FeaturedStores";

export default function Home() {
  return (
    <main>
      <Header/>
      <HeroSlider/>
      <FeaturedStores/>
      <PromoCodesSection/>
      <TopDeals/>
      <StoresComponent/>
      <BravoDealInfo/>
      <BlogSection />
      <Newsletter />
      <Footer />
    </main>
  );
}
