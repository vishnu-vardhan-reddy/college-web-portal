import axios from './../../Axios'

export const departmentResponse = async (id) => {
  try {
    const result = await axios({
      method: 'get',
      url: `/departments/${id}`,
    })
    if (result) {
      return result.data
    }
  } catch (error) {
    return error
  }
}
