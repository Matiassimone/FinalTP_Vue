const sarasa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('sarasa');
        }, 2000);
    })
};

export default {
    login: sarasa
}