import "./css/Footer.css";


function Footer() {
    return (
        <>

            <footer className="foot container">
                <div className="topoffooter">
                    <div className="Membership">
                        Membership
                    </div>
                    <div className="hr"></div>
                </div>
                <div className="joinfree">
                    <div className="part1footer">
                        <div className="h1ofpart1 colorwhite">
                            Join for Free
                        </div>
                        <div className="ww">
                            Reach your fitness goals or maintain your healthy lifestyle
                            with professional training and support from a positive and
                            active online community.<div></div>
                            <ul>
                                <li>~600 Full-Length Workout Videos</li>
                                <li>Customizable Calendar</li>
                                <li>Healthy Recipes</li>
                                <li>Health and Fitness Articles</li>
                                <li>Positive and Supportive Online Community</li>
                                <li>No Credit Card Needed</li>
                            </ul>
                        </div>
                        <div className="seemore seemorefooter">
                            See More
                            <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 11.1185L23.0588 11.1185" stroke="#FAFAF9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.3382 1.47057L24.2169 11.1973L14.3382 20.924" stroke="#FAFAF9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="part1footer">
                        <div className="h1ofpart1 colorwhite">
                            WO Plus
                        </div>
                        <div className="ww">
                            WO Plus includes everything you get with a free membership
                            and adds brand new convenience features, fitness tools,
                            and unique content.
                            <div></div>
                            <ul>
                                <li>Ads-Free Website and Videos</li>
                                <li>Surprise Me Workout Selection Tool</li>
                                <li>Statistics for Your Activities</li>
                                <li>Enter and Track Custom Workouts</li>
                                <li>FB Plus Exclusive Workouts</li>
                                <li>Trackers to See Your Progress</li>
                                <li>FB Plus Content and Challenges</li>
                                <li>Video Tags</li>
                                <li>FB Plus Routines</li>
                                <li>Rest Day Complete</li>
                            </ul>
                            <div className="joinclubnow">
                                Join Club Now!
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;