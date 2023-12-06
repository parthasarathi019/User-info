import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <>
      {/* <section>
        <div className='text-center text-green-500 font-bold text-[52px]'>
          --- Welcome to Document Finder ---
        </div>
        <div className='mt-[6em] flex justify-center items-center'>
          <IcBaselineDownload />
          <p className='text-center text-green-500 font-semibold text-[33px]'>please type your ID in search box</p>
          <IcBaselineDownload />
        </div>

        <form className="flex justify-center items-center space-x-3 mt-4">
          <div className='w-[80%]'>
            <input id="ssearch" type="search" placeholder="Type your ID number" className="w-full bg-slate-50  border-[1.8px] border-[#14a800e3] rounded-md h-[2em] text-[1em]  lg:text-xl md:text-[.9em] md:h-10 text-text placeholder-text-sm bg-transparent outline-none p-2" />
          </div>
          <div className=''> <button>
            <a className='text-black'>search</a>
          </button></div>
        </form>
      </section> */}

      {/* <img className='mb-11 mt-8 cursor-pointer' src={moduleName} alt="" /> */}
      <div className='flex justify-between items-center px-4 my-8 '>
        <Link to='/'><div className=''><img className='w-[450px]' src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg" alt="" /></div></Link>
        <div><input placeholder='Search IRCC' className="w-full bg-slate-50  border-[1.8px] border-gray-800 h-[2em] text-[1em] md:h-[2em] text-text placeholder-text-sm bg-transparent outline-none p-2" type="text" /></div>
      </div>
      <div>
        <hr className="border-[3.1px] border-black  border-t-0" />
        <div className="w-[90%] mx-auto relative">
          <button onClick={toggleMenu} className='flex bg-[#444] items-center px-[33px] py-[12px] text-[20px] text-white relative' >
            <div className="">MENU</div>
            <div><MaterialSymbolsKeyboardArrowDownRounded /></div>
          </button>

          {/* menu  */}
          <div className="">
            <div className={` ${showMenu ? "bg-[#444] text-white absolute top-14 left-0 w-[27%]" : "hidden"}`}>
              <ul className="space-y-3">

                <li className=" group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                  <span className="text-[20px]">Job and the workplace</span>
                  <div className="bg-white min-w-max text-black absolute top-0 px-20 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Job and the workplace</h1>
                      <a href="#find-job" className="cursor-pointer hover:underline">Find a job</a>
                      <a href="#training" className="cursor-pointer hover:underline">Training</a>
                      <a href="#hiring-managing" className="cursor-pointer hover:underline">Hiring and managing employees</a>
                      <a href="#start-business" className="cursor-pointer hover:underline">Starting a business</a>
                      <a href="#workplace-standards" className="cursor-pointer hover:underline">Workplace standards</a>
                      <a href="#pensions-retirement" className="cursor-pointer hover:underline">Pensions and retirement</a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <a href="#employment-insurance" className="cursor-pointer hover:underline">Employment Insurance benefits and leave</a>
                      <a href="#records-employment" className="cursor-pointer hover:underline">View your Records of Employment</a>
                      <a href="#social-insurance" className="cursor-pointer hover:underline">Apply for a Social Insurance Number (SIN)</a>
                      <a href="#foreign-worker" className="cursor-pointer hover:underline">Hire a temporary foreign worker</a>
                      <a href="#skilled-worker" className="cursor-pointer hover:underline">Immigrate as a skilled worker</a>
                    </div>
                  </div>
                </li>


                <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                  <span className="text-[20px]">Immigration and citizenship</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Immigration and citizenship</h1>
                      <Link to='/Work_Permit'> <a href="" className="cursor-pointer hover:underline">work permit checking</a></Link>
                      <Link to='/Lima'> <a href="#visit" className="cursor-pointer hover:underline">LMIA Checking</a></Link>
                      <Link to='/Visa'> <a href="#immigrate" className="cursor-pointer hover:underline">Visa Chacking</a></Link>
                      <Link to='/Application_Stts'> <a href="#work" className="cursor-pointer hover:underline">Application Status</a></Link>
                      <a href="#study" className="cursor-pointer hover:underline">Study</a>
                      <a href="#citizenship" className="cursor-pointer hover:underline">Citizenship</a>
                      <a href="#new-immigrants" className="cursor-pointer hover:underline">New immigrants</a>
                      <a href="#canadians" className="cursor-pointer hover:underline">Canadians</a>
                      <a href="#refugees-asylum" className="cursor-pointer hover:underline">Refugees and asylum</a>
                      <a href="#enforcement-violations" className="cursor-pointer hover:underline">Enforcement and violations</a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <a href="#most-requested" className="cursor-pointer hover:underline">Most requested</a>
                      <a href="#sign-in" className="cursor-pointer hover:underline">Sign in or create an account to apply online</a>
                      <a href="#check-status" className="cursor-pointer hover:underline">Check your application status</a>
                      <a href="#processing-times" className="cursor-pointer hover:underline">Check application processing times</a>
                      <a href="#application-form" className="cursor-pointer hover:underline">Find an application form</a>
                      <a href="#pay-fees" className="cursor-pointer hover:underline">Pay your fees</a>
                      <a href="#eta-visa" className="cursor-pointer hover:underline">Find out if you need an eTA or a visa to visit Canada</a>
                      <a href="#help-centre" className="cursor-pointer hover:underline">Have questions? Find answers in the Help Centre</a>
                    </div>
                  </div>
                </li>

                <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                  <span className="text-[20px]">Travel and tourism</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Travel and tourism</h1>
                      <a href="#travel-advice" className="cursor-pointer hover:underline">Travel advice and advisories</a>
                      <a href="#covid19-travel" className="cursor-pointer hover:underline">COVID-19: Travel, testing and borders</a>
                      <a href="#visit-canada" className="cursor-pointer hover:underline">Visit Canada</a>
                      <a href="#travel-outside" className="cursor-pointer hover:underline">Travel outside Canada</a>
                      <a href="#air-travel" className="cursor-pointer hover:underline">Air travel</a>
                      <a href="#return-canada" className="cursor-pointer hover:underline">Return to Canada</a>
                      <a href="#canadian-passports" className="cursor-pointer hover:underline">Canadian passports and travel documents</a>
                      <a href="#canadian-attractions" className="cursor-pointer hover:underline">Canadian attractions, events and experiences</a>
                      <a href="#assistance-outside" className="cursor-pointer hover:underline">Assistance outside Canada</a>
                      <a href="#stay-connected" className="cursor-pointer hover:underline">Stay connected</a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <a href="#emergency-assistance" className="cursor-pointer hover:underline">Emergency assistance abroad</a>
                      <a href="#visa-requirements" className="cursor-pointer hover:underline">Find out if you need a visa to travel to Canada</a>
                      <a href="#apply-eta" className="cursor-pointer hover:underline">Apply for an eTA</a>
                      <a href="#apply-nexus" className="cursor-pointer hover:underline">Apply for NEXUS</a>
                      <a href="#register-canadian-abroad" className="cursor-pointer hover:underline">Register as a Canadian abroad</a>
                      <a href="#travel-insurance" className="cursor-pointer hover:underline">Travel insurance</a>
                    </div>
                  </div>
                </li>

                <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                  <span className="text-[20px]">Business and industry</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Business and industry</h1>
                      <a href="#start-business" className="cursor-pointer hover:underline">Starting a business</a>
                      <a href="#business-grants" className="cursor-pointer hover:underline">Business grants and financing</a>
                      <a href="#business-taxes" className="cursor-pointer hover:underline">Business taxes</a>
                      <a href="#federal-corporations" className="cursor-pointer hover:underline">Federal corporations</a>
                      <a href="#hiring-employees" className="cursor-pointer hover:underline">Hiring and managing employees</a>
                      <a href="#international-trade" className="cursor-pointer hover:underline">International trade and investment</a>
                      <a href="#permits-licences" className="cursor-pointer hover:underline">Permits, licences and regulations</a>
                      <a href="#business-government" className="cursor-pointer hover:underline">Doing business with government</a>
                      <a href="#r-and-d" className="cursor-pointer hover:underline">R&D and innovation</a>
                      <a href="#research-intelligence" className="cursor-pointer hover:underline">Research and business intelligence</a>
                      <a href="#intellectual-property" className="cursor-pointer hover:underline">Intellectual property and copyright</a>
                      <a href="#maintaining-business" className="cursor-pointer hover:underline">Maintaining your business</a>
                      <a href="#protecting-business" className="cursor-pointer hover:underline">Protecting your business</a>
                      <a href="#insolvency-business" className="cursor-pointer hover:underline">Insolvency for business</a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <a href="#find-corporation" className="cursor-pointer hover:underline">Find a corporation</a>
                      <a href="#report-imported-goods" className="cursor-pointer hover:underline">Report your imported goods</a>
                      <a href="#search-trademarks" className="cursor-pointer hover:underline">Search for trademarks</a>
                      <a href="#review-tariffs" className="cursor-pointer hover:underline">Review custom tariffs for importing goods</a>
                      <a href="#find-patent" className="cursor-pointer hover:underline">Find a patent</a>
                      <a href="#import-export-canada" className="cursor-pointer hover:underline">Import and export from Canada</a>
                      <a href="#name-business" className="cursor-pointer hover:underline">Name a business</a>
                      <a href="#make-changes-corporation" className="cursor-pointer hover:underline">Make changes to your corporation (Online Filing Centre)</a>
                    </div>
                  </div>
                </li>
                <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                  <span className="text-[20px]">Benefits</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Benefits</h1>
                      <a href="#ei-benefits-leave" className="cursor-pointer hover:underline">Employment Insurance benefits and leave</a>
                      <a href="#family-caregiving-benefits" className="cursor-pointer hover:underline">Family and caregiving benefits</a>
                      <a href="#public-pensions" className="cursor-pointer hover:underline">Public pensions</a>
                      <a href="#student-aid-education" className="cursor-pointer hover:underline">Student aid and education planning</a>
                      <a href="#housing-benefits" className="cursor-pointer hover:underline">Housing benefits</a>
                      <a href="#disability-benefits" className="cursor-pointer hover:underline">Disability benefits</a>
                      <a href="#benefits-audience" className="cursor-pointer hover:underline">Benefits by audience</a>
                      <a href="#benefits-payment-dates" className="cursor-pointer hover:underline">Benefits payment dates</a>
                      <a href="#benefits-finder" className="cursor-pointer hover:underline">Benefits finder</a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <a href="#notify-government-death" className="cursor-pointer hover:underline">Notify the government of a death</a>
                      <a href="#apply-ei" className="cursor-pointer hover:underline">Apply for Employment Insurance</a>
                      <a href="#apply-student-loans" className="cursor-pointer hover:underline">Apply for student loans and grants</a>
                      <a href="#sign-in-canada-account" className="cursor-pointer hover:underline">Sign in to a Government of Canada online account</a>
                      <a href="#sign-up-direct-deposit" className="cursor-pointer hover:underline">Sign up for direct deposit</a>
                      <a href="#submit-ei-report" className="cursor-pointer hover:underline">Submit your EI report</a>
                      <a href="#child-family-benefits-calculators" className="cursor-pointer hover:underline">Child and family benefits calculators</a>
                    </div>
                  </div>
                </li>
                <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                  <span className="text-[20px]">Health</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Health</h1>
                      <a href="#food-nutrition" className="cursor-pointer hover:underline">Food and nutrition</a>
                      <a href="#diseases-conditions" className="cursor-pointer hover:underline">Diseases and conditions</a>
                      <a href="#vaccines-immunization" className="cursor-pointer hover:underline">Vaccines and immunization</a>
                      <a href="#drug-health-products" className="cursor-pointer hover:underline">Drug and health products</a>
                      <a href="#product-safety" className="cursor-pointer hover:underline">Product safety</a>
                      <a href="#health-risks-safety" className="cursor-pointer hover:underline">Health risks and safety</a>

                    </div>
                    <div className="flex flex-col gap-4">
                      <a href="#healthy-living" className="cursor-pointer hover:underline">Healthy living</a>
                      <a href="#indigenous-health" className="cursor-pointer hover:underline">Indigenous health</a>
                      <a href="#health-system-services" className="cursor-pointer hover:underline">Health system and services</a>
                      <a href="#science-research-data" className="cursor-pointer hover:underline">Science, research and data</a>
                      <a href="#licensed-cannabis" className="cursor-pointer hover:underline">Licensed cultivators, processors and seller of cannabis</a>
                      <a href="#food-recalls-alerts" className="cursor-pointer hover:underline">Food and product recalls and safety alerts</a>
                      <a href="#canada-food-guide" className="cursor-pointer hover:underline">Canada's food guide</a>
                    </div>
                  </div>
                </li>
                <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                  <span className="text-[20px]">Taxes</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Taxes</h1>
                      <a href="#income-tax" className="cursor-pointer hover:underline">Income tax</a>
                      <a href="#gst-hst" className="cursor-pointer hover:underline">GST/HST</a>
                      <a href="#payroll" className="cursor-pointer hover:underline">Payroll</a>
                      <a href="#business-number" className="cursor-pointer hover:underline">Business number</a>
                      <a href="#savings-pension-plans" className="cursor-pointer hover:underline">Savings and pension plans</a>
                      <a href="#tax-credits-benefits" className="cursor-pointer hover:underline">Tax credits and benefits for individuals</a>
                      <a href="#excise-taxes" className="cursor-pointer hover:underline">Excise taxes, duties, and levies</a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <a href="#charities-giving" className="cursor-pointer hover:underline">Charities and giving</a>
                      <a href="#my-account" className="cursor-pointer hover:underline">My Account</a>
                      <a href="#my-business-account" className="cursor-pointer hover:underline">My Business Account</a>
                      <a href="#represent-client" className="cursor-pointer hover:underline">Represent a Client</a>
                      <a href="#file-gst-hst-return" className="cursor-pointer hover:underline">File a GST/HST return (NETFILE)</a>
                      <a href="#make-payment-cra" className="cursor-pointer hover:underline">Make a payment to the Canada Revenue Agency</a>
                      <a href="#find-benefit-payment-date" className="cursor-pointer hover:underline">Find the next benefit payment date</a>
                    </div>
                  </div>
                </li>
                <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                  <span className="text-[20px]">Environment and natural resources</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Environment and natural resources</h1>
                      <a href="#weather-climate-hazards" className="cursor-pointer hover:underline">Weather, climate and hazards</a>
                      <a href="#energy" className="cursor-pointer hover:underline">Energy</a>
                      <a href="#natural-resources" className="cursor-pointer hover:underline">Natural resources</a>
                      <a href="#agriculture-environment" className="cursor-pointer hover:underline">Agriculture and the environment</a>
                      <a href="#fisheries" className="cursor-pointer hover:underline">Fisheries</a>
                      <a href="#wildlife-plants-species" className="cursor-pointer hover:underline">Wildlife, plants and species</a>
                      <a href="#pollution-waste-management" className="cursor-pointer hover:underline">Pollution and waste management</a>
                      <a href="#environmental-conservation-protection" className="cursor-pointer hover:underline">Environmental conservation and protection</a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <a href="#local-weather-forecast" className="cursor-pointer hover:underline">Local weather forecast</a>
                      <a href="#fuel-efficient-vehicles" className="cursor-pointer hover:underline">Fuel-efficient vehicles</a>
                      <a href="#home-energy-efficiency" className="cursor-pointer hover:underline">Home energy efficiency</a>
                      <a href="#species-at-risk" className="cursor-pointer hover:underline">Species at risk</a>
                      <a href="#prepare-severe-weather" className="cursor-pointer hover:underline">Prepare for severe weather</a>
                    </div>
                  </div>
                </li>
                <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                  <span className="text-[20px]">National security and defence</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">National security and defence</h1>
                      <a href="#national-security" className="cursor-pointer hover:underline">National security</a>
                      <a href="#canadian-armed-forces" className="cursor-pointer hover:underline">Canadian Armed Forces</a>
                      <a href="#defence-equipment" className="cursor-pointer hover:underline">Defence equipment purchases and upgrades</a>
                      <a href="#transportation-security" className="cursor-pointer hover:underline">Transportation security</a>
                      <a href="#securing-border" className="cursor-pointer hover:underline">Securing the border</a>
                      <a href="#cyber-security" className="cursor-pointer hover:underline">Cyber security</a>
                      <a href="#jobs-national-security" className="cursor-pointer hover:underline">Jobs in national security and defence</a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <a href="#services-military" className="cursor-pointer hover:underline">Services and benefits for the military</a>
                      <a href="#jobs-canadian-armed-forces" className="cursor-pointer hover:underline">Jobs in the Canadian Armed Forces</a>
                      <a href="#military-ranks" className="cursor-pointer hover:underline">Military ranks</a>
                      <a href="#defence-equipment-list" className="cursor-pointer hover:underline">Defence equipment</a>
                      <a href="#terrorist-entities-list" className="cursor-pointer hover:underline">Current list of terrorist entities</a>
                      <a href="#join-cadet-program" className="cursor-pointer hover:underline">Join the Cadet Program</a>
                      <a href="#canada-defence-policy" className="cursor-pointer hover:underline">Canada's Defence policy</a>
                    </div>
                  </div>
                </li>
                <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                  <span className="text-[20px]">Culture, history and sport</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Culture, history and sport</h1>
                      <a href="#funding-culture-history-sport" className="cursor-pointer hover:underline">Funding - Culture, history and sport</a>
                      <a href="#events-celebrations" className="cursor-pointer hover:underline">Events, celebrations and commemorations</a>
                      <a href="#cultural-landmarks-attractions" className="cursor-pointer hover:underline">Cultural landmarks and attractions</a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <a href="#canadian-identity-society" className="cursor-pointer hover:underline">Canadian identity and society</a>
                      <a href="#sport" className="cursor-pointer hover:underline">Sport</a>
                      <a href="#history-heritage" className="cursor-pointer hover:underline">History and heritage</a>
                      <a href="#arts-media" className="cursor-pointer hover:underline">Arts and media</a>
                      <a href="#cultural-youth-programs" className="cursor-pointer hover:underline">Cultural youth programs</a>
                      <a href="#cultural-trade-investment" className="cursor-pointer hover:underline">Cultural trade and investment</a>
                      <a href="#visit-canadian-virtual-war-memorial" className="cursor-pointer hover:underline">Visit the Canadian Virtual War Memorial</a>
                      <a href="#anthems-symbols-canada" className="cursor-pointer hover:underline">Anthems and symbols of Canada</a>
                      <a href="#find-crtc-decision" className="cursor-pointer hover:underline">Find a CRTC decision</a>
                      <a href="#research-family-history" className="cursor-pointer hover:underline">Research your family history</a>
                      <a href="#search-census-records" className="cursor-pointer hover:underline">Search census records</a>
                      <a href="#landmarks-attractions-capital" className="cursor-pointer hover:underline">Landmarks and attractions in Canada's capital</a>
                    </div>
                  </div>
                </li>
                <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                  <span className="text-[20px]">Policing, justice and emergencies</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Policing, justice and emergencies</h1>
                      <a href="#policing" className="cursor-pointer hover:underline">Policing</a>
                      <a href="#justice" className="cursor-pointer hover:underline">Justice</a>
                      <a href="#emergencies" className="cursor-pointer hover:underline">Emergencies</a>
                      <a href="#corrections" className="cursor-pointer hover:underline">Corrections</a>
                      <a href="#parole-record-suspension" className="cursor-pointer hover:underline">Parole, record suspension, expungement and clemency</a>
                      <a href="#victims-of-crime" className="cursor-pointer hover:underline">Victims of crime</a>
                      <a href="#apply-renew-firearms-licence" className="cursor-pointer hover:underline">Apply/Renew a firearms licence</a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <a href="#get-criminal-records-check" className="cursor-pointer hover:underline">Get a criminal records check</a>
                      <a href="#apply-criminal-record-suspension" className="cursor-pointer hover:underline">Apply for a criminal record suspension</a>
                      <a href="#what-to-do-emergency" className="cursor-pointer hover:underline">What to do during an emergency</a>
                      <a href="#know-law-impaired-driving" className="cursor-pointer hover:underline">Know the law on impaired driving</a>
                      <a href="#help-solve-crime" className="cursor-pointer hover:underline">Help solve a crime</a>
                    </div>
                  </div>
                </li>
                <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                  <span className="text-[20px]">Transport and infrastructure</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Transport and infrastructure</h1>
                      <a href="#aviation" className="cursor-pointer hover:underline">Aviation</a>
                      <a href="#marine-transportation" className="cursor-pointer hover:underline">Marine transportation</a>
                      <a href="#road-transportation" className="cursor-pointer hover:underline">Road transportation</a>
                      <a href="#rail-transportation" className="cursor-pointer hover:underline">Rail transportation</a>
                      <a href="#dangerous-goods" className="cursor-pointer hover:underline">Dangerous goods</a>
                      <a href="#infrastructure" className="cursor-pointer hover:underline">Infrastructure</a>
                      <a href="#zero-emission-vehicles" className="cursor-pointer hover:underline">Zero-emission vehicles</a>
                      <a href="#drone-safety" className="cursor-pointer hover:underline">Drone safety</a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <a href="#what-cant-bring-airplane" className="cursor-pointer hover:underline">What you can't bring on an airplane</a>
                      <a href="#register-vessel" className="cursor-pointer hover:underline">Register your vessel</a>
                      <a href="#child-car-seat-safety" className="cursor-pointer hover:underline">Child car seat safety</a>
                      <a href="#transporting-dangerous-goods" className="cursor-pointer hover:underline">Transporting dangerous goods - Regulations</a>
                      <a href="#canadian-aviation-regulations" className="cursor-pointer hover:underline">Canadian Aviation Regulations</a>
                    </div>
                  </div>
                </li>
                <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                  <span className="text-[20px]">Canada and the world</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Canada and the world</h1>
                      <a href="#food-nutrition" className="cursor-pointer hover:underline">Food and nutrition</a>
                      <a href="#diseases-conditions" className="cursor-pointer hover:underline">Diseases and conditions</a>
                      <a href="#vaccines-immunization" className="cursor-pointer hover:underline">Vaccines and immunization</a>
                      <a href="#drug-health-products" className="cursor-pointer hover:underline">Drug and health products</a>
                      <a href="#product-safety" className="cursor-pointer hover:underline">Product safety</a>
                      <a href="#health-risks-safety" className="cursor-pointer hover:underline">Health risks and safety</a>
                      <a href="#healthy-living" className="cursor-pointer hover:underline">Healthy living</a>
                      <a href="#indigenous-health" className="cursor-pointer hover:underline">Indigenous health</a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <a href="#health-system-services" className="cursor-pointer hover:underline">Health system and services</a>
                      <a href="#science-research-data" className="cursor-pointer hover:underline">Science, research and data</a>
                      <a href="#licensed-cannabis" className="cursor-pointer hover:underline">Licensed cultivators, processors and seller of cannabis</a>
                      <a href="#food-recalls-alerts" className="cursor-pointer hover:underline">Food and product recalls and safety alerts</a>
                      <a href="#canada-food-guide" className="cursor-pointer hover:underline">Canada's food guide</a>
                    </div>
                  </div>
                </li>
                <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                  <span className="text-[20px]">Money and finances</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Money and finances</h1>
                      <a href="#managing-money" className="cursor-pointer hover:underline">Managing your money</a>
                      <a href="#debt-borrowing" className="cursor-pointer hover:underline">Debt and borrowing</a>
                      <a href="#savings-investments" className="cursor-pointer hover:underline">Savings and investments</a>
                      <a href="#education-funding" className="cursor-pointer hover:underline">Education funding</a>
                      <a href="#pensions-retirement" className="cursor-pointer hover:underline">Pensions and retirement</a>
                      <a href="#protection-frauds-scams" className="cursor-pointer hover:underline">Protection from frauds and scams</a>
                      <a href="#financial-tools-calculators" className="cursor-pointer hover:underline">Financial tools and calculators</a>
                      <a href="#financial-literacy-programs" className="cursor-pointer hover:underline">Financial literacy programs</a>
                      <a href="#consumer-affairs" className="cursor-pointer hover:underline">Consumer affairs</a>
                      <a href="#insolvency" className="cursor-pointer hover:underline">Insolvency</a>
                      <a href="#taxes" className="cursor-pointer hover:underline">Taxes</a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <a href="#government-finances" className="cursor-pointer hover:underline">Government finances</a>
                      <a href="#business-grants-financing" className="cursor-pointer hover:underline">Business grants and financing</a>
                      <a href="#financial-services-regulation" className="cursor-pointer hover:underline">Financial and money services regulation</a>
                      <a href="#find-bankruptcy-insolvency-record" className="cursor-pointer hover:underline">Find a bankruptcy or insolvency record</a>
                      <a href="#student-loans" className="cursor-pointer hover:underline">Student loans</a>
                      <a href="#set-up-direct-deposit" className="cursor-pointer hover:underline">Set up direct deposit</a>
                      <a href="#mortgages" className="cursor-pointer hover:underline">Mortgages</a>
                      <a href="#credit-report-scores" className="cursor-pointer hover:underline">Credit report and scores</a>
                      <a href="#make-a-budget" className="cursor-pointer hover:underline">Make a budget</a>
                      <a href="#rates-contribution-limits" className="cursor-pointer hover:underline">Rates and contribution limits</a>
                    </div>
                  </div>
                </li>
                <li className="group p-3 cursor-pointer hover:bg-white w-full text-[14px] hover:text-black py-2]">
                  <span className="text-[20px]">Science and innovation</span>
                  <div className="bg-white min-w-max text-black absolute top-0 left-[100%] p-3 justify-between items-center gap-12 opacity-0 hidden group-hover:opacity-100 w-full shadow-2xl z-10 group-hover:flex transition duration-200 border">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-2xl underline font-bold">Science and innovation</h1>
                      <a href="#research-funding-awards" className="cursor-pointer hover:underline">Research funding and awards</a>
                      <a href="#science-subjects" className="cursor-pointer hover:underline">Science subjects</a>
                      <a href="#open-data-statistics" className="cursor-pointer hover:underline">Open data, statistics and archives</a>
                      <a href="#research-institutes-facilities" className="cursor-pointer hover:underline">Research institutes and facilities</a>
                      <a href="#r-and-d-innovation" className="cursor-pointer hover:underline">R&D and innovation</a>
                      <a href="#intellectual-property-copyright" className="cursor-pointer hover:underline">Intellectual property and copyright</a>
                      <a href="#directory-scientists-professionals" className="cursor-pointer hover:underline">Directory of scientists and research professionals</a>
                      <a href="#science-education-resources" className="cursor-pointer hover:underline">Science education resources</a>
                    </div>
                    <div className="flex flex-col gap-4">
                      <a href="#national-building-codes" className="cursor-pointer hover:underline">National building codes</a>
                      <a href="#official-times-across-canada" className="cursor-pointer hover:underline">Official times across Canada</a>
                      <a href="#check-sunrise-sunset-times" className="cursor-pointer hover:underline">Check sunrise and sunset times</a>
                      <a href="#grants-technological-innovation" className="cursor-pointer hover:underline">Grants for technological innovation (IRAP)</a>
                      <a href="#federal-science-library" className="cursor-pointer hover:underline">Federal Science Library</a>
                      <a href="#live-view-northern-lights" className="cursor-pointer hover:underline">Live view of northern lights cam</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export function MaterialSymbolsKeyboardArrowDownRounded(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"></path></svg>
  )
}
export default Header