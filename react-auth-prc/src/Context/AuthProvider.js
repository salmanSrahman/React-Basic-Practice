import React from 'react';
import useFirebase from '../Hooks/useFirebase';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
const {children} = props;
const allContext = useFirebase()
      return (
            <AuthContext.Provider value={allContext}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;