console.log("SCRIPT LOADED");

// Form Scroll helper for CTA button
document.getElementById('hero-cta-btn').addEventListener('click', function (e) {
  e.preventDefault();                                                    // helps to not jump directly and shows scroll animation
  const targetId = this.getAttribute('href');                            // href is stored as string here
  const targetSection = document.querySelector(targetId);                // string as class
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });                // gives smooth scroll animation
  }
});

// Dynamic Dropdown Logic
document.getElementById('category-select').addEventListener('change', async function () {
  const categoryVal = this.value;                                    // user selects option , which stores here
  const skillSelect = document.getElementById('skill-select');       // selects the second dropdown

  // Clear previous options
  skillSelect.innerHTML = '<option value="" disabled selected>हुनर चुनें | Choose Skill</option>';

  const response = await fetch(`/skills/${categoryVal}`);
  const skills = await response.json();
  console.log(skills);
  skills.forEach(skill => {
    const opt = document.createElement('option');
    opt.value = skill;
    opt.textContent = skill;
    skillSelect.appendChild(opt);
  });
  const otherOpt = document.createElement('option');
  otherOpt.value = "अन्य / General Help";
  otherOpt.textContent = "अन्य / General Help";
  skillSelect.appendChild(otherOpt);
  skillSelect.disabled = false;
});

