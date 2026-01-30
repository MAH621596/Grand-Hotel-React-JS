import React from 'react'
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { roomsData } from '@/helper/data';

const Rooms: React.FC = () => {
    return (
        <>
            <section className="rooms">
                <div className="common-header">
                    <h1 className="common-heading">Rooms in Grand Hotel</h1>
                    <div className="underline">
                        <div className="small-underline"></div>
                        <div className="big-underline"></div>
                    </div>
                </div>

                <div className="rooms-class-wrapper">
                    {roomsData.map((room, index) => (
                        <Card className='flex' key={index}>
                            <div className="room-card">
                                <img src={room.image} className="room-img" />
                                <div className="room-card-content">
                                    <h4 className="room-card-heading">{room.heading}</h4>
                                    <p className="room-card-para">{room.paragraph}</p>
                                    <p className="room-price">{room.price}</p>
                                    <Button className="room-card-btn">
                                        {room.buttonText}
                                        <i className="fa fa-angle-double-right btn-arrow"></i>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
                <div className="rooms-btn-wrapper">
                    <Button
                        className="rooms-btn hover:text-blue-600 transition-colors">
                        Check All Rooms
                    </Button>
                </div>
            </section>
        </>
    )
}

export default Rooms;