import HeroImage from '../asserts/bs6-royal-enfield-classic-350-stealth-black-rhs-3709.png'

const Hero = ()=>{
    return (
        <div className="flex bg-secondary flex-col lg:flex-row  md:px-5 md:py-24">
        <h1 className='md:w-1/2 hero-text text-5xl  text-white p-2 pl-6 pt-8 md:pt-32 md:pl-14 m-26'>Royal Enfield <p >Made Like a Gun, Goes Like a Bullet.</p></h1>
        
        <img className='md:w-1/3  md:ml-14 md:mb-14' src={HeroImage}/>
        </div>
    )
}

export default Hero