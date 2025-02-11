import './MyWork.css';
import themePattern from 'src/assets/theme_pattern.svg';
import devSearch from 'src/assets/works/devsearch.jpg';
import geeksZone from 'src/assets/works/geeks_zone.jpg';
import investLanding from 'src/assets/works/invest_landing.jpg';
import iqPercentageReader from 'src/assets/works/iq_percentage_reader.png';
import botForex from 'src/assets/works/bot_forex.jpg';
import yugiohBot from 'src/assets/works/yugioh_bot.jpg';


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