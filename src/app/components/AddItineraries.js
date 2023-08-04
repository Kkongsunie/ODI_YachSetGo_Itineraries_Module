'use client'

import styles from '../styles/components.module.css'
import { Button } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Input from '@mui/material/Input';
import DropdownLocation from './DropdownLocation';
import Image from 'next/image';
import SaveIcon from '@mui/icons-material/Save';

const AddItineraries = () => {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.addItineraryContainer}>
        <div className={styles.addItineraryHeader}>
            <p>All Itineraries</p>
            <div style={{paddingTop:'5px'}}>
              <Button onClick={handleOpen}>Add</Button>
            </div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className={styles.modalContainer}>
                <div className={styles.modalStyle}>
                  <div className={styles.modalHeaderContainer}>
                    <div className={styles.modalHeader}>
                      <p>Add Itineraries</p>
                      <Button onClick={handleClose} >
                          <CloseIcon  sx={{ height: "25px", width: "25px", color:"#5D5A68"  }} />
                      </Button>
                    </div>
                    <div className={styles.modalFormContainer}>
                        <p>
                          Itinerary Name
                        </p>
                        <Input className={styles.modalInput} disableUnderline placeholder='Itinerary Name' />
                        <DropdownLocation />
                    </div>
                    <div className={styles.mapImage}>
                        <Image src="/images/map.png" width={330} height={250} style={{borderRadius: '20px'}}  alt="avatar"  />
                    </div>
                    <div className={styles.modalButtons}>
                          <Button  variant='text' onClick={handleClose} className={styles.modalBtnClose}> Close </Button>
                          <Button startIcon={<SaveIcon />} variant='contained' className={styles.modalBtnSave}> Save Changes </Button>
                    </div> 
                  </div>
                </div>
              </div>
              
            </Modal>
        </div>

        <div className={styles.itineraryItemContainer}>
          <ItineraryItem />
          <ItineraryItem />
        </div>
    </div>
    </div>
    
  )
}

export default AddItineraries;

function ItineraryItem () {
  return (
    <div className={styles.itineraryItem}>
      <LocationOnOutlinedIcon sx={{ height: "37px", width: "37px", color: '#2b2b2b'}}/>
      <div>
        <div style={{fontSize:'17px', fontWeight:500, color:'#5D5A68'}}>Vip Itinerary</div>
        <div style={{fontSize:'11px', fontWeight:400, color:'#CCCCCC'}}>5 locations</div>
      </div>
    </div>
  )
};

{/* <div className={styles.addItineraryContainer}>
        <div className={styles.header}>
          <div style={{fontSize:'23px', fontWeight:600, color:'#5D5A68'}}>
            All Iteneraries
          </div>
          <Button onClick={handleOpen} className={styles.button}>Add</Button>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                  <div className={styles.modalHeader}>
                    <p>Add Itineraries</p>
                    <CloseIcon sx={{ height: "25px", width: "25px", color:"#5D5A68" }} />
                  </div>
                  <div className={styles.inputContainer}>
                  <div className={styles.fieldOneContainer}>
                  <ThemeProvider theme={theme}>
                  <TextField label="Itinerary Name" sx={{width:"340px", marginTop:"15px", marginBottom:"5px" }} variant='outlined'/>
                  </ThemeProvider>
                  </div>

                  <div className={styles.modalDropdownContainer}> 
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
                  </div>
              </div>
              <div>
              <Image src="/images/map.png" width={358} height={268} style={{borderRadius: '20px'}}  alt="avatar"  />
              </div>

                <div className={styles.modalButtons}>
                          <Button  variant='text' className={styles.modalBtnClose}> Close </Button>
                          <Button startIcon={<SaveIcon />} variant='contained' className={styles.modalBtnSave}> Save Changes </Button>
                </div>      
              </Box>    
             
        </Modal>
        </div>
          {itinerary()}
          {itinerary()}
      </div> */}