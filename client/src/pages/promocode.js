/* global $ */
import React, { useEffect, useState, useRef } from 'react';
import DataFetcher from '../components/fetch';

const MrRacerPromocode = () => {
    const [PROMOCODE_DATA, setPromocode] = useState("NOT AVAILABLE");
    let hasFetchedData = useRef(false);
    useEffect(() => {
        
        document.title = "MR Racer Promocode - ChennaiGames";
    
        var storedValue = localStorage.getItem("mr_racer_promocode");
   
        // Check if the value exists
        if (storedValue !== null) {
            
            // document.getElementById("promo").textContent =storedValue;
            setPromocode(storedValue);
        } else {
            hasFetchedData = true;
            // document.getElementById("promo").textContent =promocode;
            DataFetcher('get_promocode', {}).then((apidata) => {
                
                if(apidata.status === "S")
                {
                    setPromocode(apidata.data.promocode);
                    localStorage.setItem("mr_racer_promocode",apidata.data.promocode);
                }
            });
            
            
        }
    }, []);
    function copyPromo() {
        var promoText = document.getElementById("promo");
        var range = document.createRange();
        range.selectNode(promoText);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        alert("Promo code copied!");
      }
  
    
    return (
        <>
        <div className='container'>
      <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="promo-container">
          <div class="row">
            <div class="col-12" align="center">
            <img src="./images/mrracer_promocode/icon.avif" width="100" style={{borderRadius: "10px"}} alt='chennaigames'/>
            <br/>
              <img src="./images/mrracer_promocode/mrracer_logo.avif" width="300" alt='chennaigames'/>
            </div>
          </div>
          <hr/>
          <div class="promo-code">Your Promo Code: <br/><br/><span id="promo">{PROMOCODE_DATA}</span> </div>
          <button class="btn btn-outline-warning copy-btn" onClick={() => { copyPromo(1) }}><i class="fas fa-copy copy-btn" onClick={() => { copyPromo(1) }}></i> Copy Code</button>
          <br/>
          <br/>
          <br/>
          <h5>DOWNLOAD NOW</h5>
          <a href='https://play.google.com/store/apps/details?id=com.chennaigames.mrracer.premium&utm_source=GAMESCOM2024&utm_campaign=GAMESCOM2024&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' width="200"/></a>
        </div>
      </div>
    </div>
    </div>
        </>
    )
}

export default MrRacerPromocode