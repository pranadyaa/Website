// Project Details Data - Oriented for 2D/3D Game Artist
const projectData = {
  forest: {
    title: "Forest Expedition",
    category: "Unity / 3D & 2D Art",
    engine: "Unity & Blender",
    link: "https://zcarmel.itch.io/forest-expedition",
    image: "https://img.itch.zone/aW1nLzI3OTA0MzEzLnBuZw==/original/Et46z8.png",
    role: "2D & 3D Artist",
    tech: ["Blender", "2D Art", "Unity", "C# (Basic)", "Git"],
    overview: "Game petualangan dan eksplorasi dunia terbuka 3D berlatar hutan. Pemain berperan sebagai penjelajah yang mencari objek tersembunyi dan mendokumentasikannya melalui mekanik fotografi in-game.",
    problem: "[Belum diisi]",
    solution: "[Belum diisi]",
    features: [
      "Pemodelan aset 3D lingkungan hutan menggunakan Blender",
      "Perancangan aset visual 2D dan tekstur pendukung",
      "Integrasi aset 3D/2D ke dalam Unity Engine dengan skala dan pencahayaan optimal",
      "Mekanika fotografi in-game (Photo Mode) dan eksplorasi dunia terbuka"
    ],
    process: "Merancang konsep visual, memodelkan objek 3D di Blender, mengatur orientasi UV/material, kemudian mengintegrasikannya ke hierarki scene Unity Engine secara kolaboratif bersama tim menggunakan Git.",
    result: "Prototipe game eksplorasi 3D aktif dan dapat dimainkan langsung melalui browser di itch.io."
  },
  prana: {
    title: "Prana's Redemption",
    category: "Godot / 2D Character Art",
    engine: "Godot",
    link: "https://chyptr.itch.io/pranas-redemption",
    image: "https://img.youtube.com/vi/B2DoGwb5gOo/hqdefault.jpg",
    role: "2D Character Artist",
    tech: ["2D Art", "Character Design", "Godot", "Git"],
    overview: "Game aksi penembak taktis berperspektif top-down yang menguji ketepatan manajemen reload senjata dan pergerakan pemain. Proyek ini merupakan submisi resmi pada ajang GameJam Internal GT Season 14.",
    problem: "[Belum diisi]",
    solution: "[Belum diisi]",
    features: [
      "Perancangan konsep karakter 2D orisinal dari sketsa hingga pewarnaan",
      "Sprite animasi karakter yang responsif terhadap input pergerakan",
      "Penyesuaian proporsi visual karakter terhadap perspektif top-down",
      "Kolaborasi tim dalam batas waktu kompetisi GameJam"
    ],
    process: "Membuat konsep siluet karakter, ekspresi, dan frame animasi 2D, lalu mengekspor sprite sheet sesuai standar format node 2D di Godot Engine.",
    result: "Berhasil diselesaikan tepat waktu untuk submisi GameJam Internal GT Season 14 dan dapat dimainkan publik di itch.io."
  },
  neutrofil: {
    title: "Neutrofil",
    category: "Unity / 2D Art & UI",
    engine: "Unity",
    link: "https://zcarmel.itch.io/neutrofil",
    image: "https://img.itch.zone/aW1nLzI2OTY3OTk3LnBuZw==/original/O2XDtk.png",
    role: "2D Artist",
    tech: ["2D Art", "UI Design", "Unity", "Git"],
    overview: "Game strategi turn-based bertema edukasi biologi, di mana pemain mengendalikan sel darah putih (neutrofil) untuk melawan infeksi virus dan patogen di dalam tubuh manusia.",
    problem: "[Belum diisi]",
    solution: "[Belum diisi]",
    features: [
      "Desain visual karakter sel darah putih dan berbagai jenis virus/patogen",
      "Aset grafis antarmuka (UI) untuk pertarungan sistem giliran (turn-based)",
      "Penyelarasan visual anatomi mikro dengan gaya visual game yang menarik",
      "Dapat dimainkan di browser dalam mode layar penuh (WebGL/HTML5)"
    ],
    process: "Mengembangkan konsep visual berbasis referensi sel biologi, memproduksi aset 2D, serta berkolaborasi dengan programmer tim untuk mengimplementasikan animasi sprite pada state machine Unity.",
    result: "Game telah dirilis secara publik dan dapat dimainkan di browser melalui itch.io."
  },
  unksatrya: {
    title: "Un-Ksatrya",
    category: "Ren'Py / 2D Illustration",
    engine: "Ren'Py",
    link: "https://xhinonn.itch.io/un-ksatrya",
    image: "https://img.itch.zone/aW1nLzI0MzcwODYwLmpwZw==/original/WrPMkl.jpg",
    role: "2D Artist",
    tech: ["2D Art", "Character Illustration", "Ren'Py", "Git"],
    overview: "Game visual novel interaktif yang mengisahkan Wira, seorang pemuda desa Arana yang bermimpi menjadi ksatria tangguh hingga dihadapkan pada tragedi masa lalunya.",
    problem: "[Belum diisi]",
    solution: "[Belum diisi]",
    features: [
      "Ilustrasi karakter 2D lengkap dengan ragam ekspresi emosional",
      "Desain visual kostum bertema ksatria tradisional-fantasi",
      "Integrasi visual ke dalam skrip dialog visual novel Ren'Py",
      "Mendukung penceritaan bercabang dan pengalaman narasi interaktif"
    ],
    process: "Melakukan proses pembuatan ilustrasi digital mulai dari sketsa kasar, line art, hingga rendering pewarnaan, lalu menyusun layering ekspresi karakter untuk skrip Ren'Py.",
    result: "Visual novel selesai diproduksi dan dapat dinikmati langsung melalui itch.io."
  }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Project Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update button styles
      filterBtns.forEach(b => {
        b.classList.remove('bg-pink-600', 'text-white', 'shadow-lg', 'shadow-pink-500/30');
        b.classList.add('bg-purple-950/40', 'text-slate-300');
      });
      btn.classList.add('bg-pink-600', 'text-white', 'shadow-lg', 'shadow-pink-500/30');
      btn.classList.remove('bg-purple-950/40', 'text-slate-300');

      // Filter cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Modal Functionality
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const detailButtons = document.querySelectorAll('.open-modal-btn');

  function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-role').textContent = "Peran Saya: " + data.role;
    document.getElementById('modal-category').textContent = data.category;
    document.getElementById('modal-overview').textContent = data.overview;
    document.getElementById('modal-process').textContent = data.process;
    document.getElementById('modal-result').textContent = data.result;
    document.getElementById('modal-link').href = data.link;

    const imgEl = document.getElementById('modal-image');
    imgEl.src = data.image;
    imgEl.alt = data.title;

    // Tech Tags
    const techContainer = document.getElementById('modal-tech');
    techContainer.innerHTML = '';
    data.tech.forEach(t => {
      const span = document.createElement('span');
      span.className = 'px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-pink-950/70 text-pink-300 border border-pink-700/40';
      span.textContent = t;
      techContainer.appendChild(span);
    });

    // Features List
    const featuresContainer = document.getElementById('modal-features');
    featuresContainer.innerHTML = '';
    data.features.forEach(f => {
      const li = document.createElement('li');
      li.className = 'flex items-start text-sm text-slate-300';
      li.innerHTML = `<svg class="w-4 h-4 text-pink-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> <span>${f}</span>`;
      featuresContainer.appendChild(li);
    });

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-project');
      openModal(id);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Copy Email Functionality
  window.copyEmail = function() {
    const email = "pranadyaanungg@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      showToast("Email disalin ke clipboard: " + email);
    }).catch(() => {
      showToast("Email: " + email);
    });
  };

  // Toast Functionality
  function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-4');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'translate-y-4');
    }, 3200);
  }

  window.showToast = showToast;
});
