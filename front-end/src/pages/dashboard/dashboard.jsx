import './dashboard.scss';
import {getUserData} from '../../services';
import {useEffect, useState} from 'react';
import {Header} from '../../components/header/header';

function Dashboard() {
    const [serviceData, setServiceData] = useState();

    useEffect(() => {
        getUserData().then((res) => setServiceData(res))
    }, [])

    console.log(serviceData);

    return (
        <main>
            <Header/>
        </main>
    );
}

export default Dashboard;
