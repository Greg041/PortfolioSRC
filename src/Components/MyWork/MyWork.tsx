import './MyWork.css';
import themePattern from '../../assets/theme_pattern.svg';
import devSearch from '../../assets/works/devsearch.jpg';
import geeksZone from '../../assets/works/geeks_zone.jpg';
import investLanding from '../../assets/works/invest_landing.jpg';
import iqPercentageReader from '../../assets/works/iq_percentage_reader.png';
import botForex from '../../assets/works/bot_forex.jpg';
import yugiohBot from '../../assets/works/yugioh_bot.jpg';


const MyWork = (): JSX.Element => {
  return (
    <div id="portfolio" className='my-work'>
      <div className="my-work-title">
        <h2>Mis últimos trabajos</h2>
        <img src={themePattern} alt="" />
      </div>
      <div className="my-work-container">
        <img src={devSearch} alt="" />
        <img src={geeksZone} alt="" />
        <img src={investLanding} alt="" />
        <img src={iqPercentageReader} alt="" />
        <img src={botForex} alt="" />
        <img src={yugiohBot} alt="" />
      </div>
    </div>
  )
}

export default MyWork;