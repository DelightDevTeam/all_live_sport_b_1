import React from 'react'
import marqueeIcon from '../assets/img/marquee.png';
const Marquee = () => {
    return (<div className="marqueeContainer  mx-2">
        <img src={marqueeIcon} className='soundIcon' />

        <marquee className=' fw-bold  ' behavior="" direction="left">
            <span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores saepe magni quibusdam delectus recusandae esse ipsa nam, quas facilis odit aut adipisci voluptatem beatae repellat incidunt, quod earum at rem.</span>
        </marquee>
    </div>

    )
}

export default Marquee
