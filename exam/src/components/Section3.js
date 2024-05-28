import "./css/Section3.css";
import image from "../images/images/yogaqiz.png";
import image1 from "../images/images/getmore.png";


function Section3() {
    return (
        <div className="container section3">
            <div className="workoutathome">
                <div className="imgparagraph">
                    <div className="bigword colorwhite">
                        Work out at home for free.
                    </div>
                    <div className="colorgrey">
                        We believe fitness should be accessible to everyone, everywhere,
                        regardless of income or access to a gym. With hundreds of professional
                        workouts, healthy recipes and informative articles, as well as one of
                        the most positive communities on the web, you’ll have everything you
                        need to reach your personal fitness goals – for free!
                    </div>
                    <div className="seemore">
                        See More
                        <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11.1185L23.0588 11.1185" stroke="#FAFAF9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.3382 1.47057L24.2169 11.1973L14.3382 20.924" stroke="#FAFAF9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="section3img">
                    <img src={image}></img>
                </div>
            </div>
            <div className="getmore">
                <div className="getmoreimg">
                    <img src={image1}></img>
                </div>
                <div className="getmoreword">
                    <div className="getmorebigword colorwhite">
                        Get more with low-cost training programs and advanced features.
                    </div>
                    <div className="getmoresmallword colorgrey">
                        We believe fitness should be accessible to everyone, everywhere, regardless of income or access to a gym. With hundreds of professional workouts, healthy recipes and informative articles, as well as one of the most positive communities on the web, you’ll have everything you need to reach your personal fitness goals – for free!
                    </div>
                    <div className="seemore">
                        See More
                        <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 11.1185L23.0588 11.1185" stroke="#FAFAF9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14.3382 1.47057L24.2169 11.1973L14.3382 20.924" stroke="#FAFAF9" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;