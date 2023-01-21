import './dashboard.scss';
import {getUserData} from '../../services';
import {useEffect, useState} from 'react';
import {Header} from '../../components/header/header';
import {Aside} from '../../components/aside/aside';

function Dashboard() {
    const [serviceData, setServiceData] = useState();

    useEffect(() => {
        getUserData().then((res) => setServiceData(res))
    }, [])

    console.log(serviceData);

    return (<>
            <Header/>
            <main>
                <Aside/>
            </main>
        </>

    )
        ;
}

export default Dashboard;
