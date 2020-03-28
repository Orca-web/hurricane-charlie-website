import React, { useState } from 'react';
import { validateEmail } from '../helpers/validators';

const MailingListForm = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [message, setMsg] = useState('');

    const mailListSubmit = async (): Promise<void> => {
        const isEmailValid = validateEmail(email);
        let newMessage = '';

        if (!isEmailValid) {
            try {
                const messageRequest = await fetch('https://ct-core-api.herokuapp.com/hc-mailer', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email }),
                });

                if (messageRequest.ok) {
                    newMessage = 'You\'ve been added to the mailing list';
                }
            } catch (error) {
                newMessage = 'Something went wrong, please try again.';
            }
        }

        setMsg(newMessage);
    }

    const mailListChange = (e: React.FormEvent<HTMLInputElement>): void => setEmail(e.currentTarget.value);

    const statusMsg = message && <p>{message}</p>;
    
    return (
        <div className="mailer-cta">
            <h2>Be the first to know about new items</h2>
            {statusMsg}
            <div className="mailer-form">
                <input
                    value={email}
                    onChange={mailListChange}
                    type="email" placeholder="your email"
                />
                <button onClick={mailListSubmit}>join</button>
            </div>
        </div>
    );
}


export default MailingListForm;