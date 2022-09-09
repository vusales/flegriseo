import React , {useState} from "react";
import styles from "./index.module.scss";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Select , MenuItem } from "@mui/material";


const AddRemoveComponent = ({componentStyle , select , price }) => {
    const [quantity , setQuantity] =useState(0); 
    const [quality, setQuality] = useState('');

    const handleChange = (event) => {
        setQuality(event.target.value);
    };

    return(
        <div className={styles.addRemoveContainer} style={componentStyle ?? {}}>
            <div className={styles.titleContainer}>
                <p>Posts per period:</p>
                {
                    price ?
                    <p>0.09 RUB <span>per piece</span></p>
                    :null
                }
            </div>

            {
                select ?
                <div className={styles.selectContainer} >
                    <Select
                    value={quality}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{width:"100%" ,  height: "100%" , outline: "none"}}
                    >
                        <MenuItem value="">Choose</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                    </Select>
                </div>
                :
                <div className={styles.addRemoveButtonsContainer} >
                    <button>
                        <AddIcon/>
                    </button>
                    <div>{quantity}</div>
                    <button>
                        <RemoveIcon/>
                    </button>
                </div>
            }
        </div>
    )
}


export default AddRemoveComponent ; 