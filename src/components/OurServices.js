import React from 'react';

function OurServices() {
    return (
        <div className="OurServices" style={{textAlign: "center"}}>
            
            <h1 style={{textAlign: "center"}}><b>Our Services</b></h1>
            <div className="row" style={{marginTop: '7%'}}>
                <div className="col-md-3">
                    <img src={require('../assets/bandbazar/fetureband.jpg')} alt="feature band" />
                    <br /> <br />
                    <h3>Featured Band</h3>   
                    <p style={{textAlign: "justify"}}>We provide a digital advertising tool that enables artists to advertise their content to potential fans, clients and event managers</p> 
                    <button className="btn btn-success" style={{height: "40px"}}>More Info</button>
                </div>
                <div className="col-md-3">
                    <img src={require('../assets/bandbazar/find-artist.jpg')} alt="feature band" />
                    <br /> <br />
                    <h3>Find Artist</h3>
                    <p style={{textAlign: "justify"}}>On bandbazaar you can find/hire artists according to you event need or you can connect them for your band team</p>    
                    <button className="btn btn-success" style={{height: "40px"}}>More Info</button>
                </div>
                <div className="col-md-3">
                    <img src={require('../assets/bandbazar/find-gig1.jpg')} alt="feature band" /> 
                    <br /> <br />
                    <h3>Find Gigs</h3>
                    <p style={{textAlign: "justify"}}>Our strong client base and 24*7 responsive team will help you to find gigs in your city and also a national and international level.</p>
                    <button className="btn btn-success" style={{height: "40px"}}>More Info</button>
                </div>
                <div className="col-md-3">
                    <img src={require('../assets/bandbazar/sell1.jpg')} alt="feature band" /> 
                    <br /> <br />
                    <h3>Sell/Buy Items</h3>
                    <p style={{textAlign: "justify"}}>Our e-commerce platform provides you sell and purchase your/other band stuff to increase your popularity</p>
                    <button className="btn btn-success" style={{height: "40px"}}>More Info</button>
                </div>
            </div>
            <div className="row" style={{marginTop: '5%', marginBottom: '7%'}}>
                <div className="col-md-3">
                    <img src={require('../assets/bandbazar/album1.jpg')} alt="feature band" />    
                    <br /> <br />
                    <h3>Albums</h3>
                    <p style={{textAlign: "justify"}}>Our grate marketing tool helps artists to sell their albums, tracks, Videos in the global world without any hassle</p>
                    <button className="btn btn-success" style={{height: "40px"}}>More Info</button>
                </div>
                <div className="col-md-3">
                    <img src={require('../assets/bandbazar/stdios1.jpg')} alt="feature band" />
                    <br /> <br />
                    <h3>Find Studio</h3>
                    <p style={{textAlign: "justify"}}>We provide you a wide range of Jam studios, recording studios and productions houses from your city’s</p>
                    <button className="btn btn-success" style={{height: "40px"}}>More Info</button>
                </div>
                <div className="col-md-3">
                    <img src={require('../assets/bandbazar/sponsor1.jpg')} alt="feature band" /> 
                    <br /> <br />
                    <h3>Get Sponsors</h3>
                    <p style={{textAlign: "justify"}}>Social networking is the best way for showing your talent in the right place and we help you, to find better sponsors and clients</p>
                    <button className="btn btn-success" style={{height: "40px"}}>More Info</button>
                </div>
                <div className="col-md-3">
                    <img src={require('../assets/bandbazar/dm1.jpg')} alt="feature band" /> 
                    <br /> <br />
                    <h3>Digital Marketing</h3>
                    <p style={{textAlign: "justify"}}>We help you to make your global presence by helping you in making and maintaining your website, social accounts and hep in graphic also</p>
                    <button className="btn btn-success" style={{height: "40px"}}>More Info</button>
                </div>
            </div>
            <br />
        </div>
    );
}

export default OurServices;