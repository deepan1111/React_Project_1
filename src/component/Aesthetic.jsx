import Img1 from "../asserts/th.jpeg"
import Img2 from "../asserts/2023-royal-enfield-hunter-350-fi-2-1536x1024.jpg"
import Img3 from "../asserts/77ef0c30e58d1bc94f48163cea4bb056a4f85be1.jpg"
import Img4 from "../asserts/th (1).jpeg"
import Img5 from "../asserts/scram-411-d-cms-listing-image-1080-815-2250x_.jpg"


const Aesthetic = () => {

    return (
        <div id="aest" className="aesthetic  bg-secondary ">
            <h1 className="md:w-1/2 hero-text text-5xl    text-white p-2 pl-6 pt-8 md:pt-16 md:pl-14 m-26">Aesthetics </h1>
            <p className="p-text md:pl-32 p-5 text-center md:text-left md:pt-14 md:pb-7 ">These are the top 5 models in Royal Enfield</p>
            <div className="flex  flex-col md:flex-row  justify-evenly md:pl-32 md:pt-7 md:pb-16">
                <div className="flex flex-col">
                    <img className="p-10 wid md:w-auto md:p-0" src={Img1} alt="" /> 
                    <p className="p-text pl-11 md:pl-0 pt-0 md:pt-8"><b>1. ​​Royal Enfield Classic 350</b></p>
                </div>
                <div className="flex flex-col">
                    <img className="p-10 md:p-0 wid" src={Img2} alt="" />
                    <p className="p-text  pl-11 md:pl-0 pt-0 md:pt-8"><b>2. Royal Enfield Hunter 350</b></p>
                </div>
                <div className="flex flex-col">
                    <img className="p-10 md:p-0 wid2" src={Img3} alt="" />
                    <p className="p-text  pl-11 md:pl-0 pt-0 md:pt-8"><b>3. Royal Enfield Bullet 350</b></p>
                </div>
                <div className="flex flex-col">
                    <img className="p-10 md:p-0  wid"  src={Img4} alt="" />
                    <p className="p-text  pl-11 md:pl-0 pt-0 md:pt-8"><b>4. Royal Enfield Meteor 350</b></p>
                </div>
                <div className="flex flex-col">
                    <img className="p-10 md:p-0 wid3" src={Img5} alt="" />
                    <p className="p-text  pl-11 md:pl-0 pt-0 md:pt-8 pb-5 md:pb-0"><b>5. Royal Enfield Scram 411</b></p>
                </div>



                

                
               
            </div>
    </div>
    )
}

export default Aesthetic;