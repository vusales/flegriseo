import React , {useEffect, useState} from "react";
import styles from "./index.module.scss";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Select , MenuItem } from "@mui/material";
import { cloneDeep } from "lodash"; 


const AddRemoveComponent = ({
    id , 
    componentStyle , 
    select ,
    price ,
    data , 
    allChoosens , 
    setAllChoosens  
}) => {
    // quantity is for bring userChoice and send 
    const [quantity , setQuantity] =useState(0); 
    const [quantityIndex , setQuantityIndex] =useState(0); 
    const [incrementValues ,  setIncrementValues] =  useState([]); 
    // for select component value
    const [quality, setQuality] = useState("");

    useEffect(()=> {
        setDefaults();
    }) ; 

    useEffect(()=> {
        setChoosenQuantity();
        setBaseArray();
    } , [quantityIndex , quantity ]); 
 
    // get defaults 
    const setDefaults = () => {
        // get array of values and sort 
        let incValues =  data?.incrementValues.sort(); 
        setQuantity(incValues[0]); 
        setIncrementValues(incValues); 
        // default quantity 
    }

    // select change
    const handleChange = (event) => {
        setQuality(event.target.value);
    };

    // set choosen value 
    const setChoosenQuantity = () => {
        setQuantity(incrementValues[quantityIndex]); 
    }

    // depends on quantityIndex in UseEffect
    const addValue = () => {
        if(quantityIndex >= incrementValues.length-1) return; 
        let result =  quantityIndex + 1 ; 
        setQuantityIndex(result); 
    }

    // depends on quantityIndex in UseEffect
    const removeValue = () => {
        if(quantityIndex <= 0) return; 
        let result =  quantityIndex - 1 ; 
        setQuantityIndex(result) ;  
    }

    const setBaseArray  = () => {
        // check main array 
        const baseArray =  cloneDeep(allChoosens); 
        let chosenBefore =  baseArray.find((item)=> item.service_id === id); 
        if(chosenBefore) {
            baseArray.map((item)=>{
                if(item.service_id === id) {
                    item.quantity =  quantity ; 
                }
            })
        } else {
            let result = {
                service_id: id , 
                quantity: quantity , 
                price: data?.itemPrice , 
                currency: data?.currency ,
            }
            baseArray.push(result) ; 
        }
        setAllChoosens(baseArray) ; 
    }

    return(
        <div className={styles.addRemoveContainer} style={componentStyle ?? {}}>
            <div className={styles.titleContainer}>
                <p>{data?.title}:</p>
                {
                    price ?
                    <p>{data?.itemPrice} {data?.currency} <span>per piece</span></p>
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
                    // label="Seçin"
                    >
                        {
                            incrementValues?.length? 
                            incrementValues?.map((item, index) => {
                                return (
                                    <MenuItem 
                                    key={index + "jvj"} 
                                    value={item}>{item}</MenuItem>
                                )
                            })
                            :null
                        }
                    </Select>
                </div>
                :
                <div className={styles.addRemoveButtonsContainer} >
                    <button
                    onClick={()=>removeValue()}
                    >
                        <RemoveIcon/>
                    </button>
                    <div>{incrementValues?.[quantityIndex]}</div>
                    <button
                    onClick={()=>addValue()}
                    >
                        <AddIcon/>
                    </button>
                </div>
            }
        </div>
    )
}


export default AddRemoveComponent ; 