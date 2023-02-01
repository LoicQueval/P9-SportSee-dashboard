import './linechart.scss'
import {LineChart, Line, Tooltip, XAxis, ResponsiveContainer, YAxis, CartesianGrid} from 'recharts';
import {useEffect, useState} from 'react';
import {getUserAverageSessions} from '../../services/users';

/**
 * Return
 * @returns {React.ReactElement} A component
 */

export const Linechart = () => {
    const [serviceData, setServiceData] = useState();

    useEffect(() => {
        getUserAverageSessions().then((res) => setServiceData(res))
    }, [])

    const data = [];
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    for (let day = 0; day < serviceData?.sessions.length; day++) {
        data.push({
            day: days[day],
            sessionLength: serviceData?.sessions[day].sessionLength,
        });
    }

    const CustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className="linechart-tooltip">
                    <p>{`${payload[0].value} min`}</p>
                </div>
            );
        }
    };

    return (<>
            <p className="linechart-title">Durée moyenne des sessions</p>
            {serviceData && (
                <ResponsiveContainer height={265} className="linechart">
                    <LineChart data={data}>
                        <Tooltip wrapperStyle={{outlineStyle: 'none'}} content={<CustomTooltip/>}/>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false}/>
                        <XAxis dataKey="day" stroke="rgba(255, 255, 255, 0.6)" axisLine={false} tickLine={false} tick={{
                            dx: 0, fontSize: 12
                        }}/>
                        <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 40']}/>
                        <Line type="monotone" dataKey="sessionLength" stroke="white" />
                    </LineChart>
                </ResponsiveContainer>
            )}
        </>
    );
}
