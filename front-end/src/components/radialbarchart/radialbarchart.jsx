import './radialbarchart.scss'
import {RadialBarChart, Legend, RadialBar, ResponsiveContainer} from 'recharts';
import * as PropTypes from 'prop-types';

/**
 * Return objectif progression from the api in a Radialchart Recharts
 * @returns {React.ReactElement} A component
 */
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
                <ResponsiveContainer>
                    <RadialBarChart height={window.innerWidth > 1340 ? 265 : 182} className="radialchart" startAngle={-270} endAngle={90} outerRadius={window.innerWidth > 1300 ? "160" : "110"}
                                    innerRadius="0" barSize={10} data={data}>
                        <RadialBar dataKey="score" fill={data[0].fill} cornerRadius="87%"/>
                        <Legend verticalAlign="middle" content={CustomLabel}/>
                    </RadialBarChart>
                </ResponsiveContainer>
            )}
        </div>
    );
}

RadialBar.propTypes = {
    score: PropTypes.number,
    fill: PropTypes.string,
};
