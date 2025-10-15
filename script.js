const assessmentData = [
  {
    "id": 1,
    "question_cn": "你在团队中通常扮演什么角色？",
    "question_en": "What role do you usually play in a team?",
    "options": {
      "A": { "text_cn": "带领大家前进", "text_en": "Lead the team", "type": "Leader" },
      "B": { "text_cn": "分析问题", "text_en": "Analyze issues", "type": "Thinker" },
      "C": { "text_cn": "协调关系", "text_en": "Maintain harmony", "type": "Helper" },
      "D": { "text_cn": "提出新点子", "text_en": "Bring new ideas", "type": "Creator" }
    }
  },
  {
    "id": 2,
    "question_cn": "你最喜欢的工作环境是？",
    "question_en": "What’s your preferred work environment?",
    "options": {
      "A": { "text_cn": "结构清晰、有目标", "text_en": "Structured with clear goals", "type": "Leader" },
      "B": { "text_cn": "安静、可专注", "text_en": "Quiet and focused", "type": "Thinker" },
      "C": { "text_cn": "有人情味、团队感", "text_en": "Friendly and team-oriented", "type": "Helper" },
      "D": { "text_cn": "自由、有创意空间", "text_en": "Free and creative", "type": "Creator" }
    }
  },
  {
    "id": 3,
    "question_cn": "当遇到困难任务时，你的反应是？",
    "question_en": "When facing a tough task, you...",
    "options": {
      "A": { "text_cn": "主动分配任务", "text_en": "Take charge and delegate", "type": "Leader" },
      "B": { "text_cn": "分解问题分析", "text_en": "Break down and analyze", "type": "Thinker" },
      "C": { "text_cn": "寻求他人帮助", "text_en": "Ask others for help", "type": "Helper" },
      "D": { "text_cn": "尝试不同方法", "text_en": "Try different approaches", "type": "Creator" }
    }
  },
  {
    "id": 4,
    "question_cn": "你最享受的工作部分是？",
    "question_en": "Which part of work do you enjoy most?",
    "options": {
      "A": { "text_cn": "领导与计划", "text_en": "Leading and planning", "type": "Leader" },
      "B": { "text_cn": "研究与思考", "text_en": "Research and thinking", "type": "Thinker" },
      "C": { "text_cn": "帮助他人", "text_en": "Helping others", "type": "Helper" },
      "D": { "text_cn": "创作与创新", "text_en": "Creating and innovating", "type": "Creator" }
    }
  },
  {
    "id": 5,
    "question_cn": "你最信任的能力是？",
    "question_en": "What ability do you trust most?",
    "options": {
      "A": { "text_cn": "组织协调", "text_en": "Organization and coordination", "type": "Leader" },
      "B": { "text_cn": "逻辑判断", "text_en": "Logical reasoning", "type": "Thinker" },
      "C": { "text_cn": "同理心", "text_en": "Empathy", "type": "Helper" },
      "D": { "text_cn": "想象力", "text_en": "Imagination", "type": "Creator" }
    }
  },
  {
    "id": 6,
    "question_cn": "同事赞美你时，通常会说你…",
    "question_en": "Coworkers often say you are...",
    "options": {
      "A": { "text_cn": "可靠、有领导力", "text_en": "Reliable, with leadership", "type": "Leader" },
      "B": { "text_cn": "聪明、有逻辑", "text_en": "Smart and logical", "type": "Thinker" },
      "C": { "text_cn": "体贴、好沟通", "text_en": "Caring and communicative", "type": "Helper" },
      "D": { "text_cn": "有创意、有活力", "text_en": "Creative and energetic", "type": "Creator" }
    }
  },
  {
    "id": 7,
    "question_cn": "你喜欢的项目类型是？",
    "question_en": "What type of project do you like?",
    "options": {
      "A": { "text_cn": "明确目标的计划型", "text_en": "Goal-oriented projects", "type": "Leader" },
      "B": { "text_cn": "需要思考与分析的研究型", "text_en": "Research-based projects", "type": "Thinker" },
      "C": { "text_cn": "与人互动的服务型", "text_en": "Service and interaction projects", "type": "Helper" },
      "D": { "text_cn": "自由发挥的创意型", "text_en": "Creative and open projects", "type": "Creator" }
    }
  },
  {
    "id": 8,
    "question_cn": "你解决问题的方式是？",
    "question_en": "How do you solve problems?",
    "options": {
      "A": { "text_cn": "直接行动、带领团队解决", "text_en": "Act quickly and lead the team", "type": "Leader" },
      "B": { "text_cn": "深入思考后决策", "text_en": "Think deeply before deciding", "type": "Thinker" },
      "C": { "text_cn": "征求大家意见", "text_en": "Ask for opinions", "type": "Helper" },
      "D": { "text_cn": "尝试新方法", "text_en": "Experiment with new ideas", "type": "Creator" }
    }
  },
  {
    "id": 9,
    "question_cn": "工作中，你最讨厌的是？",
    "question_en": "What frustrates you at work?",
    "options": {
      "A": { "text_cn": "缺乏方向", "text_en": "Lack of direction", "type": "Leader" },
      "B": { "text_cn": "不合理的逻辑", "text_en": "Poor logic", "type": "Thinker" },
      "C": { "text_cn": "冷漠的团队关系", "text_en": "Cold team relations", "type": "Helper" },
      "D": { "text_cn": "规则太多、太死板", "text_en": "Too many rigid rules", "type": "Creator" }
    }
  },
  {
    "id": 10,
    "question_cn": "你喜欢的反馈方式是？",
    "question_en": "How do you like to receive feedback?",
    "options": {
      "A": { "text_cn": "明确、直接", "text_en": "Clear and direct", "type": "Leader" },
      "B": { "text_cn": "数据驱动", "text_en": "Data-driven", "type": "Thinker" },
      "C": { "text_cn": "情感关怀", "text_en": "Caring and emotional", "type": "Helper" },
      "D": { "text_cn": "灵感交流", "text_en": "Inspiring discussion", "type": "Creator" }
    }
  },
  {
    "id": 11,
    "question_cn": "你在时间管理上…",
    "question_en": "How do you manage time?",
    "options": {
      "A": { "text_cn": "制定计划并严格执行", "text_en": "Plan and follow strictly", "type": "Leader" },
      "B": { "text_cn": "先思考再行动", "text_en": "Think first, then act", "type": "Thinker" },
      "C": { "text_cn": "随团队节奏调整", "text_en": "Adapt to team rhythm", "type": "Helper" },
      "D": { "text_cn": "随性但高效率", "text_en": "Flexible but efficient", "type": "Creator" }
    }
  },
  {
    "id": 12,
    "question_cn": "你最向往的职业是？",
    "question_en": "Your ideal career would be...",
    "options": {
      "A": { "text_cn": "管理者、创业者", "text_en": "Manager or entrepreneur", "type": "Leader" },
      "B": { "text_cn": "分析师、工程师", "text_en": "Analyst or engineer", "type": "Thinker" },
      "C": { "text_cn": "教育者、顾问", "text_en": "Educator or consultant", "type": "Helper" },
      "D": { "text_cn": "设计师、创作人", "text_en": "Designer or creator", "type": "Creator" }
    }
  },
  {
    "id": 13,
    "question_cn": "团队讨论时你会…",
    "question_en": "During team meetings, you...",
    "options": {
      "A": { "text_cn": "主导讨论", "text_en": "Lead the discussion", "type": "Leader" },
      "B": { "text_cn": "提出理性建议", "text_en": "Offer logical advice", "type": "Thinker" },
      "C": { "text_cn": "倾听并协调意见", "text_en": "Listen and mediate", "type": "Helper" },
      "D": { "text_cn": "激发创意", "text_en": "Spark creative ideas", "type": "Creator" }
    }
  },
  {
    "id": 14,
    "question_cn": "你认为成功的关键是？",
    "question_en": "The key to success is...",
    "options": {
      "A": { "text_cn": "明确目标与执行力", "text_en": "Clear goals and execution", "type": "Leader" },
      "B": { "text_cn": "专业知识与判断力", "text_en": "Expertise and judgment", "type": "Thinker" },
      "C": { "text_cn": "良好的人际关系", "text_en": "Good relationships", "type": "Helper" },
      "D": { "text_cn": "创新与想象力", "text_en": "Innovation and imagination", "type": "Creator" }
    }
  },
  {
    "id": 15,
    "question_cn": "如果你有一天假期，你会？",
    "question_en": "If you have a free day, you’d...",
    "options": {
      "A": { "text_cn": "规划活动带朋友去玩", "text_en": "Plan and lead a trip", "type": "Leader" },
      "B": { "text_cn": "阅读或学习新知识", "text_en": "Read or study something new", "type": "Thinker" },
      "C": { "text_cn": "见朋友聊天", "text_en": "Meet and talk with friends", "type": "Helper" },
      "D": { "text_cn": "去拍照、创作", "text_en": "Take photos or create", "type": "Creator" }
    }
  },
  {
    "id": 16,
    "question_cn": "面对冲突时，你会？",
    "question_en": "When conflicts arise, you...",
    "options": {
      "A": { "text_cn": "站出来解决问题", "text_en": "Stand up to resolve it", "type": "Leader" },
      "B": { "text_cn": "试图分析原因", "text_en": "Analyze the cause", "type": "Thinker" },
      "C": { "text_cn": "安抚双方", "text_en": "Calm both sides", "type": "Helper" },
      "D": { "text_cn": "转换角度思考新方法", "text_en": "Find a new angle or approach", "type": "Creator" }
    }
  },
  {
    "id": 17,
    "question_cn": "对你来说，理想的上司是？",
    "question_en": "Your ideal boss is...",
    "options": {
      "A": { "text_cn": "有方向感、果断", "text_en": "Decisive and goal-driven", "type": "Leader" },
      "B": { "text_cn": "聪明、理性", "text_en": "Smart and rational", "type": "Thinker" },
      "C": { "text_cn": "温暖、体贴", "text_en": "Warm and caring", "type": "Helper" },
      "D": { "text_cn": "鼓励创新", "text_en": "Encourages creativity", "type": "Creator" }
    }
  },
  {
    "id": 18,
    "question_cn": "如果换工作，你最看重？",
    "question_en": "When changing jobs, what matters most?",
    "options": {
      "A": { "text_cn": "发展机会", "text_en": "Growth opportunities", "type": "Leader" },
      "B": { "text_cn": "专业挑战", "text_en": "Professional challenges", "type": "Thinker" },
      "C": { "text_cn": "团队氛围", "text_en": "Team atmosphere", "type": "Helper" },
      "D": { "text_cn": "自由与创意空间", "text_en": "Freedom and creativity", "type": "Creator" }
    }
  }
];

