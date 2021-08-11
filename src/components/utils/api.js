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

export const photosResponse = async () => {
  try {
    const result = await axios({
      method: 'get',
      url: `/gallery`,
    });
    if (result) {
      console.log(result);
      return result.data;
    }
  } catch (error) {
    throw error;
  }
};

export const upcomingEventsResponse = async () => {
  try {
    const result = await axios({
      method: 'get',
      url: `/get-upcomingevents`,
    });
    if (result) {
      console.log(result);
      return result.data;
    }
  } catch (error) {
    throw error;
  }
};

export const recentEventsResponse = async () => {
  try {
    const result = await axios({
      method: 'get',
      url: `/get-recentevents`,
    });
    if (result) {
      console.log(result);
      return result.data;
    }
  } catch (error) {
    throw error;
  }
};

export const facultyResponse = async (id) => {
  try {
    const result = await axios({
      method: 'get',
      url: `/faculty/${id}`,
    });
    if (result) {
      console.log(result);
      return result.data;
    }
  } catch (error) {
    throw error;
  }
};

export const facultyResponseUsingPath = async (path) => {
  try {
    const result = await axios({
      method: 'get',
      url: path,
    });
    if (result) {
      console.log(result);
      return result.data;
    }
  } catch (error) {
    throw error;
  }
};
