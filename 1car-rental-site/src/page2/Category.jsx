import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Category.css'
import ScrollToTop from '../components/ScrollToTop'
import { TickSquare, UnTick, PriceRange, Car1, Car2, Car3, Car4, Car5, Car6, Car8, Car9, Switch, Like1, GasStation, Profile2, Steering, RentButton, ShowMoreCars, Dislike } from '../assets/index/'



function Category() {

  const [sliderValue, setSliderValue] = useState(null)
  const [sliderInteracted, setSliderIntracted] = useState(false)
  const [currency, setCurrency] = useState("$")

  const handleSliderValue = (e) => {
    setSliderIntracted(true)
    setSliderValue(Number(e.target.value))
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  const [pickupValue, setPickupValue] = useState({
    location: "select",
    date: "",
    time: ""
  })

  const [dropoffValue, setDropoffValue] = useState({
    location: "select",
    date: "",
    time: ""
  })

  function swap() {
    setPickupValue((prevPickupValue) => ({
      ...prevPickupValue,
      location: dropoffValue.location,
      date: dropoffValue.date,
      time: dropoffValue.time
    }))

    setDropoffValue((prevDropoffValue) => ({
      ...prevDropoffValue,
      location: pickupValue.location,
      date: pickupValue.date,
      time: pickupValue.time
    }))
  }

  const [isPickupDateInput, setIsPickupDateInput] = useState(false);
  const [isPickupTimeInput, setIsPickupTimeInput] = useState(false);

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

  const [isDropoffDateInput, setIsDropoffDateInput] = useState(false);

  const handleDropoffDateFocus = () => {
    setIsDropoffDateInput(true);
  };

  const handleDropoffDateBlur = () => {
    setIsDropoffDateInput(false);
  };

  const handleDropoffDateChange = (e) => {
    setDropoffValue({ ...dropoffValue, date: e.target.value });
  };

  const [isDropoffTimeInput, setIsDropoffTimeInput] = useState(false);

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

    <div className='carcategory-content'>
      <ScrollToTop />
      <div className="carcategory-contentwrapper">
        <div className="content-box">

          {/* Filter to select type of car */}
          <div className='filter-for-cars'>

            {/* Type of car */}

            <div className="type-of-car">

              <p className='checklist-header' id='type-of-car'>TYPE</p>

              <div className="type-design">

                <div className='checks'>
                  <input type="checkbox" className='check-size' />
                  <input type="checkbox" className='check-size' />
                  <input type="checkbox" className='check-size' />
                  <input type="checkbox" className='check-size' />
                  <input type="checkbox" className='check-size' />
                  <input type="checkbox" className='check-size' />
                </div>

                <div className="types">
                  <p className='type' id='first-type'>Sport<span className='quantity-of-cars'> (10)</span></p>
                  <p className='type' id='second-type'>SUV<span className='quantity-of-cars'> (12)</span></p>
                  <p className='type' id='third-type'>MPV<span className='quantity-of-cars'> (16)</span></p>
                  <p className='type' id='fourth-type'>Sedan<span className='quantity-of-cars'> (20)</span></p>
                  <p className='type' id='fifth-type'>Coupe<span className='quantity-of-cars'> (14)</span></p>
                  <p className='type' id='sixth-type'>Hatchback<span className='quantity-of-cars'> (14)</span></p>
                </div>
              </div>
            </div>

            {/* Car capacity */}

            <div className="car-capacity">

              <p className='checklist-header' id='capacity-of-car'>CAPACITY</p>

              <div className="capacity-space">

                <div className='checks'>
                  <input type="checkbox" className='check-size' />
                  <input type="checkbox" className='check-size' />
                  <input type="checkbox" className='check-size' />
                  <input type="checkbox" className='check-size' />
                </div>

                <div className="capacities">
                  <p className='capacity' id='first-capacity'>2 Person<span className='quantity-of-cars'> (10)</span></p>
                  <p className='capacity' id='second-capacity'>4 Person<span className='quantity-of-cars'> (14)</span></p>
                  <p className='capacity' id='third-capacity'>6 Person<span className='quantity-of-cars'> (12)</span></p>
                  <p className='capacity' id='fourth-capacity'>8 or More<span className='quantity-of-cars'> (16)</span></p>
                </div>

              </div>
            </div>

            {/* Price range */}
            <div className="price-range">
              <p className='checklist-header' id='price-of-car'>PRICE</p>
              <div className="price-space">
                <div className='bar'>
                  <input type="range" min={70} max={100} onChange={handleSliderValue} />
                </div>
                {sliderInteracted && (
                  <div className="range-slider">
                    <p className="max-price-limit-range"> {currency} {sliderValue}</p>
                  </div>
                )}
                <p className='placeholder-for-currency'>Max. $100.00</p>
              </div>
            </div>
          </div>

          {/* Car Catalog */}

          <div className="car-catalog">

            <form onSubmit={handleSubmit}>
              <div className="main-container2">
                {/* Pick - Up part */}

                <div className='pickup-container2'>
                  <div className='boxheader2'><h2>Pick - Up</h2></div>

                  <div className="location-date-time2">

                    <div className="input-headers2">

                      <div className="location2">

                        <p className='location-header2'>Locations</p>

                        <select className='locations2' name="locations"
                          value={pickupValue.location}
                          onChange={(e) => {
                            setPickupValue({ ...pickupValue, location: e.target.value })
                          }}>

                          <option value="select" hidden>City / State</option>
                          <option value="location1">New York</option>
                          <option value="location2">California</option>
                          <option value="location3">San Diego</option>
                          <option value="location4">Los Angeles</option>
                        </select>
                      </div>

                      <div className="date2">
                        <p className='date-header2'>Date</p>
                        <input
                          type={isPickupDateInput ? 'date' : 'text'}
                          className='date-input2'
                          value={pickupValue.date}
                          onChange={handlePickupDateChange}
                          onFocus={handlePickupDateFocus}
                          onBlur={handlePickupDateBlur}
                          placeholder='Select your date'
                        />
                      </div>
                      <div className="time2" >
                        <p className='time-header2'>Time</p>
                        <input
                          type={isPickupTimeInput ? 'time' : 'text'}
                          className='time-input2'
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

                <div className='swapbtn2'><button onClick={swap}><img src={Switch} alt="swap button" /></button></div>

                {/* Drop - off part */}

                <div className='dropoff-container2'>
                  <div className='boxheader2'><h2>Drop - Off</h2></div>

                  <div className="location-date-time2">

                    <div className="input-headers2">

                      <div className="location2">

                        <p className='location-header2'>Locations</p>

                        <select className='locations2' name="locations"
                          value={dropoffValue.location}
                          onChange={(e) => {
                            setDropoffValue({ ...dropoffValue, location: e.target.value })
                          }}>

                          <option value="select" hidden>City / State</option>
                          <option value="location1">New York</option>
                          <option value="location2">California</option>
                          <option value="location3">San Diego</option>
                          <option value="location4">Los Angeles</option>
                        </select>
                      </div>

                      <div className="date2">
                        <p className='date-header2'>Date</p>
                        <input
                          type={isDropoffDateInput ? 'date' : 'text'}
                          className='date-input2'
                          value={dropoffValue.date}
                          onChange={handleDropoffDateChange}
                          onFocus={handleDropoffDateFocus}
                          onBlur={handleDropoffDateBlur}
                          placeholder='Select your date'
                        />
                      </div>
                      <div className="time2">
                        <p className='time-header2'>Time</p>
                        <input
                          type={isDropoffTimeInput ? 'time' : 'text'}
                          className='time-input2'
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

            <div className="car-cards-catalog">

              {/* Car Card 1 */}
              <Link to="../car-details">
                <div className="car12">

                  <div className='carbrand-part2'>

                    <h4 className='car-brand2'>Koenigsegg</h4>
                    <img className='heart2' src={Like1} alt="like" />

                  </div>
                  <p className='car-type2'>Sport</p>
                  <img className="car-cardimage2" src={Car1} alt="Car" />

                  <div className="carspecs2">

                    <img className="gas-station2" src={GasStation} alt="Petrol Tank" />
                    <p className='fuel2'>90L</p>
                    <img className="wheel2" src={Steering} alt="Steering Wheel" />
                    <p className='driving2'>Manual</p>
                    <img className="noofseats2" src={Profile2} alt="2 user profiles" />
                    <p className='occupancy2'>2 People</p>

                  </div>

                  <div className="rate-and-buttontorent2">

                    <p className='rate2'>$99.00/ day </p>
                    <Link to="../register-info">
                      <button className='rentbutton2'><img src={RentButton} alt="Rent Button" /></button>
                    </Link>
                  </div>

                </div>
              </Link>

              {/* Car Card 2 */}
              <Link to="../car-details" >
                <div className="car22">
                  <div className='carbrand-part2'>

                    <h4 className='car-brand2'>Nissan GT-R</h4>
                    <img className='heart2' src={Dislike} alt="like" />

                  </div>
                  <p className='car-type2'>Sport</p>
                  <img className="car-cardimage2" src={Car2} alt="Car" />

                  <div className="carspecs2">

                    <img className="gas-station2" src={GasStation} alt="Petrol Tank" />
                    <p className='fuel2'>80L</p>
                    <img className="wheel2" src={Steering} alt="Steering Wheel" />
                    <p className='driving2'>Manual</p>
                    <img className="noofseats2" src={Profile2} alt="2 user profiles" />
                    <p className='occupancy2'>2 People</p>

                  </div>

                  <div className="rate-and-buttontorent2">

                    <p className='rate2'>$80.00/ day </p>
                    <Link to="../register-info">
                      <button className='rentbutton2'><img src={RentButton} alt="Rent Button" /></button>
                    </Link>
                  </div>
                </div>
              </Link>

              {/* Car Card 3 */}
              <Link to="../car-details" >
                <div className="car32">
                  <div className='carbrand-part2'>

                    <h4 className=' car-brand2'>Rolls - Royce</h4>
                    <img className='heart2' src={Like1} alt="like" />

                  </div>
                  <p className='car-type2'>Sedan</p>
                  <img className="car-cardimage2" src={Car3} alt="Car" />

                  <div className="carspecs2">

                    <img className="gas-station2" src={GasStation} alt="Petrol Tank" />
                    <p className='fuel2'>70L</p>
                    <img className="wheel2" src={Steering} alt="Steering Wheel" />
                    <p className='driving2'>Manual</p>
                    <img className="noofseats2" src={Profile2} alt="2 user profiles" />
                    <p className='occupancy2'>4 People</p>

                  </div>

                  <div className="rate-and-buttontorent2">

                    <p className='rate2'>$96.00/ day </p>
                    <Link to="../register-info">
                      <button className='rentbutton2'><img src={RentButton} alt="Rent Button" /></button>
                    </Link>
                  </div>
                </div>
              </Link>

              {/* Car Card 4 */}
              <Link to="../car-details">
                <div className="car12">

                  <div className='carbrand-part2'>
                    <h4 className='car-brand2'>All New Rush</h4>
                    <img className='heart2' src={Like1} alt="like" />
                  </div>
                  <p className='car-type2'>SUV</p>
                  <img className="car-cardimage2" src={Car4} alt="Car" />

                  <div className="carspecs2">

                    <img className="gas-station2" src={GasStation} alt="Petrol Tank" />
                    <p className='fuel2'>70L</p>
                    <img className="wheel2" src={Steering} alt="Steering Wheel" />
                    <p className='driving2'>Manual</p>
                    <img className="noofseats2" src={Profile2} alt="2 user profiles" />
                    <p className='occupancy2'>6  People</p>

                  </div>

                  <div className="rate-and-buttontorent2">

                    <p className='rate2'>$72.00/ day </p>
                    <Link to="../register-info">
                      <button className='rentbutton2'><img src={RentButton} alt="Rent Button" /></button>
                    </Link>
                  </div>

                </div>
              </Link>

              {/* Car Card 5 */}

              <Link to="../car-details">
                <div className="car22">
                  <div className='carbrand-part2'>

                    <h4 className='car-brand2'>CR - V</h4>
                    <img className='heart2' src={Dislike} alt="like" />

                  </div>
                  <p className='car-type2'>SUV</p>
                  <img className="car-cardimage2" src={Car5} alt="Car" />

                  <div className="carspecs2">

                    <img className="gas-station2" src={GasStation} alt="Petrol Tank" />
                    <p className='fuel2'>80L</p>
                    <img className="wheel2" src={Steering} alt="Steering Wheel" />
                    <p className='driving2'>Manual</p>
                    <img className="noofseats2" src={Profile2} alt="2 user profiles" />
                    <p className='occupancy2'>6  People</p>

                  </div>

                  <div className="rate-and-buttontorent2">

                    <p className='rate2'>$80.00/ day </p>
                    <Link to="../register-info">
                      <button className='rentbutton2'><img src={RentButton} alt="Rent Button" /></button>
                    </Link>
                  </div>
                </div>
              </Link>

              {/* Car Card 6 */}
              <Link to="../car-details">
                <div className="car32">
                  <div className='carbrand-part2'>

                    <h4 className='car-brand2'>All New Terios</h4>
                    <img className='heart2' src={Like1} alt="like" />

                  </div>
                  <p className='car-type2'>SUV</p>
                  <img className="car-cardimage2" src={Car6} alt="Car" />

                  <div className="carspecs2">

                    <img className="gas-station2" src={GasStation} alt="Petrol Tank" />
                    <p className='fuel2'>90L</p>
                    <img className="wheel2" src={Steering} alt="Steering Wheel" />
                    <p className='driving2'>Manual</p>
                    <img className="noofseats2" src={Profile2} alt="2 user profiles" />
                    <p className='occupancy2'>6 People</p>

                  </div>

                  <div className="rate-and-buttontorent2">

                    <p className='rate2'>$74.00/ day </p>
                    <Link to="../register-info">
                      <button className='rentbutton2'><img src={RentButton} alt="Rent Button" /></button>
                    </Link>
                  </div>
                </div>
              </Link>

              {/* Car Card 7 */}
              <Link to="../car-details" >
                <div className="car12">

                  <div className='carbrand-part2'>

                    <h4 className='car-brand2'>MG ZX </h4>
                    <img className='heart2' src={Like1} alt="like" />

                  </div>
                  <p className='car-type2'>Hatchback</p>
                  <img className="car-cardimage2" src={Car8} alt="Car" />

                  <div className="carspecs2">

                    <img className="gas-station2" src={GasStation} alt="Petrol Tank" />
                    <p className='fuel2'>70L</p>
                    <img className="wheel2" src={Steering} alt="Steering Wheel" />
                    <p className='driving2'>Manual</p>
                    <img className="noofseats2" src={Profile2} alt="2 user profiles" />
                    <p className='occupancy2'>4 People</p>

                  </div>

                  <div className="rate-and-buttontorent2">

                    <p className='rate2'>$76.00/ day </p>
                    <Link to="../register-info">
                      <button className='rentbutton2'><img src={RentButton} alt="Rent Button" /></button>
                    </Link>
                  </div>

                </div>
              </Link>
              {/* Car Card 8 */}
              <Link to="../car-details" >
                <div className="car22">
                  <div className='carbrand-part2'>

                    <h4 className='car-brand2'>New MG ZS</h4>
                    <img className='heart2' src={Dislike} alt="like" />

                  </div>
                  <p className='car-type2'>SUV</p>
                  <img className="car-cardimage2" src={Car9} alt="Car" />

                  <div className="carspecs2">

                    <img className="gas-station2" src={GasStation} alt="Petrol Tank" />
                    <p className='fuel2'>80L</p>
                    <img className="wheel2" src={Steering} alt="Steering Wheel" />
                    <p className='driving2'>Manual</p>
                    <img className="noofseats2" src={Profile2} alt="2 user profiles" />
                    <p className='occupancy2'>6 People</p>

                  </div>

                  <div className="rate-and-buttontorent2">

                    <p className='rate2'>$80.00/ day </p>
                    <Link to="../register-info">
                      <button className='rentbutton2'><img src={RentButton} alt="Rent Button" /></button>
                    </Link>
                  </div>
                </div>
              </Link>
              
              {/* Car Card 9 */}
              <Link to="../car-details" >
                <div className="car32">
                  <div className='carbrand-part2'>

                    <h4 className='car-brand2'>MG ZS Excite</h4>
                    <img className='heart' src={Like1} alt="like" />

                  </div>
                  <p className='car-type2'>HatchBack</p>
                  <img className="car-cardimage2" src={Car8} alt="Car" />

                  <div className="carspecs2">

                    <img className="gas-station2" src={GasStation} alt="Petrol Tank" />
                    <p className='fuel2'>90L</p>
                    <img className="wheel2" src={Steering} alt="Steering Wheel" />
                    <p className='driving2'>Manual</p>
                    <img className="noofseats2" src={Profile2} alt="2 user profiles" />
                    <p className='occupancy2'>4 People</p>

                  </div>

                  <div className="rate-and-buttontorent2">

                    <p className='rate2'>$74.00/ day </p>
                    <Link to="../register-info">
                      <button className='rentbutton2'><img src={RentButton} alt="Rent Button" /></button>
                    </Link>
                  </div>
                </div>
              </Link>
            </div>


            <div className="expand-cars-catalog">
              <img id='catalog-opener' src={ShowMoreCars} alt="button to show more cars" />
              <p id='catalog-car-count'> 120 Cars</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category