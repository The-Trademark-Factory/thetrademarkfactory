const fetch = require('node-fetch');

// Send data to basin  
exports.handler = async function (event) {
    const {
        orderId,
        firstName,
        lastName,
        phone,
        email,
        gst,
        total
    } = event.queryStringParameters

    const formData = new FormData()

    formData.append('Name', `${firstName} ${lastName}`);
    formData.append('Email', email);
    formData.append('Phone', phone);

    formData.append(
        'GST',
        new Intl.NumberFormat(
            'us-EN',
            { style: 'currency', currency: 'AUD' }).format(gst)
    );

    formData.append(
        'Price total',
        new Intl.NumberFormat(
            'us-EN',
            { style: 'currency', currency: 'AUD' }).format(total)
    );

    formData.append('Order detail url', `${import.meta.env.VITE_PUBLIC_SITE_URL}/application/${orderId}`);

    fetch(import.meta.env.VITE_USEBASIN_SUCCESS_FORM_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
    })
        .then(() => { })
        .catch((e) => {
            console.log('Error sending data to basin: ', e)
        });
};
