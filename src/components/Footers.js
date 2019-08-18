import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';


const HoverText = styled.p`
	color: #646464;
	:hover {
		color: #ed1212;
		cursor: pointer;
	}
`

const divStyle = {
    color:"white",
    margin:"2px",
    marginTop:"80px",
    fontSize:"13px",
    padding:"20px",
    paddingTop:"50px",
}
const headStyle = {
    fontSize:"15px",
    fontWeight:"600",
    marginBottom:"20px"
}
function Footers(){
    return(
            <footer id="footer" className="footer" style={{backgroundColor:"#222"}}>
                <div className="container">
                    <div className="row" style={divStyle}>
                        <div className="col-md-5 col-xs-12">
                            <h3 style={headStyle}>Extra features</h3>
                            <ul style={{ listStyleType: "none" }}>
                                <li style={{padding:"10px"}}><HoverText >Featured Band</HoverText></li>
                                <li style={{padding:"10px"}}><HoverText >Featured Artists</HoverText></li>
                                <li style={{padding:"10px"}}><HoverText >Featured Studios</HoverText></li>
                                <li style={{padding:"10px"}}><HoverText >Featured Events</HoverText></li>
                                <li style={{padding:"10px"}}><HoverText >About Us</HoverText></li>
                                <li style={{padding:"10px"}}><HoverText >Contacts</HoverText></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-xs-12" style={{fontWeight:"595"}}>
                            <h3 style={headStyle}>Albums</h3>
                            <p>[audiotrack title=”Song One” songwriter=”credit” mp3=”https://bandbazaar.com/wp-admin/uploads/audiofile1.mp3?]</p>
                            <p>[audiotrack title=”Song Two” songwriter=”credit” mp3=”https://bandbazaar.com/wp-admin/uploads/audiofile2.mp3?]</p>
                        </div>
                        <div className="col-md-2 col-xs-12">
                            <h3 style={headStyle}>Instagram</h3>			
                            <p>[instagram-feed]</p>

                        </div>
                    </div>
                    <hr
        style={{
            marginTop:"-15px",
            color: "#646464",
            backgroundColor: "#646464",
        }}
    />
                   <div className="row justify-content-center" style={{color:"white",textAlign:"center",padding:"15px",fontSize:"12px"}}>
                        <div className="col-md-12">
                            <b>Property of MACH15 Group</b>
                        </div>
                    </div>
                </div>
            </footer>
    );
}
export default Footers;