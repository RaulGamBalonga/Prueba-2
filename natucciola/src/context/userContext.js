/*va a tener toda la info del usuario, todo lo que queramos almacenar , es como un estado global parecido  */

import { createContext } from "react";

const UserContext = createContext({
    name: null,
    years: null
});

export default UserContext;