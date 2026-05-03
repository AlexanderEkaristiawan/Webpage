function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Close mobile menu on outside click
document.addEventListener('click', function(e) {
  const menu = document.getElementById('mobileMenu');
  const nav  = document.querySelector('nav');
  if (menu.classList.contains('open') && !nav.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// News carousel functionality
const newsEvents = [
  {
    title: "Mayday",
    date: " May 1, 2026",
    description: "The Bali APINDO Provincial Leadership Council (DPK) participated in the Bali Provincial May Day celebrations held at Puputan Margarana Field in Renon on Friday, May 1, 2026. The agenda included a Fun Walk & Zumba, a Cheap Market & Entertainment, and health checks. Furthermore, on the same day, the Denpasar City APINDO DPK also participated in the Denpasar City May Day celebrations held at Sidakarya Beach in Denpasar. With the theme \"Collaboration to Achieve Industrial Progress and Worker Welfare,\" this event honored Denpasar workers. Beach cleanups, the planting of ketapang and mangrove trees, and creative displays by Denpasar workers were also included.",
    images: ["../Asset/eventphoto/mayday1.png", "../Asset/eventphoto/mayday2.png"]
  },
  {
    title: "Talkshow APINDO",
    date: "February, 27 2026",
    description: "The Bali APINDO Provincial Leadership Council (DPK) participated in the Bali Provincial May Day celebrations held at Puputan Margarana Field in Renon on Friday, May 1, 2026. The agenda included a Fun Walk & Zumba, a Cheap Market & Entertainment, and health checks. Furthermore, on the same day, the Denpasar City APINDO DPK also participated in the Denpasar City May Day celebrations held at Sidakarya Beach in Denpasar. With the theme \"Collaboration to Achieve Industrial Progress and Worker Welfare,\" this event honored Denpasar workers. Beach cleanups, the planting of ketapang and mangrove trees, and creative displays by Denpasar workers were also included.",
    images: ["../Asset/EventPhoto/talkshow1.png"]
  },
  {
    title: "HUT APINDO",
    date: "January 30, 2026",
    description: "The APINDO Bali Provincial Leadership Council celebrated its 74th anniversary. The event was attended by the management of the DPP APINDO Bali and the DPK APINDO throughout Bali, participating in various competitions such as Hole in One, Golfing, and Putter APINDO Goal. Additionally, there was a sharing session from Mr. Wy. Widjaya and Mrs. Rohita Apui, both tourism entrepreneurs.",
    images: ["../Asset/EventPhoto/hut1.png", "../Asset/EventPhoto/hut2.png", "../Asset/EventPhoto/hut3.png"]
  },
  {
    title: "Paritrana Award 2025",
    date: "October 14, 2025",
    description: "The Paritrana Award 2025 is an annual award from BPJS Ketenagakerjaan and the Coordinating Ministry for Human Development and Culture (Kemenko PKM) for Regional Governments, Villages/Sub-districts, Business Entities, and MSMEs committed to Employment Social Security (SJSN) protection. The award aims to recognize and motivate stakeholders who demonstrate a strong commitment to implementing the SJSN program. The event was held at the Wiswa Sabha Utama Building, Bali Governor's Office.",
    images: ["../Asset/EventPhoto/paritrana1.png"]
  },
  {
    title: "Public Consultation on Regulations in the Field of Industrial Relations and Workers' Social Security",
    date: "October 9, 2026",
    description: "The Central Executive Board of APINDO Bali attended the Public Consultation on Regulations in the Field of Industrial Relations and Workers' Social Security, organized by the Directorate General of Industrial Relations and Workers' Social Security, Ministry of Manpower of the Republic of Indonesia. The event took place from October 9 to 10, 2025, at the Kuta Paradiso Hotel. The hope was that this meeting would foster balance and provide input from labor stakeholders, employers, labor unions, academics, and relevant agencies, so they could actively contribute to improving the legislation in question.",
    images: ["../Asset/EventPhoto/public_consultation1.png", "../Asset/EventPhoto/public_consultation2.png"]
  },
  {
    title: "APINDO Discusses Bali's Economic Strategy Post-IEU-CEPA with the Central Executive Board of APINDO Bali",
    date: "September 26, 2025",
    description: "Following the Indonesia-EU CEPA negotiations, APINDO Chairperson Shinta W. Kamdani held a dialogue with the Central Executive Board of APINDO Bali. This meeting served as a strategic gathering to discuss Bali's economic conditions, particularly in the industrial and investment sectors, while also highlighting the follow-up to the IEU-CEPA negotiations. With the synergy between the DPN APINDO and the DPP APINDO Bali, it is hoped that the regional economy will accelerate further, exports of superior products will increase, and Bali's investment competitiveness will reach the global level.",
    images: ["../Asset/EventPhoto/apindo_bali1.png"]
  },
  {
    title: "APINDO's 34th National Working Conference (RAKERKONAS)",
    date: "August 14, 2025",
    description: "The 34th APINDO National Working Conference (RAKERKONAS) in Bandung was successfully held. This was a crucial opportunity to strengthen synergy between the central and regional governments. In addition to strengthening ties between entrepreneurs throughout Indonesia, the forum also included an Economic Dialogue discussing the National Economic Strategy based on regional input. Regional entrepreneurs and national figures discussed real economic challenges and opportunities on the ground. This was a highly strategic opportunity to ensure that voices from various regions reach the central government, ensuring that policies are truly targeted.",
    images: ["../Asset/EventPhoto/rakerkonas1.png", "../Asset/EventPhoto/rakerkonas2.png", "../Asset/EventPhoto/rakerkonas3.png"]
  },
  {
    title: "BLOOD DONATION & LEGAL CONSULTATION",
    date: "January 6, 2025",
    description: "Greetings from APINDO! APINDO Bali held a blood drive and free legal consultation on January 5, 2025, at Bajra Sandhi East Field, as part of a series of APINDO Bali Provincial Working Meetings and Consultations in 2025 and APINDO's 73rd Anniversary.",
    images: ["../Asset/EventPhoto/blood_donation1.png"]
  },
];

function createNewsCard(event) {
  const card = document.createElement('div');
  card.className = 'news-card';

  const imageContainer = document.createElement('div');
  imageContainer.className = 'card-image-container';
  imageContainer.dataset.currentImage = 0;
  imageContainer.dataset.images = JSON.stringify(event.images);

  const imageEl = document.createElement('img');
  imageEl.className = 'card-image';
  imageEl.alt = `${event.title} image 1`;
  imageEl.src = event.images[0] || '';
  imageContainer.appendChild(imageEl);

  const imageCounter = document.createElement('div');
  imageCounter.className = 'image-counter';
  imageCounter.textContent = `${event.images.length ? '1' : '0'}/${event.images.length}`;
  imageContainer.appendChild(imageCounter);

  if (event.images.length > 1) {
    const prevBtn = document.createElement('button');
    prevBtn.className = 'image-nav prev';
    prevBtn.innerHTML = '&larr;';
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      changeImage(imageContainer, -1);
    };
    imageContainer.appendChild(prevBtn);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'image-nav next';
    nextBtn.innerHTML = '&rarr;';
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      changeImage(imageContainer, 1);
    };
    imageContainer.appendChild(nextBtn);
  }

  card.appendChild(imageContainer);

  const content = document.createElement('div');
  content.className = 'card-content';

  const title = document.createElement('h3');
  title.className = 'card-title';
  title.textContent = event.title;
  content.appendChild(title);

  const date = document.createElement('div');
  date.className = 'card-date';
  date.textContent = event.date;
  content.appendChild(date);

  const description = document.createElement('p');
  description.className = 'card-description';
  description.textContent = event.description;
  content.appendChild(description);

  card.appendChild(content);

  return card;
}

function changeImage(container, direction) {
  const images = JSON.parse(container.dataset.images);
  let current = parseInt(container.dataset.currentImage, 10);
  current = (current + direction + images.length) % images.length;
  container.dataset.currentImage = current;

  const imageEl = container.querySelector('.card-image');
  const imageCounter = container.querySelector('.image-counter');
  if (imageEl && images[current]) {
    imageEl.src = images[current];
    imageEl.alt = `${current + 1} of ${images.length}`;
  }
  if (imageCounter) {
    imageCounter.textContent = `${current + 1}/${images.length}`;
  }
}

function initNewsCarousel() {
  const track = document.querySelector('.carousel-track');
  if (!track) return;

  newsEvents.forEach(event => {
    const card = createNewsCard(event);
    track.appendChild(card);
  });

  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let currentIndex = 0;
  const totalCards = newsEvents.length;
  let cardWidth = 296; // 280px card + 16px gap
  let cardsToShow = 3;

  function updateCardsToShow() {
    const cardElement = document.querySelector('.news-card');
    if (cardElement) {
      const style = getComputedStyle(cardElement);
      const gap = 16;
      cardWidth = cardElement.getBoundingClientRect().width + gap;
    }
    if (window.innerWidth <= 640) {
      cardsToShow = 1;
    } else if (window.innerWidth <= 900) {
      cardsToShow = 2;
    } else {
      cardsToShow = 3;
    }
  }

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= totalCards - cardsToShow;
  }

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalCards - cardsToShow) {
      currentIndex++;
      updateCarousel();
    }
  });

  window.addEventListener('resize', () => {
    updateCardsToShow();
    currentIndex = Math.min(currentIndex, totalCards - cardsToShow);
    updateCarousel();
  });

  updateCardsToShow();
  updateCarousel();
}

document.addEventListener('DOMContentLoaded', initNewsCarousel);

const statCounters = document.querySelectorAll('.stat-value[data-count-to]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function formatStatValue(value) {
  return new Intl.NumberFormat('en-US').format(value);
}

function setStatValue(counter, value) {
  counter.textContent = formatStatValue(value);
}

function animateStatCounter(counter) {
  if (counter.dataset.animated === 'true') return;

  counter.dataset.animated = 'true';
  const target = Number(counter.dataset.countTo || 0);

  if (reduceMotion) {
    setStatValue(counter, target);
    return;
  }

  const duration = 1600;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentValue = Math.round(target * eased);

    setStatValue(counter, currentValue);

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

if (statCounters.length) {
  if (reduceMotion || !('IntersectionObserver' in window)) {
    statCounters.forEach((counter) => animateStatCounter(counter));
  } else {
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        animateStatCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.45 });

    statCounters.forEach((counter) => statsObserver.observe(counter));
  }
}
