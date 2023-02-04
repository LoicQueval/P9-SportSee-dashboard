import './barchart.scss';
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {useEffect, useState} from 'react';
import {getUserActivity} from '../../services/users';

/**
 * Return the user activity in a barchart from Recharts
 * @returns {React.ReactElement} A component
 */
export const Barchart = () => {
    const [serviceData, setServiceData] = useState();
    const data = [];

    useEffect(() => {
        getUserActivity().then((res) => setServiceData(res))
    }, [])


    for (let i = 0; i < serviceData?.sessions.length; i++) {
        data.push({
            day: i + 1,
            kilogram: serviceData?.sessions[i].kilogram,
            calories: serviceData?.sessions[i].calories,
        });
    }

    const CustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltipBarchart">
                    <p className="label">{`${payload[1].value}Kcal`}</p>
                    <p className="label">{`${payload[0].value}kg`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="barchart">
            <p className="barchart_title">Activité quotidienne</p>
            {serviceData && (
                <ResponsiveContainer height={window.innerWidth > 1340 ? 320 : 180}>
                    <BarChart data={data} barSize={7} barGap={8}>
                        <Tooltip content={CustomTooltip} wrapperStyle={{outlineStyle: 'none'}}/>
                        <CartesianGrid strokeDasharray="2 2" vertical={false}/>
                        <XAxis dataKey="day" tick={true} tickMargin={15} tickLine={false} color="#9B9EAC"/>
                        <YAxis yAxisId="right" scale="sequential" type="number" domain={['dataMin - 1', 'dataMax + 1']}
                               allowDataOverflow={true}
                               dataKey="kilogram" axisLine={false} tickLine={false} tickMargin={25} tickCount={3}
                               orientation="right" color="#9B9EAC"/>
                        <YAxis yAxisId="left" domain={['dataMin - 50', 'dataMax + 25']} dataKey="calories" hide={true}/>
                        <Legend verticalAlign="top" height={60} align="right" iconSize={8} iconType="circle"/>
                        <Bar yAxisId="right" dataKey="kilogram" name="Poids (kg)" fill="#282D30"
                             radius={[10, 10, 0, 0]}/>
                        <Bar yAxisId="left" dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000"
                             radius={[10, 10, 0, 0]}/>
                    </BarChart>
                </ResponsiveContainer>
            )}
        </div>
    );
}
