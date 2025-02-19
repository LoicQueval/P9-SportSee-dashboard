import './dashboard.scss';
import {Header} from '../../components/header/header';
import {Aside} from '../../components/aside/aside';
import {Barchart} from '../../components/barchart/barchart';
import {Linechart} from '../../components/linechart/linechart';
import {Radarchart} from '../../components/radarchart/radarchart';
import {Radialbarchart} from '../../components/radialbarchart/radialbarchart';
import {Card} from '../../components/card/card';
import {getUserData} from '../../services/users';
import {useEffect, useState} from 'react';
import calories from '../../assets/images/performance/calories.png';
import proteines from '../../assets/images/performance/proteines.png';
import glucides from '../../assets/images/performance/glucides.png';
import lipides from '../../assets/images/performance/lipides.png';

/**
 * Return dashboard page with user data
 * @returns {JSX.Element}
 */
function Dashboard() {
    const [serviceData, setServiceData] = useState();

    useEffect(() => {
        getUserData().then((res) => setServiceData(res))
    }, [])

    const data = [];

    if (serviceData) {
        const value = [serviceData.keyData.calorieCount, serviceData.keyData.proteinCount, serviceData.keyData.carbohydrateCount, serviceData.keyData.lipidCount];
        const unit = ['Kcal', 'g', 'g', 'g'];
        const color = ['#FF00001A', '#4AB8FF1A', '#F9CE231A', '#FD51811A'];
        const type = ['Calories', 'Proteines', 'Glucides', 'Lipides'];
        const icon = [calories, proteines, glucides, lipides];

        for (let i = 0; i < 4; i++) {
            data.push({
                value: value[i],
                unit: unit[i],
                color: color[i],
                type: type[i],
                icon: icon[i],
            })
        }
    }

    return (<>
            <Header/>
            <main>
                <Aside/>
                {serviceData && (
                    <section>
                        <h1>Bonjour <span className="red">{serviceData.userInfos.firstName}</span></h1>
                        <p className="congratulation">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                        <div className="container">
                            <div className="graph">
                                <div>
                                    <Barchart/>
                                </div>
                                <div className="bottom-graph">
                                    <Linechart/>
                                    <Radarchart/>
                                    <Radialbarchart score={serviceData.todayScore ?? serviceData.score}/>
                                </div>
                            </div>
                            <div className="cards">
                                {data.map((item, index) => (
                                    <Card key={`${index}`} icon={item.icon} color={item.color} type={item.type}
                                          unit={item.unit} value={item.value}/>
                                ))
                                }
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </>
    );
}

export default Dashboard;
