import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { CiLocationOn, CiCalendar, CiSearch } from "react-icons/ci";
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import useOutSideClick from '../hook/useOutSideClick';
import {DateRange} from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { format } from 'date-fns';

function Header() {
    const [destination, setDestination] = useState("")
    const [isOptionOpen, setIsOptionOpen] = useState();
    const [options, setOptions] = useState({adult:1, child:0, room:1});
    const [searchParams, setSearchParams]=useSearchParams();
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [selectionRange, setSelectionRange] = useState( {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
      });
    const navigate = useNavigate();
    const dateRef = useRef()
    useOutSideClick(dateRef, ()=>setIsDateOpen((is)=>!is))

    const handleOption=(type, action)=>{
        setOptions((pre)=>{
            return{
                ...pre,
                [type]:action==="inc"? options[type]+1 : options[type]-1
            }
        }) 
    }

    const handleSearch=()=>{
        const encodedParams= createSearchParams({
            selectionRange:JSON.stringify(selectionRange),
            options:JSON.stringify(options),
            destination
        })
        // setSearchParams(encodedParams)
        navigate({
            pathname:"hotels",
            search:encodedParams.toString()
        })
    }

    const handleSelect=(ranges)=>{
        setSelectionRange(ranges.selection)
    }

    return (
    <div className="header">
        <div className="header__search">
            <div className="header__search_item">
                <div className="header__search_item_input">
                    <span><CiLocationOn/></span>
                    <input type="text" 
                     value={destination}
                     onChange={(e)=>setDestination(e.target.value)}
                     placeholder='where is go?' 
                    />
                </div>
            </div>
            <div className="header__search_item">
                <div className="header__search_item_date" onClick={()=>setIsDateOpen((is)=>!is)}>
                    <span><CiCalendar/></span> 
                    <span>{`${format(selectionRange.startDate, "dd/MM/yyyy")} to ${format(selectionRange.endDate, "dd/MM/yyyy")}`}</span>   
                </div>
                {isDateOpen &&
                    <div className="header__search_item_calender" ref={dateRef}>
                        <DateRange 
                            ranges={[selectionRange]}
                            onChange={handleSelect} />
                    </div>
                }   
            </div>
            <div className="header__search_item">
                <div className="header__search_item_option"
                    onClick={()=>setIsOptionOpen((is)=>!is)}>
                    <span> {options.adult} adult &bull; {options.child} child &bull; {options.room} room</span>
                </div>
                {isOptionOpen && <OptionsList setIsOptionOpen={setIsOptionOpen} handleOption={handleOption} options={options}/>}
            </div>
            <div className="header__search_item">
                <button className='btn' 
                    onClick={handleSearch}
                ><CiSearch/></button>
            </div>
        </div>
    </div>
  )
}

export default Header


function OptionsList({options, handleOption, setIsOptionOpen}){
    const optionRef = useRef()
    useOutSideClick(optionRef, ()=>setIsOptionOpen((is)=>!is))
    return(
        <div ref={optionRef} className="header__search_item_options">
            <Option type="room" limit='1' options={options} handleOption={handleOption} />
            <Option type="adult" limit='1' options={options} handleOption={handleOption} />
            <Option type="child" limit='0' options={options} handleOption={handleOption} />
        </div>
    )
}

function Option({options, type, handleOption, limit}){
    return(
        <div className='header__search_item_options_option'>
            <div>{type}</div>
            <button 
                onClick={()=>handleOption(type, "inc")}
                
                > +</button>
            <div>{options[type]}</div>
            <button
                 onClick={()=>handleOption(type, "dec")}
                 disabled={options[type] <= limit}
                 >-</button>
        </div>
    )
}