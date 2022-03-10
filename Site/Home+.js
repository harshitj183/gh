

document.write(`

<div class='sharec'><div class='sharew'><a aria-label='Whatsapp' onclick='window.open("https://api.whatsapp.com/send?text=%20"+encodeURIComponent(document.title)+"%20"+encodeURIComponent(location.href))' rel='nofollow noreferrer noopener external' target='_blank' title='Share on WhatsApp'><svg onclick='toggle(this)' viewbox='0 0 24 24'><path d='M20.1,3.9C17.9,1.7,15,0.5,12,0.5C5.8,0.5,0.7,5.6,0.7,11.9c0,2,0.5,3.9,1.5,5.6l-1.6,5.9l6-1.6c1.6,0.9,3.5,1.3,5.4,1.3l0,0l0,0c6.3,0,11.4-5.1,11.4-11.4C23.3,8.9,22.2,6,20.1,3.9z M12,21.4L12,21.4c-1.7,0-3.3-0.5-4.8-1.3l-0.4-0.2l-3.5,1l1-3.4L4,17c-1-1.5-1.4-3.2-1.4-5.1c0-5.2,4.2-9.4,9.4-9.4c2.5,0,4.9,1,6.7,2.8c1.8,1.8,2.8,4.2,2.8,6.7C21.4,17.2,17.2,21.4,12,21.4z M17.1,14.3c-0.3-0.1-1.7-0.9-1.9-1c-0.3-0.1-0.5-0.1-0.7,0.1c-0.2,0.3-0.8,1-0.9,1.1c-0.2,0.2-0.3,0.2-0.6,0.1c-0.3-0.1-1.2-0.5-2.3-1.4c-0.9-0.8-1.4-1.7-1.6-2c-0.2-0.3,0-0.5,0.1-0.6s0.3-0.3,0.4-0.5c0.2-0.1,0.3-0.3,0.4-0.5c0.1-0.2,0-0.4,0-0.5c0-0.1-0.7-1.5-1-2.1C8.9,6.6,8.6,6.7,8.5,6.7c-0.2,0-0.4,0-0.6,0S7.5,6.8,7.2,7c-0.3,0.3-1,1-1,2.4s1,2.8,1.1,3c0.1,0.2,2,3.1,4.9,4.3c0.7,0.3,1.2,0.5,1.6,0.6c0.7,0.2,1.3,0.2,1.8,0.1c0.6-0.1,1.7-0.7,1.9-1.3c0.2-0.7,0.2-1.2,0.2-1.3C17.6,14.5,17.4,14.4,17.1,14.3z' fill='#fff' stroke='none'></path></svg></a></div><div class='sharei' id='sherubaba'><a aria-label='Share' rel='nofollow noreferrer noopener external' target='_blank' title='Share'><svg viewbox='2498.031 -8926.153 18.072 20'><path d='M18.06,16.137a2.924,2.924,0,0,0-1.968.773L8.934,12.743a3.287,3.287,0,0,0,.09-.7,3.287,3.287,0,0,0-.09-.7l7.078-4.127a3.005,3.005,0,1,0-.964-2.2,3.287,3.287,0,0,0,.09.7L8.06,9.841a3.012,3.012,0,1,0,0,4.4l7.149,4.177a2.832,2.832,0,0,0-.08.653,2.932,2.932,0,1,0,2.932-2.932Z' id='share' transform='translate(2495.031 -8928.153)'></path></svg></a></div></div>

<scr` + `ipt>document.querySelector('#sherubaba').addEventListener('click',event=>{if(navigator.share){navigator.share({title:'Harshit Jaiswal (@harshitj183)',url:'#'}).then(()=>{console.log('Thanks for sharing!');}).catch(err=>{console.log("Error while using Web share API:");console.log(err);});}else{alert("Browser doesn't support this API !");}})
</scr` + `ipt>


 
 `)

 
