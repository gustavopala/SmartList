import { GET_VENDIDOS_ANUALES, GET_VENDIDOS, GET_VENDIDOS_EMPLEADOS, FILTER_PRECIO, EDIT_EMPLOYED, GET_PUBLI, EDIT_STATUS_EMPLOYED, GET_EMPLOYER, GET_EMPLOYERS, EDIT_STATUS, EDIT_CAR, DETAIL_CAR, GET_CARS, SEARCH_CARS, FILTER_PUBLI } from './actions';

const initialState = {
  myCars: [],
  allCars: [],
  mySearchCars: [],
  tipos: [],
  myDetail: [],
  employers: [],
  employer: [],
  publicaciones: [],
  estadisticas: [],
  cantAutos: [],
  datosCrudos: [],
  ventasXEmpleado: [],
  marcasMasVendidas: [],
  statsUnder: {
    dia: '',
    año: '',
    cant: ''
  },
  micarrito: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_CARS:

      return { ...state, myCars: action.payload, allCars: action.payload };


    case SEARCH_CARS:
      return { ...state, mySearchCars: action.payload.slice(0, 20) };

    case FILTER_PUBLI:
      return { ...state, mySearchCars: action.payload };
    case EDIT_STATUS:
      return { ...state, publicaciones: action.payload };
    case DETAIL_CAR:
      return { ...state, myDetail: action.payload };
    case EDIT_CAR:
      return { ...state, myCars: action.payload };
    case GET_EMPLOYERS:
      return { ...state, employers: action.payload };
    case GET_EMPLOYER:
      return { ...state, employer: action.payload };
    case EDIT_STATUS_EMPLOYED:
      return { ...state, employers: action.payload };
    case GET_PUBLI:
      return { ...state, publicaciones: action.payload };
    case EDIT_EMPLOYED:
      return { ...state, employer: action.payload };
    case FILTER_PRECIO:
      return { ...state, mySearchCars: action.payload };
    case GET_VENDIDOS:
      const data = action.payload;
      const currentYear = new Date().getFullYear();
      let beneficioXmes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      let cantidadXmesCar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      const marcasVendidas = {};

      data.forEach((car) => {
        const updatedAt = new Date(car.updatedAt);
        const year = updatedAt.getFullYear();

        if (year === currentYear) {
          const month = updatedAt.getMonth();
          const ganancia = parseInt(car.price);
          beneficioXmes[month] += ganancia;
          cantidadXmesCar[month]++;

          /* implementando */
          if (marcasVendidas[car.tipo]) {
            marcasVendidas[car.tipo] += 1;
          } else {
            marcasVendidas[car.tipo] = 1;
          }
        }


      });

      const marcasVendidasArray = Object.entries(marcasVendidas).map(([marca, cantidad]) => ({
        marca,
        cantidad,
      }));

      // Filtrar las marcas que no tienen ventas este año
      const marcasVendidasEsteAnio = marcasVendidasArray.filter((marca) => marca.cantidad > 0);
      return { ...state, datosCrudos: action.payload, estadisticas: beneficioXmes, cantAutos: cantidadXmesCar, marcasMasVendidas: marcasVendidasEsteAnio };

    case GET_VENDIDOS_EMPLEADOS:
      const beneficioXEmpleado = state.cantAutos.map((cantAutosMes, index) => {
        const gananciaMes = state.datosCrudos.reduce((totalGanancia, car) => {
          const carMonth = new Date(car.updatedAt).getMonth();
          const carVendedor = car.vendedor;
          if (carMonth === index && carVendedor === action.payload) {
            return totalGanancia + parseInt(car.price);
          } else {

            return totalGanancia;
          }
        }, 0);

        return gananciaMes;
      });

      return { ...state, ventasXEmpleado: beneficioXEmpleado };
    case GET_VENDIDOS_ANUALES:
      const hoy = new Date();
      const añoActual = hoy.getFullYear();

      // Filtrar ventas del día
      const ventasDelDia = state.datosCrudos.filter((car) => {
        const fechaCar = new Date(car.updatedAt);
        return (
          fechaCar.getDate() === hoy.getDate() &&
          fechaCar.getMonth() === hoy.getMonth() &&
          fechaCar.getFullYear() === hoy.getFullYear()
        );
      });

      // Filtrar ventas del año
      const ventasDelAño = state.datosCrudos.filter((car) => {
        const fechaCar = new Date(car.updatedAt);
        return fechaCar.getFullYear() === añoActual;
      });

      // Cantidad de autos vendidos en el año
      const cantAutosVendidosAño = ventasDelAño.length;

      if (action.payload === 'ceo' || action.payload === 'admin') {
        // Estadísticas para ceo o admin
        return {
          ...state,
          statsUnder: {
            dia: ventasDelDia.reduce((total, car) => total + parseInt(car.price), 0),
            año: ventasDelAño.reduce((total, car) => total + parseInt(car.price), 0),
            cant: cantAutosVendidosAño,

          },

        };
      } else {
        // Filtrar ventas del día para el empleado específico
        const ventasDelDiaEmpleado = state.datosCrudos.filter((car) => {
          const fechaCar = new Date(car.updatedAt);
          return (
            car.vendedor === action.payload &&
            fechaCar.getDate() === hoy.getDate() &&
            fechaCar.getMonth() === hoy.getMonth() &&
            fechaCar.getFullYear() === hoy.getFullYear()
          );
        });

        // Calcular ganancias del día para el empleado
        const gananciasEmpleadoDia = ventasDelDiaEmpleado.reduce((total, car) => total + parseInt(car.price), 0);

        // Filtrar ventas del año para el empleado específico
        const ventasDelAñoEmpleado = state.datosCrudos.filter((car) => {
          const fechaCar = new Date(car.updatedAt);
          return car.vendedor === action.payload && fechaCar.getFullYear() === añoActual;
        });

        // Calcular ganancias del año para el empleado
        const gananciasEmpleadoAño = ventasDelAñoEmpleado.reduce((total, car) => total + parseInt(car.price), 0);

        // Calcular cantidad de autos vendidos en el año para el empleado
        const autosVendidosEmpleadoAño = ventasDelAñoEmpleado.length;

        return {
          ...state,
          statsUnder: {
            dia: gananciasEmpleadoDia,
            año: gananciasEmpleadoAño,
            cant: autosVendidosEmpleadoAño,
          },
        };
      }
    default:
      return { ...state };
  }
};

export default reducer;