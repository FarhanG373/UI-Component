import React from 'react'
import Select from '../../components/Select/Select';
import SelectOptions from '../../components/Select/SelectOptions';
import BreadCrumb from '../../components/Breadcrumb/BreadCrumb';
const ComboBox = () => {
  const options = [
    { label99: "Fruit", value1: "fruit" },
    { label99: "Vegetable", value1: "vegetable" },
    { label99: "Meat", value1: "meat" },
  ];
  return (
    <div>
      <BreadCrumb />
      <Select>
                {options.map((item) => {
                  return (
                    <SelectOptions
                      optionLabel={item.label99}
                      optionValue={item.value1}
                    />
                  );
                })}
              </Select>
    </div>
  )
}

export default ComboBox