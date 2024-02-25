import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Detail.css'
import ScrollToTop from '../components/ScrollToTop'
import { TickSquare, UnTick, PriceRange, Car1, Car2, Car3, Car4, Car5, Car6, Car8, Car9, Switch, Like1, GasStation, Profile2, Steering, RentButton, ShowMoreCars, Dislike, ReviewCount, Profile, Profile3, ReviewStars, ArrowDown, ArrowDownGrey, BigCar, View1, View2, View3, CarReviewRating } from '../assets'


function Detail() {

  const [sliderValue, setSliderValue] = useState(null)
  const [sliderInteracted, setSliderIntracted] = useState(false)
  const [currency, setCurrency] = useState("$")

  const handleSliderValue = (e) => {
    setSliderIntracted(true)
    setSliderValue(Number(e.target.value))
  }


  const [currentImage, setCurrentImage] = useState(BigCar)
  const handleImageChange = (newImage) => {
    setCurrentImage(newImage === View1 ? BigCar : newImage)
  }

  return (

    <div className='cardetail-content'>
      <ScrollToTop />
      <div className='car-detail-contentwrapper'>

        <div className="content-box2">

          {/* Filter to select type of car */}
          <div className='filter-for-cars2'>

            {/* Type of car */}

            <div className="type-of-car2">

              <p className='checklist-header2' id='type-of-car2'>TYPE</p>

              <div className="type-design2">

                <div className='checks2'>
                  <input type="checkbox" checked className='check-size2' />
                  <input type="checkbox" className='check-size2' />
                  <input type="checkbox" className='check-size2' />
                  <input type="checkbox" className='check-size2' />
                  <input type="checkbox" className='check-size2' />
                  <input type="checkbox" className='check-size2' />
                </div>

                <div className="types2">
                  <p className='type2' id='first-type2'>Sport<span className='quantity-of-cars2'> (10)</span></p>
                  <p className='type2' id='second-type2'>SUV<span className='quantity-of-cars2'> (12)</span></p>
                  <p className='type2' id='third-type2'>MPV<span className='quantity-of-cars2'> (16)</span></p>
                  <p className='type2' id='fourth-type2'>Sedan<span className='quantity-of-cars2'> (20)</span></p>
                  <p className='type2' id='fifth-type2'>Coupe<span className='quantity-of-cars2'> (14)</span></p>
                  <p className='type2' id='sixth-type2'>Hatchback<span className='quantity-of-cars2'> (14)</span></p>
                </div>
              </div>
            </div>

            {/* Car capacity */}

            <div className="car-capacity2">

              <p className='checklist-header2' id='capacity-of-car2'>CAPACITY</p>

              <div className="capacity-space2">

                <div className='checks2'>
                  <input type="checkbox" checked className='check-size2' />
                  <input type="checkbox" className='check-size2' />
                  <input type="checkbox" className='check-size2' />
                  <input type="checkbox" className='check-size2' />
                </div>

                <div className="capacities2">
                  <p className='capacity2' id='first-capacity2'>2 Person<span className='quantity-of-cars2'> (10)</span></p>
                  <p className='capacity2' id='second-capacity2'>4 Person<span className='quantity-of-cars2'> (14)</span></p>
                  <p className='capacity2' id='third-capacity2'>6 Person<span className='quantity-of-cars2'> (12)</span></p>
                  <p className='capacity2' id='fourth-capacity2'>8 or More<span className='quantity-of-cars2'> (16)</span></p>
                </div>

              </div>
            </div>

            {/* Price range */}
            <div className="price-range2">

              <p className='checklist-header2' id='price-of-car2'>PRICE</p>

              <div className="price-space2">

                <div className='bar2'>
                  <input type="range" min={70} max={100} onChange={handleSliderValue} />
                </div>
                {sliderInteracted && (
                  <div className="range-slider2">
                    <p className="max-price-limit-range2"> {currency} {sliderValue}</p>

                  </div>
                )}
                <p className='placeholder-for-currency'>Max. $100.00</p>
              </div>

            </div>

          </div>

          {/* Content Box */}

          <div className="main-content-for-user">

            {/* Car images and details */}

            <div className="carcard-elaborate-info">

              {/* Car Images */}

              <div className="car-images">

                <div className="main-photo">

                  <img id='car-big' src={currentImage} alt="big car" />

                </div>

                {/* Small Images */}

                <div className="small-detailed-photos">

                  <div className="image-container" onClick={() => handleImageChange(View1)}>

                    <img className='image' src={View1} alt="car" />

                    <div className="border"></div>
                  </div>

                  <div className="image-container" onClick={() => handleImageChange(View2)}>

                    <img className='image' src={View2} alt="interior" />

                    <div className="border"></div>
                  </div>

                  <div className="image-container" onClick={() => handleImageChange(View3)}>

                    <img className='image' src={View3} alt="interiortwo" />

                    <div className="border"></div>
                  </div>
                </div>
              </div>

              {/* Car Specs */}

              <div className='car-details-specs'>

                <div className="car-name-and-rating">
                  <p className='carname'>Nissan GT-R</p>

                  {/* Like on click functionality added  */}

                  <img className='like' src={Like1}/>
                </div>

                <div className="car-rating">

                  <img src={CarReviewRating} alt="rating of the car" />

                  <p className='review-count'>440+ Reviews </p>
                </div>

                <div className="car-description"><p className="description">
                  NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                </div>
                <div className="specs">

                  <div className="type-and-capacity">

                    <p className='type-capacity-header'>Type Car<span className='details' id='typecar'>Sport</span></p>
                    <p className='type-capacity-header'>Capacity<span className='details'>2 Person</span></p>
                  </div>

                  <div className="steering-and-fuel">

                    <p className='steering-fuel-header'>Steering<span className='details'>Manual</span></p>
                    <p className='steering-fuel-header'>Fuel<span className='details' id='fuelcap'>70L</span></p>
                  </div>
                </div>
                <div className="rate-and-rentbutton">
                  <p id="rate-of-car">$80.00/ <span id='day'>day</span></p>
                  <Link to="../register-info">
                    <img id='button-for-rent' src={RentButton} alt="rent button" />
                  </Link>
                </div>

              </div>
            </div>

            {/* Reviews */}

            <div className="reviews">

              <div className="review-header-and-count">
                <p id='review-header'>Reviews</p> <img id='reviewcount' src={ReviewCount} alt="review count" />
              </div>
              <div className="reviewcontent">
                {/* First Review */}
                <div className="first-review">
                  <div className="review-image-and-name-with-title">
                    <img className="reviewer-image" src={Profile} alt="profile1" />
                    <div className="name-title-rating-date">

                      <div className='name-of-the-reviewer-and-job'>
                        <p className='name'> Alex Stanton</p>
                        <p className='reviewer-job'>Manager at NotePost.com </p>
                      </div>
                      <div className="date-and-rating">
                        <p className='date-and-rating'>21 Jan 2024</p>
                        <img className='stars' src={ReviewStars} alt="rating 4star" />
                      </div>

                    </div>
                  </div>
                  <div className="review-words"><p className='review-text'>I am very happy with the rental service from MORENT. Morent has low prices and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p></div>
                </div>
                {/* Second Review */}
                <div className="second-review">
                  <div className="review-image-and-name-with-title">
                    <img className="reviewer-image" src={Profile3} alt="profile1" />
                    <div className="name-title-rating-date">
                      <div className='name-of-the-reviewer-and-job'>
                        <p className='name'> Skylar Dias</p>
                        <p className='reviewer-job'>Product Manager at LapCare.com </p>
                      </div>
                      <div className="date-and-rating">
                        <p className='date-and-rating'>10 Feb 2024</p>
                        <img className='stars' src={ReviewStars} alt="rating 4star" />
                      </div>

                    </div>
                  </div>
                  <div className="review-words"><p className='review-text'>I was greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p></div>
                </div>
              </div>
              <div className="review-drop-down">
                Show All
                <img id="arrow-for-reviews" src={ArrowDownGrey} alt="down arrow" />
              </div>
            </div>

            {/* Recent Cars */}

            <div className="recent-cars">

              <div className='popularcar-header3'>

                <span className='popularcar-title3' id="popularcar-title-text3">Recent Cars</span>
                <a className='popularcar-title3' id="popularcar-title-link3" href="#"> View All</a>

              </div>

              {/* Car Cards */}

              <div className="car-cards3">

                {/* Car Card 1 */}
                <Link to="../car-details" >
                  <div className="recent-car1">

                    <div className='carbrand-part3'>

                      <h4 className='car-brand3'>Koenigsegg</h4>
                      <img className='heart3' src={Like1} alt="like" />

                    </div>
                    <p className='car-type3'>Sport</p>
                    <img className="car-cardimage3" src={Car1} alt="Car" />

                    <div className="carspecs3">

                      <img className="gas-station3" src={GasStation} alt="Petrol Tank" />
                      <p className='fuel3'>90L</p>
                      <img className="wheel3" src={Steering} alt="Steering Wheel" />
                      <p className='driving3'>Manual</p>
                      <img className="noofseats3" src={Profile2} alt="2 user profiles" />
                      <p className='occupancy3'>2 People</p>

                    </div>

                    <div className="rate-and-buttontorent3">

                      <p className='rate3'>$99.00/ day </p>
                      <Link to="../register-info">
                        <button className='rentbutton3'><img src={RentButton} alt="Rent Button" /></button>
                      </Link>
                    </div>

                  </div>
                </Link>

                {/* Car Card 2 */}

                <Link to="../car-details" >

                  <div className="recent-car2">

                    <div className='carbrand-part3'>

                      <h4 className='car-brand3'>Nissan GT-R</h4>
                      <img className='heart3' src={Dislike} alt="like" />

                    </div>
                    <p className='car-type3'>Sport</p>
                    <img className="car-cardimage3" src={Car2} alt="Car" />

                    <div className="carspecs3">

                      <img className="gas-station3" src={GasStation} alt="Petrol Tank" />
                      <p className='fuel3'>80L</p>
                      <img className="wheel3" src={Steering} alt="Steering Wheel" />
                      <p className='driving3'>Manual</p>
                      <img className="noofseats3" src={Profile2} alt="2 user profiles" />
                      <p className='occupancy3'>2 People</p>

                    </div>

                    <div className="rate-and-buttontorent3">

                      <p className='rate3'>$80.00/ day </p>
                      <Link to="../register-info">
                        <button className='rentbutton3'><img src={RentButton} alt="Rent Button" /></button>
                      </Link>
                    </div>
                  </div>
                </Link>

                {/* Car Card 3 */}

                <Link to="../car-details" >

                  <div className="recent-car3">

                    <div className='carbrand-part3'>

                      <h4 className='car-brand3'>Rolls - Royce</h4>
                      <img className='heart3' src={Like1} alt="like" />

                    </div>
                    <p className='car-type3'>Sedan</p>
                    <img className="car-cardimage3" src={Car3} alt="Car" />

                    <div className="carspecs3">

                      <img className="gas-station3" src={GasStation} alt="Petrol Tank" />
                      <p className='fuel3'>70L</p>
                      <img className="wheel3" src={Steering} alt="Steering Wheel" />
                      <p className='driving3'>Manual</p>
                      <img className="noofseats3" src={Profile2} alt="2 user profiles" />
                      <p className='occupancy3'>4 People</p>

                    </div>

                    <div className="rate-and-buttontorent3">

                      <p className='rate3'>$96.00/ day </p>
                      <Link to="../register-info">
                        <button className='rentbutton3'><img src={RentButton} alt="Rent Button" /></button>
                      </Link>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Recommended Cars Card */}

            <div className="rmd-cars3">

              <div className='popularcar-header3'>

                <span className='popularcar-title3' id="popularcar-title-text3">Recommended Cars</span>
                <a className='popularcar-title3' id="popularcar-title-link3" href="#"> View All</a>

              </div>

              {/* Car Card 1 */}
              <div className="car-cards3">

                <Link to="../car-details">

                  <div className="recent-car1">

                    <div className='carbrand-part3'>
                      <h4 className='car-brand3'>All New Rush</h4>
                      <img className='heart3' src={Like1} alt="like" />
                    </div>
                    <p className='car-type3'>SUV</p>
                    <img className="car-cardimage3" src={Car4} alt="Car" />

                    <div className="carspecs3">

                      <img className="gas-station3" src={GasStation} alt="Petrol Tank" />
                      <p className='fuel3'>70L</p>
                      <img className="wheel3" src={Steering} alt="Steering Wheel" />
                      <p className='driving3'>Manual</p>
                      <img className="noofseats3" src={Profile2} alt="2 user profiles" />
                      <p className='occupancy3'>6  People</p>

                    </div>

                    <div className="rate-and-buttontorent3">

                      <p className='rate3'>$72.00/ day </p>
                      <Link to="../register-info">
                        <button className='rentbutton3'><img src={RentButton} alt="Rent Button" /></button>
                      </Link>
                    </div>

                  </div>
                </Link>

                {/* Car Card 2 */}

                <Link to="../car-details">
                  <div className="recent-car2">
                    <div className='carbrand-part3'>

                      <h4 className='car-brand3'>CR - V</h4>
                      <img className='heart3' src={Dislike} alt="like" />

                    </div>
                    <p className='car-type3'>SUV</p>
                    <img className="car-cardimage3" src={Car5} alt="Car" />

                    <div className="carspecs3">

                      <img className="gas-station3" src={GasStation} alt="Petrol Tank" />
                      <p className='fuel3'>80L</p>
                      <img className="wheel3" src={Steering} alt="Steering Wheel" />
                      <p className='driving3'>Manual</p>
                      <img className="noofseats3" src={Profile2} alt="2 user profiles" />
                      <p className='occupancy3'>6  People</p>

                    </div>

                    <div className="rate-and-buttontorent3">

                      <p className='rate3'>$80.00/ day </p>
                      <Link to="../register-info">
                        <button className='rentbutton3'><img src={RentButton} alt="Rent Button" /></button>
                      </Link>
                    </div>
                  </div>
                </Link>
                {/* Car Card 3 */}
                <Link to="../car-details">
                  <div className="recent-car3">
                    <div className='carbrand-part3'>

                      <h4 className='car-brand3'>All New Terios</h4>
                      <img className='heart3' src={Like1} alt="like" />

                    </div>
                    <p className='car-type3'>SUV</p>
                    <img className="car-cardimage3" src={Car6} alt="Car" />

                    <div className="carspecs3">

                      <img className="gas-station3" src={GasStation} alt="Petrol Tank" />
                      <p className='fuel3'>90L</p>
                      <img className="wheel3" src={Steering} alt="Steering Wheel" />
                      <p className='driving3'>Manual</p>
                      <img className="noofseats3" src={Profile2} alt="2 user profiles" />
                      <p className='occupancy3'>6 People</p>

                    </div>

                    <div className="rate-and-buttontorent3">

                      <p className='rate3'>$74.00/ day </p>
                      <Link to="../register-info">
                        <button className='rentbutton3'><img src={RentButton} alt="Rent Button" /></button>
                      </Link>
                    </div>
                  </div>
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div >
  )
}

export default Detail