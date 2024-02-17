const {userame, password} = process.env;
export const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// console.log(process.env.username);
export const connectionSRT= "mongodb+srv://"+userame+":"+password+"@cluster0.v8nkfri.mongodb.net/productDB?retryWrites=true&w=majority"