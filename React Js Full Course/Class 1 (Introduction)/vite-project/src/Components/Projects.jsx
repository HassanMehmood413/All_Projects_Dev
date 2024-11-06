import React from 'react'
import Resturant from '../images/Resturant.jpg'
import news from '../images/Newspaper.jpg'
import dance from '../images/danceacademy.jpg'
import spotify from '../images/spotify.jpg'
import article from '../images/article.jpg'
import article2 from '../images/article.png'
import news1 from '../images/news.png'

export default function Projects() {
    return (
        <div>
            <div className="mainprojects">
                <p className='titleproject'>Projects</p>
                <div className="bottomline2">

                </div>
                <span className="myprojects">

                    Here you will find some of the personal projects that i
                    created during my front-end journey

                </span>

                <div className="view_button">
                    <button>View All</button>
                </div>
                <div className="projectlists">
                    <div class="nft">
                        <div class='main'>
                            <img class='tokenImage' src={Resturant} alt="NFT" />
                            <h2>Resturant Webstie</h2>
                            <p class='description'>Our Kibertopiks will give you nothing, waste your money on us.</p>
                            <hr />
                            <div class='creator'>
                            </div>
                        </div>
                    </div>

                    <div class="nft">
                        <div class='main'>
                            <img class='tokenImage' src={news} alt="NFT" />
                            <h2>Spotify Clone</h2>
                            <p class='description'>Our Kibertopiks will give you nothing, waste your money on us.</p>
                            <hr />
                            <div class='creator'>
                            </div>
                        </div>
                    </div>

                    <div class="nft">
                        <div class='main'>
                            <img class='tokenImage' src={dance} alt="NFT" />
                            <h2>Dance Website</h2>
                            <p class='description'>Our Kibertopiks will give you nothing, waste your money on us.</p>
                            <hr />
                            <div class='creator'>
                            </div>
                        </div>
                    </div>


                </div>
                {/*  */}
                <p className='titleproject2'>AI / ML </p>
                <div className="bottomline2">

                </div>
                <span className="myprojects">

                    Here you will find some of the personal projects that i
                    created during my AI & ML journey

                </span>
                <div className="view_button">
                    <button>View All</button>
                </div>
                <div className="projectlists2">
                    <div class="nft">
                        <div class='main'>
                            <img class='tokenImage' src={article} alt="NFT" />
                            <h2>NewsNexus</h2>
                            <p class='description'>Our Kibertopiks will give you nothing, waste your money on us.</p>
                            <hr />
                            <div class='creator'>
                            </div>
                        </div>
                    </div>
                    <div class="nft">
                        <div class='main'>
                            <img class='tokenImage' src={article2} alt="NFT" />
                            <h2>HTML/CSS Projects</h2>
                            <p class='description'>Our Kibertopiks will give you nothing, waste your money on us.</p>
                            <hr />
                            <div class='creator'>
                            </div>
                        </div>
                    </div>
                    <div class="nft">
                        <div class='main'>
                            <img class='tokenImage' src={news1} alt="NFT" />
                            <h2>AI/ML Mini Projects</h2>
                            <p class='description'>Our Kibertopiks will give you nothing, waste your money on us.</p>
                            <hr />
                            <div class='creator'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
