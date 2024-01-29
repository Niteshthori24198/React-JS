import React from 'react'

function UseDebounce() {

    let { current: id } = React.useRef()

    const debounce = (makereq, delay) => {

        if (id) {
            clearTimeout(id);
        }

        id = setTimeout(() => {
            makereq()
        }, delay)

    }


    return debounce
}

export default UseDebounce
