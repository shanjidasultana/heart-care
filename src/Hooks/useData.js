import { useContext } from 'react';
import { MyContext } from '../Context/Context';

const useData = () => {
    return useContext(MyContext);
};

export default useData;