import HeroSection from "@/components/HeroSection";
import Card from "@/components/Card";
import CardSeason from "@/components/CardSeason";
import { GetHomePage } from "@/lib/strapi";
import { filterByComponent } from "@/lib/filter";

export default async function Home() {
  const strapiData = await GetHomePage();

  return (
    <>
      <HeroSection data={strapiData} />

      <CardSeason data={strapiData.sections} __component="season.card" />
      <CardSeason data={strapiData.sections} __component="season.cardchild" />
    </>
  );
}
