import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    HomesSection,
    Home,
    Newest,
    DetailsLink,
    LinkIcon
} from './NewestHomesStyle';

const NewestHomes = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <HomesSection>
            <h2>view our newst homes</h2>
            <Newest>
                <Home direction="left" data-aos="fade-right" >
                    <img
                        src="https://images.unsplash.com/photo-1517807918616-f60475f77328?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        alt="newst homes"
                    />
                    <p>250 Rt 59, Airmont NY 10901</p>
                    <DetailsLink to="/" >More details <LinkIcon /></DetailsLink>
                </Home>

                <Home direction="right" data-aos="fade-left">
                    <img
                        src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1053&q=80"
                        alt="newst homes"
                    />
                    <p>5399 W Genesse St, Camillus NY 13031</p>
                    <DetailsLink to="/" >More details <LinkIcon /></DetailsLink>
                </Home>

            </Newest>

            <Newest>
                <Home direction="left" data-aos="fade-right" >
                    <img
                        src="https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        alt="newst homes"
                    />
                    <p>777 Brockton Avenue, Abington MA 2351</p>
                    <DetailsLink to="/" >More details <LinkIcon /></DetailsLink>
                </Home>

                <Home direction="right" data-aos="fade-down">
                    <img
                        src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                        alt="newst homes"
                    />
                    <p>374 William S Canning Blvd, Fall River MA 2721</p>
                    <DetailsLink to="/" >More details <LinkIcon /></DetailsLink>
                </Home>

                <Home direction="left" data-aos="fade-left">
                    <img
                        src="https://images.unsplash.com/photo-1465804575741-338df8554e02?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
                        alt="newst homes"
                    />
                    <p>295 Plymouth Street, Halifax MA 2338</p>
                    <DetailsLink to="/" >More details <LinkIcon /></DetailsLink>
                </Home>
            </Newest>

        </HomesSection>
    )
}

export default NewestHomes;
