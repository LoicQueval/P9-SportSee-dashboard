const USER_ID = 12;

export const getUserData = async () => {
    const response = await fetch(`http://localhost:3000/user/${USER_ID}`);
    if (response.ok) {
        return (await response.json()).data
    } else {
        console.error('Retour du serveur : ', response.status)
    }
    return undefined;
}

export const getUserActivity = async () => {
    const response = await fetch(`http://localhost:3000/user/${USER_ID}/activity`);
    if (response.ok) {
        return (await response.json()).data
    } else {
        console.error('Retour du serveur : ', response.status)
    }
    return undefined;
}

export const getUserAverageSessions = async () => {
    const response = await fetch(`http://localhost:3000/user/${USER_ID}/average-sessions`);
    if (response.ok) {
        return (await response.json()).data
    } else {
        console.error('Retour du serveur : ', response.status)
    }
    return undefined;
}

export const getUserPerformance = async () => {
    const response = await fetch(`http://localhost:3000/user/${USER_ID}/performance`);
    if (response.ok) {
        return (await response.json()).data
    } else {
        console.error('Retour du serveur : ', response.status)
    }
    return undefined;
}
