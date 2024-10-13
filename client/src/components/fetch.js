const DataFetcher = async (api_name, data = [], method = "POST") => {
    console.log(api_name, data, method);
    try {
        let url = `https://staging.chennaigames.com/api/${api_name}`
        // let url = `http://localhost:3001/api/${api_name}`
        const response = await fetch(url, { // Replace with your API endpoint
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        if (result.status !== 'UA') {
            return result
        }
        console.log(result, 'result');
        //alert('Session Expired. Please Login')
        // window.location.href = '/games';
        localStorage.clear();

    } catch (error) {
        console.log(error);
    } finally {
    }

}

export default DataFetcher;

