import { LightningElement,wire } from 'lwc';
import { getObjectInfo,getPicklistValues } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import INDUSTRY_FIELD from "@salesforce/schema/Account.Industry";

export default class DisplayPicklistValue extends LightningElement {
    value;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    objectInfo;


    @wire(getPicklistValues, { recordTypeId: "$objectInfo.data.defaultRecordTypeId", fieldApiName: INDUSTRY_FIELD })
    picklistValues;

    handleChange(event){
        this.value = event.target.value;
        console.log('picklist values!!! ', this.value);//check
    }
}