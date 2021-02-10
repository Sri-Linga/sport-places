class APIHelper {
    static APICall = async (url: string) => {
        return await fetch(url, { method: 'GET' })
            .then(async (response: any) => {
                return await response.json();
            })
            .catch((Error) => {
                throw new Error('Something went wrong in ', Error);
            });
    };
}

export default APIHelper;
