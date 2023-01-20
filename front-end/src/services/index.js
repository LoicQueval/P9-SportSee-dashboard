export const getUserData = async () => {
    const response = await fetch('http://localhost:3000/user/12');
    if (response.ok) {
        return (await response.json()).data
    } else {
        console.error('Retour du serveur : ', response.status)
    }
    return undefined;
}
