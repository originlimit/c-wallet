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

    //cardData is an array of objects containing all the info the Card component will use
    const cardData = [
    { cID: 1, title: 'Cross Platform Sync', information: 'With our apps, you get cross-platform support and info sync on every device — all hassle-free!', source: Sync },
    { cID: 2, title: 'Reliable Notifications', information: 'Get reliable security notifications and updates so you don\'t miss out on anything.', source: Notifs },
    { cID: 3, title: 'Holdings Report', information: 'We offer free holdings reports! We\'ve got your back on monitoring for all your ups and downs.', source: Rev },
    ];

    //.map passes each array element's object info to a new object named "card" to display it in our Card component
    return (
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Hero/>
            {cardData.map((card) => <Card cID={card.cID} title={card.title} information={card.information} source={card.source}/>)}
        </>
    )
}

export default Home
