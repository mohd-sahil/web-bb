import React from 'react';
import styled from 'styled-components';

const AnchorHover = styled.a`
    all: initial;
    font-family: sans-serif;
    color: #646464;
    :hover {
        color: red !important;
        cursor: pointer;
        text-decoration: none;
    }
`

function Artists() 
{
    return(
        <div className="Artists">
            <div className="row">
                <div className="col-md-4">
                    <img src={require('../../assets/bandbazar/artist/Abhishek-Mule.jpg')} alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card card-body bg-light" style={{padding: '3%'}}>
                        <div>
                            <AnchorHover href="#" style={{backgroundColor: 'white',padding: '0.8%',fontSize: '9px', letterSpacing: '0.8px'}}>GUITARIST</AnchorHover>
                        </div>
                        <div style={{marginTop: '2%',marginBottom: '3%'}}>
                            <AnchorHover href="#" style={{fontSize: '22px',color: 'black'}}>Abhishek Mule</AnchorHover>
                        </div>
                        <div style={{marginBottom: '2%'}}>
                            <i className="fa fa-user"></i>  <a href="#" style={{color: 'black', textDecoration: 'none'}}>admin</a>
                            &nbsp;&nbsp;<i className="fa fa-calendar"></i>  18 August, 2019
                        </div>
                        <p style={{fontSize: '13px'}}>Life is all about getting ahead of everyone and make your presence felt-this guy knows how. The in-house rockstar who knows that you need to make your own destiny rather than let destiny make ...</p>
                        <a href="#" style={{color: 'red', fontSize: '15px'}}>Read More</a>
                    </div>
                </div>
            </div>
            <div className="row" style={{marginTop: '2%'}}>
                <div className="col-md-4">
                    <img src={require('../../assets/bandbazar/artist/Richard.jpg')} alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card card-body bg-light" style={{padding: '3%'}}>
                        <div>
                        <AnchorHover href="#" style={{backgroundColor: 'white',padding: '0.8%',fontSize: '9px', letterSpacing: '0.8px'}}>ARTIST</AnchorHover>&nbsp;
                            <AnchorHover href="#" style={{backgroundColor: 'white',padding: '0.8%',fontSize: '9px', letterSpacing: '0.8px'}}>GUITARIST</AnchorHover>
                        </div>
                        <div style={{marginTop: '2%',marginBottom: '3%'}}>
                            <AnchorHover href="#" style={{fontSize: '22px',color: 'black'}}>Richard</AnchorHover>
                        </div>
                        <div style={{marginBottom: '2%'}}>
                            <i className="fa fa-user"></i>  <a href="#" style={{color: 'black', textDecoration: 'none'}}>admin</a>
                            &nbsp;&nbsp;<i className="fa fa-calendar"></i>  18 August, 2019
                        </div>
                        <p style={{fontSize: '13px'}}>From the solitary town of Dehradun comes an equally solitary instrumentalist waiting to take you on a musical ride.   Richard Alexander Joseph is an instrumentalist from the town of Dehradun. Like the town ...</p>
                        <a href="#" style={{color: 'red', fontSize: '15px'}}>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Artists;