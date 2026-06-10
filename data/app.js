fetch('data/locations.json')
.then(r=>r.json())
.then(data=>{
 const container=document.getElementById('locations');
 data.forEach(loc=>{
   const d=document.createElement('div');
   d.className='card';
   d.innerHTML=`<img src="${loc.image}" alt="">
   <h3>${loc.name}</h3>
   <p>${loc.category}</p>
   <p>${loc.district}</p>`;
   container.appendChild(d);
 });
});