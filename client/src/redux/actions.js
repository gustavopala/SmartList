import axios from 'axios';
export const GET_CARS = 'GET_CARS'
export const SEARCH_CARS = 'SEARCH_CARS'
export const FILTER_PUBLI = 'FILTER_PUBLI'
export const EDIT_STATUS = 'EDIT_STATUS'
export const DETAIL_CAR = 'DETAIL_CAR'
export const EDIT_CAR = 'EDIT_CAR'
export const GET_EMPLOYERS = 'GET_EMPLOYERS'
export const GET_EMPLOYER = 'GET_EMPLOYER'
export const EDIT_STATUS_EMPLOYED = 'EDIT_STATUS_EMPLOYED'
export const GET_PUBLI = 'GET_PUBLI'
export const EDIT_EMPLOYED = 'EDIT_EMPLOYED'
export const FILTER_PRECIO = 'FILTER_PRECIO'
export const GET_VENDIDOS = 'GET_VENDIDOS'
export const GET_VENDIDOS_EMPLEADOS = 'GET_VENDIDOS_EMPLEADOS'
export const GET_VENDIDOS_ANUALES = 'GET_VENDIDOS_ANUALES'

const URL_BASE = "http://localhost:3001/"

export const getCars = () => {
  return async function (dispatch) {
    return await axios.get(`${URL_BASE}getautos`)
      .then((response) => {
        const newCars = response.data;
         dispatch({ type: GET_CARS, payload: newCars });
        
      })

  };
};

export const getPubli = () => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}getPubli`);
    dispatch({ type: GET_PUBLI, payload: response.data })
  }
};

export const getEmployers = () => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}getEmployers`);
    dispatch({ type: GET_EMPLOYERS, payload: response.data })
  }
}

export const getEmployer = (gmail) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}getEmployer`, { params: { gmail } })
    dispatch({ type: GET_EMPLOYER, payload: response.data })
  }
}

export const searchCars = (search) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}searchCars/${search}`);
    dispatch({ type: SEARCH_CARS, payload: response.data });
  };
};

export const filterPubli = (filter) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}filterPubli/${filter}`);
    dispatch({ type: FILTER_PUBLI, payload: response.data })
  }
}
export const updateStatus = (id, status, gmail) => {
  return async function (dispatch) {
    await axios.put(`${URL_BASE}updateStatusCar/${id}`, { status: status, vendedor: gmail });
    const response = [];
    dispatch({ type: EDIT_STATUS, payload: response });
  }
}

export const updateStatusEmployed = (gmail, status, rol) => {
  return async function (dispatch) {
    await axios.put(`${URL_BASE}editStatusEmployed`, { gmail: gmail, status: status, rol: rol });
    const response = [];
    dispatch({ type: EDIT_STATUS_EMPLOYED, payload: response });
  }
}

export const editCars = (id, price, fotoPortada, fotos, description, millas, propietarios, tipo, año) => {
  return async function (dispatch) {
    await axios.put(`${URL_BASE}editCar/${id}`, { price: price, fotoPortada: fotoPortada, fotos: fotos, description: description, millas: millas, propietarios: propietarios, tipo: tipo, año: año });
    const response = [];
    dispatch({ type: EDIT_CAR, payload: response });
  }
}

export const editEmployed = (gmail,fullName,fotoPerfil,description,fechaDeNacimiento) => {
  return async function (dispatch) {
    const response = await axios.put(`${URL_BASE}editEmployed`, { gmail: gmail, fullName: fullName, fotoPerfil: fotoPerfil, description: description, fechaDeNacimiento: fechaDeNacimiento});
    dispatch({ type: EDIT_EMPLOYED, payload: response.data });
  }
}

export const getDetailCar = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}detailauto/${id}`);
    dispatch({ type: DETAIL_CAR, payload: response.data });
  };
};

export const getVendidos = () => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}getVendidos`);
    dispatch({ type: GET_VENDIDOS, payload: response.data });
  };
};

export const getVendidosPorEmpleado = (gmail) => {
  return function (dispatch) {
    dispatch({ type: GET_VENDIDOS_EMPLEADOS, payload: gmail});
  };
  
};

export const getStatsAnuales = (rol) => {
  return function (dispatch) {
    dispatch({ type: GET_VENDIDOS_ANUALES, payload: rol});
  };
};






