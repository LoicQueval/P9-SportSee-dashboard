import './dashboard.scss';
import {getUserData} from '../../services';
import {useEffect, useState} from 'react';
import {Header} from '../../components/header/header';
import {Aside} from '../../components/aside/aside';
import {Barchart} from '../../components/barchart/barchart';

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
                {serviceData && (
                    <section>
                        <h1>Bonjour <span className="red">{serviceData.userInfos.firstName}</span></h1>
                        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                        <div className="container">
                            <div className="graph">
                                <Barchart></Barchart>
                            </div>
                            <div>
                                <p>titi</p>
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </>

    )
        ;
}

export default Dashboard;
