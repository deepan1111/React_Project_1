import AboutImage from "../asserts/front-view.png"


const About = ()=>{
    const Content = "Royal Enfield, an esteemed motorcycle manufacturer, boasts a rich history dating back to 1893 when it emerged as a British weapons producer before transitioning to motorcycles. Renowned for its classic designs, the company's motorcycles exude a timeless appeal reminiscent of mid-20th-century aesthetics. Among its iconic models, the Royal Enfield Bullet stands out, celebrated for its distinctive thumping sound and robust construction. While initially rooted in England, Royal Enfield has found a strong foothold in India since the 1950s and has expanded its global presence in recent years. Despite maintaining its classic styling, the company has embraced modernization, incorporating features like fuel injection and disc brakes into its lineup. Royal Enfield motorcycles have transcended their mechanical form to become cultural icons, symbolizing freedom and adventure on the open road. With a diverse range of models including the Classic, Himalayan, Interceptor 650, and Continental GT 650, Royal Enfield continues to captivate motorcycle enthusiasts worldwide, embodying a perfect fusion of heritage and innovation.";

    return (
        <div id="about" className="flex md:flex-row  flex-col bg-tirtary ">
        <img className="w-1/3 pt-10 md:block hidden " src={AboutImage} alt="" />
        <div className="flex flex-col">

        <h1 className="md:w-1/2 hero-text text-5xl  text-white p-2 pl-6 pt-8 md:pt-16 md:pl-14 m-26">About Enfield </h1>
        <p className=" p-text text-center md:text-left  p-1 mt-5 md:px-10">{Content}</p>
        
        </div>

        
        
        </div>
    )
}

export default About;