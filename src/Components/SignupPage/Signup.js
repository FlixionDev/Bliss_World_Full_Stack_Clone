import React from "react";
import { useToast } from "@chakra-ui/react";
import "./Signup.css";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading"


function Signup() {
  
  const toast = useToast();
  const [userdata, setUserdata] = useState([]);
  let [loading,setLoading]=useState(false)
  const navigate=useNavigate()
    async function getdata()
    {
      let res=await fetch("https://blissworld.glitch.me/users")
      let data= await res.json()
      setUserdata(data)
    }
  

  useEffect(() => {
    setLoading(true)
    getdata()
    setTimeout(()=>{
      setLoading(false)
    },1000)
   
  }, [])

  

  const initState= { email: "", password: "",confirmpassword :"",name:""}
  const [formData, setFormData] = useState(initState);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://noiseless-soapy-zucchini.glitch.me/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        name:formData.name,
        email:formData.email,
        password:formData.password
      })
    }).then((responce)=>{
        responce.json().then(data=>{
         
          console.log(data);
          navigate('/login')
        })
    })
  }



  return (
    <main
      className="body createaccount "
      id="main-content"
      role="main"
      data-currency-code="USD"
      style={{ minHeight: "334.225px", display:"block", margin:"auto" }}
    >
      {loading?<Loading/>:
      <div className="container">
        <div className="account-background">
          <div className="account-wrapper">
            <h1 className="page-heading">Create an Account</h1>
            <p className="preheader">It's a Snap!</p>
            <div className="account account--fixed">
              <div className="account-body">
                <form data-create-account-form className="form" onSubmit={handleSubmit} >
                  <div className="form-row form-row--half">
                    <div
                      className="form-field form-field--input form-field--inputText"
                      id="FormField_1"
                    >
                      <label className="form-label">
                        Email Address
                        <small>Required</small>
                      </label>
                      <input
                        id="FormField_1_input"
                        className="form-input"
                        data-label="Email Address"
                        data-input
                        aria-required="true"
                        type="email"
                        onInput={handleInput}
                        value={formData.email}
                        name="email"
                        required
                      />
                      <span style={{ display: "none" }} />
                    </div>
                    <div
                      className="form-field form-field--input form-field--inputPassword"
                      id="FormField_2"
                    >
                      <label className="form-label">
                        Password
                        <small>Required</small>
                      </label>
                      <input
                        className="form-input"
                        id="FormField_2_input"
                        data-label="Password"
                        type="password"
                        onInput={handleInput}
                        value={formData.password}
                        name="password"
                        required
                      />
                      <span style={{ display: "none" }} />
                    </div>
                    <div
                      className="form-field form-field--input form-field--inputPassword"
                      id="FormField_3"
                    >
                      <label className="form-label" htmlFor="FormField_3_input">
                        Confirm Password
                        <small>Required</small>
                      </label>
                      <input
                        type="password"
                        className="form-input"
                        id="FormField_3_input"
                        onInput={handleInput}
                        value={formData.confirmpassword}
                        name="confirmpassword"
                      />
                    </div>
                    <div
                      className="form-field form-field--select"
                      id="FormField_25"
                    >
                      <label
                        className="form-label"
                        htmlFor="FormField_25_select"
                      >
                        Birthday Month
                        <small>Required</small>
                      </label>
                      <select
                        className=" form-select"
                        id="FormField_25_select"
                        onChange={handleInput}
                        value={formData.birthdaymonth}
                        name="confirmpassword"
                       
                      >
                        <option value>Birthday Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                      <span style={{ display: "none" }} />
                    </div>
                    <div
                      className="form-field form-field--select"
                      id="FormField_26"
                    >
                      <label className="form-label">
                        Birth Date
                        <small>Required</small>
                      </label>
                      <select
                        className=" form-select"
                        id="FormField_26_select"
                        data-label="Birth Date"
                        data-input
                       
                      >
                        <option value>Birth Date</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={13}>13</option>
                        <option value={14}>14</option>
                        <option value={15}>15</option>
                        <option value={16}>16</option>
                        <option value={17}>17</option>
                        <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>
                        <option value={21}>21</option>
                        <option value={22}>22</option>
                        <option value={23}>23</option>
                        <option value={24}>24</option>
                        <option value={25}>25</option>
                        <option value={26}>26</option>
                        <option value={27}>27</option>
                        <option value={28}>28</option>
                        <option value={29}>29</option>
                        <option value={30}>30</option>
                        <option value={31}>31</option>
                      </select>
                      <span style={{ display: "none" }} />
                    </div>
                    <div
                      className="form-field form-field--input form-field--inputText"
                      id="FormField_4"
                      data-type="FirstName"
                    >
                      <label className="form-label" htmlFor="FormField_4_input">
                        First Name
                        <small>Required</small>
                      </label>
                      <input
                        type="text"
                     
                        id="FormField_4_input"
                        className="form-input"
                       
                        data-input
                       
                        maxLength={30}
                        onInput={handleInput}
                        value={formData.name}
                        name="name"
                     
                        
                      />
                      <span style={{ display: "none" }} />
                    </div>
                    <div
                      className="form-field form-field--input form-field--inputText"
                      id="FormField_5"
                      data-type="LastName"
                    >
                      <label className="form-label" htmlFor="FormField_5_input">
                        Last Name
                        <small>Required</small>
                      </label>
                      <input
                        type="text"
                        name="FormField[2][5]"
                        id="FormField_5_input"
                        className="form-input"
                        data-label="Last Name"
                        data-input
                      
                        maxLength={30}
                        data-field-type="LastName"
                      />
                      <span style={{ display: "none" }} />
                    </div>
                    <div
                      className="form-field form-field--input form-field--inputText"
                      id="FormField_8"
                      data-type="AddressLine1"
                    >
                      <label className="form-label" htmlFor="FormField_8_input">
                        Address Line 1 (Required)
                        <small>Required</small>
                      </label>
                      <input
                        type="text"
                       
                        id="FormField_8_input"
                        className="form-input"
                        data-label="Address Line 1 (Required)"
                        data-input
                       
                        maxLength={30}
                        onInput={handleInput}
                        value={formData.address}
                        name="address"
                      
                      />
                      <span style={{ display: "none" }} />
                    </div>
                    <div
                      className="form-field form-field--input form-field--inputText"
                      id="FormField_9"
                      data-type="AddressLine2"
                    >
                      <label className="form-label" htmlFor="FormField_9_input">
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        name="FormField[2][9]"
                        id="FormField_9_input"
                        className="form-input"
                        data-label="Address Line 2"
                        data-input
                        aria-required="false"
                        maxLength={30}
                        data-field-type="AddressLine2"
                      />
                    </div>
                    <div
                      className="form-field form-field--input form-field--inputText"
                      id="FormField_6"
                      data-type="CompanyName"
                    >
                      <label className="form-label" htmlFor="FormField_6_input">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="FormField[2][6]"
                        id="FormField_6_input"
                        className="form-input"
                        data-label="Company Name"
                        data-input
                        aria-required="false"
                        maxLength={30}
                        data-field-type="CompanyName"
                      />
                    </div>
                    <div
                      className="form-field form-field--input form-field--inputText"
                      id="FormField_13"
                      data-type="Zip"
                    >
                      <label
                        className="form-label"
                        htmlFor="FormField_13_input"
                      >
                        Zip/Postcode
                        <small>Required</small>
                      </label>
                      <input
                        type="text"
                        name="FormField[2][13]"
                        id="FormField_13_input"
                        className="form-input"
                        data-label="Zip/Postcode"
                        data-input
                       
                        maxLength={10}
                        data-field-type="Zip"
                      />
                      <span style={{ display: "none" }} />
                    </div>
                    <div
                      className="form-field form-field--input form-field--inputText"
                      id="FormField_10"
                    >
                      <label
                        className="form-label"
                        htmlFor="FormField_10_input"
                      >
                        Suburb/City
                        <small>Required</small>
                      </label>
                      <input
                        type="text"
                        name="FormField[2][10]"
                        id="FormField_10_input"
                        className="form-input"
                        data-label="Suburb/City"
                        data-input
                       
                        maxLength={20}
                      />
                    </div>
                    <div
                      className="form-field form-field--select"
                      id="FormField_11"
                      data-type="Country"
                    >
                      <label
                        className="form-label"
                        htmlFor="FormField_11_select"
                      >
                        Country
                        <small>Required</small>
                      </label>
                      <select
                        className=" form-select"
                        id="FormField_11_select"
                        data-label="Country"
                        data-input
                       
                        name="FormField[2][11]"
                        data-field-type="Country"
                      >
                        <option value>Choose a Country</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Antigua and Barbuda">
                          Antigua and Barbuda
                        </option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bonaire, Sint Eustatius and Saba">
                          Bonaire, Sint Eustatius and Saba
                        </option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Botswana">Botswana</option>
                        <option value="Bouvet Island">Bouvet Island</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Territory">
                          British Indian Ocean Territory
                        </option>
                        <option value="Brunei Darussalam">
                          Brunei Darussalam
                        </option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">
                          Central African Republic
                        </option>
                        <option value="Chad">Chad</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">
                          Christmas Island
                        </option>
                        <option value="Cocos (Keeling) Islands">
                          Cocos (Keeling) Islands
                        </option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Congo, the Democratic Republic of the">
                          Congo, the Democratic Republic of the
                        </option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Curaçao">Curaçao</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">
                          Dominican Republic
                        </option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">
                          Equatorial Guinea
                        </option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands (Malvinas)">
                          Falkland Islands (Malvinas)
                        </option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">
                          French Polynesia
                        </option>
                        <option value="French Southern Territories">
                          French Southern Territories
                        </option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guernsey">Guernsey</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Heard Island and Mcdonald Islands">
                          Heard Island and Mcdonald Islands
                        </option>
                        <option value="Holy See (Vatican City State)">
                          Holy See (Vatican City State)
                        </option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea, Republic of">
                          Korea, Republic of
                        </option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Lao People's Democratic Republic">
                          Lao People's Democratic Republic
                        </option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macao">Macao</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Micronesia, Federated States of">
                          Micronesia, Federated States of
                        </option>
                        <option value="Moldova, Republic of">
                          Moldova, Republic of
                        </option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Namibia">Namibia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Netherlands Antilles">
                          Netherlands Antilles
                        </option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau">Palau</option>
                        <option value="Palestinian Territory, Occupied">
                          Palestinian Territory, Occupied
                        </option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">
                          Papua New Guinea
                        </option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Philippines">Philippines</option>
                        <option value="Pitcairn">Pitcairn</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Republic of Kosovo">
                          Republic of Kosovo
                        </option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russian Federation">
                          Russian Federation
                        </option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="Saint Helena">Saint Helena</option>
                        <option value="Saint Kitts and Nevis">
                          Saint Kitts and Nevis
                        </option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Saint Pierre and Miquelon">
                          Saint Pierre and Miquelon
                        </option>
                        <option value="Saint Vincent and the Grenadines">
                          Saint Vincent and the Grenadines
                        </option>
                        <option value="Samoa">Samoa</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome and Principe">
                          Sao Tome and Principe
                        </option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Sint Maarten">Sint Maarten</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Georgia and the South Sandwich Islands">
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen">
                          Svalbard and Jan Mayen
                        </option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania, United Republic of">
                          Tanzania, United Republic of
                        </option>
                        <option value="Thailand">Thailand</option>
                        <option value="Timor-Leste">Timor-Leste</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad and Tobago">
                          Trinidad and Tobago
                        </option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks and Caicos Islands">
                          Turks and Caicos Islands
                        </option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Emirates">
                          United Arab Emirates
                        </option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option selected value="United States">
                          United States
                        </option>
                        <option value="United States Minor Outlying Islands">
                          United States Minor Outlying Islands
                        </option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Viet Nam">Viet Nam</option>
                        <option value="Virgin Islands, British">
                          Virgin Islands, British
                        </option>
                        <option value="Virgin Islands, U.S.">
                          Virgin Islands, U.S.
                        </option>
                        <option value="Wallis and Futuna">
                          Wallis and Futuna
                        </option>
                        <option value="Western Sahara">Western Sahara</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                    </div>
                    <div
                      className="form-field form-field--select"
                      id="FormField_12"
                      data-type="State"
                    >
                      <label
                        className="form-label"
                        htmlFor="FormField_12_select"
                      >
                        State/Province
                        <small>Required</small>
                      </label>
                      <select
                        name="FormField[2][12]"
                        className="form-select"
                       
                        id="FormField_12_select"
                        data-label="State/Province"
                        data-input
                        data-field-type="State"
                      >
                        <option value>Choose a State</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Arizona">Arizona</option>
                        <option value="Arkansas">Arkansas</option>
                        <option value="Armed Forces Africa">
                          Armed Forces Africa
                        </option>
                        <option value="Armed Forces Americas">
                          Armed Forces Americas
                        </option>
                        <option value="Armed Forces Canada">
                          Armed Forces Canada
                        </option>
                        <option value="Armed Forces Europe">
                          Armed Forces Europe
                        </option>
                        <option value="Armed Forces Middle East">
                          Armed Forces Middle East
                        </option>
                        <option value="Armed Forces Pacific">
                          Armed Forces Pacific
                        </option>
                        <option value="California">California</option>
                        <option value="Colorado">Colorado</option>
                        <option value="Connecticut">Connecticut</option>
                        <option value="Delaware">Delaware</option>
                        <option value="District of Columbia">
                          District of Columbia
                        </option>
                        <option value="Federated States Of Micronesia">
                          Federated States Of Micronesia
                        </option>
                        <option value="Florida">Florida</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Guam">Guam</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Idaho">Idaho</option>
                        <option value="Illinois">Illinois</option>
                        <option value="Indiana">Indiana</option>
                        <option value="Iowa">Iowa</option>
                        <option value="Kansas">Kansas</option>
                        <option value="Kentucky">Kentucky</option>
                        <option value="Louisiana">Louisiana</option>
                        <option value="Maine">Maine</option>
                        <option value="Marshall Islands">
                          Marshall Islands
                        </option>
                        <option value="Maryland">Maryland</option>
                        <option value="Massachusetts">Massachusetts</option>
                        <option value="Michigan">Michigan</option>
                        <option value="Minnesota">Minnesota</option>
                        <option value="Mississippi">Mississippi</option>
                        <option value="Missouri">Missouri</option>
                        <option value="Montana">Montana</option>
                        <option value="Nebraska">Nebraska</option>
                        <option value="Nevada">Nevada</option>
                        <option value="New Hampshire">New Hampshire</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="New York">New York</option>
                        <option value="North Carolina">North Carolina</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Northern Mariana Islands">
                          Northern Mariana Islands
                        </option>
                        <option value="Ohio">Ohio</option>
                        <option value="Oklahoma">Oklahoma</option>
                        <option value="Oregon">Oregon</option>
                        <option value="Palau">Palau</option>
                        <option value="Pennsylvania">Pennsylvania</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Rhode Island">Rhode Island</option>
                        <option value="South Carolina">South Carolina</option>
                        <option value="South Dakota">South Dakota</option>
                        <option value="Tennessee">Tennessee</option>
                        <option value="Texas">Texas</option>
                        <option value="Utah">Utah</option>
                        <option value="Vermont">Vermont</option>
                        <option value="Virgin Islands">Virgin Islands</option>
                        <option value="Virginia">Virginia</option>
                        <option value="Washington">Washington</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                      </select>
                      <span style={{ display: "none" }} />
                    </div>
                    <div
                      className="form-field form-field--input form-field--inputText"
                      id="FormField_7"
                      data-type="Phone"
                    >
                      <label className="form-label" htmlFor="FormField_7_input">
                        Phone Number (Required)
                        <small>Required</small>
                      </label>
                      <input
                        type="text"
                        name="FormField[2][7]"
                        id="FormField_7_input"
                        className="form-input"
                        data-label="Phone Number (Required)"
                        data-input
                       
                        maxLength={19}
                        data-field-type="Phone"
                      />
                      <span style={{ display: "none" }} />
                    </div>
                    <div
                      className="form-field form-field--checkbox"
                      id="FormField_27"
                    >
                      <label className="form-label" htmlFor="FormField_27">
                        Yes, please! I'd like to receive emails from Bliss to
                        learn about new product launches and upcoming
                        promotions.
                      </label>
                      <input
                        type="checkbox"
                        
                        className="form-checkbox"
                      />
                      <label
                        className="form-label "
                        htmlFor="FormField[2][27][0]"
                      >
                        Click to sign up!
                      </label>
                    </div>
                  </div>

                  <div className="form-actions">
                    <div className="buttonfx angleinleft bouncein">
                      <input
                        type="submit"
                        className="button button--primary"
                        value="Create Account"
                     
                      />
                    </div>
                  </div>
                  <div className="Terms_and_condition">
                    <p>
                      By clicking CREATE ACCOUNT, you agree to our
                      <a href="" target="_blank">
                        TERMS &amp; CONDITIONS
                      </a>
                      and
                      <a href="" target="_blank">
                        PRIVACY POLICY.
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </main>
  );
}

export default Signup;
