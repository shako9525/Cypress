export class MakeAppointmentPage{
    citiesDropBox = 'select'
    readmission = '#chk_hospotal_readmission'
    medicaidRadioButton = '#radio_program_medicaid'
    dateInput = '#txt_visit_date'
    commentBox = '#txt_comment'
    bookAppointmentButton = '#btn-book-appointment'
    
    selectCity(city){
        cy.get(this.citiesDropBox).select(city);
    };
    readmissionCheckbox(){
        cy.get(this.readmission).click();
    };
    programMedicaid(){
        cy.get(this.medicaidRadioButton).click();
    };
    visitDate(date){
        cy.get(this.dateInput).type(date);
    };
    comment(add_comment){
        cy.get(this.commentBox).click({force: true});
        cy.get(this.commentBox).type(add_comment);
    };
    clickBookAppointment(){
        cy.get(this.bookAppointmentButton).click();
    };
};