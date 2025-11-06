// =======================================================================
// ASSESSMENT DATA
// =======================================================================

const chartExplanation = {
    title_cn: "你的优势分布图",
    title_en: "Your Advantage Distribution",
    description_cn: "下图展示了您在六大职业优势维度上的得分。分数越高，代表您在该方面的潜在优势越明显。这有助于您了解自己的核心竞争力。",
    description_en: "The chart below shows your scores across the six core career advantages. A higher score indicates a stronger potential advantage in that area, helping you understand your core competencies."
};

const rankedListTitle = {
    title_cn: "六大优势排名",
    title_en: "Top 6 Advantages"
};

const likertOptions = {
    options_cn: [
        { score: 5, text: "非常符合" },
        { score: 4, text: "符合" },
        { score: 3, text: "一般" },
        { score: 2, text: "不符合" },
        { score: 1, text: "非常不符合" }
    ],
    options_en: [
        { score: 5, text: "Strongly Agree" },
        { score: 4, text: "Agree" },

        { score: 3, text: "Neutral" },
        { score: 2, text: "Disagree" },
        { score: 1, text: "Strongly Disagree" }
    ]
};

const dimensionAnalysis = {
    "Leadership": {
        name_cn: "引领力",
        name_en: "Leadership",
        analysis_cn: "你具备出色的引领力。你天生善于指引方向、整合资源、激励人心。在团队中，你常常是那个能让大家拧成一股绳，朝着共同目标前进的核心人物。你享受带领他人取得成就的过程，并且不畏惧在混乱中建立秩序，在不确定性中做出决策。",
        analysis_en: "You possess outstanding leadership qualities. You are naturally skilled at setting direction, integrating resources, and inspiring people. In a team, you are often the core figure who can unite everyone to move towards a common goal. You enjoy the process of leading others to achieve success and are not afraid to establish order in chaos or make decisions amidst uncertainty.",
        advice_cn: "发展建议：持续锻炼你的同理心。一个伟大的领导者不仅能指引方向，更能理解和关怀团队成员的感受。在做决策时，尝试更多地倾听和吸收不同意见，这能让你的决策更全面，更能获得团队的拥护。",
        advice_en: "Development Advice: Continue to practice your empathy. A great leader not only sets direction but also understands and cares for the feelings of team members. When making decisions, try to listen more and absorb different opinions. This will make your decisions more comprehensive and better supported by the team.",
        jobs_cn: ["项目经理", "团队主管", "产品负责人", "创业者"],
        jobs_en: ["Project Manager", "Team Lead", "Product Owner", "Entrepreneur"]
    },
    "Analytical": {
        name_cn: "分析力",
        name_en: "Analytical Ability",
        analysis_cn: "你拥有卓越的分析力。你擅长将复杂的问题拆解成更小的部分，并从海量信息中识别出关键模式和逻辑关系。你做决策时倾向于依赖数据和事实，而不是直觉。这使你成为团队中那个能提供深刻洞见、确保方案严谨可靠的“大脑”。",
        analysis_en: "You have excellent analytical skills. You excel at breaking down complex problems into smaller parts and identifying key patterns and logical relationships from vast amounts of information. You tend to rely on data and facts rather than intuition when making decisions. This makes you the 'brain' of the team, capable of providing deep insights and ensuring that plans are rigorous and reliable.",
        advice_cn: "发展建议：锻炼你的沟通和表达能力。再好的分析，如果不能清晰地传达给他人，其价值也会大打折扣。学习如何将复杂的数据和分析结果，用简单、有说服力的方式呈现给非专业背景的同事或客户。",
        advice_en: "Development Advice: Work on your communication and presentation skills. Even the best analysis is less valuable if it cannot be clearly communicated to others. Learn how to present complex data and analytical results in a simple, persuasive way to colleagues or clients from non-technical backgrounds.",
        jobs_cn: ["数据分析师", "战略顾问", "市场研究员", "金融分析师"],
        jobs_en: ["Data Analyst", "Strategy Consultant", "Market Researcher", "Financial Analyst"]
    },
    "Empathy": {
        name_cn: "共情力",
        name_en: "Empathy",
        analysis_cn: "你是一个富有共情力的人。你天生就能敏锐地感知他人的情绪和需求，并愿意伸出援手。你是团队中的“粘合剂”，善于建立信任、化解冲突、营造积极和谐的团队氛围。人们愿意向你敞开心扉，因为他们知道能从你这里获得理解和支持。",
        analysis_en: "You are a person full of empathy. You are naturally sensitive to the emotions and needs of others and are willing to lend a helping hand. You are the 'glue' in a team, skilled at building trust, resolving conflicts, and creating a positive and harmonious team atmosphere. People are willing to open up to you because they know they can get understanding and support from you.",
        advice_cn: "发展建议：学会设立边界。你的善良和乐于助人可能会让你承担过多的情感负担或工作。学习在适当的时候说“不”，并区分“帮助他人”与“承担本不属于你的责任”，这对你的长期职业健康至关重要。",
        advice_en: "Development Advice: Learn to set boundaries. Your kindness and willingness to help may lead you to take on too much emotional burden or work. Learning to say 'no' at the right times and distinguishing between 'helping others' and 'taking on responsibilities that are not yours' is crucial for your long-term career well-being.",
        jobs_cn: ["人力资源", "客户成功经理", "用户体验研究员", "教师/培训师"],
        jobs_en: ["Human Resources", "Customer Success Manager", "UX Researcher", "Teacher/Trainer"]
    },
    "Creativity": {
        name_cn: "创造力",
        name_en: "Creativity",
        analysis_cn: "你的核心优势是创造力。你拥有丰富的想象力和强烈的好奇心，总能看到别人看不到的可能性。你讨厌墨守成规，喜欢用全新的视角看待问题，并提出令人惊喜的解决方案。你是团队中不可或缺的“点子王”，能为团队注入源源不断的活力和新思路。",
        analysis_en: "Your core strength is creativity. You have a rich imagination and a strong sense of curiosity, always seeing possibilities that others miss. You dislike sticking to conventions and prefer to look at problems from a fresh perspective, proposing surprising solutions. You are the indispensable 'idea generator' on the team, injecting a constant stream of energy and new thinking.",
        advice_cn: "发展建议：将你的创意与执行力结合起来。一个伟大的创意需要落地才能产生价值。学习如何为你的创意制定一个可行的计划，并与团队合作，一步步将它变为现实。不要害怕失败，将每次尝试都看作学习的过程。",
        advice_en: "Development Advice: Combine your creativity with execution. A great idea needs to be implemented to have value. Learn how to create a feasible plan for your ideas and collaborate with the team to turn them into reality step by step. Don't be afraid of failure; see every attempt as a learning process.",
        jobs_cn: ["设计师", "市场营销专员", "内容创作者", "产品设计师"],
        jobs_en: ["Designer", "Marketing Specialist", "Content Creator", "Product Designer"]
    },
    "Execution": {
        name_cn: "执行力",
        name_en: "Execution",
        analysis_cn: "你具备强大的执行力。你是一个非常可靠、注重细节和流程的人。你擅长将宏大的计划转化为具体、可操作的步骤，并能有条不紊地推动任务完成。你对“完成”这件事有强烈的执着，是确保项目能够按时、高质量交付的关键保障。",
        analysis_en: "You have strong execution skills. You are a very reliable person who pays attention to details and processes. You are good at turning grand plans into concrete, actionable steps and can systematically drive tasks to completion. You have a strong commitment to 'getting things done' and are a key guarantee for ensuring projects are delivered on time and with high quality.",
        advice_cn: "发展建议：在关注细节的同时，别忘了抬头看看方向。有时过于专注于执行细节可能会让你忽略整体战略的变化。定期与团队领导或项目负责人沟通，确保你的努力始终与最终目标保持一致。",
        advice_en: "Development Advice: While focusing on details, don't forget to look up at the bigger picture. Sometimes, being too focused on the minutiae of execution can cause you to miss changes in the overall strategy. Regularly check in with team leads or project managers to ensure your efforts are always aligned with the ultimate goal.",
        jobs_cn: ["运营专员", "项目助理", "质量保证(QA)", "行政管理"],
        jobs_en: ["Operations Specialist", "Project Coordinator", "Quality Assurance (QA)", "Administrator"]
    },
    "Resilience": {
        name_cn: "抗压力",
        name_en: "Resilience",
        analysis_cn: "你拥有出色的抗压力。你能在高压和不确定的环境中保持冷静和专注，并将挑战和挫折视为成长的机会。你的心态非常稳定，能快速从失败中恢复过来，并能安抚团队中其他人的焦虑情绪。你是团队在风暴中可以依赖的“定心丸”。",
        analysis_en: "You possess excellent resilience. You can remain calm and focused in high-pressure and uncertain environments, viewing challenges and setbacks as opportunities for growth. You have a very stable mindset, can recover quickly from failure, and can soothe the anxiety of others on the team. You are the 'anchor' the team can rely on in a storm.",
        advice_cn: "发展建议：关注自己的身心健康。高抗压力不代表你没有压力。学会识别自己压力过大的信号，并主动通过运动、冥想、沟通等方式进行调节。健康的你才能更好地应对挑战，并持续为团队提供支持。",
        advice_en: "Development Advice: Pay attention to your own physical and mental health. High resilience doesn't mean you don't feel stress. Learn to recognize the signs of being over-stressed and proactively manage it through exercise, meditation, communication, etc. A healthy you can better face challenges and continue to support the team.",
        jobs_cn: ["公关专员", "客户支持", "创业团队成员", "销售"],
        jobs_en: ["Public Relations Specialist", "Customer Support", "Startup Team Member", "Sales"]
    }
};

