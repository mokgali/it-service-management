import { Dropdown,DropdownButton } from "react-bootstrap"
import styles from "./tableFilter.module.css"
import { useState } from "react";

function TableFilter({operatedOnData,onFilter}){

    const [selectedStatus,setSelectedStatus]=useState('');
    const [selectedCategory,setSelectedCategory]=useState('');    


function handleStatusChange(statusValue){ 
    setSelectedStatus(statusValue)
    console.log(statusValue);
    console.log(onFilter)
    console.log(operatedOnData)   
    const filteredResult= operatedOnData.filter(tableDataRow=>
         tableDataRow.status===statusValue)
    onFilter(filteredResult);
    } 

function handleCategoryChange(categoryValue){   
    setSelectedCategory(categoryValue)
     //filter data based on new status
     const newData=operatedOnData.map(tableDataRow=>{
        return tableDataRow.status===categoryValue;
    })
    onFilter(newData);
}

  return(
    <>
    <span>Filters</span>
    <DropdownButton id="dropdown-basic-button" title="Status" className={styles.filterItem} onSelect={e=>handleStatusChange(e)}>
      <Dropdown.Item href="#/action-1" eventKey="Closed">Closed</Dropdown.Item>
      <Dropdown.Item href="#/action-2" eventKey="Open">Open</Dropdown.Item>
      <Dropdown.Item href="#/action-3" eventKey="Pending">Pending</Dropdown.Item>
    </DropdownButton>
    <DropdownButton id="dropdown-basic-button" title="Category" className={styles.filterItem} onSelect={e=>handleCategoryChange(e)}>
      <Dropdown.Item href="#/action-1" eventKey="Software">Software</Dropdown.Item>
      <Dropdown.Item href="#/action-2" eventKey="Hardware">Hardware</Dropdown.Item>
      <Dropdown.Item href="#/action-3" eventKey="Other">Other</Dropdown.Item>
    </DropdownButton>
    </>
  )
}
export default TableFilter