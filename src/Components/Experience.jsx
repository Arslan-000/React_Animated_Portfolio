import experience from "./Data/experience.json";

function Experience() {
  return (
    <>
    <div className='container ex' id="experience">
    <h1>EXPERIENCE</h1>
    {
      experience.map((Data)=>{
        return(
          <div key={Data.id} className="ex-items text-center my-5" data-aos="zoom-in"
          data-aos-duration="1000">
          <div className="left">
          <img className="img-width" src={`assets/${Data.imageSrc}`} alt="company logo" />
          </div>
          <div className="right">
          <h2>{Data.role}</h2>
          <h4>
          <span style={{color:"yellowgreen"}}>{Data.startDate}{" "}{Data.endDate}</span>
         <span style={{color:"yellow"}}> {" "}{Data.location}</span>
          </h4>
         <span style={{color:"yellow"}}>
         <h5>
         {Data.experiences[0]}
         </h5>
         <h5>
         {Data.experiences[1]}
         </h5>
         </span>
          </div>
          </div>
        )
      })
    }
    </div>
    </>
  )
}

export default Experience
Experience