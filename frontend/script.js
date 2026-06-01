// RozgarSathi Mock Opportunities Database
const opportunitiesDb = {
  construction: {
    jobs: [
      {
        title: "राजमिस्त्री / Senior Mason",
        company: "BuildIndia Corp.",
        salary: "₹18,000 - ₹24,000 / महीना",
        requirements: "2+ साल का अनुभव, नक्शा पढ़ना आता हो",
        contact: "इंजीनियर प्रदीप शर्मा"
      },
      {
        title: "कंस्ट्रक्शन हेल्पर / Site Helper",
        company: "Apex Infrastructure Ltd.",
        salary: "₹12,000 - ₹15,000 / महीना",
        requirements: "कोई अनुभव जरूरी नहीं, शारीरिक रूप से स्वस्थ",
        contact: "ठेकेदार राजेश यादव"
      }
    ],
    schemes: [
      {
        title: "पीएम श्रम योगी मान-धन योजना (PM-SYM)",
        benefits: "६० वर्ष की आयु के बाद ₹3,000 प्रतिमाह निश्चित पेंशन।",
        eligibility: "असंगठित मजदूर, आयु 18-40 वर्ष, मासिक आय < ₹15,000।"
      },
      {
        title: "भवन एवं अन्य सन्निर्माण कर्मकार कल्याण बोर्ड (BOCW Card)",
        benefits: "बच्चों की पढ़ाई के लिए छात्रवृत्ति, इलाज और विवाह हेतु वित्तीय सहायता।",
        eligibility: "निर्माण स्थलों पर कम से कम 90 दिन काम करने वाले मजदूर।"
      }
    ],
    roadmap: [
      { step: "१. हेल्पर से शुरुआत करें", desc: "निर्माण साइट पर सामान, सीमेंट और सामग्री की बुनियादी समझ हासिल करें।" },
      { step: "२. राजमिस्त्री का काम सीखें", desc: "दीवार बनाना, प्लास्टर करना और टाइल्स लगाने जैसी कुशल तकनीकों को सीखें।" },
      { step: "३. ड्राइंग पढ़ना और सुपरवाइजिंग सीखें", desc: "एआई टूल या साइट इंजीनियर की मदद से नक्शा पढ़ना सीखें और सुपरवाइजर बन कर दोगुनी कमाई करें।" }
    ]
  },
  factory: {
    jobs: [
      {
        title: "पैकिंग हेल्पर / Packaging Helper",
        company: "Krishna Food Products",
        salary: "₹13,000 - ₹16,000 / महीना",
        requirements: "सक्रिय कार्य क्षमता, बुनियादी पढ़ना-लिखना",
        contact: "अमित मिश्रा (HR मैनेजर)"
      },
      {
        title: "मशीन ऑपरेटर सहायक / Machine Operator Helper",
        company: "Dynamic Auto Parts",
        salary: "₹16,000 - ₹20,000 / महीना",
        requirements: "12वीं पास या ITI, तकनीकी काम सीखने की इच्छा",
        contact: "सुनील कुमार (प्लांट हेड)"
      }
    ],
    schemes: [
      {
        title: "ई-श्रम कार्ड (e-Shram)",
        benefits: "आपातकालीन समय में सीधे खाते में आर्थिक मदद और ₹2 लाख का मुफ्त दुर्घटना बीमा।",
        eligibility: "सभी असंगठित और फैक्ट्री मजदूर।"
      },
      {
        title: "प्रधानमंत्री सुरक्षा बीमा योजना (PMSBY)",
        benefits: "₹2 लाख का आकस्मिक मृत्यु और पूर्ण विकलांगता बीमा, मात्र ₹20 वार्षिक प्रीमियम पर।",
        eligibility: "बचत बैंक खाते वाले सभी भारतीय नागरिक (18-70 वर्ष)।"
      }
    ],
    roadmap: [
      { step: "१. सुरक्षा नियम और टूल्स समझें", desc: "फैक्ट्री में सुरक्षात्मक उपकरण पहनना और बुनियादी मशीन ऑपरेशन्स समझें।" },
      { step: "२. कंप्यूटर या मशीन कंट्रोल सीखें", desc: "मैन्युअल से ऑटोमैटिक मशीन कंट्रोल यूनिट्स की बुनियादी सेटिंग्स को चलाना सीखें।" },
      { step: "३. CNC प्रोग्रामिंग या क्वालिटी चेक कोर्स", desc: "ऑनलाइन या संस्थान से 3 महीने की ट्रेनिंग लेकर स्किल्ड ऑपरेटर बनें।" }
    ]
  },
  electrical: {
    jobs: [
      {
        title: "जूनियर इलेक्ट्रीशियन / Junior Electrician",
        company: "ElectroFix Solutions",
        salary: "₹15,000 - ₹18,000 / महीना",
        requirements: "ITI इलेक्ट्रिकल या घरेलू वायरिंग का व्यावहारिक ज्ञान",
        contact: "विक्रम सिंह (मालिक)"
      },
      {
        title: "होम अप्लायंस मरम्मत / Appliance Technician",
        company: "QuickServe Home Services",
        salary: "₹16,000 - ₹22,000 / महीना",
        requirements: "पंखे, कूलर, गीजर और मोटर रिपेयरिंग में कुशल",
        contact: "नीरज गुप्ता (सर्विस मैनेजर)"
      }
    ],
    schemes: [
      {
        title: "प्रधानमंत्री कौशल विकास योजना (PMKVY)",
        benefits: "निःशुल्क सरकारी इलेक्ट्रिकल ट्रेनिंग कोर्स, सरकारी प्रमाण पत्र और ₹8,000 की प्रोत्साहन राशि।",
        eligibility: "बेरोजगार युवा या स्कूल/कॉलेज छोड़ चुके छात्र (15-45 वर्ष)।"
      },
      {
        title: "प्रधानमंत्री जीवन ज्योति बीमा योजना (PMJJBY)",
        benefits: "किसी भी कारण से मृत्यु होने पर परिवार को ₹2 लाख का जीवन बीमा कवर, प्रति वर्ष ₹436 प्रीमियम।",
        eligibility: "18 से 50 वर्ष की आयु के बैंक खाताधारक।"
      }
    ],
    roadmap: [
      { step: "१. घरेलू वायरिंग और सुरक्षा नियम सीखें", desc: "सिंगल-फेज वायरिंग, अर्थिंग और सेफ्टी टूल्स का सही उपयोग सीखें।" },
      { step: "२. स्मार्ट अप्लायंस रिपेयरिंग सीखें", desc: "आधुनिक इन्वर्टर, स्मार्ट फैन और गीजर की सर्किट टेस्टिंग और डायग्नोस्टिक्स सीखें।" },
      { step: "३. सोलर पैनल इंस्टॉलेशन (भविष्य का काम)", desc: "सोलर पैनल लगाने और उनकी बैटरी ग्रिड को जोड़ने का कोर्स करें, इसकी मांग बहुत तेजी से बढ़ रही है।" }
    ]
  },
  plumbing: {
    jobs: [
      {
        title: "प्लंबर हेल्पर / Plumber Helper",
        company: "AquaTech Plumbing Services",
        salary: "₹12,000 - ₹15,000 / महीना",
        requirements: "काम सीखने की लगन, पाइप फिटिंग में सहायता",
        contact: "राकेश वर्मा (सीनियर प्लंबर)"
      },
      {
        title: "प्लंबिंग टेक्नीशियन / Maintenance Plumber",
        company: "Grand Residency Hotels",
        salary: "₹17,000 - ₹21,000 / महीना",
        requirements: "लीकेज ढूंढने और फिटिंग करने का 1 साल का अनुभव",
        contact: "HR डिपार्टमेंट"
      }
    ],
    schemes: [
      {
        title: "प्रधानमंत्री कौशल विकास योजना (PMKVY - प्लंबिंग कोर्स)",
        benefits: "मुफ्त प्लंबिंग ट्रेनिंग, सरकार द्वारा मान्यता प्राप्त सर्टिफिकेट और जॉब प्लेसमेंट सहायता।",
        eligibility: "10वीं/12वीं पास भारतीय युवा जो अपना हुनर बढ़ाना चाहते हैं।"
      },
      {
        title: "ई-श्रम योजना (e-Shram Welfare)",
        benefits: "असंगठित प्लंबिंग और सैनिटेशन कामगारों के लिए पेंशन योजनाओं में सीधा पंजीकरण लाभ।",
        eligibility: "18-59 वर्ष के असंगठित क्षेत्र के कामगार।"
      }
    ],
    roadmap: [
      { step: "१. पाइप मटेरियल और फिटिंग सीखें", desc: "PVC, GI और CPVC पाइपों की कटिंग, थ्रेडिंग और बुनियादी जॉइंट्स बनाना सीखें।" },
      { step: "२. लेआउट और आधुनिक फिटिंग समझें", desc: "बाथरूम और किचन में वाटर प्रेशर लाइनों का लेआउट बनाना और मॉडर्न कमोड/सिंक फिटिंग सीखें।" },
      { step: "३. ऑटोमेशन और पंप रिपेयरिंग", desc: "प्रेशर पंप, वाटर प्यूरीफायर और ऑटोमैटिक सेंसर नलों का काम सीखकर खुद का स्वतंत्र काम शुरू करें।" }
    ]
  },
  domestic: {
    jobs: [
      {
        title: "सिक्योरिटी गार्ड / Housing Society Guard",
        company: "Rakshak Security Corp.",
        salary: "₹14,000 - ₹18,000 / महीना",
        requirements: "शारीरिक रूप से चुस्त, बुनियादी रजिस्टर एंट्री लिखना आना चाहिए",
        contact: "कैप्टन देवेन्द्र (सुपरवाइजर)"
      },
      {
        title: "डिलीवरी पार्टनर / Bike Delivery Executive",
        company: "Swift Logistics Ltd.",
        salary: "₹15,000 - ₹22,000 / महीना (पेट्रोल भत्ता अतिरिक्त)",
        requirements: "स्मार्टफोन चलाना आता हो, खुद की बाइक और ड्राइविंग लाइसेंस अनिवार्य",
        contact: "ऑपरेशन्स टीम"
      }
    ],
    schemes: [
      {
        title: "आयुष्मान भारत योजना (Ayushman Golden Card)",
        benefits: "सरकारी और चिन्हित निजी अस्पतालों में प्रति वर्ष प्रति परिवार ₹5 लाख तक का मुफ्त इलाज।",
        eligibility: "गरीब और असंगठित क्षेत्र के कामकाजी परिवार (SECC सूची के अनुसार)।"
      },
      {
        title: "प्रधानमंत्री जन धन योजना (PMJDY)",
        benefits: "जीरो बैलेंस बैंक खाता, ₹10,000 ओवरड्राफ्ट सुविधा और ₹2 लाख का मुफ्त दुर्घटना बीमा कार्ड।",
        eligibility: "कोई भी भारतीय नागरिक जिसके पास बैंक खाता नहीं है।"
      }
    ],
    roadmap: [
      { step: "१. स्मार्टफोन और नेविगेशन का उपयोग सीखें", desc: "गूगल मैप्स (Google Maps) चलाना और डिजिटल पेमेंट रिसीव करना सीखें।" },
      { step: "२. कंप्यूटर और सुरक्षा प्रणालियों की ट्रेनिंग लें", desc: "सोसायटियों में उपयोग होने वाले एंट्री ऐप्स (जैसे MyGate/NoBrokerHood) की ट्रेनिंग लें।" },
      { step: "३. लॉजिस्टिक्स या सुपरवाइजर कोर्स करें", desc: "वेयरहाउस ऑपरेशन्स, बिल मेकिंग और स्टोर सुपरवाइजिंग सीखकर ऊंची सैलरी पाएं।" }
    ]
  },
  other: {
    jobs: [
      {
        title: "सामान्य सहायक / General Utility Helper",
        company: "Bharat Enterprises",
        salary: "₹13,000 - ₹16,000 / महीना",
        requirements: "मेहनती, लोडिंग-अनलोडिंग और पैकेजिंग में सहायता",
        contact: "विवेक सेन (मैनेजर)"
      },
      {
        title: "स्टोर कीपर सहायक / Assistant Storekeeper",
        company: "Royal Retail Mart",
        salary: "₹14,000 - ₹18,000 / महीना",
        requirements: "सामान की गिनती, बिलों की जांच और व्यवस्थित रखना",
        contact: "HR ऑफिस"
      }
    ],
    schemes: [
      {
        title: "ई-श्रम कार्ड (Universal Account Card)",
        benefits: "मजदूर डेटाबेस में सीधा पंजीकरण जिससे भविष्य में सभी सरकारी लाभ और पेंशन सीधे खाते में आएं।",
        eligibility: "18-59 वर्ष के वे सभी लोग जो सरकारी नौकरी या PF/ESI के दायरे में नहीं आते।"
      },
      {
        title: "अटल पेंशन योजना (Atal Pension Yojana - APY)",
        benefits: "आपके छोटे योगदान के बदले ६० साल की उम्र के बाद ₹1,000 से ₹5,000 प्रति माह आजीवन निश्चित पेंशन।",
        eligibility: "18 से 40 वर्ष की आयु के सभी भारतीय नागरिक।"
      }
    ],
    roadmap: [
      { step: "१. बुनियादी डिजिटल साक्षरता सीखें", desc: "यूपीआई (UPI) पेमेंट लेना, बिल बनाना और व्हाट्सएप पर डॉक्यूमेंट शेयर करना सीखें।" },
      { step: "२. कंप्यूटर और डेटा एंट्री सीखें", desc: "एमएस एक्सेल (MS Excel) और बुनियादी टाइपिंग सीखें जो हर दफ्तर में काम आती है।" },
      { step: "३. सुपरवाइजर या सेल्स स्किल डेवलप करें", desc: "गले पर बैठना, कस्टमर डीलिंग और दुकान की देखभाल करना सीखकर मैनेजर स्तर पर बढ़ें।" }
    ]
  }
};