const assessmentData = [
    // Dimension: Leadership
    { id: 1, dimension: "Leadership", statement_cn: "当项目进度落后、团队士气低落时，我倾向于站出来，重新明确目标并激励大家。", statement_en: "When a project is behind schedule and morale is low, I tend to step up, redefine goals, and motivate everyone." },
    { id: 2, dimension: "Leadership", statement_cn: "在团队决策陷入僵局时，我认为自己有责任做出最终决定并承担后果。", statement_en: "When a team is deadlocked, I feel it's my responsibility to make the final decision and bear the consequences." },
    { id: 3, dimension: "Leadership", statement_cn: "我乐于指导和帮助新同事，并视其为自己职责的一部分。", statement_en: "I enjoy mentoring new colleagues and see it as part of my responsibility." },
    { id: 4, dimension: "Leadership", statement_cn: "相比于自己独立完成任务，我更享受带领一个团队共同达成目标。", statement_en: "I enjoy leading a team to achieve a goal more than completing a task by myself." },
    { id: 5, dimension: "Leadership", statement_cn: "我习惯于为团队的未来制定长远规划和愿景。", statement_en: "I am used to creating long-term plans and a vision for the team's future." },

    // Dimension: Analytical
    { id: 6, dimension: "Analytical", statement_cn: "在做重要决定前，我必须先收集和分析相关数据。", statement_en: "Before making an important decision, I must first gather and analyze relevant data." },
    { id: 7, dimension: "Analytical", statement_cn: "我喜欢将一个复杂的大问题，拆解成几个可以管理的小部分来处理。", statement_en: "I like to break down a large, complex problem into smaller, manageable parts." },
    { id: 8, dimension: "Analytical", statement_cn: "面对相互矛盾的信息时，我的第一反应是去探究事实真相。", statement_en: "When faced with conflicting information, my first instinct is to investigate the facts." },
    { id: 9, dimension: "Analytical", statement_cn: "我认为一个方案的逻辑严谨性，比它的创意更重要。", statement_en: "I believe the logical rigor of a plan is more important than its creativity." },
    { id: 10, dimension: "Analytical", statement_cn: "我善于从一堆杂乱的数据中发现隐藏的规律和趋势。", statement_en: "I am good at finding hidden patterns and trends in a messy set of data." },

    // Dimension: Empathy
    { id: 11, dimension: "Empathy", statement_cn: "我能轻易察觉到同事的情绪变化。", statement_en: "I can easily notice changes in a colleague's mood." },
    { id: 12, dimension: "Empathy", statement_cn: "在团队讨论中，我会特别留意确保每个人的意见都被听到。", statement_en: "In team discussions, I make a special effort to ensure everyone's opinion is heard." },
    { id: 13, dimension: "Empathy", statement_cn: "当同事犯错时，我倾向于先安慰他，而不是指责。", statement_en: "When a colleague makes a mistake, I tend to comfort them first rather than blame them." },
    { id: 14, dimension: "Empathy", statement_cn: "理解他人的感受和观点，对我来说是一件自然而然的事。", statement_en: "Understanding others' feelings and perspectives comes naturally to me." },
    { id: 15, dimension: "Empathy", statement_cn: "一个和谐、互信的团队氛围，对我非常重要。", statement_en: "A harmonious and trusting team atmosphere is very important to me." },

    // Dimension: Creativity
    { id: 16, dimension: "Creativity", statement_cn: "我经常会思考如何用全新的方法来做日常的工作。", statement_en: "I often think about new ways to do my routine tasks." },
    { id: 17, dimension: "Creativity", statement_cn: "在头脑风暴时，我喜欢提出一些看似“疯狂”的想法。", statement_en: "During brainstorming, I enjoy proposing ideas that might seem 'crazy'." },
    { id: 18, dimension: "Creativity", statement_cn: "相比于按部就班，我更喜欢在一个充满未知和可能性的项目中工作。", statement_en: "I prefer working on projects full of unknowns and possibilities rather than following a set plan." },
    { id: 19, dimension: "Creativity", statement_cn: "我很容易对一成不变的规则和流程感到厌倦。", statement_en: "I get bored easily with rigid rules and processes." },
    { id: 20, dimension: "Creativity", statement_cn: "我能从不相关的领域中获得灵感，并将其应用到我的工作中。", statement_en: "I can draw inspiration from unrelated fields and apply it to my work." },

    // Dimension: Execution
    { id: 21, dimension: "Execution", statement_cn: "对我来说，一个计划最重要的部分就是如何将它落实。", statement_en: "For me, the most important part of a plan is how to execute it." },
    { id: 22, dimension: "Execution", statement_cn: "我为自己能按时、高质量地完成任务而感到自豪。", statement_en: "I take pride in completing my tasks on time and with high quality." },
    { id: 23, dimension: "Execution", statement_cn: "我喜欢使用清单（Checklist）和待办事项（To-do list）来管理我的工作。", statement_en: "I like using checklists and to-do lists to manage my work." },
    { id: 24, dimension: "Execution", statement_cn: "一个任务如果没有明确的截止日期，我就会感觉不舒服。", statement_en: "I feel uncomfortable if a task doesn't have a clear deadline." },
    { id: 25, dimension: "Execution", statement_cn: "在会议结束后，我会立即跟进相关的行动项。", statement_en: "After a meeting, I immediately follow up on the action items." },

    // Dimension: Resilience
    { id: 26, dimension: "Resilience", statement_cn: "即使项目被意外取消，我也能很快调整心态，投入到新任务中。", statement_en: "Even if a project is unexpectedly canceled, I can quickly adjust my mindset and move on to the next task." },
    { id: 27, dimension: "Resilience", statement_cn: "我将工作中的批评（即使不公）视为成长的机会。", statement_en: "I view criticism at work (even if unfair) as an opportunity for growth." },
    { id: 28, dimension: "Resilience", statement_cn: "在巨大的压力下，我依然能保持冷静和专注。", statement_en: "I can remain calm and focused even under immense pressure." },
    { id: 29, dimension: "Resilience", statement_cn: "我能很快从工作的挫败感中恢复过来。", statement_en: "I can bounce back quickly from setbacks at work." },
    { id: 30, dimension: "Resilience", statement_cn: "面对工作中的不确定性，我感到兴奋多于焦虑。", statement_en: "I feel more excited than anxious when facing uncertainty at work." }
];


