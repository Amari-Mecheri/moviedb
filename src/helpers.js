// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const loadFromSessionStorage = ( stateName ) =>{
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
};

export const saveToSessionStorage = (stateName,state) =>{
  sessionStorage.setItem(stateName,JSON.stringify(state));
};

export const loadFromLocalStorage = ( stateName ) =>{
  const localState = localStorage.getItem(stateName);
  return localState && JSON.parse(localState);
};

export const saveToLocalStorage = (stateName,state) =>{
  localStorage.setItem(stateName,JSON.stringify(state));
};