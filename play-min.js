let images=["Images_Memory/images avec fond/caca licorne.png","Images_Memory/images avec fond/licorne folle.png","Images_Memory/images avec fond/licorne ivre.png","Images_Memory/images avec fond/licorne mitraillette.png","Images_Memory/images avec fond/licorne pète.png","Images_Memory/images avec fond/licorne pipi.png","Images_Memory/images avec fond/licorne vomit wc.png","Images_Memory/images avec fond/licorne vomito.png","Images_Memory/images avec fond/caca licorne.png","Images_Memory/images avec fond/licorne folle.png","Images_Memory/images avec fond/licorne ivre.png","Images_Memory/images avec fond/licorne mitraillette.png","Images_Memory/images avec fond/licorne pète.png","Images_Memory/images avec fond/licorne pipi.png","Images_Memory/images avec fond/licorne vomit wc.png","Images_Memory/images avec fond/licorne vomito.png"],pileDeCarte=[];function init(){afficherTab()}function afficherTab(){let e=document.getElementById("plateau");e.innerHTML="";for(let a=0;a<4;a++){let i=document.createElement("tr");for(let e=0;e<4;e++){let n=document.createElement("td"),m=document.createElement("img");m.src="Images_Memory/images avec fond/reverse card unimemory.png",m.alt="image face cachée arc en ciel avec ecrit uniMemory",m.classList.add("memory-image","playable"),m.id=4*a+e,m.addEventListener("click",flipCard),n.appendChild(m),i.appendChild(n)}e.appendChild(i)}}function flipCard(e){if(2==pileDeCarte.length)return;let a=e.srcElement.id;e.srcElement.src=images[a],pileDeCarte.push(e.srcElement),2==pileDeCarte.length&&(pileDeCarte[0].src,pileDeCarte[1].src)}window.onload=init;