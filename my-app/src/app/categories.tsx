"use client"


export default function Categories(){

    const selectCategories = (categoriesName: string) => {
        console.log(selectCategories);
        
    }


    return(
        <>
         <button onClick={() => {selectCategories ("cars")}}>cars</button>
         <button onClick={() => {selectCategories ("Gadget")}}>Gadget</button> 
         <button onClick={() => {selectCategories ("Mobile")}}>Mobile</button>
         <button onClick={() => {selectCategories ("Cloths")}}>Cloths</button>
        </>
    )
}