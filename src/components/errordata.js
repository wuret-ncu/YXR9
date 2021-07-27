const errordata = ( user ) => {
    let errors = {};
    
    if(!user.name){
        errors.name = "請填寫這個欄位。"
    }
    if(!user.account){
        errors.account = "請填寫這個欄位。"
    }
    if(!user.password){
        errors.password = "請填寫這個欄位。"
    }
    return errors;
}

export default errordata;