const personalityTypes = {
    "Leader": {
        "cn": "领导者",
        "en": "Leader",
        "description_cn": "你善于带领团队、制定计划，并能激励他人共同实现目标。你适合在管理、项目协调等领域发挥才能。",
        "description_en": "You are good at leading teams, making plans, and motivating others to achieve common goals. You are suitable for roles in management, project coordination, etc."
    },
    "Thinker": {
        "cn": "思考者",
        "en": "Thinker",
        "description_cn": "你逻辑清晰、善于分析，能从复杂信息中找到关键。你适合在数据分析、策略研究等领域发光发热。",
        "description_en": "You have clear logic, are good at analysis, and can find key information from complex data. You are suitable for fields like data analysis, strategic research, etc."
    },
    "Helper": {
        "cn": "协助者",
        "en": "Helper",
        "description_cn": "你富有同理心、善于沟通，是团队中的粘合剂。你适合在客户服务、人力资源等领域展现你的价值。",
        "description_en": "You are empathetic, a good communicator, and the glue that holds a team together. You are suitable for areas like customer service, human resources, etc."
    },
    "Creator": {
        "cn": "创造者",
        "en": "Creator",
        "description_cn": "你充满想象力、热爱创新，总能提出令人惊喜的点子。你适合在设计、市场营销等领域尽情挥洒创意。",
        "description_en": "You are full of imagination, love innovation, and can always come up with surprising ideas. You are suitable for unleashing your creativity in fields like design, marketing, etc."
    }
};

