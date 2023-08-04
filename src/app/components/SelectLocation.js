
import styles from '../styles/components.module.css'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import SendIcon from '@mui/icons-material/Send';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DropdownLocation from './DropdownLocation';
import Image from 'next/image';
import { Input } from '@mui/material';

const SelectLocation = () => {
  return (
    <div className={styles.selectLocationContainer}>
        <div className={styles.header}>
              <div className={styles.label}>
                <div style={{fontSize:'23px', fontWeight:600, color:'#5D5A68'}}>Vip Itinerary</div>
                <div style={{fontSize:'12px', fontWeight:500, color:'#CCCCCC'}}>5 locations</div>
              </div>
              <div className={styles.buttons}>
                <SaveOutlinedIcon sx={{ height: "25px", width: "25px", color:"#009CC2" }} />
                <SendIcon sx={{ height: "25px", width: "25px", color:"#009CC2" }} />
                <CloudDownloadOutlinedIcon sx={{ height: "25px", width: "25px", color:"#009CC2" }} />
                <ContentCopyOutlinedIcon sx={{ height: "22px", width: "22px", color:"#009CC2" }} />
                <DeleteOutlineOutlinedIcon sx={{ height: "25px", width: "25px", color:"#009CC2" }} />
              </div>
        </div>
        <div className={styles.selectLocationForm}>
                 <div className={styles.formContainer}>
                        <p>
                          Itinerary Name
                        </p>
                        <Input className={styles.modalInput} disableUnderline placeholder='Itinerary Name' />
                        <DropdownLocation />
                    </div>
              <div>
              <Image src="/images/map.png" width={350} height={268} style={{borderRadius: '20px', paddingBottom: '10px', paddingTop:'5px'}}  alt="avatar"  />
              </div>                  
      </div>
    </div>
  )
}

export default SelectLocation;