/* Products data - reuses images already in project folder */
const PRODUCTS = [
{id:1,name:"Classic School Backpack - Water Resistant, 25L",category:"School",price:32.99,mrp:49.99,rating:4.6,reviews:12834,img:"backpacks.jpg",prime:true,deal:true,tag:"Best Seller"},
{id:2,name:"Wireless Noise-Cancelling Headphones with Mic",category:"Gaming",price:59.99,mrp:99.99,rating:4.5,reviews:8932,img:"electronics.jpg",prime:true,deal:true,tag:"Limited Deal"},
{id:3,name:"Premium Art & Stationery Set - 120 Pcs",category:"School",price:19.99,mrp:29.99,rating:4.3,reviews:4521,img:"stationery.jpg",prime:false,deal:false,tag:""},
{id:4,name:"Men's Slim Fit Stretch Jeans - Light Blue",category:"Fashion",price:39.99,mrp:59.99,rating:4.2,reviews:15670,img:"box4.jpg",prime:true,deal:false,tag:""},
{id:5,name:"Women's Casual Cotton Top - Pack of 2",category:"Fashion",price:22.49,mrp:34.99,rating:4.4,reviews:9823,img:"box5.jpg",prime:true,deal:true,tag:"Deal"},
{id:6,name:"Summer Floral Midi Dress - Red",category:"Fashion",price:27.99,mrp:45.00,rating:4.1,reviews:6210,img:"box3.jpg",prime:false,deal:false,tag:""},
{id:7,name:"Running Sports Shoes - Lightweight White",category:"Fashion",price:45.99,mrp:79.99,rating:4.5,reviews:21045,img:"box6.jpg",prime:true,deal:true,tag:"Best Seller"},
{id:8,name:"Back to School Essentials Combo Kit",category:"School",price:49.99,mrp:75.00,rating:4.7,reviews:3340,img:"box_school.jpg",prime:true,deal:false,tag:"New"},
{id:9,name:"RGB Gaming Keyboard + Mouse Combo",category:"Gaming",price:69.99,mrp:109.99,rating:4.6,reviews:18760,img:"box2.jpg",prime:true,deal:true,tag:"Hot Deal"},
{id:10,name:"Women's Fashion Collection - Trendy Picks",category:"Fashion",price:29.99,mrp:39.99,rating:4.0,reviews:5112,img:"fashion.jpg",prime:false,deal:false,tag:""},
{id:11,name:"Modern Kitchen Dining Set - 16 Piece",category:"Home",price:89.99,mrp:129.99,rating:4.4,reviews:2876,img:"dining.jpg",prime:true,deal:false,tag:""},
{id:12,name:"Home Improvement Tool Kit - 48 Pcs",category:"Home",price:42.99,mrp:64.99,rating:4.3,reviews:7543,img:"home_imp.jpg",prime:true,deal:true,tag:"Deal"},
{id:13,name:"Boho Wall Decor - Set of 3 Frames",category:"Home",price:24.99,mrp:39.99,rating:4.2,reviews:1920,img:"decor.jpg",prime:false,deal:false,tag:""},
{id:14,name:"Luxury Cotton Bedding Set - King Size",category:"Home",price:55.99,mrp:89.99,rating:4.6,reviews:6890,img:"bedding.jpg",prime:true,deal:true,tag:"Best Seller"},
{id:15,name:"Pressure Cooker 5L - Induction Friendly",category:"Kitchen",price:47.99,mrp:69.99,rating:4.5,reviews:11230,img:"cooker.jpg",prime:true,deal:false,tag:""},
{id:16,name:"Drip Coffee Maker 1.5L - Black",category:"Kitchen",price:34.99,mrp:54.99,rating:4.1,reviews:4320,img:"coffee.jpg",prime:false,deal:true,tag:"Deal"},
{id:17,name:"Non-Stick Pots & Pans Set - 5 Layer",category:"Kitchen",price:64.99,mrp:99.99,rating:4.4,reviews:5670,img:"pots.jpg",prime:true,deal:false,tag:""},
{id:18,name:"Electric Kettle 1.8L Fast Boil Steel",category:"Kitchen",price:21.99,mrp:32.99,rating:4.3,reviews:9210,img:"kettles.jpg",prime:true,deal:true,tag:"Limited Deal"}
];
let cart = [];
try { cart = JSON.parse(localStorage.getItem("amz_cart") || "[]"); } catch(e){ cart = []; }
const grid = document.getElementById("productGrid");
const emptyState = document.getElementById("emptyState");
const countLabel = document.getElementById("countLabel");
const resultInfo = document.getElementById("result-info");
const titleEl = document.getElementById("plp-title");
const sortSelect = document.getElementById("sortSelect");
const searchInput = document.getElementById("searchInput");
const searchCategory = document.getElementById("searchCategory");
function stars(r){let s="";for(let i=1;i<=5;i++){s+=i<=Math.round(r)?"★":"☆";}return s;}
function discount(p){return Math.round((1-p.price/p.mrp)*100);}
function render(list){return renderFixed(list);}/*DISABLED
grid.innerHTML="";
if(!list.length){emptyState.style.display="block";countLabel.textContent="0 results";return;}
emptyState.style.display="none";
countLabel.textContent=list.length+" result"+(list.length>1?"s":"");
list.forEach(p=>{
const card=document.createElement("div");card.className="p-card";
card.innerHTML=(p.tag?'<div class="p-badge">'+p.tag+'</div>':"")
+'<div class="p-img" style="background-image:url(\''+p.img+'\')"></div>'
+'<div class="p-title">'+p.name+'</div>'
+'<div class="p-stars">'+stars(p.rating)+'<span>'+p.rating+" ("+p.reviews)+")</span></div>"+'<div class="XX"><small>$</small>'+p.price.toFixed(2)+"<s>$"+p.mrp.toFixed(2)+"</s>"
+'<span class="p-off">'+discount(p)+'% off</span></div>'
+'<div class="p-ship">FREE delivery '+(p.prime?'<span class="p-prime">✓prime</span>':"")+'</div>'
+'<div class="p-btns"><button class="add-btn" data-id="'+p.id+'">Add to Cart</button>'
+'<a class="view-btn" href="product.html?id='+p.id+'">View</a></div>';
grid.appendChild(card);
});
grid.querySelectorAll(".add-btn").forEach(b=>b.addEventListener("click",()=>addToCart(+b.dataset.id)));
}
DISABLED*/
function getFilters(){
const cats=[...document.querySelectorAll(".f-cat:checked")].map(c=>c.value);
const price=(document.querySelector('input[name="price"]:checked')||{}).value||"all";
const minR=parseFloat((document.querySelector('input[name="rating"]:checked')||{}).value||"0");
const dealsOnly=document.getElementById("f-deals").checked;
const q=(searchInput.value||"").toLowerCase().trim();
const sCat=searchCategory.value;
return{cats,price,minR,dealsOnly,q,sCat};
}
function applyFilters(){
const f=getFilters();let list=[...PRODUCTS];
if(f.cats.length)list=list.filter(p=>f.cats.includes(p.category));
if(f.sCat!=="All")list=list.filter(p=>p.category===f.sCat);
if(f.q)list=list.filter(p=>(p.name+" "+p.category).toLowerCase().includes(f.q));
if(f.price==="under25")list=list.filter(p=>p.price<25);
if(f.price==="25-50")list=list.filter(p=>p.price>=25&&p.price<=50);
if(f.price==="above50")list=list.filter(p=>p.price>50);
if(f.minR)list=list.filter(p=>p.rating>=f.minR);
if(f.dealsOnly)list=list.filter(p=>p.deal);
const s=sortSelect.value;
if(s==="low-high")list.sort((a,b)=>a.price-b.price);
if(s==="high-low")list.sort((a,b)=>b.price-a.price);
if(s==="rating")list.sort((a,b)=>b.rating-a.rating);
if(s==="discount")list.sort((a,b)=>discount(b)-discount(a));
const label=f.cats.length===1?f.cats[0]+" Products":(f.sCat!=="All"?f.sCat+" Products":"All Products");
titleEl.textContent=f.q?('Results for "'+searchInput.value.trim()+'"'):label;
resultInfo.textContent="("+list.length+" items)";
render(list);
}

