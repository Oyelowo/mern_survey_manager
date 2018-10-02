const sendgrid = require('sendgrid');
const {mail: helper} = sendgrid;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({subject, recipients}, content) {
        super();

        this.sendgridApi = sendgrid(keys.sendGridKey);
        this.from_email = new helper.Email('no-reply@surveyManager.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    };

    formatAddresses(recipients){
      return recipients.map(({email})=>{
            return new helper.Email(email);
      });
    }

    addClickTracking(){
        const trackingSettings = new helper.TrackingSettings();
        const clickTrackiing = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTrackiing);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients(){
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipients => {
            personalize.addTo(recipients);
        });
        this.addPersonalization(personalize);
    }

    async send(){
        const request = this.sendgridApi.emptyRequest({
            method: 'POST',
            path: 'v3/mail/send',
            body: this.toJSON()
        });

        const response = await this.sendgridApi.API(request);
        return response;
    }
};

module.exports = {
    Mailer
}