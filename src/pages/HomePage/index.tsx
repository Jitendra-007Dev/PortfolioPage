import React from 'react'
import { HomeBanner } from '../../components/HomeComponents/HomeBanner'
import { Statistics } from '../../components/HomeComponents/Statistics'
import { AboutMe } from '../../components/HomeComponents/AboutMe'
import { ServiceSection } from '../../components/HomeComponents/ServiceSection'
import { TestimonialArea } from '../../components/HomeComponents/TestimonialArea'
import { Portfolio } from '../../components/HomeComponents/Portfolio'

export const Home = () => {
    return (
        <React.Fragment>
            <HomeBanner />
            <Statistics />
            <AboutMe />
            <ServiceSection />
            <TestimonialArea />
            <Portfolio />
        </React.Fragment>
    )
}