// =======================================================================
// ASSESSMENT LOGIC
// =======================================================================

let currentPage = 0;
const questionsPerPage = 5;
let userScores = {
    "Leadership": 0, "Analytical": 0, "Empathy": 0,
    "Creativity": 0, "Execution": 0, "Resilience": 0
};
let allAnswers = {}; // Use a single object to store all answers
let currentLanguage = 'en';
let myChart;

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    if (startBtn) startBtn.addEventListener('click', startAssessment);

    const form = document.getElementById('lead-form');
    if (form) form.addEventListener('submit', handleFormSubmit);

    updateUIText();
});

function startAssessment() {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('assessment-section').style.display = 'block';
    document.getElementById('progress-container').style.display = 'flex';
    renderQuestionPage();
}

function renderQuestionPage() {
    updateProgressBar();
    const assessmentSection = document.getElementById('assessment-section');
    assessmentSection.innerHTML = '';
    assessmentSection.style.animation = 'none';
    void assessmentSection.offsetWidth;
    assessmentSection.style.animation = 'fadeIn 0.5s';

    const start = currentPage * questionsPerPage;
    const end = Math.min(start + questionsPerPage, assessmentData.length);
    const questionsOnPage = assessmentData.slice(start, end);

    questionsOnPage.forEach((question, index) => {
        const questionIndex = start + index;
        const statementText = currentLanguage === 'en' ? question.statement_en : question.statement_cn;

        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');
        questionContainer.id = `question-${question.id}`;

        const questionElement = document.createElement('h3');
        questionElement.textContent = `${questionIndex + 1}. ${statementText}`;
        questionContainer.appendChild(questionElement);

        const optionsContainer = document.createElement('div');
        optionsContainer.classList.add('list-group', 'likert-scale-condensed');

        const options = currentLanguage === 'en' ? likertOptions.options_en : likertOptions.options_cn;

        for (const option of options) {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.classList.add('list-group-item');
            button.dataset.score = option.score;
            button.addEventListener('click', (e) => handleAnswer(question, option.score, e.currentTarget));
            
            // Re-apply active state if answer exists
            if (allAnswers[question.id] && allAnswers[question.id].score === option.score) {
                button.classList.add('active');
            }

            optionsContainer.appendChild(button);
        }
        questionContainer.appendChild(optionsContainer);
        assessmentSection.appendChild(questionContainer);
    });

    // Navigation buttons container
    const navContainer = document.createElement('div');
    navContainer.classList.add('navigation-buttons');

    // Previous Button
    if (currentPage > 0) {
        const prevButton = document.createElement('button');
        prevButton.id = 'prev-page-btn';
        prevButton.textContent = currentLanguage === 'en' ? 'Previous' : '上一页';
        prevButton.classList.add('cta-button', 'secondary');
        prevButton.addEventListener('click', handlePreviousPage);
        navContainer.appendChild(prevButton);
    }

    // Next Button
    const nextButton = document.createElement('button');
    nextButton.id = 'next-page-btn';
    nextButton.textContent = currentLanguage === 'en' ? 'Next' : '下一页';
    nextButton.classList.add('cta-button');
    nextButton.addEventListener('click', handleNextPage);
    navContainer.appendChild(nextButton);
    
    assessmentSection.appendChild(navContainer);
    checkNextButtonStatus(); // Check if Next button should be enabled
}

