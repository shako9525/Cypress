export class AppointmentConfirmationPage{
    message = 'h2'
    comment_confirmation = '#comment'

    verifyAppointmentConfirmation(confirmation_text){
        cy.get(this.message).should('contain', confirmation_text);
    };
    verifyComment(comment){
        cy.get(this.comment_confirmation).should('contain', comment);
    };
};