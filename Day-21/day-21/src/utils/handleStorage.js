
const loadData = (key)=>{
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data || undefined;
}


const saveData = (key,data)=>{
    localStorage.setItem(key,JSON.stringify(data))
}

export {loadData,saveData}