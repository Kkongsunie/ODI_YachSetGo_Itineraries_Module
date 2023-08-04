
import AddItineraries from './components/AddItineraries';
import styles from '../app/styles/components.module.css'
import SelectLocation from './components/SelectLocation';
import LocationCard from './components/LocationCard';

export default function ItineraryPage() {
  return (
    <div className={styles.mainContainer}>
      <AddItineraries />
      <SelectLocation />
    <div className={styles.locationViewContainer}>
          <div className={styles.locationViewTitle}>
              Location View
          </div>
      </div>
    <div className={styles.cardCarousel}>
      <div className={styles.carouselContainer}>
        <LocationCard
          image="/images/boracay.jpg"
          title="The Beauty of Boracay"
          description="Boracay is a small island in the central Philippines. It's known for its resorts and beaches."
        />
        <LocationCard
          image="/images/boracay.jpg"
          title="The Beauty of Boracay"
          description="Boracay is a small island in the central Philippines. It's known for its resorts and beaches."
        />
        <LocationCard
          image="/images/boracay.jpg"
          title="The Beauty of Boracay"
          description="Boracay is a small island in the central Philippines. It's known for its resorts and beaches."
        />
      </div>
    </div> 
  </div>
  )
}
