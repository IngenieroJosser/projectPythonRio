import { useState } from "react"

const Question = ({title,description}) => {

    const [clicked, setClicked] = useState(false)

    const handleclick = () => {
        setClicked(!clicked)
    }

  return (
    <>
        <div className="question" onClick={handleclick}>
            <span>{title}</span>
            <svg width="16" height="16" viewBox="0 0 36 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="elj7tfr3 e164gv2o4 default-ltr-cache-l7vm9h e1svuwfo1" data-name="Plus" alt=""><path fillRule="evenodd" clipRule="evenodd" d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z" fill="currentColor"></path></svg>
        </div>
        <div className={`question-dropdown ${(clicked)? 'show': ' '}`}>
            <p>
                {description}
            </p>
        </div>
    </>
  )
}

export default Question