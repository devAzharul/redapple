import React from 'react';
import Layout from './Layout/Layout';
import Image from 'next/image';
import img from '../public/service/Advertising-and-Branding.png'
import img1 from '../public/service/design-printing.png'
import img2 from '../public/service/Event-Management.png'
import img3 from '../public/service/Gift-and-Promotional-items.png'

const ServiceScreen = () => {
    return (
        <Layout title="Service">
            <div className='text-center mt-10 grid grid-cols-2 gap-x-8 gap-y-6'>
                <div className="card w-auto bg-base-200 shadow-xl">
                    <figure><Image height={450} width={800} src={img} alt="branding" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-center  font-extrabold">Advertising & Branding</h2>
                        <p>TVC Making We make television commercial is a form of advertising in which goods, services, organizations, ideas, etc. are promoted via the medium of television Media Buying
                            Red Apple act as a Media buyer and responsible for negotiating and purchasing audience targeted time and advertising space for the purpose of conveying a marketing message. The process entails an evaluation of factors based on (but not limited to) station formats, pricing rates, demographics, geographic, and psychographics relating to the advertiser's particular product or key performance indicator. All media inventory goes through phases of optimization, which is dependent on budget, type of medium (radio, internet, TV, print etc.), target audience and targeting. Sometime we purchase media inventory regionally or nationally. National media buyers might have to factor in considerations based on their particular geography.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card w-auto bg-base-200 shadow-xl">
                    <figure><Image height={450} width={800} src={img1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-center  font-extrabold">Event Management</h2>
                        <p>Red Apple is one of the trustable event management company in Bangladesh. We help you in organizing your different events with affordable prices. We plan your events base on the purpose of event like festival, ceremony, personal or corporate party or convention. Our event management services include a complete process of budgeting, event dates, selecting and reserving the event venue, coordinating transportation and parking, developing a theme or motive for the event, arrangement of speakers, decoration of site, catering services, event support and security. We, along with our expert team sit down and make decisions for the betterment of our clients and try to provide an excellent service according to the customer's demands.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card w-auto bg-base-200 shadow-xl">
                    <figure><Image height={450} width={800} src={img2} alt="Event" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-center  font-extrabold">Designing and Printing</h2>
                        <p>Graphics Design Logo Designing, Flyer & Catalog Designing, Flash Designing, Corporate Identity Designing,

                            Interior Design & Decoration
                            Red Apple provide service through Interior Designer implies that there is more of an emphasis on Planning, Functional design and effective use of space involved in this profession, as compared to interior decorating. We can undertake projects that include arranging the basic layout of spaces within a building as well as projects that require an understanding of technical issues such as acoustics, lighting, temperature, etc. Although an interior designer may create the layout of a space, they may not alter load-bearing walls without having their designs stamped for approval by an architect. Interior Designers often work directly with architectural firms.
                            Printing & Publication Banners , Brochures, Flyers, Folders, leaflets, Newsletters, Pamphlets, Posters, Prospectors, Envelopes, Cover Page Design, Business Card, Letterhead Pad.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card w-auto bg-base-200 shadow-xl">
                    <figure><Image height={450} width={800} src={img3} alt="Design" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-center  font-extrabold">Gift and Promotional items</h2>
                        <p>T-shirt, Bags , Ball caps , Shirts , Desk organizers , Glassware/ Drink ware, Calendars, Pens , Note pads , Sticky notes , Highlighters, Trophies , Commemorative plaques , Briefcases , High end company branded clothing, such as a windbreaker or a polo or dress shirt , Engraved pen and pencil sets.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ServiceScreen;