// Form Submit Handling
document.getElementById('search-form').addEventListener('submit', async function (e) {
  e.preventDefault();
  const categoryVal = document.getElementById('category-select').value;
  const skillVal = document.getElementById('skill-select').value;
  const whatsappVal = document.getElementById('whatsapp-input').value.trim();
  const locationVal = document.getElementById('location-input').value.trim();

  if (!categoryVal || !skillVal || !whatsappVal || !locationVal) {
    alert("कृपया सभी आवश्यक क्षेत्रों को भरें। | Please fill in all required fields.");
    return;
  }

  // Basic WhatsApp number validation (10 digits starting with 6-9)
  const phoneRegex = /^[6-9][0-9]{9}$/;
  if (!phoneRegex.test(whatsappVal)) {
    alert("कृपया एक सही 10-अंकीय WhatsApp नंबर दर्ज करें | Please enter a valid 10-digit WhatsApp number.");
    return;
  }

  const cityRegex = /^[A-Za-z\s]+$/;
  if (!cityRegex.test(locationVal)) {
    alert("कृपया अपने शहर या गाँव का सही नाम दर्ज करें | Please enter a valid city or village name");
    return;
  }

  console.log("FETCH STARTING");

  // await says wait first when fetch finish then continue
  // to use await we need async function
  const response = await fetch("/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      category: categoryVal,
      skill: skillVal,
      location: locationVal
    })
  });
  const backendData = await response.json();
  console.log(backendData);
  console.log(response.status);
  console.log(response.ok);

  // Show Loading State & hide previous results
  const loadingState = document.getElementById('loading-state');
  const resultsSection = document.getElementById('results-section');

  resultsSection.classList.add('hidden', 'opacity-0');
  loadingState.classList.remove('hidden');

  // Scroll to loading area
  loadingState.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Stage tracking for loading animation
  const loadingText = document.getElementById('loading-text');
  const loadingSubtext = document.getElementById('loading-subtext');
  const progressBar = document.getElementById('loading-progress-bar');

  const loadingStages = [
    { text: "ढूंढ रहे हैं नौकरियां...", subtext: "Searching for jobs near you...", progress: "33%" },
    { text: "सरकारी योजनाएं मिल रही हैं...", subtext: "Matching government welfare schemes...", progress: "66%" },
    { text: "AI रोडमैप बन रहा है...", subtext: "Generating customized AI skill roadmap...", progress: "100%" }
  ];

  let currentStage = 0;
  if (progressBar) progressBar.style.width = loadingStages[0].progress;
  if (loadingText) loadingText.textContent = loadingStages[0].text;
  if (loadingSubtext) loadingSubtext.textContent = loadingStages[0].subtext;

  const stageInterval = setInterval(() => {
    currentStage++;
    if (currentStage < loadingStages.length) {
      if (progressBar) progressBar.style.width = loadingStages[currentStage].progress;
      if (loadingText) loadingText.textContent = loadingStages[currentStage].text;
      if (loadingSubtext) loadingSubtext.textContent = loadingStages[currentStage].subtext;
    }
  }, 1000);

  // Simulate AI Search (3000ms for demo flow)
  setTimeout(() => {
    clearInterval(stageInterval);

    // Smoothly fade out loading state
    loadingState.classList.add('opacity-0');

    setTimeout(() => {
      loadingState.classList.add('hidden');
      loadingState.classList.remove('opacity-0'); // reset

      // Get opportunities basedgit on category selection
      const data = backendData;

      // Inject metadata in results section
      document.getElementById('res-skill').textContent = skillVal;
      document.getElementById('res-location').textContent = locationVal;

      // Build Jobs Cards
      const jobsContainer = document.getElementById('jobs-container');
      jobsContainer.innerHTML = '';

      data.jobs.forEach((job, index) => {
        const jobLocation = locationVal;

        // WhatsApp individual job link
        const waJobText = encodeURIComponent(
          `नमस्ते RozgarSathi! मुझे इस नौकरी के बारे में और जानकारी चाहिए:\n\n` +
          `💼 पद: ${job.title}\n` +
          `🏢 कंपनी: ${job.company}\n` +
          `💰 वेतन: ${job.salary}\n` +
          `📍 शहर: ${jobLocation}\n` +
          `📞 संपर्क व्यक्ति: ${job.contact}\n\n` +
          `कृपया मुझे आवेदन करने की प्रक्रिया समझाएं। धन्यवाद!`
        );
        const waJobUrl = `https://wa.me/91${whatsappVal}?text=${waJobText}`;

        const jobCard = `
          <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-saffron/30 hover:shadow-sm transition-all space-y-3">
            <div class="flex justify-between items-start">
              <span class="bg-saffron/10 text-saffron text-xs font-bold px-2 py-1 rounded">स्थानीय नौकरी</span>
              <span class="text-xs text-charcoal-light font-semibold">${job.company}</span>
            </div>
            <h4 class="text-base md:text-lg font-bold text-charcoal">${job.title}</h4>
            <div class="space-y-1 text-xs md:text-sm text-charcoal-light">
              <p>💵 <strong class="text-charcoal">वेतन:</strong> ${job.salary}</p>
              <p>📍 <strong class="text-charcoal">स्थान:</strong> ${jobLocation}</p>
              <p>📝 <strong class="text-charcoal">शर्तें:</strong> ${job.requirements}</p>
              <p>📞 <strong class="text-charcoal">संपर्क:</strong> ${job.contact}</p>
            </div>
            <div class="pt-2">
              <a 
                href="${waJobUrl}" 
                target="_blank" 
                class="w-full min-h-[48px] px-4 py-2 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-xs md:text-sm font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all"
              >
                <span>WhatsApp पर संपर्क करें 📱</span>
              </a>
            </div>
          </div>
        `;
        jobsContainer.insertAdjacentHTML('beforeend', jobCard);
      });

      // Build Schemes Cards
      const schemesContainer = document.getElementById('schemes-container');
      schemesContainer.innerHTML = '';

      data.schemes.forEach((scheme, index) => {
        // WhatsApp individual scheme link
        const waSchemeText = encodeURIComponent(
          `नमस्ते RozgarSathi! मुझे इस सरकारी योजना का लाभ उठाना है:\n\n` +
          `🏛️ योजना: ${scheme.title}\n` +
          `🎁 लाभ: ${scheme.benefits}\n` +
          `📍 लाभार्थी स्थान: ${locationVal}\n\n` +
          `कृपया मुझे इसके लिए जरूरी दस्तावेज और आवेदन प्रक्रिया की जानकारी व्हाट्सएप पर भेजें। धन्यवाद!`
        );
        const waSchemeUrl = `https://wa.me/91${whatsappVal}?text=${waSchemeText}`;

        const schemeCard = `
          <div class="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-saffron/30 hover:shadow-sm transition-all space-y-3">
            <div class="flex justify-between items-start">
              <span class="bg-blue-50 text-blue-600 text-xs font-bold px-2 py-1 rounded">सरकारी योजना</span>
            </div>
            <h4 class="text-base md:text-lg font-bold text-charcoal">${scheme.title}</h4>
            <div class="space-y-1 text-xs md:text-sm text-charcoal-light">
              <p>🎁 <strong class="text-charcoal">मुख्य लाभ:</strong> ${scheme.benefits}</p>
              <p>🙋 <strong class="text-charcoal">योग्यता:</strong> ${scheme.eligibility}</p>
            </div>
            <div class="pt-2">
              <a 
                href="${waSchemeUrl}" 
                target="_blank" 
                class="w-full min-h-[48px] px-4 py-2 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-xs md:text-sm font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] transition-all"
              >
                <span>योजना का लाभ लें 📱</span>
              </a>
            </div>
          </div>
        `;
        schemesContainer.insertAdjacentHTML('beforeend', schemeCard);
      });

      // Build AI Roadmap Checklist
      const roadmapContainer = document.getElementById('roadmap-container');
      roadmapContainer.innerHTML = '';

      data.roadmap.forEach((step, index) => {
        const stepItem = `
          <div class="flex items-start space-x-3 text-xs md:text-sm text-charcoal-light border-b border-gray-200/50 pb-2 last:border-0 last:pb-0">
            <span class="text-saffron text-base select-none mt-0.5" aria-hidden="true">✔</span>
            <div>
              <p class="font-bold text-charcoal">${step.step}</p>
              <p class="text-charcoal-light">${step.desc}</p>
            </div>
          </div>
        `;
        roadmapContainer.insertAdjacentHTML('beforeend', stepItem);
      });

      // Configure Send All Results WhatsApp Button
      const categoryName = document.getElementById('category-select').options[document.getElementById('category-select').selectedIndex].text;
      const waAllText = encodeURIComponent(
        `नमस्ते RozgarSathi! मैंने अपनी जानकारी दर्ज की है:\n\n` +
        `👤 हुनर: ${skillVal}\n` +
        `📍 शहर: ${locationVal}\n` +
        `📂 काम की श्रेणी: ${categoryName}\n\n` +
        `कृपया मुझे मेरे शहर में मौजूद सभी नौकरियां, सरकारी योजनाओं की लिस्ट और मेरा कस्टमाइज्ड 'AI स्किल रोडमैप' व्हाट्सएप पर पीडीएफ के रूप में भेजें। धन्यवाद!`
      );
      const waAllUrl = `https://wa.me/91${whatsappVal}?text=${waAllText}`;

      document.getElementById('send-all-whatsapp').onclick = function () {
        window.open(waAllUrl, '_blank');
      };
      // Reveal Results Section with fade-in
      resultsSection.classList.remove('hidden');
      // Trigger layout reflow to allow transition to occur
      resultsSection.offsetHeight;
      resultsSection.classList.remove('opacity-0');
      // Smooth scroll to results
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      resultsSection.style.display = 'block';
    }, 300);
  }, 3000);
});

// Search Again scroll-back handler
document.getElementById('search-again-btn').addEventListener('click', function () {
  document.getElementById('jobs-container').innerHTML = '';                  // removes jobs class content
  document.getElementById('schemes-container').innerHTML = '';               // removes schemes class content
  document.getElementById('roadmap-container').innerHTML = '';               // removes roadmap class content
  document.getElementById('results-section').style.display = 'none';         // hides result class

  // Scroll back to form
  const formSection = document.getElementById('form-section');
  if (formSection) {
    formSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
});