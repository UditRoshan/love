//Landing Page Popping Hearts
const container = document.querySelector('.floating-hearts');

  const colors = [
    "#ff4d6d", // pinkish red
    "#ff6b81", // coral pink
    "#ff8fab", // soft pink
    "#ff5c8a", // rose pink
    "#ff3366", // bright pink-red
    "#ff9999", // baby pink
    "#ffccd5", // pastel blush
  ];

  function createHeart() {
    const heart = document.createElement('i');
    heart.className = 'bi bi-heart-fill heart';

    // Random position
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';

    // Random color
    const color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.color = color;

    // Random size
    heart.style.fontSize = (3 + Math.random() * 10) + 'px';

    container.appendChild(heart);

    // Remove after animation
    setTimeout(() => {
      heart.remove();
    }, 3000);
  }

  // Create a heart every..
  setInterval(createHeart, 50);
  
//Countdown
const counterText = document.querySelector("#countdown > #counter");

gsap.registerPlugin(ScrollTrigger);

let counter = { val: 0 };

  gsap.to(counter, {
    val: 20,
    scrollTrigger: {
      trigger: "#countdown",
      start: "top 70%",
      end: "top 10%",
      toggleActions: "play none none none",
      scrub: true,
      markers: false
    },
    onUpdate: () => {
       counterText.innerText = Math.floor(counter.val);
       setTimeout(appear, 500);
       function appear() {
         document.querySelector("#countdown > h2").classList.add("appear");
       }
    }
  });
  

//Carousal
   gsap.from("#section1 > h1", {
      x: "-400",
      scrollTrigger: {
         trigger: "#section1",
         start: "top 80%",
         end: "top 30%",
         scrub:true
      }
   });

   gsap.from("#photo", {
      x: "-400",
      scrollTrigger: {
         trigger: "#section1",
         start: "top 80%",
         end: "top 30%",
         scrub:true
      }
   });
   
   gsap.from("#poem", {
      x: "400",
      scrollTrigger: {
         trigger: "#section1",
         start: "top 80%",
         end: "top 10%",
         scrub: true
      }
   });

  const photos = [
    "images/HerEyes.png",
    "images/HerSmile.png",
    "images/HerVoice.png",
    "images/HerHeart.png",
    "images/HerLaugh.png",
    "images/HerMind.png",
    "images/HerPresence.png",
  ];

  const poems = [
    "Two galaxies behind your gaze, They pull me in , I lose my ways.  In silent stares, the stars align, And all the world feels more divine.",
    "Like sunrise after endless night, Your smile breaks through and brings me light. It lifts the weight the world may bear, And makes me breathe the sweetest air.",
    "A whisper soft, a gentle hum, A song that makes the chaos numb. No symphony has touched me so, As your sweet voice, both high and low.",
    "A golden flame that always glows, In how you care, it always shows. So vast, so deep, so full of grace— Your heart’s a warm and sacred place.",
    "It bubbles up like summer rain, And washes out the deepest pain. A spark, a sound, a dance of glee— Your laugh’ s the truest joy to me.",
    "You think in ways both wild and wise, Like moonlight spilled in midnight skies. Your thoughts, your dreams, your point of view— They make me fall in love with you.",
    "No words, no touch, and yet I know— You calm the storms I never show. You are the peace I’ ve searched to find, The home that lives inside my mind."
  ];

  let index = 0;
  const imgEl = document.querySelector("#photo");
  const poemEl = document.querySelector("#poem");
  const nextBtn = document.querySelector("#next-btn");
  const prevBtn = document.querySelector("#prev-btn");

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % photos.length;
    
    // Optional: add fade out and in animation
    imgEl.classList.remove("fade");
    poemEl.classList.remove("fade");
    void imgEl.offsetWidth; // trigger reflow

    imgEl.src = photos[index];
    poemEl.textContent = poems[index];

    imgEl.classList.add("fade");
    poemEl.classList.add("fade");
  });
  
  prevBtn.addEventListener("click", () => {
    index = (index - 1 + photos.length) % photos.length;
    
    // Optional: add fade out and in animation
    imgEl.classList.remove("fade");
    poemEl.classList.remove("fade");
    void imgEl.offsetWidth; // trigger reflow

    imgEl.src = photos[index];
    poemEl.textContent = poems[index];

    imgEl.classList.add("fade");
    poemEl.classList.add("fade");
  });
  
  
  gsap.from("#message > img", {
      x: "-400",
      scrollTrigger: {
         trigger: "#message",
         start: "top 80%",
         end: "top 30%",
         scrub:true
      }
   });
   
   gsap.from("#message > p", {
      x: "400",
      scrollTrigger: {
         trigger: "#message",
         start: "top 80%",
         end: "top 30%",
         scrub:true
      }
   });