export async function sendInfo(mailOptions: any) {
    const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailOptions),
    });
    const data = await res.json();
    if(data.message === 'Success'){
        console.log('Email sent successfully');
    }
    else{
        console.error('Email sending failed');
    }
    return res;
}