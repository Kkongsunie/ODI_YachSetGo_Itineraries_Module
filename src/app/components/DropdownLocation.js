'use client'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from '../styles/components.module.css'
import Input from '@mui/material/Input';
import { Button } from '@mui/material';
import { useState } from 'react';


const DropdownLocation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
      setIsOpen(!isOpen);
    }

  return (
    <div className={styles.modalDropdownContainer}>
        <p>
            Select Location
        </p>
        <Button endIcon={<ArrowDropDownIcon/>} onClick={handleToggle}  className={styles.dropdownBtn} sx={{color:"#5D5A68", textTransform:"capitalize", }}>
            <div className={styles.dropdownPlaceholder}>
            <p>Location</p>
            </div>
        </Button>
                 {isOpen && (
                        <div className={styles.dropdownItems}>
                            <div className={styles.categoryTitle}>Global</div>
                            <div className={styles.items}> 
                                {location()}
                                {location()}
                            </div>
                            <div className={styles.categoryTitle}>Local</div>
                            <div className={styles.items}> 
                                {location()}
                                {location()}
                            </div>
                        </div>
                      )}
       </div>
  )
}

export default DropdownLocation;

const location = () => (
    <div className={styles.location}>
        Boracay
        <Button size='small' className={styles.locationBtn}>Add</Button>
    </div>
)

{/* <div className={styles.modalDropdownContainer}> 
                      <Button variant='outlined' endIcon={<ArrowDropDownIcon/>} onClick={handleToggle} className={styles.dropdownBtn} sx={{color:"#5D5A68", textTransform:"capitalize", fontSize:""}}>
                        Location
                      </Button>
                      {isOpen && (
                        <div className={styles.dropdownItems}>
                            <div className={styles.categoryTitle}>Global</div>
                            <div className={styles.items}> 
                                {location()}
                                {location()}
                            </div>
                            <div className={styles.categoryTitle}>Local</div>
                            <div className={styles.items}> 
                                {location()}
                                {location()}
                            </div>
                        </div>
                      )}
                  </div> */}