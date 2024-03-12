import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Content.css"
import ScrollToTop from '../ScrollToTop'
import { Car1, Car2, Car3, Car4, Car5, Car6, Car7, Car8, Car9, Switch, ArrowDown, Like2, Like1, Notif1, Notif2, Notif3, GasStation, Profile2, Steering, RentButton, RentalCarButtonLight, RentalCarButtonDark, ShowMoreCars, Dislike } from "../../assets/"

function Content() {

    const [isPickupDateInput, setIsPickupDateInput] = useState(false);
    const [isPickupTimeInput, setIsPickupTimeInput] = useState(false);
    const [isDropoffTimeInput, setIsDropoffTimeInput] = useState(false);
    const [isDropoffDateInput, setIsDropoffDateInput] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const [pickupValue, setPickupValue] = useState({
        location: "select",
        date: "",
        time: "",
    })

    const [dropoffValue, setDropoffValue] = useState({
        location: "select",
        date: "",
        time: "",
    })

    function swap() {
        // Use functional updates to ensure we have the latest state
        setPickupValue((prevPickupValue) => ({
            ...prevPickupValue,
            location: dropoffValue.location,
            date: dropoffValue.date,
            time: dropoffValue.time
        }));

        setDropoffValue((prevDropoffValue) => ({
            ...prevDropoffValue,
            location: pickupValue.location,
            date: pickupValue.date,
            time: pickupValue.time
        }));
    }

    const handlePickupDateFocus = () => {
        setIsPickupDateInput(true);
    };

    const handlePickupDateBlur = () => {
        setIsPickupDateInput(false);
    };

    const handlePickupDateChange = (e) => {
        setPickupValue({ ...pickupValue, date: e.target.value });
    };

    const handlePickupTimeFocus = () => {
        setIsPickupTimeInput(true);
    };

    const handlePickupTimeBlur = () => {
        setIsPickupTimeInput(false);
    };

    const handlePickupTimeChange = (e) => {
        setPickupValue({ ...pickupValue, time: e.target.value });
    };

    const handleDropoffDateFocus = () => {
        setIsDropoffDateInput(true);
    };

    const handleDropoffDateBlur = () => {
        setIsDropoffDateInput(false);
    };

    const handleDropoffDateChange = (e) => {
        setDropoffValue({ ...dropoffValue, date: e.target.value });
    };

    const handleDropoffTimeFocus = () => {
        setIsDropoffTimeInput(true);
    };

    const handleDropoffTimeBlur = () => {
        setIsDropoffTimeInput(false);
    };

    const handleDropoffTimeChange = (e) => {
        setDropoffValue({ ...dropoffValue, time: e.target.value });
    };

    return (
        <div className='content'>
            <ScrollToTop />
            <div className='content-wrapper'>

                {/* Location with date time updates */}

                <div className='ads'>
                    <div className="ad1">

                        <p id='adheader1'>The Best Platform <br /> for Car Rental</p>

                        <p className='adcontent'>Ease of doing a car rental safely and reliably. <br /> Of course at a low price.</p>

                        <Link to="car-categories">
                            <button id='rental-ad-btn-1'>
                                <img src={RentalCarButtonDark} alt="Rent Button" className='ad-button-image' />
                            </button>
                        </Link>

                        <img src={Car1} alt="AD 1" className='ad-image' />
                    </div>

                    <div className="ad2">

                        <p id='adheader2'>The Best Platform <br /> for Premium Car Rental</p>
                        <p className='adcontent'>Ease of doing a car rental safely and reliably. <br /> Of course at a low price.</p>
                        <Link to="car-categories">
                            <button id='rental-ad-btn-2'>
                                <img src={RentalCarButtonLight} alt="Rent Button" className='ad-button-image' />
                            </button>
                        </Link>
                        <img src={Car2} alt="AD 2" className='ad-image' />
                    </div>
                </div>

                {/* Pick-up part */}

                <form id='form-first-page' onSubmit={handleSubmit}>
                    <div className="main-container">
                        <div className='pickup-container'>

                            <div className='boxheader'><h2>Pick - Up</h2></div>

                            <div className="location-date-time">

                                <div className="input-headers">

                                    <div className="location">

                                        <p className='location-header'>Locations</p>

                                        <select className='locations' name="locations"
                                            value={pickupValue.location}
                                            onChange={(e) => {
                                                setPickupValue({ ...pickupValue, location: e.target.value })
                                            }}>
                                            <option value="" className='options' hidden>Town / City </option>
                                            <option value="location1" className='options'>New York</option>
                                            <option value="location2" className='options'>California</option>
                                            <option value="location3" className='options'>San Diego</option>
                                            <option value="location4" className='options'>Los Angeles</option>
                                          </select>
                                    </div>

                                    <div className="date">
                                        <p className='date-header'>Date</p>
                                        <input
                                            type={isPickupDateInput ? 'date' : 'text'}
                                            className='date-input'
                                            value={pickupValue.date}
                                            onChange={handlePickupDateChange}
                                            onFocus={handlePickupDateFocus}
                                            onBlur={handlePickupDateBlur}
                                            placeholder='Select your date'
                                        />
                                    </div>
                                    <div className="time" >
                                        <p className='time-header'>Time</p>
                                        <input
                                            type={isPickupTimeInput ? 'time' : 'text'}
                                            className='time-input'
                                            value={pickupValue.time}
                                            onChange={handlePickupTimeChange}
                                            onFocus={handlePickupTimeFocus}
                                            onBlur={handlePickupTimeBlur}
                                            placeholder='Select your time'
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Swap button */}

                        <div className='swapbtn'><button onClick={swap}><img src={Switch} alt="swap button" /></button></div>

                        {/* Drop - off part */}

                        <div className='dropoff-container'>

                            <div className='boxheader'><h2>Drop - Off</h2></div>

                            <div className="location-date-time">

                                <div className="input-headers">

                                    <div className="location">

                                        <p className='location-header'>Locations</p>

                                        <select className='locations' name="locations"
                                            value={dropoffValue.location}
                                            onChange={(e) => {
                                                setDropoffValue({ ...dropoffValue, location: e.target.value })
                                            }}>
                                            <option value="" className='options' hidden>Town / City </option>
                                            <option value="location1" className='options'>New York</option>
                                            <option value="location2" className='options'>California</option>
                                            <option value="location3" className='options'>San Diego</option>
                                            <option value="location4" className='options'>Los Angeles</option>
                                          </select>
                                    </div>

                                    <div className="date">
                                        <p className='date-header'>Date</p>
                                        <input
                                            type={isDropoffDateInput ? 'date' : 'text'}
                                            className='date-input'
                                            value={dropoffValue.date}
                                            onChange={handleDropoffDateChange}
                                            onFocus={handleDropoffDateFocus}
                                            onBlur={handleDropoffDateBlur}
                                            placeholder='Select your date'
                                        />
                                    </div>
                                    <div className="time">
                                        <p className='time-header'>Time</p>
                                        <input
                                            type={isDropoffTimeInput ? 'time' : 'text'}
                                            className='time-input'
                                            value={dropoffValue.time}
                                            onChange={handleDropoffTimeChange}
                                            onFocus={handleDropoffTimeFocus}
                                            onBlur={handleDropoffTimeBlur}
                                            placeholder='Select your time'
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                {/* Car Cards */}

                <div className='car-card'>

                    {/* Popular Cars Card */}

                    <div className="popular-cars">

                        <div className='popularcar-header'>
                            <span className='popularcar-title' id="popularcar-title-text">Popular Car</span>
                            <a className='popularcar-title' id="popularcar-title-link" href="#"> View All</a>
                        </div>

                        {/* Car Cards */}
                        <div className="carcards">
                            {/* Car Card 1 */}
                            <Link to="car-details" >
                                <div className="car1">
                                    <div className='carbrand-part'>
                                        <h4 className='car-brand'>Koenigsegg</h4>
                                        <img className='heart'
                                            src={Like1} alt="like" />
                                    </div>
                                    <p className='car-type'>Sport</p>
                                    <img className="car-cardimage" src={Car1} alt="Car" style={{width: '232px', height: '72px'}} />
                                    <div className="carspecs">
                                        <img className="gas-station" src={GasStation} alt="Petrol Tank" />
                                        <p className='fuel'>90L</p>
                                        <img className="wheel" src={Steering} alt="Steering Wheel" />
                                        <p className='driving'>Manual</p>
                                        <img className="noofseats" src={Profile2} alt="2 user profiles" />
                                        <p className='occupancy'>2 People</p>
                                    </div>
                                    <div className="rate-and-buttontorent">
                                        <p className='rate'>$99.00/ day</p>
                                        <Link to="register-info">
                                            <button className='rentbutton'><img src={RentButton} alt="Rent Button" /></button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                            {/* Car Card 2 */}
                            <Link to="car-details" >
                                <div className="car2">
                                    <div className='carbrand-part'>
                                        <h4 className='car-brand'>Nissan GT-R</h4>
                                        <img className='heart' src={Dislike} alt="like" />
                                    </div>
                                    <p className='car-type'>Sport</p>
                                    <img className="car-cardimage" src={Car2} alt="Car" style={{width: '204px', height: '64px'}} />
                                    <div className="carspecs">
                                        <img className="gas-station" src={GasStation} alt="Petrol Tank" />
                                        <p className='fuel'>80L</p>
                                        <img className="wheel" src={Steering} alt="Steering Wheel" />
                                        <p className='driving'>Manual</p>
                                        <img className="noofseats" src={Profile2} alt="2 user profiles" />
                                        <p className='occupancy'>2 People</p>
                                    </div>
                                    <div className="rate-and-buttontorent">
                                        <p className='rate'>$80.00/ day </p>
                                        <Link to="register-info">
                                            <button className='rentbutton'><img src={RentButton} alt="Rent Button" /></button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                            {/* Car Card 3 */}
                            <Link to="car-details" >
                                <div className="car3">
                                    <div className='carbrand-part'>
                                        <h4 className='car-brand'>Rolls - Royce</h4>
                                        <img className='heart' src={Like1} alt="like" />
                                    </div>
                                    <p className='car-type'>Sedan</p>
                                    <img className="car-cardimage" src={Car3} alt="Car" style={{width: '220px', height: '68px'}} />
                                    <div className="carspecs">
                                        <img className="gas-station" src={GasStation} alt="Petrol Tank" />
                                        <p className='fuel'>70L</p>
                                        <img className="wheel" src={Steering} alt="Steering Wheel" />
                                        <p className='driving'>Manual</p>
                                        <img className="noofseats" src={Profile2} alt="2 user profiles" />
                                        <p className='occupancy'>4 People</p>
                                    </div>
                                    <div className="rate-and-buttontorent">
                                        <p className='rate'>$96.00/ day </p>
                                        <Link to="register-info">
                                            <button className='rentbutton'><img src={RentButton} alt="Rent Button" /></button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                            {/* Car Card 4 */}
                            <Link to="car-details" >
                                <div className="car4">
                                    <div className='carbrand-part'>
                                        <h4 className='car-brand'>Nissan GT-R</h4>
                                        <img className='heart' src={Dislike} alt="like" />
                                    </div>
                                    <p className='car-type'>Sport</p>
                                    <img className="car-cardimage" src={Car2} alt="Car" style={{width: '204px', height: '64px'}} />
                                    <div className="carspecs">
                                        <img className="gas-station" src={GasStation} alt="Petrol Tank" />
                                        <p className='fuel'>80L</p>
                                        <img className="wheel" src={Steering} alt="Steering Wheel" />
                                        <p className='driving'>Manual</p>
                                        <img className="noofseats" src={Profile2} alt="2 user profiles" />
                                        <p className='occupancy'>2 People</p>
                                    </div>
                                    <div className="rate-and-buttontorent">
                                        <p className='rate'>$80.00/ day </p>
                                        <Link to="register-info">
                                            <button className='rentbutton'><img src={RentButton} alt="Rent Button" /></button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    {/* Recommended Cars Card */}
                    <div className="rmd-cars">
                        <div className="rmdcars-header">
                            <span className='rmdcar-title' id="rmd-title-text">Recommened Cars</span>
                        </div>
                        {/* Car Card 1 */}
                        <div className="carcards">
                            <Link to="car-details">
                                <div className="car1">
                                    <div className='carbrand-part'>
                                        <h4 className='car-brand'>All New Rush</h4>
                                        <img className='heart' src={Like1} alt="like" />
                                    </div>
                                    <p className='car-type'>SUV</p>
                                    <img className="car-cardimage newmargin" src={Car4} alt="Car" style={{width: '224px', height: '100px'}} />
                                    <div className="carspecs">
                                        <img className="gas-station" src={GasStation} alt="Petrol Tank" />
                                        <p className='fuel'>70L</p>
                                        <img className="wheel" src={Steering} alt="Steering Wheel" />
                                        <p className='driving'>Manual</p>
                                        <img className="noofseats" src={Profile2} alt="2 user profiles" />
                                        <p className='occupancy'>6  People</p>
                                    </div>
                                    <div className="rate-and-buttontorent">
                                        <p className='rate'>$72.00/ day </p>
                                        <Link to="register-info">
                                            <button className='rentbutton'><img src={RentButton} alt="Rent Button" /></button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                            {/* Car Card 2 */}
                            <Link to="car-details">
                                <div className="car2">
                                    <div className='carbrand-part'>
                                        <h4 className='car-brand'>CR - V</h4>
                                        <img className='heart' src={Dislike} alt="like" />
                                    </div>
                                    <p className='car-type'>SUV</p>
                                    <img className="car-cardimage newmargin" src={Car5} alt="Car" style={{width: '248px', height: '100px'}} />
                                    <div className="carspecs">
                                        <img className="gas-station" src={GasStation} alt="Petrol Tank" />
                                        <p className='fuel'>80L</p>
                                        <img className="wheel" src={Steering} alt="Steering Wheel" />
                                        <p className='driving'>Manual</p>
                                        <img className="noofseats" src={Profile2} alt="2 user profiles" />
                                        <p className='occupancy'>6  People</p>
                                    </div>
                                    <div className="rate-and-buttontorent">
                                        <p className='rate'>$80.00/ day </p>
                                        <Link to="register-info">
                                            <button className='rentbutton'><img src={RentButton} alt="Rent Button" /></button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                            {/* Car Card 3 */}
                            <Link to="car-details">
                                <div className="car3">
                                    <div className='carbrand-part'>
                                        <h4 className='car-brand'>All New Terios</h4>
                                        <img className='heart' src={Like1} alt="like" />
                                    </div>
                                    <p className='car-type'>SUV</p>
                                    <img className="car-cardimage newmargin" src={Car6} alt="Car" style={{width: '224px', height: '100px'}} />
                                    <div className="carspecs">
                                        <img className="gas-station" src={GasStation} alt="Petrol Tank" />
                                        <p className='fuel'>90L</p>
                                        <img className="wheel" src={Steering} alt="Steering Wheel" />
                                        <p className='driving'>Manual</p>
                                        <img className="noofseats" src={Profile2} alt="2 user profiles" />
                                        <p className='occupancy'>6 People</p>
                                    </div>
                                    <div className="rate-and-buttontorent">
                                        <p className='rate'>$74.00/ day </p>
                                        <Link to="register-info">
                                            <button className='rentbutton'><img src={RentButton} alt="Rent Button" /></button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                            {/* Car Card 4 */}
                            <Link to="car-details">
                                <div className="car4">
                                    <div className='carbrand-part'>
                                        <h4 className='car-brand'>CR - V</h4>
                                        <img className='heart' src={Dislike} alt="like" />
                                    </div>
                                    <p className='car-type'>SUV</p>
                                    <img className="car-cardimage newmargin" src={Car7} alt="Car" style={{width: '248px', height: '100px'}} />
                                    <div className="carspecs">
                                        <img className="gas-station" src={GasStation} alt="Petrol Tank" />
                                        <p className='fuel'>80L</p>
                                        <img className="wheel" src={Steering} alt="Steering Wheel" />
                                        <p className='driving'>Manual</p>
                                        <img className="noofseats" src={Profile2} alt="2 user profiles" />
                                        <p className='occupancy'>6 People</p>
                                    </div>
                                    <div className="rate-and-buttontorent">
                                        <p className='rate'>$80.00/ day </p>
                                        <Link to="register-info">
                                            <button className='rentbutton'><img src={RentButton} alt="Rent Button" /></button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {/* Car Card 5 */}
                        <div className="carcards">
                            <Link to="car-details" >
                                <div className="car1">
                                    <div className='carbrand-part'>
                                        <h4 className='car-brand'>MG ZX </h4>
                                        <img className='heart' src={Like1} alt="like" />
                                    </div>
                                    <p className='car-type'>Hatchback</p>
                                    <img className="car-cardimage newmarginrow2" src={Car8} alt="Car" style={{width: '264px', height: '108px'}} />
                                    <div className="carspecs">
                                        <img className="gas-station" src={GasStation} alt="Petrol Tank" />
                                        <p className='fuel'>70L</p>
                                        <img className="wheel" src={Steering} alt="Steering Wheel" />
                                        <p className='driving'>Manual</p>
                                        <img className="noofseats" src={Profile2} alt="2 user profiles" />
                                        <p className='occupancy'>4 People</p>
                                    </div>
                                    <div className="rate-and-buttontorent">
                                        <p className='rate'>$76.00/ day </p>
                                        <Link to="register-info">
                                            <button className='rentbutton'><img src={RentButton} alt="Rent Button" /></button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                            {/* Car Card 6 */}
                            <Link to="car-details" >
                                <div className="car2">
                                    <div className='carbrand-part'>
                                        <h4 className='car-brand'>New MG ZS</h4>
                                        <img className='heart' src={Dislike} alt="like" />
                                    </div>
                                    <p className='car-type'>SUV</p>
                                    <img className="car-cardimage newmarginrow2" src={Car9} alt="Car" style={{width: '264px', height: '112px'}} />
                                    <div className="carspecs">
                                        <img className="gas-station" src={GasStation} alt="Petrol Tank" />
                                        <p className='fuel'>80L</p>
                                        <img className="wheel" src={Steering} alt="Steering Wheel" />
                                        <p className='driving'>Manual</p>
                                        <img className="noofseats" src={Profile2} alt="2 user profiles" />
                                        <p className='occupancy'>6 People</p>
                                    </div>
                                    <div className="rate-and-buttontorent">
                                        <p className='rate'>$80.00/ day </p>
                                        <Link to="register-info">
                                            <button className='rentbutton'><img src={RentButton} alt="Rent Button" /></button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                            {/* Car Card 7 */}
                            <Link to="car-details" >
                                <div className="car3">
                                    <div className='carbrand-part'>
                                        <h4 className='car-brand'>MG ZS Excite</h4>
                                        <img className='heart' src={Like1} alt="like" />
                                    </div>
                                    <p className='car-type'>HatchBack</p>
                                    <img className="car-cardimage newmarginrow2" src={Car8} alt="Car" style={{width: '264px', height: '108px'}} />
                                    <div className="carspecs">
                                        <img className="gas-station" src={GasStation} alt="Petrol Tank" />
                                        <p className='fuel'>90L</p>
                                        <img className="wheel" src={Steering} alt="Steering Wheel" />
                                        <p className='driving'>Manual</p>
                                        <img className="noofseats" src={Profile2} alt="2 user profiles" />
                                        <p className='occupancy'>4 People</p>
                                    </div>
                                    <div className="rate-and-buttontorent">
                                        <p className='rate'>$74.00/ day </p>
                                        <Link to="register-info">
                                            <button className='rentbutton'><img src={RentButton} alt="Rent Button" /></button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                            {/* Car Card 8 */}
                            <Link to="car-details" >
                                <div className="car4">
                                    <div className='carbrand-part'>
                                        <h4 className='car-brand'>New MG ZS</h4>
                                        <img className='heart' src={Dislike} alt="like" />
                                    </div>
                                    <p className='car-type'>SUV</p>
                                    <img className="car-cardimage newmarginrow2" src={Car9} alt="Car" style={{width: '264px', height: '112px'}} />
                                    <div className="carspecs">
                                        <img className="gas-station" src={GasStation} alt="Petrol Tank" />
                                        <p className='fuel'>80L</p>
                                        <img className="wheel" src={Steering} alt="Steering Wheel" />
                                        <p className='driving'>Manual</p>
                                        <img className="noofseats" src={Profile2} alt="2 user profiles" />
                                        <p className='occupancy'>6 People</p>
                                    </div>
                                    <div className="rate-and-buttontorent">
                                        <p className='rate'>$80.00/ day </p>
                                        <Link to="register-info">
                                            <button className='rentbutton'><img src={RentButton} alt="Rent Button" /></button>
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='fullcars'>
                    <Link to="car-categories">
                        <button><img className="showcars" src={ShowMoreCars} alt="" /></button>
                    </Link>
                    <p className='carcount'>120 Cars</p>
                </div>
            </div>
        </div >
    )
}

export default Content

