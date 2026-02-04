import { Hero } from '../components/Hero';
import { BrandStory } from '../components/BrandStory';
import { TheRitual } from '../components/TheRitual';
import { SeasonalSpecial } from '../components/SeasonalSpecial';
import { MenuShowcase } from '../components/MenuShowcase';
import { LocationCTA } from '../components/LocationCTA';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <section id="story">
        <BrandStory />
      </section>
      <section id="ritual">
        <TheRitual />
      </section>
      <SeasonalSpecial />
      <section id="menu">
        <MenuShowcase />
      </section>
      <section id="location">
        <LocationCTA />
      </section>
      <Footer />
    </>
  );
};
