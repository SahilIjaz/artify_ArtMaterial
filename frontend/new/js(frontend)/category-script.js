// Dummy Data - Replace with dynamic data in real app
const posts = [
    {
      id: 1,
      image: "/images/img1.jpg",
      caption: "Mystic Echoes"
    },
    {
      id: 2,
      image: "/images/img2.png",
      caption: "Dream in Chaos"
    },
    {
      id: 3,
      image: "/images/img3.jpg",
      caption: "Cosmic Harmony"
    },
    {
      id: 4,
      image: "/images/img4.jpg",
      caption: "Fluid Memories"
    },
    {
      id: 5,
      image: "/images/img1.jpg",
      caption: "Mind Over Matter"
    },
  ];
  
  const container = document.getElementById("postContainer");
  
  // Load favorites from localStorage
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
  posts.forEach(post => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${post.image}" alt="${post.caption}">
      <div class="caption">${post.caption}</div>
      <button class="like-btn ${favorites.includes(post.id) ? 'active' : ''}" onclick="toggleFavorite(${post.id})">❤️</button>
    `;
    container.appendChild(card);
  });
  
  function toggleFavorite(id) {
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];
  
    if (favs.includes(id)) {
      favs = favs.filter(item => item !== id);
    } else {
      favs.push(id);
    }
  
    localStorage.setItem("favorites", JSON.stringify(favs));
    location.reload();
  }
  