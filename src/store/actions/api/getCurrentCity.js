import axios from 'axios';

const getCurrentCity = async url => {
  return new Promise(resolve => {
    axios
      .get(url)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        resolve(error.response);
      });
  });
};

export default getCurrentCity;
