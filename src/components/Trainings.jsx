import TrainingCards from "./TrainingCards";
import logoDt from '../assets/dt.gif';
import cspo from '../assets/cspo.webp';
import icp from '../assets/icp-pdm.png';

    
const Trainings=()=>{
    return(
        <>
             <div className="component"  >
            <div style={{display:'flex'}}>
            <TrainingCards logo={logoDt} heading="Design Thinking" date="8th Nov 2022" bg="#908090"/>
            <TrainingCards logo={cspo} heading="Certified Scrum Product Owner" date="9th Nov 2022" bg="#909090"/>
            <TrainingCards logo={icp} heading="Product Managemen Launchpad" date="10th Nov 2022" bg="#808090"/>
            </div>
        </div>
        </>
    )
}

export default Trainings;