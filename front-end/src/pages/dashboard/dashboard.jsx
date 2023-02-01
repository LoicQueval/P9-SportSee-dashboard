import './dashboard.scss';
import {getUserData} from '../../services/users';
import {useEffect, useState} from 'react';
import {Header} from '../../components/header/header';
import {Aside} from '../../components/aside/aside';
import {Barchart} from '../../components/barchart/barchart';
import {Linechart} from '../../components/linechart/linechart';
import {Radarchart} from '../../components/radarchart/radarchart';
import {Radialbarchart} from '../../components/radialbarchart/radialbarchart';

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
                        <p className="congratulation">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                        <div className="container">
                            <div className="top-graph">
                                <Barchart/>
                                <div className="bottom-graph">
                                    <Linechart/>
                                    <Radarchart/>
                                    <Radialbarchart score={serviceData.todayScore ? serviceData.todayScore : serviceData.score}/>
                                </div>
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
