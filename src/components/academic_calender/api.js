import axios from './../../Axios';

export const classScheduleResponse = async () => {
  try {
    const result = await axios({
      method: 'get',
      url: `/class-schedule`,
    });
    if (result) {
      console.log(result);
      return result.data;
    }
  } catch (error) {
    throw error;
  }
};

export const examScheduleResponse = async () => {
  try {
    const result = await axios({
      method: 'get',
      url: `/exam-schedule`,
    });
    if (result) {
      console.log(result);
      return result.data;
    }
  } catch (error) {
    throw error;
  }
};

export const semesterScheduleResponse = async () => {
  try {
    const result = await axios({
      method: 'get',
      url: `/exam-schedule`,
    });
    if (result) {
      console.log(result);
      return result.data;
    }
  } catch (error) {
    throw error;
  }
};
