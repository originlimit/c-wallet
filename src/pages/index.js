import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {setIsOpen(!isOpen)};

    return (
        <>
            <Navbar/>
            <Sidebar/>
        </>
    )
}

export default Home
