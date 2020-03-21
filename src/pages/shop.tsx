import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ShopItem from '../components/shop-item';
import { shopItems } from '../globals/shopItems';
import { validateEmail } from '../helpers/validators';
import Layout from '../components/layout';

const Shop = () => {
    const [email, setEmail] = useState('');
    const [message, setMsg] = useState('');

    const imageData = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: { eq: "shop" } }) {
                nodes {
                    childImageSharp {
                        fluid {
                            originalName
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `);

    const flattendImageData = imageData.allFile.nodes.reduce((acc: any, cur: any) => {
        const { originalName, ...rest } = cur.childImageSharp.fluid;
        return { [originalName]: rest, ...acc };
    }, {});

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const mailListSubmit = async (): Promise<void> => {
        const isEmailValid = validateEmail(email);
        let newMessage = '';

        if (!isEmailValid) {
            try {
                const messageRequest = await fetch('https://ct-core-api.herokuapp.com/hc-mailer' , {
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
        <Layout>
            <div className="shop-container">
                {shopItems.map((shopItem) => (
                    <ShopItem
                        key={shopItem.id}
                        product={shopItem}
                        imgData={flattendImageData[shopItem.url]}
                    />
                ))}
            </div>

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
        </Layout>
    );
}

export default Shop;
