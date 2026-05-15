import Hero from '../components/Hero';
import BenefitBar from '../components/BenefitBar';
import DestinationsGallery from '../components/DestinationsGallery';
import ExperienceCards from '../components/ExperienceCards';
import Packages from '../components/Packages';
import IncludesSection from '../components/IncludesSection';
import Itinerary from '../components/Itinerary';
import HotelSelector from '../components/HotelSelector';
import Preparation from '../components/Preparation';
import WhyChooseUs from '../components/WhyChooseUs';
import ReservationForm from '../components/ReservationForm';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <BenefitBar />
      <DestinationsGallery />
      <ExperienceCards />
      <Packages />
      <HotelSelector />
      <IncludesSection />
      <Itinerary />
      <Preparation />
      <WhyChooseUs />
      <ReservationForm />
      <Testimonials />
      <FAQ />
    </>
  );
}
