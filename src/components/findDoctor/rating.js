import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'

const StartRating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
        <>
            {
            [...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <>


                        <label>
                            <fieldset>
                                <input type="radio" className="ratingradio"
                                    onClick={() => setRating(ratingValue)}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)}
                                    name="rating" value={ratingValue} />
                                <FaStar className="star" color={ratingValue <= rating ? "#ffc107" : "e4e5e9"} size={50} />
                            </fieldset>
                        </label>
                    </>

                )
            })}

        </>
    )
}

export default StartRating;