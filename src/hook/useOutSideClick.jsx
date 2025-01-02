import React from 'react'
import { useEffect } from 'react';

function useOutSideClick(ref, cb) {
  useEffect(() => {
    function handleOutSideClick(event){
        if(ref.current && !ref.current.contains(event.target)){
            cb()
        }
    }

    document.addEventListener("mousedown", handleOutSideClick)
    return () => {
        removeEventListener("mousedown", handleOutSideClick)
    };
  }, [ref, cb]);
}

export default useOutSideClick