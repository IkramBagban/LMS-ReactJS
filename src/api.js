import axios from "axios";

const API_URL = "http://localhost:9090";

async function getCustomers() {
  try {
    // const response = await axios.get(`${API_URL}/jw/api/list/list_customersAPI`, config);
    console.log("fetching customers");
    const response = await axios.get("http://localhost:9090/auth/customers");
    const data = await response.data;
    // console.log('data api ==> ', response)
    return data.data;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to fetch customer data. Please try again later.");
  }
}

async function getProducts() {
  try {
    // const response = await axios.get(`${API_URL}/jw/api/list/Items_API_2`, config);
    const response = await axios.get(`${API_URL}/products`);
    const data = response.data;
    // console.log('products ===> ', data)
    return data;
  } catch (error) {
    console.error(error);
  }
}

// async function getServices() {
//   try {
//     // const response = await axios.get(`${API_URL}/jw/api/list/categories_api`, config);
//     const data = response.data;
//     return data
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function getDeliveryTypes() {
//   try {
//     // const response = await axios.get(`${API_URL}/jw/api/list/list_deliveryTypeAPI`, config);
//     const data = response.data.data;
//     return data
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function getEmirates() {
//   try {
//     // const response = await axios.get(`${API_URL}/jw/api/list/list_rateCodesAPI`, config);
//     const data = response.data;
//     return data
//   } catch (error) {
//     console.error(error);
//   }
// }
// async function getArea() {
//   try {
//     // const response = await axios.get(`${API_URL}/jw/api/list/list_areaListAPI`, config);
//     const data = response.data;
//     return data
//   } catch (error) {
//     console.error(error);
//   }
// }

const postOrder = async (data) => {
  try {
    // const response = await axios.post(`${API_URL}/jw/api/form/orderFormAPI`,data,config)
    // const response = await axios.post(`${API_URL}/jw/api/form/admin`,data,config)
    // const response = await axios.post(`${API_URL}/jw/api/form/orderFormAPI`,data,config)
    const response = await axios.post(`http://localhost:9090/orders`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getOrders = async () => {
  try {
    // const response = await axios.get(`${API_URL}/jw/api/list/order_api`, config);
    // customerID = '659fd037814c3d2d47337600'
    const response = await axios.get(
      `${API_URL}/orders/659fd037814c3d2d47337600`
    );

    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

const postSignUp = async (data) => {
  try {
    // const response = await axios.post(`${API_URL}/jw/api/form/customers`,data,config)
    const response = await axios.post(
      "http://localhost:9090/auth/signup",
      data
    );
    console.log("post signup response", response);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const putProfile = async (updatedData) => {
  try {
    // const response = await axios.put(`${API_URL}/jw/api/form/customers`, updatedData,config)
    const response = await axios.put(
      `${API_URL}/auth/update/659fd037814c3d2d47337600`,
      updatedData
    );
    console.log("response.data", response.data);
    return response;
  } catch (e) {
    console.log(e.response.data);
  }
};
const postOTP = async ({ email }) => {
  try {
    console.log("email", email);
    // const response=await axios.post(`${API_URL}/jw/api/process/forgetPasswordProcess/startProcessByUser/admin`,data,config)
    const response = await axios.post(`${API_URL}/auth/sendotp`, { email });
    console.log("response data", response.data);
    return response.data;
  } catch (e) {
    console.log(e.response.data);
  }
};
const VerifyOTP = async (data) => {
  try {
    // const response=await axios.post(`${API_URL}/jw/api/process/forgetPasswordProcess/startProcessByUser/admin`,data,config)
    const response = await axios.post(`${API_URL}/auth/verifyOtp`, data);
    console.log("response data", response.data);
    return response.data;
  } catch (e) {
    console.log(e.response.data);
  }
};

const resetPassword = async (data) => {
  try {
    // const response=await axios.post(`${API_URL}/jw/api/process/forgetPasswordProcess/startProcessByUser/admin`,data,config)
    const response = await axios.patch(`${API_URL}/auth/resetpassword`, data);
    console.log("response data", response.data);
    return response;
  } catch (e) {
    console.log(e.response.data);
  }
};

// export {
//   getCustomers,
//   getProducts,
//   getServices,
//   getDeliveryTypes,
//   getEmirates,
//   getArea,
//   postOrder,
//   getOrders,
//   postSignUp,
//   putProfile,
//   postOTP,
//   VerifyOTP,
//   resetPassword,
// };

export {
  getCustomers,
  getProducts,
  postOrder,
  getOrders,
  postSignUp,
  putProfile,
  postOTP,
  VerifyOTP,
  resetPassword,
};
