import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/core/service/news-api.service';
import * as _moment from 'moment';
import { Router } from '@angular/router'

const moment = _moment;
const DATE_TIME_FORMAT = 'YYYY-MM-DD';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  articles = null;
  articleSet = [];
  searchData = {
    searchKey: null,
    searchDate: moment(new Date()).format('YYYY-MM-DD')
  };
  pageLoading = true;

  news = [
    {
      author:'rowmoz',
      title:'Order Now :- https://www.idg.com.au/mediareleases/136400/bitcoin-revolution-revi',
      description:null,
      url:'https://www.bleepingcomputer.com/forums/t/736397/order-now-httpswwwidgcomaumediareleases136400bitcoin-revolution-revi/',
      urlToImage:null,
      publishedAt:'2020-11-28T06:32:24Z',
      content:null
   },
   {
      author:'IASbaba',
      title:'SYNOPSIS [25th NOVEMBER,2020] Day 39: IASbaba’s TLP (Phase 2): UPSC Mains Answer Writing (General Studies)',
      description:'For Previous TLP (ARCHIVES) – CLICK HERE SYNOPSIS [25th NOVEMBER,2020] Day 39: IASbaba’s TLP (Phase 2): UPSC Mains Answer Writing (General Studies)   1. What are the various stages of vaccine development? Illustrate. How is efficacy of a vaccine calculated? ……',
      url:'https://iasbaba.com/2020/11/synopsis-25th-november2020-day-39-iasbabas-tlp-phase-2-upsc-mains-answer-writing-general-studies/',
      urlToImage:'https://iasbaba.com/wp-content/uploads/2020/11/Vaccine-Efficacy-calculation-method.jpg',
      publishedAt:'2020-11-28T05:52:17Z',
      content:'For Previous TLP (ARCHIVES) – CLICK HERE\r\nSYNOPSIS [25th NOVEMBER,2020] Day 39: IASbabas TLP (Phase 2): UPSC Mains Answer Writing (General Studies)\r\n1. What are the various stages of vaccine developm… [+25303 chars]'
   },
   {
      author:'Bloomberg',
      title:'Bitcoin extends decline after biggest slump since pandemic hit',
      description:'Proponents of digital assets say the current focus on cryptocurrencies compared with 2017 is different because of growing institutional interest, for instance from the likes of Fidelity Investments and JPMorgan Chase & Co. Just this week, Van Eck Associates C…',
      url:'https://economictimes.indiatimes.com/markets/stocks/news/bitcoin-extends-decline-after-biggest-slump-since-pandemic-hit/articleshow/79459095.cms',
      urlToImage:'https://img.etimg.com/thumb/msid-79459109,width-1070,height-580,imgsize-383649,overlay-etmarkets/photo.jpg',
      publishedAt:'2020-11-28T05:24:37Z',
      content:'By Adam Haigh and Todd WhiteBitcoin and many of its major peers slumped on Friday in the wake of some of the biggest declines since the onset of the pandemic, a selloff that has stirred fresh doubt a… [+3262 chars]'
   },
   {
      author:'Alasdair Macleod',
      title:'Global Inflation Watch',
      description:'This article posits that fiat currencies are on the path to hyperinflation and looks at the evidence in the prices of financial assets and commodities. So far, gold has notably underperformed, which indicates that the early signals of hyperinflation are confi…',
      url:'https://www.lewrockwell.com/2020/11/alasdair-macleod/global-inflation-watch/',
      urlToImage:'https://www.lewrockwell.com/wp-content/themes/lrc/images/logo-med.png',
      publishedAt:'2020-11-28T04:01:00Z',
      content:'This article posits that fiat currencies are on the path to hyperinflation and looks at the evidence in the prices of financial assets and commodities. So far, gold has notably underperformed, which … [+25703 chars]'
   },
   {
      author:'Timo Brücken',
      title:'Exklusiv: 15 Millionen Euro für Berliner Kryptobank Bitwala',
      description:'Neue Funktionen sollen mehr Kunden locken. Dafür bekommt das Bitcoin-Startup Bitwala eine achtstellige Summe von Earlybird und weiteren VCs.',
      url:'https://www.gruenderszene.de/fintech/15-millionen-fuer-bitwala',
      urlToImage:'http://www.gruenderszene.de/wp-content/uploads/2020/11/clevels-bitwala-2f21472d9b86a5655f7ef3673cd68680.jpeg',
      publishedAt:'2020-11-28T04:00:13Z',
      content:'Das Bitwala-Management (v.l.): Ben Jones, Christoph Iwaniez und Philipp Beer (Bild: Bitwala)Die Bitcoin-Bank Bitwala hat eine Finanzierungsrunde über 15 Millionen Euro abgeschlossen. Angeführt wurde … [+1209 chars]'
   },
   {
      author:'Bitcoin Latinum',
      title:'Newly Launched Bitcoin Latinum Set to Become Worlds Largest Insured Digital Asset',
      description:'Newly Launched Bitcoin Latinum Set to Become Worlds Largest Insured Digital Asset Newly Launched Bitcoin Latinum Set to Become Worlds Largest Insured...',
      url:'https://finance.yahoo.com/news/newly-launched-bitcoin-latinum-set-030500596.html',
      urlToImage:'https://s.yimg.com/uu/api/res/1.2/FvpPs3JYLhQAEqgc5Yxc1g--~B/aD03ODE7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/globenewswire.com/907b3e5607f1118a05479fa1f579c82e',
      publishedAt:'2020-11-28T03:05:00Z',
      content:'Newly Launched Bitcoin Latinum Set to Become Worlds Largest Insured Digital AssetNewly Launched Bitcoin Latinum Set to Become Worlds Largest Insured Digital Asset\r\nNewly Launched Bitcoin Latinum … [+6369 chars]'
   },
   {
      author:'Nick Chong',
      title:'Breaking Down the Effect of Bitcoin’s $3,000 Drop on the Futures Market',
      description:'Bitcoin has undergone a strong drop since peaking at $19,500 just days ago The coin currently trades at $17,000 as of this article’s writing Analysis compiled by Coinalyze found that over the course of the past few days, $1 billion worth of open interest has …',
      url:'https://bitcoinist.com/breaking-down-the-effect-of-bitcoins-3000-drop-on-the-futures-market/',
      urlToImage:'https://bitcoinist.com/wp-content/uploads/2020/11/martin-moore-LWPNKDz-e7g-unsplash-1920x1237.jpg',
      publishedAt:'2020-11-28T01:24:41Z',
      content:'<ul><li>Bitcoin has undergone a strong drop since peaking at $19,500 just days ago</li><li>The coin currently trades at $17,000 as of this article’s writing</li><li>Analysis compiled by Coinalyze fou… [+2911 chars]'
   },
   {
      author:'Alisa Esage G',
      title:'Hacker vende acceso a 448 servidores de la Comisión Nacional de Seguros y Fianzas de México (CNSF). ¿Fuga de datos de millones de mexicanos?',
      description:'Especialistas de una firma de ciberseguridad reportan que un hacker malicioso está vendiendo el acceso de administrador al dominio de la Comisión Nacional de Seguros y Finanzas (CNSF), organismo público mexicano encargado de la supervisión de las institucione…',
      url:'https://noticiasseguridad.com/hacking-incidentes/hacker-vende-acceso-a-448-servidores-de-la-comision-nacional-de-seguros-y-fianzas-de-mexico-cnsf-fuga-de-datos-de-millones-de-mexicanos/',
      urlToImage:'https://noticiasseguridad.com/nsnews_u/2020/11/cnsffeat.jpg',
      publishedAt:'2020-11-28T01:21:00Z',
      content:'Especialistas de una firma de ciberseguridad reportan que un hacker malicioso está vendiendo el acceso de administrador al dominio de la Comisión Nacional de Seguros y Finanzas (CNSF), organismo públ… [+3080 chars]'
   },
   {
      author:'FXStreet Team',
      title:'Bitcoin awaits for a spike in retail interest that may push prices to $37,000',
      description:'Bitcoin-related mentions in social media are far from 2017 all-time highs even though prices are close to the previous peak. While institutional inve',
      url:'https://www.fxstreet.com/cryptocurrencies/news/bitcoin-awaits-for-a-spike-in-retail-interest-that-may-push-prices-to-37-000-202011280107',
      urlToImage:'https://editorial.fxstreet.com/images/Markets/Currencies/Digital Currencies/Bitcoin/bitcoins-37949586_Large.jpg',
      publishedAt:'2020-11-28T01:07:40Z',
      content:'<ul><li>Bitcoin-related mentions in social media are far from 2017 all-time highs even though prices are close to the previous peak.</li><li>While institutional investors flock to the cryptocurrency … [+3286 chars]'
   },
   {
      author:'Tony Spilotro',
      title:'Whales Dump Ahead Of Bitcoin ATH, More Than 93K BTC Sold Since Peak',
      description:'Bitcoin price is now trading at roughly 15% less than it was just days ago, falling short of setting a new all-time high by just a few hundred dollars. A new record was so close bulls could taste the victory, but the achievement was blocked by massive whales …',
      url:'https://www.newsbtc.com/analysis/btc/whales-dump-ahead-of-bitcoin-ath-more-than-93k-btc-sold-since-peak/',
      urlToImage:'https://www.newsbtc.com/wp-content/uploads/2020/11/bitcoin-crypto-whales-btc-Depositphotos_42923329_xl-2015-scaled.jpg',
      publishedAt:'2020-11-28T01:00:56Z',
      content:'Bitcoin price is now trading at roughly 15% less than it was just days ago, falling short of setting a new all-time high by just a few hundred dollars.\r\nA new record was so close bulls could taste th… [+2820 chars]'
   },
   {
      author:'Bob Mason',
      title:'The Crypto Daily – Movers and Shakers – November 28th, 2020',
      description:'It’s a mixed start to the day for the majors. A Bitcoin move back through to $17,500 levels would support the pack.',
      url:'https://finance.yahoo.com/news/crypto-daily-movers-shakers-november-005025118.html',
      urlToImage:'https://s.yimg.com/uu/api/res/1.2/I_uIrpXZnww6YxUyKCkgCw--~B/aD00MTA7dz02MTU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/fx_empire_176/73dcf6ca90ea589d342a0b05f8e07532',
      publishedAt:'2020-11-28T00:50:25Z',
      content:'Bitcoin, BTC to USD, fell by 0.24% on Friday. Following on from an 8.09% slide on Thursday, Bitcoin ended the day at $17,171.0.\r\nA mixed start to the day saw Bitcoin rise to an early morning intraday… [+2723 chars]'
   }
];

  constructor(private _service: NewsApiService, private router : Router) { }

  ngOnInit(): void {
    this.searchArticle(this.searchData);
  }

  searchArticle(searchData){
    this.pageLoading = false;
    this._service.getNewsArticles(searchData).subscribe(
      articleData => {
        this.articles = articleData;
        this.articles.forEach((article,index) => {
          if(article.content != null){
            const publishDate = moment(article.publishedAt);
            const dateFormatted = moment(publishDate).format('YYYY-MM-DD');
            article.publishedAt = dateFormatted;
            this.articleSet.push({article});
          }
          if(this.news.length-1 === index){
            console.log(this.articleSet);
            this.pageLoading = false;
          }
        })
      },error => {
        this.pageLoading = false;
        this.news.forEach((article,index) => {
          if(article.content != null){
            const publishDate = moment(article.publishedAt);
            const dateFormatted = moment(publishDate).format('YYYY-MM-DD');
            article.publishedAt = dateFormatted;
            this.articleSet.push({article});
          }
          if(this.news.length-1 === index){
            console.log(this.articleSet);
            this.pageLoading = false;
          }
        })
        //this.error();
      });
  }

  error() {
    this.router.navigate(["error"]);
  }

}
