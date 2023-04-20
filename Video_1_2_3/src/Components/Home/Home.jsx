import React, { useContext } from 'react';
import { Authproviderdata } from '../Layout/Authprovider';

const Home = () => {
    const recivedata=useContext(Authproviderdata);
    return (
        <div>
            The display name is {recivedata.data}
        </div>
    );
};

export default Home;