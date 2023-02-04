import './aside.scss'
import yoga from '../../assets/images/activities/yoga.PNG'
import swimming from '../../assets/images/activities/swimming.PNG'
import cycling from '../../assets/images/activities/cycling.PNG'
import bodybuilding from '../../assets/images/activities/bodybuilding.PNG'

/**
 * Return aside navigation
 * @returns {React.ReactElement} A component
 */
export const Aside = () => {
    return (
        <aside>
            <div className="activities">
                <div className="activity">
                    <img src={yoga} alt="activity"/>
                </div>
                <div className="activity">
                    <img src={swimming} alt="activity"/>
                </div>
                <div className="activity">
                    <img src={cycling} alt="activity"/>
                </div>
                <div className="activity">
                    <img src={bodybuilding} alt="activity"/>
                </div>
            </div>
            <p>Copyright, SportSee 2020</p>
        </aside>
    );
}
