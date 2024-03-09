import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'
import { ArrowDownGrey, Visa, PayPal, Bitcoin, RentButton, SecurityShield, CarFinal, ReviewStars } from '../assets'
import './Payment.css'

function Payment() {


  // function to Change to date format on click

  const [isDateInput, setIsDateInput] = useState(false);
  const [pickupValue, setPickupValue] = useState({ date: '' });
  const handleFocus = () => {
    setIsDateInput(true);
  };

  const handleBlur = () => {
    setIsDateInput(false);
  };

  const handleChange = (e) => {
    setPickupValue({ ...pickupValue, date: e.target.value });
  };

  const [isTimeInput, setIsTimeInput] = useState(false);

  const handleTimeFocus = () => {
    setIsTimeInput(true);
  };

  const handleTimeBlur = () => {
    setIsTimeInput(false);
  };

  const handleTimeChange = (e) => {
    setPickupValue({ ...pickupValue, time: e.target.value });
  };

  const [isDropoffDateInput, setIsDropoffDateInput] = useState(false);
  const [dropoffValue, setDropoffValue] = useState({ date: '', time: '' });

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

  const [couponCode, setCouponCode] = useState('');
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setCouponCode(inputText);

    // Show submit button when the input is not empty
    setShowSubmitButton(inputText.trim() !== '');
  };

  const handleButtonClick = () => {
    // Handle the logic when the submit button is clicked
    console.log('Submit button clicked with coupon code:', couponCode);
  };

  const [isVisible, setIsVisible] = useState(false);

  const showDiv = () => {
    setIsVisible(true);
  };

  // Set a timeout to hide the div after 10000 milliseconds (10 seconds)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 100000);

    // Cleanup the timeout on component unmount or re-render
    return () => clearTimeout(timeoutId);
  }, [isVisible]);

  // Function to handle form submission
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    showDiv();
    setTimeout(() => {
      navigate('/')
    }, 2000);
  };

  return (

    <div className='cardetail-content'>
      <ScrollToTop />
      <div className='car-form-contentwrapper'>

        <form onSubmit={handleSubmit} className="forms-for-application">

          {/* Left side with all the billing rental and payment info parts */}

          <div className="billing-info-part">

            {/* Billing info */}

            <div className="billing-details">

              <div className="bill-header">
                <p className='titles'>Billing Info</p>
              </div>
              <div className="instructions">
                <p className='instruction-part'>Please enter your billing info</p>
                <p className="stepcount">Step 1 of 4</p>
              </div>


              <div className="first-input-line">
                <div className="input-parts">
                  <p className="input-header">Name</p>
                  <input className='input-fields' type="text" placeholder='Your full name here' required />
                </div>
                <div className="input-parts">
                  <p className="input-header">Mobile Number</p>

                  <input className='input-fields' type="number" placeholder='Enter your phone number here' required />
                </div>
              </div>
              <div className="second-input-line">
                <div className="input-parts">
                  <p className="input-header">Address</p>
                  <input className='input-fields' type="text" placeholder='Your full address here' required />
                </div>
                <div className="input-parts">
                  <p className="input-header">Town / City</p>
                  <select className='input-fields' required>
                    <option value="" className='options' hidden>Town / City </option>
                    <option value="location1" className='options'>New York</option>
                    <option value="location2" className='options'>California</option>
                    <option value="location3" className='options'>San Diego</option>
                    <option value="location4" className='options'>Los Angeles</option>
                  </select>
                </div>
              </div>


            </div>

            {/* Rental Info */}

            <div className="rental-info">

              <div className="bill-header">
                <p className='titles'>Rental Info</p>
              </div>
              <div className="instructions">
                <p className='instruction-part'>Please select your rental date</p>
                <p className="stepcount">Step 2 of 4</p>
              </div>
              <div className='pickup-drop-off'><p className="pickup-part">Pick - Up</p></div>
              <div className="first-input-line">

                <div className="input-parts">
                  <p className="input-header">Locations</p>
                  <select className='input-fields arrowdown' required>
                    <option value="select" hidden>Select your city</option>
                    <option value="location1">New York</option>
                    <option value="location2">California</option>
                    <option value="location3">San Diego</option>
                    <option value="location4">Los Angeles</option>
                  </select>
                </div>
                <div className="input-parts">
                  <p className="input-header">Date</p>

                  {/* Date input field with text input but click to change to date */}

                  <input className='input-fields arrowdown' type={isDateInput ? 'date' : 'text'}
                    placeholder='Select your date'
                    value={pickupValue.date}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur} required />
                </div>
              </div>

              <div className="second-input-line">
                <div className="input-parts">
                  <p className="input-header">Time</p>
                  <input className='input-fields timer' type={isTimeInput ? 'time' : 'text'}
                    placeholder='Select your time'
                    value={pickupValue.time}
                    onChange={handleTimeChange}
                    onFocus={handleTimeFocus}
                    onBlur={handleTimeBlur} required />
                </div>
              </div>

              <div className='pickup-drop-off'><p className="pickup-part">Drop - Off</p></div>

              <div className="first-input-line">
                <div className="input-parts">
                  <p className="input-header">Locations</p>
                  <select className='input-fields arrowdown' required>
                    <option value="select" hidden>Select your city</option>
                    <option value="location1">New York</option>
                    <option value="location2">California</option>
                    <option value="location3">San Diego</option>
                    <option value="location4">Los Angeles</option>
                  </select>
                </div>
                <div className="input-parts">
                  <p className="input-header">Date</p>
                  <input className='input-fields arrowdown' type={isDropoffDateInput ? 'date' : 'text'}
                    placeholder='Select your date'
                    value={dropoffValue.date}
                    onChange={handleDropoffDateChange}
                    onFocus={handleDropoffDateFocus}
                    onBlur={handleDropoffDateBlur} required />
                </div>
              </div>

              <div className="second-input-line">
                <div className="input-parts">
                  <p className="input-header">Time</p>
                  <input className='input-fields timer' type={isDropoffTimeInput ? 'time' : 'text'}
                    placeholder='Select your time'
                    value={dropoffValue.time}
                    onChange={handleDropoffTimeChange}
                    onFocus={handleDropoffTimeFocus}
                    onBlur={handleDropoffTimeBlur} required />
                </div>
              </div>

            </div>

            {/* Payment Info */}

            <div className="payment-method">

              <div className="bill-header">
                <p className='titles'>Payment Method</p>
              </div>
              <div className="instructions">
                <p className='instruction-part'>Please enter your payment method</p>
                <p className="stepcount">Step 3 of 4</p>
              </div>

              <div className="credit-card">

                <div className="creditcard-section">

                  <div className="credit-card-header-and-image">
                    <div className="radio-and-radioheader">
                      <input className='firstline' name='payment-options' id='radio' defaultChecked type="radio" /> <p id='card-radio' className='firstline'>Credit Card</p></div>
                    <img id='visa-visa' className='firstline' src={Visa} alt="visa" />
                  </div>

                  <div className="creditcard-first-input-line">

                    <div className="creditcard-input-parts">

                      <p className="creditcard-input-header">Card Number</p>

                      <input className='creditcard-input-fields' type="number" placeholder='Card Number' required />

                    </div>
                    <div className="creditcard-input-parts">

                      <p className="creditcard-input-header">Mobile Number</p>

                      <input className='creditcard-input-fields' type="number" placeholder='Enter your mobile number here' required />

                    </div>
                  </div>
                  <div className="creditcard-second-input-line">


                    <div className="creditcard-input-parts">

                      <p className="creditcard-input-header">Card Holder Name</p>

                      <input className='creditcard-input-fields' type="text" placeholder='Enter the name on the Card' required />

                    </div>
                    <div className="creditcard-input-parts">

                      <p className="creditcard-input-header">CVV</p>

                      <input className='creditcard-input-fields' type="number" placeholder='CVV' required />
                    </div>

                  </div>
                </div>
                <div className="paypal">
                  <div className="paypalradio-and-radio-header">
                    <input className='paypalline' name='payment-options' id='radio-for-paypal' type="radio" /> <p id='paypal-text' className="paypalline">PayPal</p>
                  </div>
                  <img className='payment-photos' id='paypal-paypal' src={PayPal} alt="paypal" />
                </div>

                <div className="bitcoin">
                  <div className="bitcoinradio-and-radio-header">
                    <input className='bitcoinline' name='payment-options' id='radio-for-bitcoin' type="radio" /> <p id='bitcoin-text' className="bitcoinline">Bitcoin</p>
                  </div>
                  <img className='payment-photos' id='paypal-paypal' src={Bitcoin} alt="bitcoin" />
                </div>

              </div>

            </div>

            {/* Confirmation Info */}

            <div className="confirmation">

              <div className="bill-header">
                <p className='titles'>Confirmation</p>
              </div>
              <div className="instructions">
                <p className='instruction-part'>We are getting to the end. Just few clicks and your rental is ready!</p>
                <p className="stepcount">Step 4 of 4</p>
              </div>

              <div className="aggrements">

                <div className="aggrement1">

                  <input type="checkbox" className='check-for-aggrement' />
                  <p className="aggrement-content">I agree to receiving Marketing and Newsletter emails. Np spam, promised!</p>
                </div>

                <div className="aggrement2">

                  <input type="checkbox" className='check-for-aggrement' required />
                  <p className="aggrement-content">I agree with the terms & conditions and privacy & policy.</p>
                </div>
              </div>

              {/* Form Submit button  */}
              <div id="rent-button-for-aggrement">
                <button type='submit' ><img id='rent-button-aggrement' src={RentButton} alt="" />
                </button>
                {isVisible && (
                  <div id='popupMessage-space'>
                    <p id='popupMessage'>Your booking is confirmed!!!</p>
                  </div>
                )}
              </div>

              <div className="data-surety">
                <img src={SecurityShield} id='shield-img' alt="shield" />
                <p id="data-header">All your data are safe</p>
                <p id="data-safety-info">We are using the most advanced security to provide you the best experience ever.</p>
              </div>

            </div>

          </div>

          {/* Rental Summary */}

          <div className="rental-summary">

            <div className="rental-summary-header">
              <p id='rental-summary-header-text'>Rental Summary</p>
              <p id="price-disclamer">Prices may change depending on the length of the rental and the price of your rental car.</p>
            </div>

            <div className="image-and-name-with-reviews">
              <img id='car-final-view' src={CarFinal} alt="car" />
              <div className='name-with-ratings'>
                <p id='car-id'>Nissan GT - R</p>
                <div id='review-count-star'>
                  <img src={ReviewStars} id='star-view' alt="rating" />
                  <p id="no-of-reviews">440+ Reviews</p>
                </div>
              </div>
            </div>

            <div id="underline"></div>

            <div className="subtotal" id='finalamount'><p className="header">Subtotal</p><p className="amount">$80.00</p></div>
            <div className="subtotal"><p className="header">Tax</p><p className="amount">$0</p></div>

            <div className="coupon-container">
              <div className="coupon-space">
                <input id='coupon-input'
                  type="text"
                  placeholder='Apply promo code'
                  value={couponCode}
                  onChange={handleInputChange} />
                {showSubmitButton && (
                  <button id='submit-button' onClick={handleButtonClick}>
                    <p id="btntext"> Apply now</p>
                  </button>
                )}
              </div>
            </div>
            <div id="rentalpriceconfirm">
              <div id="header-info">
                <p id="totalprice-final">Total Rental Price</p>
                <p id="rateinfo">Overall price and includes rental discount</p>
              </div>
              <p id="rate-confirm">$80.00</p>
            </div>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Payment