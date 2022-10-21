import JohnCenaRunningPNG from './images/JohnCenaRunningPNG.png';
import pic1 from './images/1_.jpg';
import pic2 from './images/2_.jpg';
import pic3 from './images/3_.jpg';
import pic4 from './images/5_.png';
import './running.css';
import './mediaquery.css';

function Running() {
  return (
    <div>
      <nav className="navbar" style={{fontfamily:'Montserrat,sans-serif'}}>
        <div className="container-fluid" id="Naber">
          <h1 className="navbar-brand text-white fw-bold ps-md-5" style={{fontsize:'24px' }}>RUNNING CLUB</h1>
          <i className="bi bi-list "></i>
        </div>
      </nav>
      <div className="container-fluid " id="Nav_bg_img">
        <div className="row">
            <div className="col-sm-1 col-md-2"></div>
            <div className="col-sm-6 col-md-5 text-white" id="Nav_row">
                <span>Come Run<br/>With Us</span>
                <p style={{fontfamily: 'Open Sans,sans-serif'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis porro repudiandae quo ducimus.
                </p>
                <button style={{fontfamily: 'inherit'}}>START NOW </button>
            </div>
            <div className="col-sm-5 col-md-5" id="Nav_row">
                <img src={JohnCenaRunningPNG} className="img-fluid" alt=""/>
            </div>
        </div>
    </div>

    <div className="container-fluid mt-5 All_level" id="padding_left">
        <div className="row ps-5 pe-5">
            <div className="col-md-5">
                <h3>All Levels. Every Surface. Any Distance.</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi harum in repellat sed, velit sunt!</p>
            </div>
            <div className="col-md-7"></div>
        </div>
    </div>


    <div className="container-fluid" id="padding_left">
        <div className="row ps-5 pe-5" id="Fast_container">
            <div className="col-md-3 col-sm-6">
                <i id='Fast_icons' className="material-icons">remove</i>
                <h2>FAST</h2>
                <span id='italic'>For those runners looking to
                    challenge their previous best and
                    cross the finish line faster than
                    ever before.This option is built
                    around improving your personal.
                </span>
            </div>
            <div className="col-md-3 col-sm-6">
                <i id='Fast_icons' className="material-icons">remove</i>
                <h2>FINISH</h2>
                <span id='italic'>Whether it's a new distance, a
                    new race, or the chance to check
                    something off the bucket list, this
                    option will train you to get you
                    across the finish line safely.
                </span>
            </div>

            <div className="col-md-3 col-sm-6" id="No_conatiner">
                <i id='Fast_icons' className="material-icons">remove</i>
                <h2>NO BOUNDARIES</h2>
                <span id='italic'>Our iconic beginner program for
                    those brand new to running. The
                    program helps you cross the
                    finish line of your first 5K race!
                    Cconsectetur adipiscing elit.
                </span>
            </div>


            <div className="col-md-3 col-sm-6">
                <i id='Fast_icons' className="material-icons">remove</i>
                <h2>WALKFIT</h2>
                <span id='italic'>Take steps toward a healthier
                    lifestyle with this low-impact
                    program that helps you safely
                    incorporate walking into a
                    regular fitness routine.
                </span>
            </div>
        </div>
    </div>
    <br/><br/>

    <div className="container-fluid pt-5 pb-5" id="Traning">
        <div className="row ps-5 pe-5" id="Training_container">
            <div className="col-md-3 col-sm-6 ice_">
                <i className="material-icons" id='ice_'>ice_skating</i>
                <h5>TRANING</h5>
                <span>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit
                    nullam nunc justo sagittis
                    suscipit ultrices.</span>
            </div>

            <div className="col-md-3 col-sm-6 ice_">
                <i className="material-icons" id='ice_'>military_tech</i>
                <h5>MARATHONS</h5>
                <span>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit
                    nullam nunc justo sagittis
                    suscipit ultrices.</span>
            </div>

            <div className="col-md-3 col-sm-6 ice_">
                <i className="material-icons" id='ice_'>directions_run</i>
                <h5>COMMUNITY</h5>
                <span>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit
                    nullam nunc justo sagittis
                    suscipit ultrices.</span>
            </div>

            <div className="col-md-3 col-sm-6 ice_">
                <i className="material-icons" id='ice_'>crisis_alert</i>
                <h5>RUNNERS CLUB</h5>
                <span>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit
                    nullam nunc justo sagittis
                    suscipit ultrices.<br/><br/></span>
            </div>
        </div>
    </div>

    <div className="container-fluid" id="Inspiration_container">
        <div className="Inspiration pt-5 All_level">
            <h3>Inspiration, Motivation, and Know-How</h3>
            <p>Maecenas magna lectus, finibus sed fermentum et, fringilla ac ex curabitur quis nulla purus.</p>
        </div>

        <div className="row ps-5 pe-5" id="Inspiration_row">
            <div className="col-md-4 col-12 mt-5">
                <img src={pic1} className="img-fluid" alt=""/>
                <h5 className="ps-3 pt-3 pb-2 ">WE'RE GOING STREAKING</h5>
                <p className="ps-3 pb-3 pe-3">Phasellus scelerisque sed leo quis gravida. Fusce lobortis libero ut arcu
                    blandit pharetra.</p>
            </div>

            <div className="col-md-4 col-12 mt-5">
                <img src={pic2} className="img-fluid" alt=""/>
                <h5 className="ps-3 pt-3 pb-2 ">HOW TO START RUNNING</h5>
                <p className="ps-3 pb-3 pe-3">Phasellus scelerisque sed leo quis gravida. Fusce lobortis libero ut arcu
                    blandit pharetra.</p>
            </div>
            <div className="col-md-4 col-12 mt-5">
                <img src={pic3} className="img-fluid" alt=""/>
                <h5 className="ps-3 pt-3 pb-2">RUNNING OF THE SHOES</h5>
                <p className="ps-3 pb-3 pe-3" id="width_running_shoes">Phasellus scelerisque sed leo quis gravida. Fusce
                    lobortis libero ut arcu
                    blandit pharetra.</p>
            </div>
        </div><br/><br/>
    </div>

    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6" id="Walk_img">
            </div>
            <div className="col-md-6 p-3 p-md-5" style={{background:'#FF4857', color: '#fff'}}>
                <h3>From Walking to Ultra Marathons</h3>
                <b style={{fontfamily: 'Open Sans,sans-serif'}}>our programs put you in the best position to get from
                    point A to point B, whether the distance
                    between
                    points
                    be 3 miles or 50.</b>
                <p className="pt-3" style={{fontfamily: 'Open Sans,sans-serif;'}}>If you've ever completed a marathon and
                    thought, "Well, that just wasn't long enough,"
                    we have good
                    news
                    This program focuses on distances and runs beyond 26.2.
                    Find your inner grit, embrace the burn, and love the run.</p>
                <button className="border-0 ps-4 pe-4 pt-2 pb-2 fw-bold"
                    style={{letterspacing: '2px', fontfamily: 'Open Sans,sans-serif', background: '#fff', fontsize: '12px'}}>LEARN
                    MORE</button>
            </div>
        </div>
    </div>


    <div className="container-fluid mt-5" id="padding_left">
        <div className="row p-5">
            <div className="col-md-4 mt-2 How_start">
                <h3>How to Start Running</h3>
                <p>
                    You want to know
                    how
                    to
                    start running? We’re glad you asked.</p>
            </div>
            <div className="col-md-4 ps-md-5">
                <p>Shoes that don’t fit well can lead to discomfort, blisters or more serious injuries, so it’s
                    important
                    to find the right pair.</p>
                <p>Your running shoes won’t fit the same way as your casual shoes, and the size of your feet changes
                    over
                    time, so don't rely on how your shoes fit in the past. So, measure your feet. A local running store
                    will
                    take accurate dynamic measurements to get you into the right shoe.</p>
            </div>
            <div className="col-md-4 ps-sm-5">
                <img src={pic4} alt="" className="img-fluid" id="you_want"/>
            </div>
        </div>
    </div>

    <div className="container-fluid linear" style={{background: 'lineargradient(to right, #3E2D49, #D44254)', color: '#fff;', id:"padding_left"}}>
        <div className="row text-center">
            <div className="col-12 p-4 p-sm-5" style={{fontsize:'20px', fontfamily:'Montserrat,sans-serif;'}}>
                <i className="fa fa-quote-left"></i>
                <p className="text-center ps-md-5 pe-md-5">We welcome everyone from absolute beginners to seasoned
                    marathon runners. Nothing
                    beats the endorphin
                    rush
                    after a run and the joy of meeting like minded people with a common interest so what’s stopping you…
                    come
                    and join the fun!
                </p>
            </div>
        </div>
    </div>

    <div className="container-fluid" style={{background: '#492F4B', color: '#fff'}}>
        <div className="row">
            <div className="col-12 p-4">
                <p className="text-center">Sample footer text</p>
            </div>
        </div>
    </div>
    <div className="container-fluid" style={{background:'#362C49', color:'#fff'}}>
        <div className="row ">
            <div className="col-12 d-flex justify-content-center p-4">
                <a href="">Template</a>
                <p>created with</p>
                <a href="">Nicepage</a>
            </div>
        </div>
    </div>

    </div>

  );
}
export default Running
