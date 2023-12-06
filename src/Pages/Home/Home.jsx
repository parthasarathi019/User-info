// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';

const App = () => {
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [noResult, setNoResult] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:7000/result/${searchId}`);
      setNoResult(false);
      setSearchResult(response.data);
    } catch (error) {
      console.error(error);
      setNoResult(true);
      setSearchResult(null);
    }
  };

  return (
    <div>

      <div className='md:px-[60px] mt-7'>
        <div className=' flex gap-x-4'>
          <p>Canada.ca &gt;</p>
          <p className='underline'>Immigration and citizenship &gt;</p>
          <p> My application</p>
        </div>
        <p className='text-[#333333] font-semibold pt-7 text-[39px]'>How to check your application status</p>
        <div className='py-1'><hr className='border border-red-900  border-t-0' /></div>
        <div className=' flex justify-between items-center '>
          <p className='text-[#333333] text-[23px]'>Select your application type to find out how to check your application status.</p>
          <button className='px-[16px] py-[10px] rounded-md bg-red-700 text-white'>Need Help?</button>
        </div>
      </div>
      <div className='mt-[1.5em] md:px-[60px]'>
        <p className='text-[#333333] font-bold text-[17px]'><span className='text-[20px] text-red-700'>*</span>What did you apply for?<span className=' text-red-700'> (required)</span></p>
      </div>
      <div>
        <div className='w-[91%] mx-auto'>
          <div className='flex gap-x-3'>
            <input placeholder='Make your selection...' className="w-full bg-slate-50  border-[1.8px] border-gray-800 rounded-md h-[2em] text-[.9em]  lg:text-xl md:text-[.9em] md:h-10 text-text placeholder-text-sm bg-transparent outline-none p-2" type="text" />
            {/* <button className='text-black style'>Search</button> */}
          </div>
          <div className='flex gap-x-3 mt-4'>
            <button className='px-[16px] py-[8px] rounded-md bg-[#333333] text-white hover:scale-105 transition-all duration-300'>Continue</button>
          </div>
        </div>

      </div>

      {searchResult && !noResult ? (
        <SearchResult user={searchResult} />
      ) : (
        noResult && <h4>--- No Result Found ---</h4>
      )}

      {/* <img className='mt-4 shadow-lg  w-full cursor-pointer' src={moduleName2} alt="" /> */}

      <footer className='mt-[100px]'>
        <div className='flex justify-between gap-x-[7px] items-center px-[54px] pb-[43px]'>
          <p>Date modified: 2023-11-23</p>
          <button className='bg-[#eaebed] px-[55px] py-[10px] rounded-[4px]'>Share this page</button>
        </div>
        <div className='bg-[#33465c] py-[24px] px-[54px]'>
          <p className='text-[27px]     text-white'>Immigration and citizenship</p>
          <div className='flex gap-x-[398px] pt-[14px] '>
            <p className='text-[16px]   text-white'>Help Centre</p>
            <p className='text-[16px]   text-white'>Contact us</p>
          </div>
        </div>
        <div className='bg-[#26374a] px-[54px] py-[20px]'>
          <p className='text-[27px]     text-white'>Government of Canada</p>
          <section className='flex gap-x-[230px]'>
            <div className='flex flex-col gap-y-3'>
              <p className='text-[16px] text-white'>All contacts</p>
              <p className='text-[16px] text-white'>Jobs</p>
              <p className='text-[16px] text-white'>Immigration and citizenship</p>
              <p className='text-[16px] text-white'>Travel and tourism</p>
              <p className='text-[16px] text-white'>Business</p>
              <p className='text-[16px] text-white'>Benefits</p>
              <p className='text-[16px] text-white'>Health</p>

            </div>
            <div className='flex flex-col gap-y-3'>
              <p className='text-[16px] text-white'>Departments and agencies</p>
              <p className='text-[16px] text-white'>Taxes</p>
              <p className='text-[16px] text-white'>Environment and natural resources</p>
              <p className='text-[16px] text-white'>National security and defence</p>
              <p className='text-[16px] text-white'>Culture, history and sport</p>
              <p className='text-[16px] text-white'>Policing, justice and emergencies</p>
              <p className='text-[16px] text-white'>Transport and infrastructure</p>

            </div>
            <div className='flex flex-col gap-y-3'>
              <p className='text-[16px] text-white'>About government</p>
              <p className='text-[16px] text-white'>Canada and the world</p>
              <p className='text-[16px] text-white'>Money and finance</p>
              <p className='text-[16px] text-white'>Science and innovation</p>
              <p className='text-[16px] text-white'>Indigenous peoples</p>
              <p className='text-[16px] text-white'>Veterans and military</p>
              <p className='text-[16px] text-white'>Youth</p>

            </div>
          </section>
        </div>
        <div className='flex justify-between px-[54px] items-center'>
          <div className='flex gap-x-[64px] text-[15px]'>
            <p>Social media</p>
            <p>Mobile applications</p>
            <p>About Canada.ca</p>
            <p>Terms and conditions</p>
            <p>Privacy</p>
          </div>
          <div className='text-[64px] font-semibold font-serif'>
            Canada
          </div>
        </div>
        <div>

        </div>
      </footer>
    </div>
  );
};


export function IcBaselineDownload(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" {...props}><path fill="black" d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7l7-7z"></path></svg>
  )
}



const SearchResult = ({ user }) => {
  return (
    <section className='border-2 border-gray-600 rounded-[26px] my-3 mx-2'>
      <div className='my-4 mx-2'>
        <div className='flex justify-center items-center gap-x-4 px-6'>
          <div>
            <img className='w-[205px] h-[245px] rounded-[10px]' src={user.P_url} alt="" srcSet="" />
          </div>
          <div>
            <p><span className='text-[15px]'>Canditate Name:</span>  <span className='text-[19px] font-bold '>{user.name}</span></p>
            <p className='mt-2'><span className='text-[15px]'>Fathers Name:</span> <span className='text-[19px] font-bold '>{user.F_name}</span></p>
            <p className='mt-2'><span className='text-[15px]'>Mothers Name:</span> <span className='text-[19px] font-bold '>{user.M_name}</span></p>
            <p className='mt-2'><span className='text-[15px]'>Permanant Address:</span> <span className='text-[19px] font-bold '> {user.Po_address}</span></p>
            <p className='mt-2'><span className='text-[15px]'>Nationality:</span> <span className='text-[19px] font-bold '>{user.nationality}</span></p>
            <p className='mt-2'><span className='text-[15px]'>Religion:</span> <span className='text-[19px] font-bold '>{user.Religion}</span></p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-6 mt-4'>
          <div className={`${!user.Doc_1_PC && 'hidden'}`}>
            <p className='text-center text-[30px] font-sans font-semibold mb-2'>{user.Doc_1_Nm && user.Doc_1_Nm}</p>
            <div className='max-w-[100%] rounded-md h-[800px] border-[4px] border-[#e8c556]'><img className='' src={user.Doc_1_PC && user.Doc_1_PC} alt="Please Wait Few Moment" /></div>
          </div>
          <div className={`${!user.Doc_2_PC && 'hidden'}`}>
            <p className='text-center text-[30px] font-sans font-semibold mb-2'>{user.Doc_2_Nm && user.Doc_2_Nm}</p>
            <div className='max-w-[100%] rounded-md h-[800px] border-[4px] border-[#e8c556]'><img className='' src={user.Doc_2_PC && user.Doc_2_PC} alt="Please Wait Few Moment" /></div>
          </div>
          <div className={`${!user.Doc_3_PC && 'hidden'}`}>
            <p className='text-center text-[30px] font-sans font-semibold mb-2'>{user.Doc_3_Nm && user.Doc_3_Nm}</p>
            <div className='max-w-[100%] rounded-md h-[800px] border-[4px] border-[#e8c556]'><img className='' src={user.Doc_3_PC && user.Doc_3_PC} alt="Please Wait Few Moment" /></div>
          </div>
          <div className={`${!user.Doc_4_PC && 'hidden'}`}>
            <p className='text-center text-[30px] font-sans font-semibold mb-2'>{user.Doc_4_Nm && user.Doc_4_Nm}</p>
            <div className='max-w-[100%] rounded-md h-[800px] border-[4px] border-[#e8c556]'><img className='' src={user.Doc_4_PC && user.Doc_4_PC} alt="Please Wait Few Moment" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;

