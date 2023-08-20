
import {data} from './constants/data.js';
import News from './model/newschema.js'
const DefaultData = async() =>{
    try {
        await News.insertMany(data);
        console.log('Data imported succesfully');
    } catch (error) {
        console.log('Error',error.message);
    }
}

export default DefaultData;