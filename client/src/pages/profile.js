import React from 'react'
//import Roundimg from '../images/'



const Player_info = () => {
  return (

    <>
      <div className='banner-box' >
        <h2 className='player-name '>Vaccum Vampire <img style={{ width: '25px', position: 'absolute', left: '130px', }} src='../images/profile_img/indflag.png' alt='flagimg' /></h2>
        <h3 className='user-name'>Always busy..! </h3>

        <img className='cover-img' src="../images/profile_img/prf1.jpeg" alt='coverimage' />
      </div>
      <div className='content-section'>
        <h2 className='rightside'>ABOUT</h2>

        <h3 style={{ fontWeight: 'bold' }}>Team</h3>
        <hr className='hrtag'></hr>
        <hr className='hrtag-2'></hr>
        <hr className='hrtag-3'></hr>
        <hr className='hrtag-4'></hr>
        <hr className='hrtag-5'></hr>
        <h2 className='leftside'>Gameprofiles <span>&lt; &gt;</span></h2>
        <div className="grid-container">
          <div className="grid-right">
            <h1 className='grid-name'>&nbsp;Duckgo <img src='../images/profile_img/mr.png' /> <i className='fa fa-desktop'></i></h1>
          </div>

          <div className="grid-right">
            <h1 className='grid-name'>&nbsp;Need for speed <img src='../images/profile_img/gnfs.png' /> <i className='fa fa-desktop'></i></h1>
          </div>

          <div className="grid-right">
            <h1 className='grid-name'>&nbsp;GTA-Vice city <img src='../images/profile_img/gta.png' style={{ filter: 'brightness(95%)' }} /> <i className='fa fa-desktop'></i></h1>
          </div>

        </div>
        <div className='grid-container1'>
          <div className='grid-left'><p style={{ color: '#fff' }}>I'm a Esports player last 3yrs, experience in xobox communitiy, CG-community,also msb league community now I wanna build a largest communities in Tamilnadu.</p> </div>
        </div>
      </div>
      <div className='profile-info'>
        <form>
          <div className='details'>
              
            <div className='form-group'>
            <h2>Player-Portal <img src='/images/profile_img/gnfs.png'/></h2>
              <label for='player-name'>Player Name:</label>
              <input type='text' placeholder='Vaccum' name='player-name' required />
            </div>
            <div className='form-group'>
              <label for='user-name'>Username:</label>
              <input type='text' placeholder='Vaccum-Vampire' name='user-name' required />
            </div>
            <div className='form-group'>
              <label for='dob'>D.O.B:</label>
              <input type='' placeholder='GraveYard' name='dob' required/>
            </div>
            <div className='form-group'>
              <label for='phonenumber'>Phone Number:</label>
              <input type='phonenumber' placeholder='+91' name='phonenumber' required  />
            </div>
            <div className='form-group'>
              <label for='email'>Email ID:</label>
              <input type='text' placeholder='vaccumvampire@cg.com' name='email' required />
            </div>
            <button> Edit</button>
          </div>
        </form>
      </div>




    </>


  )
}

export default Player_info