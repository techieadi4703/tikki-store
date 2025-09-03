import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthDataContext } from "./AuthContext";
import axios from "axios";


export const AdminDataContext = createContext();

const AdminContext = ({ children }) => {
  const [adminData, setAdminData] = useState(null);
  const { serverURL } = useContext(AuthDataContext);

  const getAdmin = async () => {
    try {
      const result = await axios.get(`${serverURL}/api/user/getadmin`, {
        withCredentials: true,
      });
      console.log(result.data, "ADMIN DATA");
      setAdminData(result.data);
    } catch (error) {
      setAdminData(null);
      console.log("getAdmin errorFE", error);
    }
  };

  useEffect(() => {
    getAdmin();
  }, []);

  const value = { adminData, setAdminData, getAdmin };

  return (
    <AdminDataContext.Provider value={value}>
      {children}
    </AdminDataContext.Provider>
  );
};

export default AdminContext;
