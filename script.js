const yachts = [
  { name: "Azimuth 77", img: "https://i.imgur.com/0Xw7y8b.jpg", desc: "Iate de luxo com design italiano moderno e elegante." },
  { name: "Azimuth 50", img: "https://i.imgur.com/ZTxgYvE.jpg", desc: "Compacto e poderoso, ideal para viagens rápidas e refinadas." },
  { name: "Ferretti 850", img: "https://i.imgur.com/RL97hnS.jpg", desc: "Espaçoso e refinado com alta performance." },
  { name: "Kismet", img: "https://i.imgur.com/S0wqW5G.jpg", desc: "O superiate lendário da elite internacional." },
  { name: "Abu Dhab LX", img: "https://i.imgur.com/xOBnKFD.jpg", desc: "Luxo extremo inspirado no estilo árabe." },
  { name: "Princess V55", img: "https://i.imgur.com/dSzOsQA.jpg", desc: "Design britânico elegante para navegar com classe." },
  { name: "Sunseeker Predator", img: "https://i.imgur.com/bCeDJjJ.jpg", desc: "Um monstro do mar com estilo feroz." },
  { name: "Lürssen Custom", img: "https://i.imgur.com/YIFJY4A.jpg", desc: "Feito sob medida para bilionários exigentes." },
  { name: "Mangusta 130", img: "https://i.imgur.com/WkzP9Ey.jpg", desc: "Velocidade e luxo no mesmo casco." },
  { name: "Heesen 55M", img: "https://i.imgur.com/H9Adq0W.jpg", desc: "Robusto, moderno e elegante." },
  { name: "Benetti Oasis", img: "https://i.imgur.com/fgyFdkA.jpg", desc: "Oásis flutuante com muito espaço e estilo." },
  { name: "Pershing 8X", img: "https://i.imgur.com/gVqezQ0.jpg", desc: "Performance de alto nível com design futurista." },
  { name: "Riva Dolcevita", img: "https://i.imgur.com/S3d5LlA.jpg", desc: "A doçura da vida no mar." },
  { name: "Gulf Craft Majesty", img: "https://i.imgur.com/yFzWWYe.jpg", desc: "Realeza árabe nos oceanos." },
  { name: "Numarine Explorer", img: "https://i.imgur.com/Z0kqIfq.jpg", desc: "Exploração com luxo e robustez." },
  { name: "Ocean Alexander 90R", img: "https://i.imgur.com/VrSTC9h.jpg", desc: "Modernidade americana com sofisticação." },
  { name: "Sanlorenzo SX88", img: "https://i.imgur.com/WLvvqH3.jpg", desc: "Minimalismo e sofisticação em alto-mar." },
  { name: "Baglietto T52", img: "https://i.imgur.com/MOhFJdO.jpg", desc: "Italiano, moderno e impactante." },
  { name: "Explorer 50", img: "https://i.imgur.com/0LMlEj2.jpg", desc: "Pronto para explorar todos os mares." },
  { name: "Ulysses", img: "https://i.imgur.com/LGz1quN.jpg", desc: "Mega Explorer com tudo o que há de melhor." },
];

const gallery = document.querySelector(".gallery");

yachts.forEach(yacht => {
  const div = document.createElement("div");
  div.className = "gallery-item";
  div.innerHTML = `
    <img src="${yacht.img}" alt="${yacht.name}" onclick="openPopup('${yacht.name}', '${yacht.img}', '${yacht.desc}')">
    <h3>${yacht.name}</h3>
  `;
  gallery.appendChild(div);
});

function openPopup(title, img, desc) {
  document.getElementById("popup-img").src = img;
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-description").innerText = desc;
  document.getElementById("popup-btn").href = `https://wa.me/5521997480420?text=Olá,%20tenho%20interesse%20no%20iate%20${encodeURIComponent(title)}.`;
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}
