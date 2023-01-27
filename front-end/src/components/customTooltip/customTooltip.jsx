import './customTooltip.scss'

export const CustomTooltip = ({ active, payload }) => {
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
