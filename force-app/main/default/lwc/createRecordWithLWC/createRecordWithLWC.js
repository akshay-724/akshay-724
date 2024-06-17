import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';

export default class CreateRecordWithLWC extends LightningElement {
    accountId;
    name;

    handleChange(event){
        this.name = event.target.value;
        console.log('this.name111 ::: ',JSON.stringify(this.name));
    }

    handleClick(){
        const fields ={};
        fields[NAME_FIELD.fieldApiName] = this.name;
        console.log('fields ::: ',JSON.stringify(fields));

        const recordInput ={apiName :ACCOUNT_OBJECT.objectApiName , fields};
        createRecord(recordInput)
        .then(account =>{
            console.log('account data>> ', JSON.stringify(account));
            this.accountId = account.id;
        })
        .catch(error=>{
            console.log('error :: ', JSON.stringify(error));
        })

    }

}