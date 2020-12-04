import { Form, FormGroup } from '@angular/forms';

export function customvalidation(group:FormGroup){
    let pwd=group.value.password;
    let cnpwd=group.value.cnpassword;
    if(pwd===cnpwd){
        
        return null;
    }else{
        
        return {'custom':true};
    }
}