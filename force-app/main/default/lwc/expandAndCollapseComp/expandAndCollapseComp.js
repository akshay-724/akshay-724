import { LightningElement, track } from 'lwc';

export default class ExpandAndCollapseComp extends LightningElement {
    @track section1Expanded = false;
    @track section2Expanded = false;
    @track section3Expanded = false;

    @track section1Value;
    @track section2Value;
    @track section3Value;

    // Sample method to fetch field values from backend
    // You need to replace it with actual logic to fetch values from Salesforce
    connectedCallback() {
        // Simulating backend data retrieval
        this.section1Value = 'Value for Section 1';
        this.section2Value = 'Value for Section 2';
        this.section3Value = 'Value for Section 3';
    }

    toggleSection1() {
        this.section1Expanded = !this.section1Expanded;
        this.section2Expanded = false;
        this.section3Expanded = false;
    }

    toggleSection2() {
        this.section2Expanded = !this.section2Expanded;
        this.section1Expanded = false;
        this.section3Expanded = false;
    }

    toggleSection3() {
        this.section3Expanded = !this.section3Expanded;
        this.section1Expanded = false;
        this.section2Expanded = false;
    }
}