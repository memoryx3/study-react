import React, { useEffect, useState } from 'react';

export default function PhotoSection(): JSX.Element {
    const imageLinks: Array<string> =
        [
            'https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_1.0,f_auto,q_auto,w_700/c_pad,w_700/F6699252-01',
            'https://m.media-amazon.com/images/I/812L5zyAmpL._AC_SL1500_.jpg',
            'https://www.ikea.com/gb/en/images/products/bravur-wall-clock-black__0633568_pe695902_s5.jpg?f=xl'
        ];

    let [index, setIndex] = useState(0);
    let [clicks, setClicks] = useState(0);
    
    useEffect(() => {
        let counter = document.querySelector('#counter') as HTMLParagraphElement;
        counter.innerHTML = clicks.toString();
    })

    function calculation(number: number = 0): number {
        setClicks(clicks + 1);

        if (index + number < 0) return imageLinks.length - 1;
        if (index + number > imageLinks.length - 1) return 0;
        return index + number;
    }

    return (
        <section>
            <img src={imageLinks[index]} alt="some clock" width="300" height="300" />
            <button onClick={() => setIndex(calculation(-1))}>prev image</button>
            <button onClick={() => setIndex(calculation(1))}>next image</button>
            <p id="counter"></p>
        </section>
    );
}