function handleAnswer(question, score, selectedButton) {
    allAnswers[question.id] = { dimension: question.dimension, score: score };

    const parentOptions = selectedButton.parentElement;
    parentOptions.querySelectorAll('.list-group-item').forEach(btn => {
        btn.classList.remove('active');
    });
    selectedButton.classList.add('active');

    checkNextButtonStatus();
}

function checkNextButtonStatus() {
    const start = currentPage * questionsPerPage;
    const end = Math.min(start + questionsPerPage, assessmentData.length);
    const questionsOnPage = assessmentData.slice(start, end);
    
    const allAnswered = questionsOnPage.every(q => allAnswers[q.id] !== undefined);
    document.getElementById('next-page-btn').disabled = !allAnswered;
}

function handleNextPage() {
    currentPage++;
    const totalPages = Math.ceil(assessmentData.length / questionsPerPage);
    if (currentPage < totalPages) {
        renderQuestionPage();
    } else {
        calculateFinalScores();
        showForm();
    }
}

function handlePreviousPage() {
    if (currentPage > 0) {
        currentPage--;
        renderQuestionPage();
    }
}

function calculateFinalScores() {
    // Reset scores first
    for (const key in userScores) {
        userScores[key] = 0;
    }
    // Recalculate from all answers
    for (const id in allAnswers) {
        const answer = allAnswers[id];
        userScores[answer.dimension] += answer.score;
    }
}

