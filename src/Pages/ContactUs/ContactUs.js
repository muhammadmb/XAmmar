import React from 'react';
import {
    Box,
    Contact,
    Details,
    Icon,
    Content,
    ContactInfo,
    Container,
    AddressIcon,
    EmailIcon,
    PhoneIcon,
    InputBox,
    ContactForm
} from './ContactUsStyle';

const ContactUs = () => {
    return (
        <Contact >
            <Content>
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dignissimos error, ad adipisci eligendi quisquam voluptatem cum odit veritatis at quaerat blanditiis quam libero? Incidunt repellendus ea accusamus quam distinctio.</p>
            </Content>
            <Container>
                <ContactInfo>
                    <Box>
                        <Icon><AddressIcon /></Icon>
                        <Details>
                            <h3>Address</h3>
                            <p>415 Sugar Camp Road, Owatonna,minnesota, 551252</p>
                        </Details>
                    </Box>

                    <Box>
                        <Icon><EmailIcon /></Icon>
                        <Details>
                            <h3>Email</h3>
                            <p>Contact@XAmmar.com</p>
                        </Details>
                    </Box>

                    <Box>
                        <Icon><PhoneIcon /></Icon>
                        <Details>
                            <h3>Phone</h3>
                            <p>444-525-102-002</p>
                        </Details>
                    </Box>
                </ContactInfo>
                <ContactForm>
                    <form>
                        <h2>Send Message</h2>
                        <InputBox>
                            <input type="text" name="" required="required" />
                            <span>Full Name</span>
                        </InputBox>

                        <InputBox>
                            <input type="text" name="" required="required" />
                            <span>Email</span>
                        </InputBox>

                        <InputBox>
                            <textarea required="required" />
                            <span>Message</span>
                        </InputBox>

                        <InputBox>
                            <input type="submit" value="send" />
                        </InputBox>

                    </form>
                </ContactForm>
            </Container>
        </Contact>
    )
}

export default ContactUs
