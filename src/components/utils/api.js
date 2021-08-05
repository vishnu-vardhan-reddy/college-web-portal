import axios from './../../Axios';

export const departmentResponse = async (id) => {
  try {
    const result = await axios({
      method: 'get',
      url: `/departments/${id}`,
    });
    if (result) {
      console.log(result);
      return result.data;
    }
  } catch (error) {
    throw error;
  }
};

export const impLinksResponse = async (id) => {
  try {
    const result = await axios({
      method: 'get',
      url: `/link`,
    });
    if (result) {
      console.log(result);
      return result.data;
    }
  } catch (error) {
    throw error;
  }
};