function showForm() {
    document.getElementById('assessment-section').style.display = 'none';
    document.getElementById('progress-container').style.display = 'none';
    document.getElementById('form-section').style.display = 'block';
}

function handleFormSubmit(event) {
    event.preventDefault();
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    // --- 1. 准备发送给 n8n 的数据 (包含联系信息和问卷答案) ---
    const n8nPayload = {};
    
    // 1a. 添加联系信息 (name, email, phone)
    formData.forEach((value, key) => {
        n8nPayload[key] = value;
    });

    // 1b. 添加问卷答案 (q1 - q30)
    for (const id in allAnswers) {
        // allAnswers 是您的前端脚本中保存问卷答案的全局变量
        n8nPayload[`q${id}`] = allAnswers[id].score;
    }
    
    // 🚨 核心调试：查看最终发送的 Payload 🚨
    console.log("最终发送给 n8n 的 Payload:", n8nPayload); 
    
    // 确保结果在表单提交后显示 (此部分逻辑保持不变)
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('results-section').style.display = 'block';
    document.getElementById('resume-section').style.display = 'block';
    displayFinalResult();

    // ---  2. 异步：发送完整数据给 n8n Webhook ---
    fetch("https://pellyliew.app.n8n.cloud/webhook/1da87705-3fa8-4530-8a69-3579151bbac6", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(n8nPayload), // 发送包含所有问卷答案的 JSON
    })
    .then(response => {
        if (!response.ok) {
            console.error('n8n webhook failed with status:', response.status);
        }
    })
    .catch((error) => {
        console.error("n8n webhook error:", error);
    });

    // --- 3. 仍然向 Netlify 提交表单 (保持 Netlify 的内置记录功能) ---
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
    }).catch(error => {
        console.error("Netlify form submission error:", error);
    });
}
function displayFinalResult() {
    const sortedAdvantages = Object.keys(userScores).map(key => ({
        id: key,
        score: userScores[key]
    })).sort((a, b) => b.score - a.score);

    const chartExplanationContainer = document.getElementById('chart-explanation');
    chartExplanationContainer.innerHTML = `
        <h2>${currentLanguage === 'en' ? chartExplanation.title_en : chartExplanation.title_cn}</h2>
        <p>${currentLanguage === 'en' ? chartExplanation.description_en : chartExplanation.description_cn}</p>
    `;

    renderRadarChart();
    renderRankedList(sortedAdvantages);
    renderAnalysisDetails(sortedAdvantages);
}

