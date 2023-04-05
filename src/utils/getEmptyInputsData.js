const getEmptyInputsData = (inputsData) => {
    const newInputsData = Object.keys(inputsData).reduce(
        (acc, value) => ({ ...acc, [value]: '' }),
        {}
    );
    
    return newInputsData;
};
export default getEmptyInputsData;
