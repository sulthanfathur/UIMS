import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Team = () => {
    const [teamPrincipal, setTeamPrincipal] = useState([]);
    const [teamOthers, setTeam] = useState([]);
    
    // FETCH JSON
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/team/`);
                setTeamPrincipal(res.data.team_principal[0]);
            }
            catch (err) {

            }
        }

        fetchData();
    }, []);
    
    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/team/`);
                setTeam(res.data.others);
            }
            catch (err) {

            }
        }
        fetchTeam();
    }, []);

    // GET MEMBERS
    const getTeam = () => {
        let list = [];
        let result = [];

        teamOthers.map(teamMember => {
            return list.push(
                <div className="BoxGrid_item col-md-3 my-4">
                        <a className="text-light BoxGrid_image" href={teamMember.linkedin}>
                            <div className='overlay-div'>
                                <img className="card-img overlay-img " width="100%" height="133%" src={teamMember.foto} alt='thumbnail' />
                            </div>
                            
                            <div className="card-img-overlay d-flex align-items-end">
                                <div>
                                    <p className="lead akira mb-0">{teamMember.jabatan}</p>  
                                    <h2>{teamMember.name}</h2>                          
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        {/* <Link className="btn btn-primary" role="button">Read</Link> */}
                                    </div>
                                </div>
                            </div>
                        </a>                
                </div>
            );
        });

        for (let i = 0; i < list.length; i += 4) {
            result.push(
                <div key={i} className='row justify-content-center'>
                    {list[i] ? list[i] : null}
                    {list[i+1] ? list[i+1] : null}
                    {list[i+2] ? list[i+2] : null}
                    {list[i+3] ? list[i+3] : null} 
                </div>
            )
        }

        return result;
    }

    // HTML
    return (
        <main>
            {/* HEADLINE */}
            <div className='container my-5 px-5'>
                <p className='team-headline'>UI MOTORSPORT TEAM</p>
                <div className='mt-5 mb-5 desc'>
                    We are motorsport team that
                    was founded by Universitas
                    Indonesia students who are
                    interest, talented, and
                    innovative in automotive
                    sector, especially in karts,
                    electric motorcycle, and
                    motorsports.
                </div>
            </div>
            <a href={teamPrincipal.linkedin} class="text-light splitbanner_wrapper">
                <div class="splitbanner_item">
                    <div class="splitbanner_content-text">
                        <div class="splitbanner_content-inside">
                            <p class="lead splitbanner_pre-title">TEAM PRINCIPAL</p>
                            <h2 class="title ">{teamPrincipal.name}</h2>
                            <br></br>
                            <a href={teamPrincipal.linkedin} class="text-light btn btn-outline-light btn">DISCOVER MORE</a>
                        </div>
                    </div>
                    <div class="splitbanner_content-media">
                        <div class="ImgAnimation_wrapper">
                            <div class="ImgAnimation_content">
                                <div class="ImgAnimation_inner">
                                    <img src={teamPrincipal.foto} alt="" className="Img_image Img_image-absolute Img_image-cover"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>

            <div className="BoxGrid_wrapper py-4">
                <div className="BoxGrid_content">
                    <div className="mx-4">
                    {getTeam()}
                    </div>
                </div>
            </div>

            <a href={`team/gokart`} class="text-light splitbanner_wrapper gokart_team_img team_image-properties">
                <div class="gokart_ev_banner_item">
                    <div class="splitbanner_content-transparent">
                        <div class="splitbanner_content-inside">
                            <h2 class="akira">GOKART TEAM</h2>
                            <br></br>
                            <a href={`team/gokart`} class="text-light btn btn-outline-light btn">DISCOVER MORE</a>
                        </div>
                    </div>
                    <div class="splitbanner_content-media">
                    </div>
                </div>
            </a>

            <a href={`team/ev`} class="text-light splitbanner_wrapper ev_team_img team_image-properties">
                <div class="gokart_ev_banner_item">
                    <div class="splitbanner_content-transparent">
                        <div class="splitbanner_content-inside">
                            <h2 class="akira">EV TEAM</h2>
                            <br></br>
                            <a href={`team/ev`} class="text-light btn btn-outline-light btn">DISCOVER MORE</a>
                        </div>
                    </div>
                    <div class="splitbanner_content-media">
                    </div>
                </div>
            </a>
            
            <a href={`team/marketing`} class="text-light splitbanner_wrapper marketing_team_img team_image-properties">
                <div class="gokart_ev_banner_item">
                    <div class="splitbanner_content-transparent">
                        <div class="splitbanner_content-inside">
                            <h2 class="akira">MARKETING TEAM</h2>
                            <br></br>
                            <a href={`team/marketing`} class="text-light btn btn-outline-light btn">DISCOVER MORE</a>
                        </div>
                    </div>
                    <div class="splitbanner_content-media">
                    </div>
                </div>
            </a>
        </main>
    );
};

export default Team;