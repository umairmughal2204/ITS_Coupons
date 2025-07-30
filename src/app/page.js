import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import BlogSection from "@/components/BlogSection";
import BravoDealInfo from "@/components/BravoDealInfo";
import StoresComponent from "@/components/StoresComponent";
import TopDeals from "@/components/TopDeals";
import PromoCodesSection from "@/components/PromoCodesSection";



export default function Home() {
  return (
    <main>
      <PromoCodesSection/>
      <TopDeals/>
      <StoresComponent/>
      <BravoDealInfo/>
      <BlogSection />
      
      {/* Newsletter and Footer components */}
      <Newsletter />
      <Footer />
    </main>
  );
}