let currentQuestionIndex = 0;
let userAnswers = [];
let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    startBtn.addEventListener('click', startAssessment);

    const form = document.getElementById('lead-form');
    form.addEventListener('submit', handleFormSubmit);

    updateUIText();
});

function startAssessment() {
    const welcomeSection = document.getElementById('welcome-section');
    welcomeSection.style.display = 'none';

    const assessmentSection = document.getElementById('assessment-section');
    assessmentSection.style.display = 'block';

    const progressBarContainer = document.getElementById('progress-bar-container');
    progressBarContainer.style.display = 'block';

    renderQuestion();
}

function renderQuestion() {
    updateProgressBar();
    const assessmentSection = document.getElementById('assessment-section');
    assessmentSection.innerHTML = '';
    assessmentSection.style.animation = 'none';
    void assessmentSection.offsetWidth; // Trigger reflow
    assessmentSection.style.animation = 'fadeIn 0.5s';

    const question = assessmentData[currentQuestionIndex];
    
    const questionText = currentLanguage === 'en' ? question.question_en : question.question_cn;
    const questionElement = document.createElement('h2');
    questionElement.textContent = questionText;
    assessmentSection.appendChild(questionElement);

    const optionsContainer = document.createElement('div');
    optionsContainer.classList.add('list-group');

    for (const key in question.options) {
        const option = question.options[key];
        const optionText = currentLanguage === 'en' ? option.text_en : option.text_cn;
        const button = document.createElement('button');
        button.textContent = `${key}. ${optionText}`;
        button.classList.add('list-group-item');
        button.dataset.type = option.type;
        button.addEventListener('click', () => handleAnswer(option.type));
        optionsContainer.appendChild(button);
    }
    assessmentSection.appendChild(optionsContainer);
}

