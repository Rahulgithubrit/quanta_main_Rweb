import React from 'react';
import './Department.css';
import img1 from '../images/Vector 1.png';
import img2 from '../images/Vector 2.png';
import img3 from '../images/Vector 3.png';

function Department(){
  return(
    <div className="our">
        <div className="tech">
          <img className="img1" alt='' src={img1} />
          <h1 className="tecnical">Tecnical</h1></div>

        <div className="our_1">

          <img className="img2" alt='' src={img2} />
          <h2 className="design">Design</h2>
          <h2 className="our_department">Our Departments</h2>
        </div>
        <div className="our_2">
          <img className="img3" alt='' src={img3} />
          <h1 className="wed_development">web Development</h1>
          <h3 className="about_text">Here at <span className='quan'>QUANTA</span> we have three <br /> departments namely Technical, Design and<br />  Web Development. Were we work and learn <br /> together and work on some awesome<br />  projects.</h3>
        </div>
      </div>
  )
}
export default Department