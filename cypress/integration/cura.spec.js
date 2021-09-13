///<reference types="cypress"/>
import{LoginPage} from "../pages/login_page"
import{MakeAppointmentPage} from "../pages/make_appointment_page"
import{AppointmentConfirmationPage} from "../pages/confirmation_page"

const loginPage = new LoginPage()
const makeAppointmentPage = new MakeAppointmentPage()
const appointmentConfirmationPage = new AppointmentConfirmationPage()

describe('Cura Make Appointment', function(){
    it('Visit the URL', function(){
        loginPage.navigate('https://katalon-demo-cura.herokuapp.com/');
    });

    it('Login Page', function(){
        loginPage.click_make_appointment();
        loginPage.enterUsername('John Doe');
        loginPage.enterPassword('ThisIsNotAPassword');
        loginPage.clickLogin();
    });

    it('Appointment Details', function(){
        makeAppointmentPage.selectCity('Hongkong CURA Healthcare Center');
        makeAppointmentPage.readmissionCheckbox();
        makeAppointmentPage.programMedicaid();
        makeAppointmentPage.visitDate('13/09/2021');
        makeAppointmentPage.comment('Shirkhan Aslanzade will be available on 13/09/2021');
        makeAppointmentPage.clickBookAppointment();
    });

    it('Verify Appointment', function(){
        appointmentConfirmationPage.verifyAppointmentConfirmation('Appointment Confirmation');
        appointmentConfirmationPage.verifyComment('Shirkhan Aslanzade will be available on 13/09/2021');
    });

});