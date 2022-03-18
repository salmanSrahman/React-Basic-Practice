import { AuthContext } from "../Context/AuthProvider";

const useContext = () => {
  return useContext(AuthContext);
};

export default useContext
