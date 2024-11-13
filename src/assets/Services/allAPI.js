
import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const saveBookAPI = async (bookDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/books`,bookDetails)
}

export const getBookAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/books`,"")
}

export const deleteBookAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/books/${id}`,{})
}