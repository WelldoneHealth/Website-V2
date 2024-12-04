import React from 'react'
import ButtonType1 from './ButtonType1'

export default function MobileViewButtons({btnText,btnClickFunc,btnBackFunc,proceddTo}) {
  return (
   <>
    <ButtonType1  btnText={btnText}  btnFunc={btnClickFunc} /> 
    <ButtonType1  btnText="Back"  btnFunc={btnBackFunc} isBtnDisable={btnText=="Continue"} /> 
   </>
  )
}
