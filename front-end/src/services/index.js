const USER_ID = 18;

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
