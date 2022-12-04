import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
                // <div className="card mb-5 shadow-sm bg-darkgrey">
                //     <img classNameName="card-img-top" width="100%" height="225" src={teamMember.thumbnail} alt='thumbnail' />
                //     <div className="card-body">
                //         <h4>{teamMember.title}</h4>
                //         <p id="excerpt" classNameName="card-text excerpt mb-auto">{teamMember.excerpt}</p>
                //         <div className="d-flex justify-content-between align-items-center">
                //             <div className="btn-group">
                //                 <Link className="btn btn-primary" to={`/news/${teamMember.slug}`} role="button">Read</Link>
                //             </div>
                //             <small className="text-muted mt-3">{teamMember.month} {teamMember.day}</small>
                //         </div>
                //     </div>
                // </div>
            );
        });

        for (let i = 0; i < list.length; i += 3) {
            result.push(
                // <div key={i} className='row'>
                //     <div className='col-md-4'>
                //         {list[i]}
                //     </div>
                //     <div className='col-md-4'>
                //         {list[i+1] ? list[i+1] : null}
                //     </div>
                //     <div className='col-md-4'>
                //         {list[i+2] ? list[i+2] : null}
                //     </div>
                // </div>
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
            <div class="splitbanner_wrapper">
                <div class="splitbanner_item">
                    <div class="splitbanner_content-text">
                        <div class="splitbanner_content-inside">
                            <p class="splitbanner_pre-title">TEAM PRINCIPAL</p>
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
            </div>

            
        </main>
    );
};

export default Team;