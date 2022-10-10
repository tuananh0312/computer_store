import React from 'react';
import Sliders from '../components/Slider/Slider';
import Helmet from '../components/Helmet';
import sliderImage from '../assets/data-images/data-img';
import Section from '../components/Section/Section';
import SectionBody from '../components/Section/SectionBody';
import SectionTitle from '../components/Section/SectionTitle';
import PolicyCard from '../components/Policy/PolicyCard';
import policy from '../assets/data-images/policy-data';
import Grid from '../components/Grid/Grid';
import productData from '../assets/data-images/product-data';
import ProductCard from '../components/ProductCard/ProductCard';
const Homepage = () => {
    return (
        <div>
            {/* this is slider-content */}
            <Helmet title="Trang chủ">
                <Sliders data={sliderImage} />

                {/* this is policy section  */}
                <Section>

                    <SectionBody>
                        <Grid

                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}
                        >
                            {
                                policy.map((item, index) => {
                                    return (
                                        <PolicyCard
                                            key={index}

                                            name={item.name}
                                            description={item.description}
                                            icon={item.icon}
                                            color={item.color}
                                            size={item.size}
                                        />
                                    )
                                })
                            }
                        </Grid>


                    </SectionBody>
                </Section>
                {/* end policy section */}
                {/* best policy section  */}
                <Section>
                    <SectionTitle>
                        Top sản phẩm bán nhiều nhất
                    </SectionTitle>
                    <SectionBody>
                        <Grid

                            col={4}
                            mdCol={2}
                            smCol={1}
                            gap={20}

                        >
                            {
                                productData?.getALLproducts()?.map((item, index) => {
                                    return (
                                        <ProductCard
                                            key={index}
                                            img={item.img}
                                            title={item.title}
                                            img2={item.img2}
                                            price={parseInt(item.price)}
                                            category={item.category}
                                            id={item.id}
                                        />
                                    )

                                })


                            }

                        </Grid>
                    </SectionBody>
                </Section>

            </Helmet>
        </div>


    )
}
export default Homepage;