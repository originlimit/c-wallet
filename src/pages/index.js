import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Sync from '../assets/sync.svg'
import Notifs from '../assets/notifs.svg'
import Rev from '../assets/revenue.svg'

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {setIsOpen(!isOpen)};

    const cardData = [
    { title: 'this is a title 1', information: 'this is a description 1', source: Sync },
    { title: 'this is a title 2', information: 'this is a description 2', source: Notifs },
    { title: 'this is a title 3', information: 'this is a description 3', source: Rev },
    ];

    return (
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Hero/>
            {cardData.map((card) => <Card title={card.title} information={card.information} source={card.source}/>)}
        </>
    )
}

export default Home