function updateBadge(){document.getElementById("cart-count").textContent=cart.reduce((s,i)=>s+i.qty,0);}
function toast(msg){const t=document.getElementById("toast");if(!t)return;const x=document.getElementById("cart-count");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800);}
function addToCart(id){const f=cart.find(i=>i.id===id);if(f)f.qty++;else cart.push({id,qty:1});
localStorage.setItem("amz_cart",JSON.stringify(cart));updateBadge();
const p=PRODUCTS.find(x=>x.id===id);if(p)toast("Added to Cart: "+p.name.slice(0,30)+"...");}
if(grid){
document.querySelectorAll(".f-cat,input[name='price'],input[name='rating']").forEach(el=>el.addEventListener("change",applyFilters));
document.getElementById("f-deals").addEventListener("change",applyFilters);
sortSelect.addEventListener("change",applyFilters);
searchInput.addEventListener("input",applyFilters);
searchCategory.addEventListener("change",applyFilters);
document.getElementById("searchBtn").addEventListener("click",applyFilters);
document.getElementById("clearFilters").addEventListener("click",()=>{
document.querySelectorAll(".f-cat").forEach(c=>c.checked=false);
document.querySelector('input[name="price"][value="all"]').checked=true;
document.querySelector('input[name="rating"][value="0"]').checked=true;
document.getElementById("f-deals").checked=false;
searchInput.value="";searchCategory.value="All";sortSelect.value="featured";applyFilters();});
const params=new URLSearchParams(location.search);
if(params.get("category")){const c=params.get("category");
const box=document.querySelector('.f-cat[value="'+c+'"]');if(box)box.checked=true;}
if(params.get("q")){searchInput.value=params.get("q");}
if(params.get("deal")==="1"){document.getElementById("f-deals").checked=true;}
updateBadge();applyFilters();
}
function renderFixed(list){
grid.innerHTML="";
if(!list.length){emptyState.style.display="block";countLabel.textContent="0 results";return;}
emptyState.style.display="none";
countLabel.textContent=list.length+" results";
for(var k=0;k<list.length;k++){var p=list[k];
var card=document.createElement("div");card.className="p-card";
var badge=p.tag?'<div class="p-badge">'+p.tag+'</div>':"";
card.innerHTML=badge
+'<div class="p-img" style="background-image:url('+p.img+')"></div>'
+'<div class="p-title">'+p.name+'</div>'
+'<div class="p-stars">'+stars(p.rating)+'<span> '+p.rating+' ('+p.reviews+')</span></div>'
+'<div class="p-price"><small>$</small>'+p.price+'<s>$'+p.mrp+'</s><span class="p-off">'+discount(p)+'% off</span></div>'
+'<div class="p-ship">FREE delivery</div>'
+'<div class="p-btns"><button class="add-btn" data-id="'+p.id+'">Add to Cart</button><a class="view-btn" href="product.html?id='+p.id+'">View</a></div>';
grid.appendChild(card);}
var btns=grid.querySelectorAll(".add-btn");
for(var j=0;j<btns.length;j++){(function(b){b.addEventListener("click",function(){addToCart(+b.dataset.id);});})(btns[j]);}
}
 /* end outer if(grid) */
