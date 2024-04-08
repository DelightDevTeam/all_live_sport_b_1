import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import all from '../assets/img/all.png';
import fish from '../assets/img/fish.png';
import casino from '../assets/img/casino.png';
import sport from '../assets/img/sport.png';
import slot from '../assets/img/slot.png';
import slot1 from '../assets/img/slot1.png';
import slot2 from '../assets/img/slot2.png';
import slot3 from '../assets/img/slot3.png';
import slot4 from '../assets/img/slot4.png';
import slot5 from '../assets/img/slot5.png';
import slot6 from '../assets/img/slot6.png';
import slot7 from '../assets/img/slot7.png';
import casino1 from '../assets/img/casino1.png';
import casino2 from '../assets/img/casino2.png';
import casino3 from '../assets/img/casino3.png';
import casino4 from '../assets/img/casino4.png';
import casino5 from '../assets/img/casino5.png';
import casino6 from '../assets/img/casino6.png';
import casino7 from '../assets/img/casino7.png';
import sport1 from '../assets/img/sport1.png';
import sport2 from '../assets/img/sport2.png';
import sport3 from '../assets/img/sport3.png';
import sport4 from '../assets/img/sport4.png';
import fish1 from '../assets/img/fish1.png';
import fish2 from '../assets/img/fish2.png';
import '../assets/css/gameTabs.css'
import { Col, Nav, Row } from 'react-bootstrap';
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

function HomeTabs() {
    const tabs = [
        { id: 1, title: 'All Games', img: all },
        { id: 2, title: 'Slots', img: slot },
        { id: 3, title: 'Live Casinos', img: casino },
        { id: 4, title: 'Sport Book', img: sport },
        { id: 5, title: 'Fishing', img: fish },
    ]
    const slotContents = [
        { id: 1, img: slot1 },
        { id: 2, img: slot2 },
        { id: 3, img: slot3 },
        { id: 4, img: slot4 },
        { id: 5, img: slot5 },
        { id: 6, img: slot6 },
        { id: 7, img: slot7 },
    ]
    const casinoContents = [
        { id: 1, img: casino1 },
        { id: 2, img: casino2 },
        { id: 3, img: casino3 },
        { id: 4, img: casino4 },
        { id: 5, img: casino5 },
        { id: 6, img: casino6 },
        { id: 7, img: casino7 },
    ]
    const sportContents = [
        { id: 1, img: sport1 },
        { id: 2, img: sport2 },
        { id: 3, img: sport3 },
        { id: 4, img: sport4 },

    ]
    const fishContents = [
        { id: 1, img: fish1 },
        { id: 2, img: fish2 },

    ]
    return (
        <div className="  mb-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
                <Nav variant="pills"
                    // style={{ background: '#3A2557' }}
                    // style={{
                    //     background: ' linear-gradient(to bottom, #630D93, #3A107D)'
                    // }}
                    className="  px-sm-4 mt-2 mt-sm-0
                     d-flex justify-content-center flex-nowrap mb-4  gap-sm-0 gap-lg-4 pt-2 gameTabContainer"  >
                    {tabs.map((item) => {
                        return <Nav.Item key={item.id} >
                            <Nav.Link eventKey={item.id} className='gameTab pb-2'>
                                <img src={item.img} />
                                <p className='p-0 m-0'>{item.title}</p>
                            </Nav.Link>
                        </Nav.Item>
                    })}
                </Nav>
                <Tab.Content className='px-2 px-md-4'>
                    <Tab.Pane eventKey={1}>
                        <div className='mb-4'>
                            <h3 className='ms-3' >Slots</h3>
                            <div className="mt-2 row px-2">
                                {slotContents.map((item) => {
                                    return <div key={item.id} className=" col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                        <img className='img-fluid rounded-4 gameCard object-cover '
                                            // style={{ width: '100%', height: '100%' }} 
                                            src={item.img} />
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <h3 className='ms-2' >Live Casinos</h3>
                            <div className="row px-2">
                                {casinoContents.map((item) => {
                                    return <div key={item.id} className="col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                        <img className='img-fluid rounded-4 gameCard object-cover '
                                            // style={{ width: '100%', height: '100%' }} 
                                            src={item.img} />
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <h3 className='ms-2' >Sport Book</h3>
                            <div className="row px-2">
                                {sportContents.map((item) => {
                                    return <div key={item.id} className="col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                        <img className='img-fluid rounded-4 gameCard object-cover '
                                            // style={{ width: '100%', height: '100%' }} 
                                            src={item.img} />
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <h3 className='ms-2' >Fishing</h3>
                            <div className="row px-2">
                                {fishContents.map((item) => {
                                    return <div key={item.id} className="col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                        <img className='img-fluid rounded-4 gameCard object-cover '
                                            // style={{ width: '100%', height: '100%' }} 
                                            src={item.img} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={2}>
                        <div className="row px-2">
                            {slotContents.map((item) => {
                                return <div key={item.id} className="col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                    <img className='img-fluid rounded-4 gameCard object-cover '
                                        // style={{ width: '100%', height: '100%' }} 
                                        src={item.img} />
                                </div>
                            })}
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={3}>
                        <div className="row px-2">
                            {casinoContents.map((item) => {
                                return <div key={item.id} className="col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                    <img className='img-fluid rounded-4 gameCard object-cover '
                                        // style={{ width: '100%', height: '100%' }} 
                                        src={item.img} />
                                </div>
                            })}
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={4}>
                        <div className="row px-2">
                            {sportContents.map((item) => {
                                return <div key={item.id} className="col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                    <img className='img-fluid rounded-4 gameCard object-cover '
                                        // style={{ width: '100%', height: '100%' }} 
                                        src={item.img} />
                                </div>
                            })}
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey={5}>
                        <div className="row px-2">
                            {fishContents.map((item) => {
                                return <div key={item.id} className="col-4 col-md-3 col-xl-2 cursorPointer mb-2 mb-md-3">
                                    <img className='img-fluid rounded-4 gameCard object-cover '
                                        // style={{ width: '100%', height: '100%' }} 
                                        src={item.img} />
                                </div>
                            })}
                        </div>
                    </Tab.Pane>

                </Tab.Content>
            </Tab.Container>
        </div>
    );
}

export default HomeTabs;