import './radialbarchart.scss'
import {RadialBarChart, Legend, RadialBar, ResponsiveContainer} from 'recharts';

export const Radialbarchart = ({score}) => {

    const data = [
        {
            'score': 100,
            'fill': '#FFFFFF',
        },
        {
            'score': score * 100,
            'fill': '#FF0000',
        },
    ]

    const CustomLabel = () => {
        return (
            <div className="custom">
                <div className="container">
                    <p className="value">{data[1].score}%</p>
                    <p className="label">de votre objectif</p>
                </div>
            </div>
        );
    };

    return (<div className="radial">
            <p className="radialchart_title">Score</p>
            {data && (
                <ResponsiveContainer height={265}>
                    <RadialBarChart className="radialchart" startAngle={-270} endAngle={90} outerRadius="160"
                                    innerRadius="0" barSize={10} data={data}>
                        <RadialBar dataKey="score" fill={data[0].fill} cornerRadius="87%"/>
                        <Legend verticalAlign="middle" content={CustomLabel}/>
                    </RadialBarChart>
                </ResponsiveContainer>
            )}
        </div>
    );
}

