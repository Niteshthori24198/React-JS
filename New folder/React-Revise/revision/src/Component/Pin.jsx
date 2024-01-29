import React from 'react'
import { Pincomponent } from './Pincomponent';

import PropTypes from 'prop-types'

function Pin({ maxChar, length }) {

    const ref = React.useRef([]);

    const [len] = React.useState(new Array(length).fill(0));


    const handleFocus = (e, i) => {

        if (e.target.value.length === maxChar && i < length - 1) {
            ref.current[i + 1].focus()
        }

    }


    const handleBackspace = (e, i) => {

        if (e.target.value.length === 0 && i > 0) {
            ref.current[i - 1].focus()
        }

    }


    const keyHandler = (e, i) => {

        if (e.keyCode === 8) {
            handleBackspace(e, i)
        } else {
            handleFocus(e, i)
        }

    }



    const pasteHandler = (e) => {

        const data = e.clipboardData.getData('Text').trim().split('');

        const newdata = []

        let d = '';

        data.forEach((ele, i) => {
            d += ele;
            if (d.length === maxChar) {
                newdata.push(d);
                d = ''
            }
        });

        newdata.forEach((ele, i) => {
            ref.current[i].value = newdata[i];
            if (e.target.value.length === maxChar && i < newdata.length - 1) {
                ref.current[i + 1].focus()
            }
        })
    }



    return (
        <div onPaste={(e) => pasteHandler(e)}>

            {
                len.map((ele, i) => {
                    return <Pincomponent key={i} ref={(e) => ref.current[i] = e} maxChar={maxChar} keyHandler={(e) => keyHandler(e, i)} />
                })
            }

        </div>
    )
}

export default Pin


Pin.propTypes = {
    maxChar: PropTypes.number.isRequired,
    length: PropTypes.number.isRequired

}