import React from 'react'
import footerlogo from "../Assets/footerlogo.png"
import facebook from "../Assets/facebook.png"
import instagram from "../Assets/instagram.png"
import twitter from "../Assets/twitter.png"
import "./Footer.css"
import phonecall1 from "../assets/phonecall1.png"


function Footer() {
    return (

        <div class="footer mainSection section" id="footerSection">
            <div class="container">
                <div class="footer-container">
                    <a href="https://www.meram.bel.tr/" class="logo">
                        <img src={footerlogo} alt="Meram Belediyesi • Bizim Meram" /></a>
                    <div class="social">
                        <div class="sociallink">
                            <a href="https://www.facebook.com/Meram.Belediyesi" target="_blank" class="facebook">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="https://twitter.com/MeramBelediyesi" target="_blank" class="twitter">
                                <img src={twitter} alt="" />
                            </a>
                            <a href="https://www.instagram.com/meram.belediyesi/" target="_blank" class="instagram">
                                <img src={instagram} alt="" />
                            </a>
                        </div>
                        <div class="text">
                            Meram Belediyesi
                            Sosyal Medya Hesapları
                        </div>
                    </div>
                    <div class="rightinfo">
                        <div class="solutioncall">
                            <img src={phonecall1} alt="" />
                            <span class="text">
                                <small>MERAM BELEDİYESİ ÇÖZÜM MERKEZİ</small>
                                444 3 042                        </span>
                        </div>
                        <a href="mailto:bizimmeram@meram.bel.tr" class="envelope">
                            <span>bizimmeram</span>@meram.bel.tr                    </a>
                        <div class="address">
                            Yenişehir Mahallesi Azerbaycan Caddesi No: 5 42010
                            Meram / KONYA                    </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Footer
