import CTASection from "@/components/CTASection";
import CategoryPreviews from "@/components/Ecommerce/CategoryPreviews";
import ProductLists1 from "@/components/Ecommerce/ProductLists1";
import ProductLists2 from "@/components/Ecommerce/ProductLists2";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewsletterSection from "@/components/NewsletterSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    
      {/* <Navbar/> */}
      <HeroSection />
      <CategoryPreviews />
      <ProductLists1/>
      <ProductLists2/>
      <NewsletterSection/>
      
    </>

  );
}
