const Contact = () => {
    let contactPara = '"If you want to know more about Royal Enfield, please contact us at "'
    let Email = '"support@royalenfield.com"'
    let Number = '"1800-210-0008 (Our hours are 9 am - 9 pm IST , Monday - Sunday)"'
    let Location = '"Royal Enfield- A Unit Of Eicher Motors Ltd.Plot # 96, Institutional Area, Sector-32Gurgaon,HARYANA 122001, India"'
    let Link = "https://store.royalenfield.com/en/contact"
    
    return (
        <div id="contact" className="contact  bg-tirtary">
            <h1 className="md:w-1/2 hero-text text-5xl  text-white p-2 pl-6 pt-8 md:pt-16 md:pl-14 m-26">Contact </h1>

            <p className="text-center p-2 md:pt-5 p-text">{contactPara}</p>

            <p className="text-center p-2 md:pt-5 p-text"><b>Email: </b>{Email} </p>
            <p className="text-center p-2 md:pt-5 p-text"><b>Number: </b>{Number} </p>
            <p className="text-center p-2 md:pt-5 p-text"><b>Location: </b>{Location} </p>
            <p className="text-center p-2 md:pt-5 p-text"><b>Need More Details: </b> <a className="text-yellow-300 " href={Link}><i> <b>Click here </b></i> </a> </p>
            
            
    </div>
    )
}

export default Contact;