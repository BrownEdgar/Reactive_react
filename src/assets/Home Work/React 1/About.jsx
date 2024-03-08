import { useState } from 'react'
import './About.css'
export default function About() {
  const [readmore, setReadmore] = useState(false)

  return (
    <div className='About'>
      <div className='head'>
        <h1>Our Blog</h1>
      </div>

      <div className='About1'>
        <div className='box'>
          <p className='text'>AXONVIP | 01AUG. 2019</p>
          <span>Aliquam Hendrerit Mi Metus</span>
          <p className='text2'>it is with great pleasure that i speak to the live experecied with  the Cantrell Brothers and the team at...</p>

          <p className={readmore ? 'active' : 'hide'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, obcaecati? Culpa sint sed, labore tenetur incidunt quisquam obcaecati. Non dolores ullam excepturi, numquam libero aperiam ut repellat dolorem blanditiis officia quaerat sunt ratione obcaecati sit minima deserunt ad earum suscipit!</p>

          <button onClick={() => setReadmore(!readmore)} > READ MORE</button>
        </div>

        <div className='box'>
          <p className='text'>AXONVIP | 01AUG. 2019</p>
          <span>Mauris Vulputate Cras Amet</span>
          <p className='text2'>it is with great pleasure that i speak to the live experecied with  the Cantrell Brothers and the team at...</p>
          <p className={readmore ? 'active' : 'hide'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, obcaecati? Culpa sint sed, labore tenetur incidunt quisquam obcaecati. Non dolores ullam excepturi, numquam libero aperiam ut repellat dolorem blanditiis officia quaerat sunt ratione obcaecati sit minima deserunt ad earum suscipit!</p>

          <button onClick={() => setReadmore(!readmore)} > READ MORE</button>
        </div>

        <div className='box'>
          <p className='text'>AXONVIP | 01AUG. 2019</p>
          <span>Suspendisse Nullam Sodales</span>
          <p className='text2'>it is with great pleasure that i speak to the live experecied with  the Cantrell Brothers and the team at...</p>
          <p className={readmore ? 'active' : 'hide'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, obcaecati? Culpa sint sed, labore tenetur incidunt quisquam obcaecati. Non dolores ullam excepturi, numquam libero aperiam ut repellat dolorem blanditiis officia quaerat sunt ratione obcaecati sit minima deserunt ad earum suscipit!</p>

          <button onClick={() => setReadmore(!readmore)} > READ MORE</button>
        </div>
      </div>

    </div >
  )
}
