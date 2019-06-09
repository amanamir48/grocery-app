

const SERVER_URL = 'http://localhost:5000/';

export const loadListAPI = () => {
    return new Promise((resolve, reject) => {
        fetch(SERVER_URL + 'products').then((response)=>{
            response.json().then((data)=> {
                resolve(data);
            })
        }).catch((ex) => reject(ex))    
    })
}

export const upvoteAPI = (id) => {
    return new Promise((resolve, reject) => {
        fetch(SERVER_URL + 'upvote/' + id,  {
            method: 'POST',
            mode: 'cors', }).then((response)=>{
            response.json().then((data)=> {
                resolve(data);
            })
        }).catch((ex) => reject(ex))    
    })
}

export const downvoteAPI = (id) => {
    return new Promise((resolve, reject) => {
        fetch(SERVER_URL + 'downvote/'+id, {
            method: 'POST',
            mode: 'cors', }).then((response)=>{
            response.json().then((data)=> {
                resolve(data);
            })
        }).catch((ex) => reject(ex))    
    })
}

