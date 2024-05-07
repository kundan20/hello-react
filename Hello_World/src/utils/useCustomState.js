let stateValues = [], callIndex = -1;

const useCustomState = (initialVal) => {
    callIndex++;
    const currIndex = Number(callIndex); //to freeze call index
    if (stateValues[currIndex] === undefined) {
        stateValues[currIndex] = initialVal;
    }
    const setVal = (newVal) => {
        stateValues[currIndex] = newVal;
        renderApp(); //set callIndex = -1 when re-renders the app, it should be at initial state
    }
    return [stateValues[currIndex], setVal];
}