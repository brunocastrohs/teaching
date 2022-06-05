import {useEffect} from 'react';
import mainDivStyle from './style';
import {UseRouteMatchTypes} from './types';
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";

const User = () => 
  {

  const history = useHistory();
  const location = useLocation();
  const routeMatch = useRouteMatch<UseRouteMatchTypes>("/user/:id");


  useEffect(() => {
    console.log(location.pathname);
    // Send request to your server to increment page view count
  }, [location]);

  const handleBack = () => {
    history.goBack();
  };

  const handleNavigation = () => {
    history.push("/user/5");
  };

  return ( /**Neste trecho, estou usando a 
             renderização seletiva por meio 
             do operador ternário ? */
    <div style={mainDivStyle}>
       <div>This is the user page</div>
      {routeMatch ? (
        <div>user Id - {routeMatch.params.id}</div>
      ) : (
        <div>You are viewing your profile</div>
      )}

      <div>
        <button onClick={handleBack}>Go Back</button>
      </div>
      <div>
        <button onClick={handleNavigation}>Go To Different User</button>
      </div>
    </div>
  );
  

};

export default User;