const backgriundimg =[
 
{
 "imglink" :   "amazompt3.jpg",
 "link" :  "https://www.amazon.com/-/es/b/?_encoding=UTF8&node=16225011011&pf_rd_r=1KWKG150XBHB05AZQJ7R&pf_rd_p=a65e6a54-1f08-4ccc-9966-420a980f8244&pd_rd_r=a4c4995e-99f1-439c-9d6c-e9978adf969d&pd_rd_w=CSS5X&pd_rd_wg=NVbBJ&ref_=pd_gw_unk&language=en_US"
 
},
{
    "imglink" : "amazompt2.jpg",
    "link"  : "https://www.amazon.sg/b?_encoding=UTF8&node=10580661051&pf_rd_r=GF8A0CX67C7A9EJ4BA5G&pf_rd_p=365fcd66-4177-49de-8907-018098d50c53&pd_rd_r=76bd0345-a14a-4c0e-b80a-b9714b15d58f&pd_rd_w=dhrha&pd_rd_wg=xpUKQ&ref_=pd_gw_unk"
},
{
    "imglink" : "ampt4.jpg",
    "link"  : "https://www.amazon.com/gp/customer-preferences/select-currency/ref=CoP_EN_Hero_Mar19/?pf_rd_r=1KWKG150XBHB05AZQJ7R&pf_rd_p=80907923-e3e7-4038-a1bd-985959819735&pd_rd_r=a7e6122c-fb2f-47aa-a3af-85596c903143&pd_rd_w=0UzDL&pd_rd_wg=dt1Gv&ref_=pd_gw_unk"
},
{
    "imglink" : "bodyimg1.jpg",   
    "link" : "https://www.google.com/aclk?sa=L&ai=DChcSEwigo9Xv2rb5AhXEDSsKHflqAg4YABAAGgJzZg&ae=2&sig=AOD64_1jV5w6i5LVplTBN1vdTotAL9DHjg&q&adurl&ved=2ahUKEwi2us_v2rb5AhVqR2wGHXDqA08Q0Qx6BAgCEAE"
},
{
    "imglink" : "ampt5.jpg",   
    "link" : "https://www.amazon.com/b/?_encoding=UTF8&node=16225006011&pf_rd_r=V6FJ403CCXDWF4QSM66F&pf_rd_p=f45920d2-503d-49e9-9acc-386645974fc6&pd_rd_r=2719a1fd-2f64-4e5d-91ed-d83fece7c620&pd_rd_w=t7Hak&pd_rd_wg=mzlT8&ref_=pd_gw_unk"
},
{
    "imglink" : "",   
    "link" : ""
}
];
const hreflinkTag =document.querySelector(".hreflink")
const clickangleleftTag =document.querySelector(".clickangleleft")
const clickangle2Tag =document.querySelector(".clickangle2");
const bdimgTag =document.querySelector(".bdimg")
indexnumer = -1 ;
clickangle2Tag.addEventListener("click", () => {
    indexnumer +=1 ;
    
     const changeimg =backgriundimg[indexnumer].imglink  ;
     const changeimg2 =backgriundimg[indexnumer].link  ;
     bdimgTag.src = changeimg ;
     hreflinkTag.href = changeimg2;
     
     if ( indexnumer === backgriundimg.length -1 ) {
        indexnumer = -1 ;
        bdimgTag.src = "amazombodyimg2.jpg" ;
     hreflinkTag.href = "https://www.amazon.sg/promotions/?pf_rd_r=GF8A0CX67C7A9EJ4BA5G&pf_rd_p=b51acc93-dfce-4908-8968-e19daec0667f&pd_rd_r=76bd0345-a14a-4c0e-b80a-b9714b15d58f&pd_rd_w=v3uA4&pd_rd_wg=xpUKQ&ref_=pd_gw_unk";
     }
});
inexnumberback = 5 ;
clickangleleftTag.addEventListener("click", () => {
    inexnumberback -=1 ;
    const changeimg =backgriundimg[inexnumberback].imglink  ;
    const changeimg2 =backgriundimg[inexnumberback].link  ;
    bdimgTag.src = changeimg ;
    hreflinkTag.href = changeimg2;
    console.log(inexnumberback)
    if (inexnumberback  === 0 ) {
        inexnumberback   = 5 ;
        bdimgTag.src = "amazombodyimg2.jpg" ;
     hreflinkTag.href = "https://www.amazon.sg/promotions/?pf_rd_r=GF8A0CX67C7A9EJ4BA5G&pf_rd_p=b51acc93-dfce-4908-8968-e19daec0667f&pd_rd_r=76bd0345-a14a-4c0e-b80a-b9714b15d58f&pd_rd_w=v3uA4&pd_rd_wg=xpUKQ&ref_=pd_gw_unk";
     }

});
var splide = new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    snap   : true,
    perPage: 3,
  } );
  
  splide.mount();
  