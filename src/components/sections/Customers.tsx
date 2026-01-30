import React from 'react';
import { Card } from '../ui/card';
import { customersData } from '@/helper/data';

const Customers: React.FC = () => {
    return (
        <>
            <section className="customers">
                <div className="common-header">
                    <h1 className="common-heading">Our Customers</h1>
                    <div className="underline">
                        <div className="small-underline"></div>
                        <div className="big-underline"></div>
                    </div>
                </div>

                <p className="customers-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos voluptates libero animi, soluta vel iusto ullam illum provident, laudantium voluptatibus, eum numquam nesciunt ea temporibus perferendis quam odio inventore impedit.</p>

                <div className="customers-card-wrapper">
                    {customersData.map((customer, index) => (
                        <Card key={index}>
                            <div className="customer-card">
                                <div className="customer-image-wrapper">
                                    <img src={customer.image} className="customer-img" />
                                </div>

                                <div className="customer-info">
                                    <h3 className="customer-fullname">{customer.fullname}</h3>
                                    <p className="customer-paragraph-1">{customer.paragraph}</p>
                                    <p className="customer-paragraph-2">{customer.sub_paragraph}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Customers;