function renderRadarChart() {
    const ctx = document.getElementById('results-chart').getContext('2d');
    const chartOrder = ["Leadership", "Analytical", "Creativity", "Execution", "Resilience", "Empathy"];
    const labels = chartOrder.map(id => currentLanguage === 'en' ? dimensionAnalysis[id].name_en : dimensionAnalysis[id].name_cn);
    const data = chartOrder.map(id => userScores[id]);

    if (myChart) {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: currentLanguage === 'en' ? 'Your Score' : '你的分数',
                data: data,
                backgroundColor: 'rgba(0, 173, 111, 0.2)',
                borderColor: 'rgba(0, 173, 111, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 25,
                    pointLabels: { font: { size: 14 } }
                }
            },
            plugins: { legend: { position: 'top' } }
        }
    });
}

function renderRankedList(sortedAdvantages) {
    const rankedListContainer = document.getElementById('ranked-list');
    const rankedListTitleEl = document.getElementById('ranked-list-title');
    rankedListTitleEl.textContent = currentLanguage === 'en' ? rankedListTitle.title_en : rankedListTitle.title_cn;

    let html = '<ol>';
    sortedAdvantages.forEach(adv => {
        const name = currentLanguage === 'en' ? dimensionAnalysis[adv.id].name_en : dimensionAnalysis[adv.id].name_cn;
        html += `<li><strong>${name}:</strong> ${adv.score} / 25</li>`;
    });
    html += '</ol>';
    rankedListContainer.innerHTML = html;
}

