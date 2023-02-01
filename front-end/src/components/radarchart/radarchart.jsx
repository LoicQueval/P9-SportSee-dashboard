import './radarchart.scss'
import {RadarChart, PolarAngleAxis, PolarGrid, Radar, ResponsiveContainer} from 'recharts';
import {useEffect, useState} from 'react';
import {getUserPerformance} from '../../services/users';

export const Radarchart = () => {
    const [serviceData, setServiceData] = useState();
    const data = [];

    useEffect(() => {
        getUserPerformance().then((res) => setServiceData(res))
    }, [])

    if (serviceData) {
        for (let i = 0; i < 6; i++) {
            const category = serviceData.kind[i + 1][0].toUpperCase() + serviceData.kind[i + 1].slice(1)
            data.push({
                kind: category,
                value: serviceData.data[i].value,
            })
        }
    }

    return (<>
            {serviceData && (
                <ResponsiveContainer height={265} className="radarchart">
                    <RadarChart outerRadius={90} data={data.reverse()}>
                        <PolarGrid gridType="polygon" radialLines={false}/>
                        <PolarAngleAxis dataKey="kind" dy={3} tick={{fontSize: 12}}/>
                        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7}/>
                    </RadarChart>
                </ResponsiveContainer>
            )}
        </>
    );
}

