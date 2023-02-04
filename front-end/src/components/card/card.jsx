import './card.scss'
import * as PropTypes from 'prop-types';

/**
 * Return key info (proteins...) in a card
 * @returns {React.ReactElement} A component
 */
export const Card = ({icon, color, type, unit, value}) => {

    return (<div className="card">
            <div className="card-icon-layout" style={{backgroundColor : color}}>
                <img src={icon} alt="icon"/>
            </div>
            <div className="card-value-layout">
                <p className="value">{value}{unit}</p>
                <p className="type">{type}</p>
            </div>
        </div>
    );
}

Card.propTypes = {
    value: PropTypes.number,
    unit: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
};
