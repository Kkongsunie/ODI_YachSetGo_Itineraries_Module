import styles from '../styles/components.module.css'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import LinkIcon from '@mui/icons-material/Link';
import Image from 'next/image';

const LocationCard = ({ image, title, description}) => {
  return (
    <div className={styles.locationCardContainer}>
      <div className={styles.locationCard}>
        <div className={styles.imageContainer}>
          <Image src={image} width={30} height={30} alt="avatar"  />
          </div>
          
          <div className={styles.locationDescription}>
                  <div className={styles.locationText1}>
                  {title}
                  </div>
                  <div className={styles.locationText2}>
                  {description}
                  </div>
          </div>
          
          <div className={styles.additionalInfo}>
              <div className={styles.itemsContainer}>
                <MapOutlinedIcon sx={{ height: "28px", width: "28px", color:"#5D5A68" }} />
                <div className={styles.infoContainer}>
                    <div className={styles.infoText1}>Region</div>
                    <div>Region IV-B Philippines</div>
                </div>
              </div>
              <div className={styles.itemsContainer}>
                <DirectionsRunOutlinedIcon sx={{ height: "28px", width: "28px", color:"#5D5A68" }} />
                <div className={styles.infoContainer}>
                    <div className={styles.infoText1}>Activities</div>
                    <div className={styles.chipsContainer}>
                      <div className={styles.chip}>Snorkeling</div>
                      <div className={styles.chip}>Beach Picnic</div>
                      <div className={styles.chip}>Water Ski</div>
                      <div className={styles.chip}>Shark Feeding</div>
                    </div>
                </div>
              </div>
              <div className={styles.itemsContainer}>
                <LinkIcon sx={{ height: "28px", width: "28px", color:"#5D5A68" }} />
                <div className={styles.infoContainer}>
                    <div className={styles.infoText1}>Restaurants</div>
                    <div className={styles.infoText2}>Place to Eat</div>
                </div>
              </div>
              <div className={styles.itemsContainer}>
                <LinkIcon sx={{ height: "28px", width: "28px", color:"#5D5A68" }} />
                <div className={styles.infoContainer}>
                    <div className={styles.infoText1}>Entertainment</div>
                    <div className={styles.infoText2}>Place to Fun</div>
                </div>
              </div>
              <div className={styles.itemsContainer}>
                <LinkIcon sx={{ height: "28px", width: "28px", color:"#5D5A68" }} />
                <div className={styles.infoContainer}>
                    <div className={styles.infoText1}>Discover</div>
                    <div className={styles.infoText2}>Place to Explore</div>
                </div>
              </div>
          </div>
    </div>
      </div>
  )
}

export default LocationCard