function handleAnswer(type) {
    userAnswers.push(type);
    currentQuestionIndex++;
    if (currentQuestionIndex < assessmentData.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const assessmentSection = document.getElementById('assessment-section');
    assessmentSection.style.display = 'none';

    const progressBarContainer = document.getElementById('progress-bar-container');
    progressBarContainer.style.display = 'none';

    const formSection = document.getElementById('form-section');
    formSection.style.display = 'block';
}

function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    console.log({ name, email, phone });

    const formSection = document.getElementById('form-section');
    formSection.style.display = 'none';

    const resultsSection = document.getElementById('results-section');
    resultsSection.style.display = 'block';

    const resumeSection = document.getElementById('resume-section');
    resumeSection.style.display = 'block';

    displayFinalResult();
}

function displayFinalResult() {
    const resultType = calculateResult();
    const personality = personalityTypes[resultType];
    const resultsSection = document.getElementById('results-section');
    
    const titleText = currentLanguage === 'en' ? `Your Work Talent is: ${personality.en}` : `你的打工天赋是: ${personality.cn}`;
    const descriptionText = currentLanguage === 'en' ? personality.description_en : personality.description_cn;
    const imageName = resultType.toLowerCase(); // leader, thinker, helper, creator

    resultsSection.innerHTML = `
        <div class="card">
            <img src="${imageName}.gif.png" alt="${personality.en}" style="width: 100%; max-width: 400px; height: auto; margin: 20px auto; display: block;">
            <div class="card-body">
                <h3 class="card-title">${titleText}</h3>
                <p class="card-text">${descriptionText}</p>
            </div>
        </div>
    `;
}

function calculateResult() {
    const counts = {};
    for (const answer of userAnswers) {
        counts[answer] = (counts[answer] || 0) + 1;
    }
    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
}

function setLanguage(lang) {
    currentLanguage = lang;
    updateUIText();
    if (currentQuestionIndex > 0 && currentQuestionIndex < assessmentData.length) {
        renderQuestion();
    } else if (currentQuestionIndex === assessmentData.length) {
        displayFinalResult();
    }
}

function updateUIText() {
    const welcomeTitle = document.querySelector('#welcome-section .title');
    const welcomeLead = document.querySelector('#welcome-section .lead');
    const startBtn = document.getElementById('start-btn');

    const formTitle = document.querySelector('#form-section h2');
    const formLead = document.querySelector('#form-section p');
    const nameLabel = document.querySelector('label[for="name"]');
    const emailLabel = document.querySelector('label[for="email"]');
    const phoneLabel = document.querySelector('label[for="phone"]');
    const submitButton = document.querySelector('#lead-form button');
    const resumeTitle = document.querySelector('#resume-section h2');
    const resumeText = document.querySelector('#resume-section p');
    const resumeButton = document.querySelector('#resume-section a');

    if (currentLanguage === 'en') {
        welcomeTitle.textContent = 'Discover Your Work Talent / 找到你的打工天赋';
        welcomeLead.textContent = 'Complete our personality-based work talent assessment to discover your strengths.';
        startBtn.textContent = 'Start';

        formTitle.textContent = 'Your Results';
        formLead.textContent = 'Please provide your contact information to see your results and get matched with jobs.';
        nameLabel.textContent = 'Name';
        emailLabel.textContent = 'Email';
        phoneLabel.textContent = 'Phone Number';
        submitButton.textContent = 'See My Results';
        resumeTitle.textContent = 'Take the Next Step';
        resumeText.textContent = 'Upload your resume to Ricebowl’s AI Job Matcher to find the perfect job for your talents.';
        resumeButton.textContent = 'Upload Your Resume';
    } else {
        welcomeTitle.textContent = '找到你的打工天赋 / Discover Your Work Talent';
        welcomeLead.textContent = '完成我们的性格导向的职业天赋评估，发现你的优势。';
        startBtn.textContent = '开始';

        formTitle.textContent = '你的结果';
        formLead.textContent = '请提供您的联系信息以查看结果并匹配工作。';
        nameLabel.textContent = '姓名';
        emailLabel.textContent = '电子邮件';
        phoneLabel.textContent = '电话号码';
        submitButton.textContent = '查看我的结果';
        resumeTitle.textContent = '迈出下一步';
        resumeText.textContent = '将您的简历上传到 Ricebowl 的 AI 工作匹配器，为您的才华找到完美的工作。';
        resumeButton.textContent = '上传您的简历';
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progress = (currentQuestionIndex / assessmentData.length) * 100;
    progressBar.style.width = `${progress}%`;
}