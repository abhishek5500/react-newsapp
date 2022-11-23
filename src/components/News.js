import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
  articles =    [
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Evelyn Cheng",
    "title": "China may have 'passed the point of no return' as Covid infections soar - CNBC",
    "description": "Surging Covid infections make it harder for China to achieve zero-Covid without reverting to a harsh lockdown, Macquarie's Chief China Economist Larry Hu said.",
    "url": "https://www.cnbc.com/2022/11/23/china-may-have-passed-the-point-of-no-return-as-covid-infections-soar.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107156046-1669172380801-gettyimages-1443539642-16.jpeg?v=1669183579&w=1920&h=1080",
    "publishedAt": "2022-11-23T06:06:19Z",
    "content": "Beijing's business district lay nearly empty during rush hour on Nov. 22, 2022, after local authorities asked people to work from home, among many measures targeted at controlling the latest Covid ou… [+3524 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Stick-wielding men smash surveillance cameras at China iPhone plant - Reuters",
    "description": "Men wielding sticks smashed surveillance cameras and windows at a massive campus owned by Apple <a href=\"https://www.reuters.com/companies/AAPL.O\" target=\"_blank\">(AAPL.O)</a> supplier Foxconn <a href=\"https://www.reuters.com/companies/2317.TW\" target=\"_blank…",
    "url": "https://www.reuters.com/technology/foxconns-zhengzhou-plant-hit-by-fresh-worker-unrest-social-media-livestreams-2022-11-23/",
    "urlToImage": "https://www.reuters.com/resizer/ZuqmiaodrZTbgnydqvQE3SdN6Bw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KJN3CWND75IRZEKMSP26AFOOS4.jpg",
    "publishedAt": "2022-11-23T06:03:00Z",
    "content": "SHANGHAI, Nov 23 (Reuters) - Men wielding sticks smashed surveillance cameras and windows at a massive campus owned by Apple (AAPL.O) supplier Foxconn (2317.TW) in the Chinese city of Zhengzhou, scen… [+2641 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Saudi fans rejoice after historic World Cup win over Argentina - Al Jazeera English",
    "description": "Day three of Qatar 2022 has seen one of the biggest shocks in World Cup history. Lionel Messi's Argentina was beaten 2-1 by Saudi Arabia in their opening gam...",
    "url": "https://www.youtube.com/watch?v=-K1VT_QQemc",
    "urlToImage": "https://i.ytimg.com/vi/-K1VT_QQemc/maxresdefault.jpg",
    "publishedAt": "2022-11-23T05:14:37Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Indonesia earthquake: Rescuers battle aftershocks as survivor search continues - BBC",
    "description": "At least 268 people, many of them children, are reported dead on Java island, with many still missing.",
    "url": "https://www.bbc.com/news/world-asia-63725449",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4442/production/_127747471_landslidequakewestjavacianjur.jpg",
    "publishedAt": "2022-11-23T04:36:03Z",
    "content": "Rescuers are battling dozens of aftershocks in the hilly region of West Java as the search for earthquake survivors reaches its third day.\r\nWest Java governor Ridwan Kamil told the BBC that the regio… [+3184 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Spaceflight Now"
    },
    "author": null,
    "title": "Live coverage: SpaceX launches Falcon 9 rocket with Eutelsat 10B satellite – Spaceflight Now - Spaceflight Now",
    "description": null,
    "url": "https://spaceflightnow.com/2022/11/22/falcon-9-eutelsat-10b-live-coverage/",
    "urlToImage": null,
    "publishedAt": "2022-11-23T03:53:46Z",
    "content": "Live coverage of the countdown and launch of a SpaceX Falcon 9 rocket from Space Launch Complex 40 at Cape Canaveral Space Force Station, Florida. The Falcon 9 rocket launched the Eutelsat 10B broadb… [+9384 chars]"
    },
    {
    "source": {
    "id": "business-insider",
    "name": "Business Insider"
    },
    "author": "Cheryl Teh, Lloyd Lee",
    "title": "Kanye West Showed Yeezy Creatives an Explicit Video of Kim Kardashian - Business Insider",
    "description": "Rolling Stone's source said Kanye West played an explicit video of Kim Kardashian for members of Yeezy's creative team during a 2018 meeting.",
    "url": "https://www.businessinsider.com/kanye-west-showed-yeezy-staff-explicit-photo-video-kim-kardashian-2022-11",
    "urlToImage": "https://i.insider.com/637d88a9ad0e8800193c0802?width=1200&format=jpeg",
    "publishedAt": "2022-11-23T03:50:22Z",
    "content": "Kanye West, the rapper now known as Ye, once showed Yeezy staff an explicit video of his then-wife Kim Kardashian, per a bombshell Rolling Stone report. \r\nRolling Stone spoke to more than two dozen f… [+1796 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "WAVY.com"
    },
    "author": "Brian Reese, Brett Hall, Jon Dowding, Michelle Wolf, Adrienne Mayfield, Craig Loper",
    "title": "Chesapeake Walmart mass shooting: Multiple fatalities, injuries - WAVY.com",
    "description": "Chesapeake police have responded to a shooting at a Walmart on Battlefield Blvd.",
    "url": "https://www.wavy.com/news/local-news/chesapeake/police-respond-to-shooting-at-chesapeake-walmart/",
    "urlToImage": "https://www.wavy.com/wp-content/uploads/sites/3/2022/11/Police-respond-to-a-mass-shooting-at-a-Walmart-off-Battlefield-Blvd.-in-Chesapeake-on-Nov.-23-2022-WAVY-image.png?w=1280",
    "publishedAt": "2022-11-23T03:48:33Z",
    "content": "CHESAPEAKE, Va. (WAVY) — Chesapeake police say the suspect behind a mass shooting at a Walmart just off Battlefield Blvd. is dead.\r\nIt’s still unclear just how many people were killed or injured in t… [+3511 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CBS Sports"
    },
    "author": null,
    "title": "Creighton Bluejays vs. Arkansas Razorbacks Live Score and Stats - November 22, 2022 Gametracker - CBS Sports",
    "description": "Get real-time COLLEGEBASKETBALL basketball coverage and scores as Creighton Bluejays takes on Arkansas Razorbacks. We bring you the latest game previews, live stats, and recaps on CBSSports.com",
    "url": "https://www.cbssports.com/college-basketball/gametracker/recap/NCAAB_20221122_CREIGH@ARK/",
    "urlToImage": "https://sportsfly.cbsistatic.com/fly-0362/bundles/sportsmediacss/images/fantasy/default-article-image-large.png",
    "publishedAt": "2022-11-23T03:45:00Z",
    "content": "LAHAINA, Hawaii (AP) Ryan Nembhard drove the lane for an authoritative dunk in the closing minutes and scored a career-high 25 points for No. 10 Creighton, which survived a tense second half to beat … [+2755 chars]"
    },
    {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": "Mark Sherman",
    "title": "Supreme Court OKs handover of Trump tax returns to Congress - The Associated Press",
    "description": "WASHINGTON (AP) — The Supreme Court on Tuesday cleared the way for the imminent handover of former President Donald Trump's  tax returns to a congressional committee after a three-year legal fight.",
    "url": "https://apnews.com/article/us-supreme-court-donald-trump-business-john-roberts-congress-8ea516dace48875ad7c5dd472dd16dcf",
    "urlToImage": "https://storage.googleapis.com/afs-prod/media/cafc11ddde9645faab23908cb21818ec/3000.jpeg",
    "publishedAt": "2022-11-23T03:17:09Z",
    "content": "WASHINGTON (AP) The Supreme Court on Tuesday cleared the way for the imminent handover of former President Donald Trumps tax returns to a congressional committee after a three-year legal fight.\r\nThe … [+3759 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Kelly Gilmore",
    "title": "What’s Next for Todd and Julie Chrisley After \"Difficult Day\" of Prison Sentencing - Yahoo Entertainment",
    "description": "Todd and Julie Chrisley’s attorney said the pair’s faith \"gives them strength as they appeal their convictions.\" Learn about their \"difficult day\" receiving ...",
    "url": "https://www.yahoo.com/entertainment/next-todd-julie-chrisley-difficult-011629893.html",
    "urlToImage": "https://media.zenfs.com/en/e__181/ecd824c5c347671f6ad3296906c6aa88",
    "publishedAt": "2022-11-23T02:30:59Z",
    "content": "Todd and Julie Chrisley are planning to continue their fight.\r\nThe couple, who were each sentenced to multiple years in prison for fraud convictions on Nov. 21, have plans for the future of their cas… [+2046 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "Sian Cain",
    "title": "Simu Liu criticises Quentin Tarantino after director laments the ‘Marvelisation of Hollywood’ - The Guardian",
    "description": "Shang-Chi actor says Tarantino and fellow Marvel critic Martin Scorsese ‘don’t get to point their nose at me or anyone’ in response to director’s comments",
    "url": "https://www.theguardian.com/culture/2022/nov/23/simu-liu-criticises-quentin-tarantino-after-director-laments-the-marvelisation-of-hollywood",
    "urlToImage": "https://i.guim.co.uk/img/media/d4e4c275b582826c61764e7fb7a15e5aae8f7fa0/0_0_2500_1500/master/2500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5b3bfc7ae4fef53e055cbe430c4671a0",
    "publishedAt": "2022-11-23T02:07:00Z",
    "content": "Director Quentin Tarantino has criticised Marvel films, saying the studio does not produce movie stars and Marvel films are the only things that seem to be made, leading to backlash from Marvel star … [+2720 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "ESPN"
    },
    "author": "ESPN staff",
    "title": "How College Football Playoff rankings affect Rivalry Week - ESPN",
    "description": "LSU could find itself as the second SEC team in the College Football Playoff, while Notre Dame-USC looms large for Pac-12 and Big Ten hopes.",
    "url": "https://www.espn.com/college-football/story/_/id/35087215/how-college-football-playoff-rankings-affect-rivalry-week",
    "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1123%2Fr1095281_1296x729_16%2D9.jpg",
    "publishedAt": "2022-11-23T01:52:05Z",
    "content": "A two-loss team has never made the College Football Playoff, but at No. 5 this week, LSU (9-2) inched one step closer to making history.\r\nIn the most notable decision from an otherwise predictable to… [+16251 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Daily News"
    },
    "author": "Peter Sblendorio",
    "title": "University of Idaho murders left surreal crime scene: neighbors - New York Daily News",
    "description": "Kaylee Goncalves, Madison Mogen, Ethan Chapin and Xana Kernodle were found dead Nov. 13 at an off-campus home, police say.",
    "url": "https://www.nydailynews.com/news/national/ny-university-of-idaho-stabbings-crime-scene-20221123-t7mziow3jvdjxkgkckkalfstmi-story.html",
    "urlToImage": "https://www.nydailynews.com/resizer/gwUN1C7uTbhsqW9zImP3usu6F2A=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/DZZBWFQ5NZG7NHILP4QIYFTFE4.jpg",
    "publishedAt": "2022-11-23T00:54:47Z",
    "content": "Questions about the mysterious fatal stabbings of four University of Idaho students this month continued to swirl Tuesday as neighbors described the surreal nature of the crime scene.\r\nThe off-campus… [+2243 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Perry Stein",
    "title": "Appeals panel grills Trump lawyer over FBI search of Mar-a-Lago - The Washington Post",
    "description": "In hearing appeal of special master appointment, judges seem skeptical that court-approved search of Trump's Florida property was improper or unlawful.",
    "url": "https://www.washingtonpost.com/national-security/2022/11/22/trump-appeal-mar-a-lago-search/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/52GQ3CB2CAI63OFPBICOLXB5WY.jpg&w=1440",
    "publishedAt": "2022-11-22T23:53:00Z",
    "content": "Comment on this story\r\nATLANTA A panel of three appeals court judges expressed deep skepticism Tuesday that the federal government violated former president Donald Trumps rights when it searched Mar-… [+6414 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "Ryan General",
    "title": "Man in China arrested for killing 1,000 birds ‘for hotpot’ - Yahoo News",
    "description": "Chinese authorities arrested a man for the illegal killing of 1,000 protected birds that he claims he meant to cook in hotpots.  Local reports identified the...",
    "url": "https://news.yahoo.com/man-china-arrested-killing-1-234459558.html",
    "urlToImage": "https://media.zenfs.com/en/nextshark_articles_509/e638705113e14aa03a8e17786ac4e4ba",
    "publishedAt": "2022-11-22T23:44:59Z",
    "content": "Chinese authorities arrested a man for the illegal killing of 1,000 protected birds that he claims he meant to cook in hotpots.\r\nLocal reports identified the perpetrator as Wu, 39, who was captured c… [+2382 chars]"
    },
    {
    "source": {
    "id": "google-news",
    "name": "Google News"
    },
    "author": null,
    "title": "Judge sets Trump’s New York fraud trial date for October 2023 - The Hill",
    "description": null,
    "url": "https://news.google.com/__i/rss/rd/articles/CBMibmh0dHBzOi8vdGhlaGlsbC5jb20vcmVndWxhdGlvbi9jb3VydC1iYXR0bGVzLzM3NDcyNjEtanVkZ2Utc2V0cy10cnVtcHMtbmV3LXlvcmstZnJhdWQtdHJpYWwtZGF0ZS1mb3Itb2N0LTIwMjMv0gEA?oc=5",
    "urlToImage": null,
    "publishedAt": "2022-11-22T23:40:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Biden extends student loan repayments freeze amid lawsuits - BBC",
    "description": "Repayments are put on hold for an eighth time as Republicans challenge the plan to forgive some debt.",
    "url": "https://www.bbc.com/news/world-us-canada-63724224",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/144DC/production/_127746138_gettyimages-1435390758.jpg",
    "publishedAt": "2022-11-22T23:21:49Z",
    "content": "The White House has put student loan repayments on hold again, saying that the delay will let courts rule on the Democrats' plan to forgive some debt. \r\nThe pause on repayments had been due to expire… [+1931 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Eonline.com"
    },
    "author": "Amy Lamare",
    "title": "Armie Hammer’s Father Michael Armand Hammer Dead at 67 - E! NEWS",
    "description": "Armie Hammer's father has passed away, E! News has learned. Keep reading for all the details about Michael Armand Hammer.",
    "url": "https://www.eonline.com/news/1355659/armie-hammers-father-michael-armand-hammer-dead-at-67",
    "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/20221022/rs_1200x1200-221122141221-michale-hammer-6.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
    "publishedAt": "2022-11-22T23:06:00Z",
    "content": "Armie Hammer's father has passed away, E! News has learned.\r\nMichael Armand Hammer died on Sunday, Nov. 20, according to TMZ. He was 67 years old. The business titan had reportedly been battling canc… [+787 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Holly Bailey, Matthew Brown",
    "title": "Lindsey Graham testifies before Georgia grand jury in election probe - The Washington Post",
    "description": "After months of failed legal challenges, Sen. Lindsey O. Graham appeared before a special grand jury investigating efforts by former President Donald Trump.",
    "url": "https://www.washingtonpost.com/nation/2022/11/22/lindsey-graham-georgia-grand-jury/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/T64NEQC6WEI6ZMPPZN4L44L7BY.jpg&w=1440",
    "publishedAt": "2022-11-22T22:47:00Z",
    "content": "Comment on this story\r\nATLANTA After months of failed legal challenges, Sen. Lindsey O. Graham (R-S.C.) appeared Tuesday before a special grand jury investigating efforts by former president Donald T… [+4716 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "OregonLive"
    },
    "author": "Fedor Zarkhin | The Oregonian/OregonLive",
    "title": "OHSU’s and Legacy Emanuel’s children’s hospitals implement crisis care standards - OregonLive",
    "description": "The move comes amid surging pediatric hospitalizations for RSV",
    "url": "https://www.oregonlive.com/health/2022/11/ohsus-and-legacy-emanuels-childrens-hospitals-implement-crisis-care-standards.html",
    "urlToImage": "https://www.oregonlive.com/resizer/mOF7T4j8PGh7Hwb7EYRr4KOzRcc=/1280x0/filters:focal(2545x2684:2555x2674)/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJICNV4RUVBWJA72CMVYK3J7SA.JPG",
    "publishedAt": "2022-11-22T22:38:00Z",
    "content": "The two hospitals providing the vast bulk of Oregons pediatric intensive care capacity have moved to crisis standards of care, the latest step by the states health care system to battle an influx of … [+2927 chars]"
    }
    ]
  constructor(){
    super();
    console.log("Fom news componenet");
    this.state = {
      articles: this.articles,
      loading:false,
      page:1,
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a73da1ddac6d415c962316aa0f92d170&page=1&pagesize=20`";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles:parseData.articles,
      totalResults:parseData.totalResults
    
    })
  }
   handlePrevClick = async()=>{
    console.log("Previous");
    
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a73da1ddac6d415c962316aa0f92d170&page=${this.state.page - 1}&pagesize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
  


    this.setState({
      page:this.state.page - 1,
      articles:parseData.articles
    })
  }
   handleNextClick = async()=>{
    console.log("Previous")
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)) {
      
    }
    else{

   

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a73da1ddac6d415c962316aa0f92d170&page=${this.state.page + 1}&pagesize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
  


    this.setState({
      page:this.state.page + 1,
      articles:parseData.articles
    })
  }
  }

  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center">News panda | Main Headlines</h2>
        
          <div className="row ">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 73):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
              </div>
          })}
          
        
            
        
          
          </div>
       </div>
       <div className="container d-flex align-items-center justify-content-around m-5">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}> &larr; Previous</button>
        <button  type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next  &rarr; </button>
       </div>
     
       
      </div>
    )
  }
}

export default News
