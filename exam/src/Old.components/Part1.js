import './Part1.css'
import Images2 from './images/Images2.png';
import brands from './images/brands.png'
import Vector from './images/Vector.svg'
function Part1() {
    return (
        <>
            <div className="sectioncontainer">
                <div className='workoutwithme'>WORKOUT <br></br>WITH ME</div>
                <img src={Images2} alt="Logo" className='erkek' />;
        
            </div>
            <div className='erko'>
                <p>A huge selection of health and fitness content,
                    healthy recipes and transformation stories to help you get fit and stay fit!</p>
                <div className='button1'>Join Club Now!</div>
                <div className='brands'></div>
                <h5>AS FEATURED IN</h5>
                <img className='asd' src={brands} alt='logo'></img>
            </div>

        </>
    );


}

export default Part1