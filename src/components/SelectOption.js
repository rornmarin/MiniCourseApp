
import React from 'react';
import Select from 'react-select';

const SelectOption = ({ label, data, onChangeHandler, name, value }) => {

  // const handleChange = (selectedOption) => {
  //   const selectedValue = selectedOption ? selectedOption.value : null;
  //   onChangeHandler({ target: { name, value: selectedValue } });
  // };
  const handleChange = (selectedOptions) => { 
    const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];
    onChangeHandler({ target: { name, value: selectedValues } });
  };


  const options = data.map((item) => ({
    value: item.id, 
    label: item.name, 
  }));

  return (
    <div className='text-left my-5'>
      <label className="block mb-2 text-sm font-medium text-black-900 dark:text-black text-left">{label}</label>
      <Select
        isMulti
        options={options}
        onChange={handleChange}
        value={options.filter((option) => value.includes(option.value))}
      />
    </div>
  );
};

export default SelectOption;