// Form Scroll helper for CTA button
document.getElementById('hero-cta-btn').addEventListener('click', function(e) {
  e.preventDefault();
  const targetId = this.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Step 1 -> Step 2 Dynamic Dropdown Logic
document.getElementById('category-select').addEventListener('change', function() {
  const categoryVal = this.value;
  const skillSelect = document.getElementById('skill-select');
  
  // Clear previous options
  skillSelect.innerHTML = '<option value="" disabled selected>हुनर चुनें | Choose Skill</option>';
  
  if (opportunitiesDb[categoryVal]) {
    opportunitiesDb[categoryVal].jobs.forEach(job => {
      const opt = document.createElement('option');
      opt.value = job.title;
      opt.textContent = job.title;
      skillSelect.appendChild(opt);
    });
    // Add an option for generic skill
    const otherOpt = document.createElement('option');
    otherOpt.value = "अन्य / General Help";
    otherOpt.textContent = "अन्य / General Help";
    skillSelect.appendChild(otherOpt);
    
    skillSelect.disabled = false;
  } else {
    skillSelect.disabled = true;
  }
});

// Form Submit Handling
document.getElementById('search-form').addEventListener('submit', function(e) {
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
    alert("कृपया एक सही 10-अंकीय WhatsApp नंबर दर्ज करें (जैसे: 9876543210)। | Please enter a valid 10-digit WhatsApp number.");
    return;
  }
  
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
      
      // Get opportunities based on category selection
      const data = opportunitiesDb[categoryVal] || opportunitiesDb['other'];
      
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
      
      document.getElementById('send-all-whatsapp').onclick = function() {
        window.open(waAllUrl, '_blank');
      };
      
      // Reveal Results Section with fade-in
      resultsSection.classList.remove('hidden');
      
      // Trigger layout reflow to allow transition to occur
      resultsSection.offsetHeight;
      
      resultsSection.classList.remove('opacity-0');
      
      // Smooth scroll to results
      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  }, 3000);
});

// Search Again scroll-back handler
document.getElementById('search-again-btn').addEventListener('click', function() {
  const formSection = document.getElementById('form-section');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
