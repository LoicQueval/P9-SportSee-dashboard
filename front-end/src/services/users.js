import USER_ACTIVITY, {USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE} from '../services/mock'

const USER_ID = 12;
const isMock = true;

/**
 * Fetch the general user info from api
 * @typedef {Number} id
 * @typedef {Object} KeyData
 * @typedef {Number} KeyData.calorieCount
 * @typedef {Number} KeyData.carbohydrateCount
 * @typedef {Number} KeyData.lipidCount
 * @typedef {Number} KeyData.proteinCount
 * @typedef {Number || NaN} score
 * @typedef {Number || NaN} todayScore
 * @typedef {Object} userInfos
 * @typedef {string} userInfos.firstName
 * @typedef {string} userInfos.lastName
 * @typedef {Number} userInfos.age
 * @returns {Promise<getUserData>}
 */
export const getUserData = async () => {
    const response = await fetch(`http://localhost:3000/user/${USER_ID}`);
    if (!isMock) {
        if (response.ok) {
            return (await response.json()).data
        } else {
            console.error('Retour du serveur : ', response.status)
        }
        return undefined;
    } else {
        return USER_MAIN_DATA.find(user => user.id === USER_ID);
    }
}

/**
 * Fetch activity user info from api
 * @typedef {Number} userId
 * @typedef {[Object]} sessions
 * @typedef {string} sessions.day
 * @typedef {number} sessions.kilogram
 * @typedef {number} sessions.calories
 * @returns {Promise<getUserActivity>}
 */
export const getUserActivity = async () => {
    const response = await fetch(`http://localhost:3000/user/${USER_ID}/activity`);
    if (!isMock) {
        if (response.ok) {
            return (await response.json()).data
        } else {
            console.error('Retour du serveur : ', response.status)
        }
        return undefined;
    } else {
        return USER_ACTIVITY.USER_ACTIVITY.find(user => user.userId === USER_ID);
    }
}

/**
 * Fetch average sessions time of user from api
 * @typedef {Number} userId
 * @typedef {[Object]} sessions
 * @typedef {number} sessions.day
 * @typedef {number} sessions.sessionLength
 * @returns {Promise<getUserAverageSessions>}
 */
export const getUserAverageSessions = async () => {
    const response = await fetch(`http://localhost:3000/user/${USER_ID}/average-sessions`);
    if (!isMock) {
        if (response.ok) {
            return (await response.json()).data
        } else {
            console.error('Retour du serveur : ', response.status)
        }
        return undefined;
    } else {
        return USER_AVERAGE_SESSIONS.find(user => user.userId === USER_ID)
    }
}

/**
 * Fetch average sessions time of user from api
 * @typedef {Number} userId
 * @typedef {Object} kind
 * @typedef {string} kind.<Number>
 * @typedef {[Object]} data
 * @typedef {Number} data.value
 * @typedef {Number} data.kind
 * @returns {Promise<getUserPerformance>}
 */
export const getUserPerformance = async () => {
    const response = await fetch(`http://localhost:3000/user/${USER_ID}/performance`);
    if (!isMock) {
        if (response.ok) {
            return (await response.json()).data
        } else {
            console.error('Retour du serveur : ', response.status)
        }
        return undefined;
    } else {
        return USER_PERFORMANCE.find(user => user.userId === USER_ID);
    }
}
