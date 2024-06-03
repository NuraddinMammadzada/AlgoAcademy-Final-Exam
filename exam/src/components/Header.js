import "./css/Header.css";


function Header() {
    return (
        <header className="head container">
            <div className="head1">
                <div className="workout">WORKOUT</div>
            </div>
            <div className="head2">
                <a href="#">WORKOUTS</a>
                <a href="#">PROGRAMS</a>
                <a href="#">HEALTHY LIVING</a>
                <a href="#">COMMUNITY</a>
                <a href="#">ABOUT</a>
                <a href="#">STORE</a>
            </div>
            <div className="head3"><i className='fa-solid fa-bars'></i></div>
        </header>
    );
}

export default Header;