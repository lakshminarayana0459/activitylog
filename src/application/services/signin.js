
// export const RequestHandler = {
//     signin,
//     signout 
// }
    export function signinApi(username, password) {
        const requestOptions = {
            method: 'GET',
            headers : { 'Content-Type': 'application/json' ,'Accept': 'application/json'},
            //body: JSON.stringify({ username, password })
        };
    
        // return fetch('http://localhost:9000/login?userName=lnarayana@italentdigital.com&password=USF3MmUzcjQ=',requestOptions)
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then(data => { 
        //         console.log('text ' + data.status); 
        //         return data; })
        //         .catch(error => {                  
        //         console.log(error);
        //    });
           return fetch(`http://localhost:9000/login?userName=lnarayana@italentdigital.com&password=USF3MmUzcjQ=`)
           .then(response => response.json())
           .then(
             data =>{
             console.log('text ' + data.response.id)
             return data;}
           )
    }


// let requestHandler = new RequestHandler();

// export default requestHandler;




export function signout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    console.log(response.json());
    return response.json().then(text => {
        const data = text && JSON.parse(text);
        console.log("data " + data);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                signout();
                // eslint-disable-next-line no-restricted-globals
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}