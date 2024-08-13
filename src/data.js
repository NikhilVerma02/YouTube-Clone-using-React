export const API_Key = "AIzaSyD9Mnq6NnbTwO0av2xo6PuBPzw9i3-rReU";

export const veiws_counnt_convertor = (value) => {
  if (value > 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value > 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
