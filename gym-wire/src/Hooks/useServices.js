// import { useEffect, useState } from "react";

// const useServices = () => {
//   const [services, setServices] = useState([]);
//   useEffect(() => {
//     fetch("services.json")
//       .then((res) => res.json())
//       .then((data) => setServices(data));
//   }, []);
//   return [services];
// };

// export default useServices;


import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
   axios
      .get("services.json")
      .then((res) => setServices(res.data))
      .catch((err) => toast.error("Something Went Wrong!!"));
  }, []);
  return [services];
};

export default useServices;
