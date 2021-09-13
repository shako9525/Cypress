export class LoginPage{
    makeAppointmentButton = '#btn-make-appointment'
    loginPage_username = '#txt-username'
    loginPage_password = '#txt-password'
    loginButton = '#btn-login'

    navigate(url){
        cy.visit(url);
    };
    click_make_appointment(){
        cy.get(this.makeAppointmentButton).click();
    };
    enterUsername(username){
        cy.get(this.loginPage_username).type(username);
    };
    enterPassword(password){
        cy.get(this.loginPage_password).type(password);
    };
    clickLogin(){
        cy.get(this.loginButton).click();
    };
};