function renderAnalysisDetails(sortedAdvantages) {
    const analysisContainer = document.getElementById('analysis-details-container');
    let html = '';
    html += '<div class="advantage-tabs">';
    sortedAdvantages.forEach((adv, index) => {
        const name = currentLanguage === 'en' ? dimensionAnalysis[adv.id].name_en : dimensionAnalysis[adv.id].name_cn;
        html += `<button class="tab-button ${index === 0 ? 'active' : ''}" onclick="openTab(event, '${adv.id}')">${name}</button>`;
    });
    html += '</div>';

    sortedAdvantages.forEach((adv, index) => {
        const advData = dimensionAnalysis[adv.id];
        html += `
        <div id="${adv.id}" class="tab-content" style="display: ${index === 0 ? 'block' : 'none'};">
            <div class="advantage-card">
                <h2 class="advantage-title">${currentLanguage === 'en' ? advData.name_en : advData.name_cn}</h2>
                <div class="advantage-section">
                    <h3>${currentLanguage === 'en' ? 'Strength Analysis' : '优势分析'}</h3>
                    <p>${currentLanguage === 'en' ? advData.analysis_en : advData.analysis_cn}</p>
                </div>
                <div class="advantage-section">
                    <h3>${currentLanguage === 'en' ? 'Development Advice' : '发展建议'}</h3>
                    <p>${currentLanguage === 'en' ? advData.advice_en : advData.advice_cn}</p>
                </div>
                <div class="advantage-section">
                    <h3>${currentLanguage === 'en' ? 'Suggested Positions' : '职位建议'}</h3>
                    <ul>
                        ${(currentLanguage === 'en' ? advData.jobs_en : advData.jobs_cn).map(job => `<li>${job}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>`;
    });

    analysisContainer.innerHTML = html;
}

function openTab(evt, dimensionId) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(dimensionId).style.display = "block";
    evt.currentTarget.className += " active";
}

function setLanguage(lang) {
    currentLanguage = lang;
    updateUIText();
    const totalPages = Math.ceil(assessmentData.length / questionsPerPage);
    if (currentPage < totalPages) {
        renderQuestionPage();
    } else {
        // This case handles language change on the results page
        displayFinalResult();
    }
}

function updateUIText() {
    const tagline = document.querySelector('#welcome-section .tagline');
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
        if (tagline) tagline.textContent = '6 Core Career Strengths Assessment';
        if (welcomeTitle) welcomeTitle.textContent = 'You’re not lost — just undiscovered.';
        if (welcomeLead) welcomeLead.textContent = '5 minutes to find your real strengths.';
        if (startBtn) startBtn.innerHTML = '➡ Start Now';
        if (formTitle) formTitle.textContent = 'Almost There!';
        if (formLead) formLead.textContent = 'Please provide your contact information to see your detailed results and get matched with jobs.';
        if (nameLabel) nameLabel.textContent = 'Name';
        if (emailLabel) emailLabel.textContent = 'Email';
        if (phoneLabel) phoneLabel.textContent = 'Phone Number';
        if (submitButton) submitButton.textContent = 'See My Results';
        if (resumeTitle) resumeTitle.textContent = 'Take the Next Step';
        if (resumeText) resumeText.textContent = 'Upload your resume to Ricebowl’s AI Job Matcher to find the perfect job for your talents.';
        if (resumeButton) resumeButton.textContent = 'Upload Your Resume';
    } else {
        if (tagline) tagline.textContent = '职场 6 大优势测评';
        if (welcomeTitle) welcomeTitle.textContent = '你不是没有方向，只是还没读懂自己';
        if (welcomeLead) welcomeLead.textContent = '用 5 分钟，看清你的职场天赋与工作模式，找到真正适合你发展的方向。';
        if (startBtn) startBtn.innerHTML = '➡ 开始测验 · 找出你的实力';
        if (formTitle) formTitle.textContent = '就差一步！';
        if (formLead) formLead.textContent = '请提供您的联系信息，以查看您的详细结果并匹配合适的工作。';
        if (nameLabel) nameLabel.textContent = '姓名';
        if (emailLabel) emailLabel.textContent = '电子邮件';
        if (phoneLabel) phoneLabel.textContent = '电话号码';
        if (submitButton) submitButton.textContent = '查看我的结果';
        if (resumeTitle) resumeTitle.textContent = '迈出下一步';
        if (resumeText) resumeText.textContent = '将您的简历上传到 Ricebowl 的 AI 工作匹配器，为您的才华找到完美的工作。';
        if (resumeButton) resumeButton.textContent = '上传您的简历';
    }
}

function updateProgressBar() {
    const totalPages = Math.ceil(assessmentData.length / questionsPerPage);
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    
    const progress = (currentPage / totalPages) * 100;
    
    if (progressBar) progressBar.style.width = `${progress}%`;
    if (progressText) {
        progressText.textContent = currentLanguage === 'en' 
            ? `Page ${currentPage + 1} of ${totalPages}`
            : `第 ${currentPage + 1} / ${totalPages} 页`;
    }
}
