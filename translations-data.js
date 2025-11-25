// Complete bilingual data for the personality test
const bilingualData = {
    questions: {
        zh: [
            {
                id: 1,
                text: "早上9点，你刚到办公室，Boss突然发消息说明天就要一个新项目的点子，你会？",
                options: [
                    { id: 1, text: "立刻打开电脑，开始brainstorming各种可能性", value: "idea-harvester" },
                    { id: 2, text: "先看看过去类似的项目，研究成功案例的细节", value: "detail-inspector" },
                    { id: 3, text: "马上找同事讨论，集思广益", value: "mood-manager" },
                    { id: 4, text: "先喝杯咖啡，冷静思考后再动手", value: "zen-master" }
                ]
            },
            {
                id: 2,
                text: "10点开会时，Boss突然问你对某个问题的看法，你还没准备，你会？",
                options: [
                    { id: 1, text: "凭直觉给出几个点子，之后再完善", value: "idea-harvester" },
                    { id: 2, text: "诚实地说需要更多时间研究细节", value: "detail-inspector" },
                    { id: 3, text: "迅速整理思路，给出一个结构化的回答", value: "zero-second-savior" },
                    { id: 4, text: "微笑着说：'我需要考虑一下，晚点给您答复'", value: "zen-master" }
                ]
            },
            {
                id: 3,
                text: "午休时，同事抱怨工作压力大，你会？",
                options: [
                    { id: 1, text: "建议他换个角度看问题，给他一些新的思路", value: "idea-harvester" },
                    { id: 2, text: "帮他分析问题的细节，找出解决方案", value: "detail-inspector" },
                    { id: 3, text: "听他倾诉，然后带他去喝杯好料的", value: "mood-manager" },
                    { id: 4, text: "告诉他'别担心，船到桥头自然直'", value: "zen-master" }
                ]
            },
            {
                id: 4,
                text: "下午2点，客户突然打电话来说方案有问题，需要立刻修改，你会？",
                options: [
                    { id: 1, text: "快速思考几个替代方案，让客户选择", value: "idea-harvester" },
                    { id: 2, text: "仔细询问问题所在，逐一记录下来", value: "detail-inspector" },
                    { id: 3, text: "安抚客户情绪，承诺会尽快搞定", value: "zero-second-savior" },
                    { id: 4, text: "保持冷静，按部就班地处理", value: "zen-master" }
                ]
            },
            {
                id: 5,
                text: "下午3点，你发现团队成员之间有误会，影响了工作进度，你会？",
                options: [
                    { id: 1, text: "提出一个新的工作方式，转移大家的注意力", value: "idea-harvester" },
                    { id: 2, text: "找出误会的根源，逐一解决问题", value: "detail-inspector" },
                    { id: 3, text: "组织一个小型会议，让大家坦诚沟通", value: "mood-manager" },
                    { id: 4, text: "相信他们自己能解决，不插手", value: "zen-master" }
                ]
            },
            {
                id: 6,
                text: "下午4点，你正在赶一个deadline，但电脑突然死机，你会？",
                options: [
                    { id: 1, text: "尝试用手机或平板继续工作", value: "idea-harvester" },
                    { id: 2, text: "检查电脑的每个细节，尝试修复", value: "detail-inspector" },
                    { id: 3, text: "立刻找IT部门帮忙，同时准备Plan B", value: "zero-second-savior" },
                    { id: 4, text: "深呼吸，先处理其他可以离线完成的工作", value: "zen-master" }
                ]
            },
            {
                id: 7,
                text: "下班前，Boss突然分配了一个新任务，要求明天完成，你会？",
                options: [
                    { id: 1, text: "先构思一个大致框架，明天再细化", value: "idea-harvester" },
                    { id: 2, text: "今天加班，确保每个细节都处理好", value: "detail-inspector" },
                    { id: 3, text: "快速规划时间，确保按时完成", value: "zero-second-savior" },
                    { id: 4, text: "接受任务，但按自己的节奏来，明天再说", value: "zen-master" }
                ]
            },
            {
                id: 8,
                text: "周末同事约你一起做team building，你会？",
                options: [
                    { id: 1, text: "提议一个创新的活动，比如密室逃脱", value: "idea-harvester" },
                    { id: 2, text: "主动负责策划细节，确保活动顺利", value: "detail-inspector" },
                    { id: 3, text: "积极参与，带动大家的气氛", value: "mood-manager" },
                    { id: 4, text: "随和参加，但不太想主动组织", value: "zen-master" }
                ]
            },
            {
                id: 9,
                text: "工作中遇到困难时，你通常会？",
                options: [
                    { id: 1, text: "尝试从不同角度思考，寻找创新解决方案", value: "idea-harvester" },
                    { id: 2, text: "仔细分析问题，找出每个环节的问题", value: "detail-inspector" },
                    { id: 3, text: "立刻行动，尝试各种方法解决", value: "zero-second-savior" },
                    { id: 4, text: "保持冷静，等待最佳时机再行动", value: "zen-master" }
                ]
            }
        ],
        en: [
            {
                id: 1,
                text: "9 AM, you just arrived at the office. Your boss suddenly messages saying they need ideas for a new project by tomorrow. What do you do?",
                options: [
                    { id: 1, text: "Immediately open my computer and start brainstorming possibilities", value: "idea-harvester" },
                    { id: 2, text: "Look at similar past projects and study successful case details", value: "detail-inspector" },
                    { id: 3, text: "Quickly find colleagues to discuss and brainstorm together", value: "mood-manager" },
                    { id: 4, text: "Have a cup of coffee first, think calmly then get started", value: "zen-master" }
                ]
            },
            {
                id: 2,
                text: "10 AM meeting, your boss suddenly asks for your opinion on an issue you haven't prepared for. What do you do?",
                options: [
                    { id: 1, text: "Give a few ideas based on intuition, refine them later", value: "idea-harvester" },
                    { id: 2, text: "Honestly say I need more time to study the details", value: "detail-inspector" },
                    { id: 3, text: "Quickly organize my thoughts and give a structured response", value: "zero-second-savior" },
                    { id: 4, text: "Smile and say: 'I need to think about it, I'll get back to you'", value: "zen-master" }
                ]
            },
            {
                id: 3,
                text: "During lunch break, a colleague complains about work stress. What do you do?",
                options: [
                    { id: 1, text: "Suggest they look at the problem from a different angle with new ideas", value: "idea-harvester" },
                    { id: 2, text: "Help them analyze the problem details and find solutions", value: "detail-inspector" },
                    { id: 3, text: "Listen to them vent, then take them out for a nice drink", value: "mood-manager" },
                    { id: 4, text: "Tell them 'Don't worry, things will work out'", value: "zen-master" }
                ]
            },
            {
                id: 4,
                text: "2 PM, a client suddenly calls saying there's a problem with the proposal and it needs immediate revision. What do you do?",
                options: [
                    { id: 1, text: "Quickly think of alternative solutions for the client to choose from", value: "idea-harvester" },
                    { id: 2, text: "Carefully ask about the issues and record them one by one", value: "detail-inspector" },
                    { id: 3, text: "Calm the client's emotions and promise to fix it quickly", value: "zero-second-savior" },
                    { id: 4, text: "Stay calm and handle it step by step", value: "zen-master" }
                ]
            },
            {
                id: 5,
                text: "3 PM, you discover a misunderstanding between team members affecting work progress. What do you do?",
                options: [
                    { id: 1, text: "Propose a new working method to shift everyone's attention", value: "idea-harvester" },
                    { id: 2, text: "Find the root cause of the misunderstanding and resolve issues one by one", value: "detail-inspector" },
                    { id: 3, text: "Organize a small meeting for everyone to communicate openly", value: "mood-manager" },
                    { id: 4, text: "Trust they can resolve it themselves, don't interfere", value: "zen-master" }
                ]
            },
            {
                id: 6,
                text: "4 PM, you're rushing to meet a deadline but your computer suddenly crashes. What do you do?",
                options: [
                    { id: 1, text: "Try to continue working on my phone or tablet", value: "idea-harvester" },
                    { id: 2, text: "Check every detail of the computer and try to fix it", value: "detail-inspector" },
                    { id: 3, text: "Immediately find IT department for help while preparing Plan B", value: "zero-second-savior" },
                    { id: 4, text: "Take a deep breath and handle other tasks that can be done offline", value: "zen-master" }
                ]
            },
            {
                id: 7,
                text: "Before leaving work, your boss suddenly assigns a new task that needs to be completed tomorrow. What do you do?",
                options: [
                    { id: 1, text: "Draft a rough framework first, refine details tomorrow", value: "idea-harvester" },
                    { id: 2, text: "Work overtime today to ensure every detail is handled well", value: "detail-inspector" },
                    { id: 3, text: "Quickly plan my time to ensure on-time completion", value: "zero-second-savior" },
                    { id: 4, text: "Accept the task but work at my own pace, deal with it tomorrow", value: "zen-master" }
                ]
            },
            {
                id: 8,
                text: "A colleague invites you to join a team building activity this weekend. What do you do?",
                options: [
                    { id: 1, text: "Suggest an innovative activity like an escape room", value: "idea-harvester" },
                    { id: 2, text: "Take initiative to plan the details and ensure smooth execution", value: "detail-inspector" },
                    { id: 3, text: "Actively participate and boost everyone's energy", value: "mood-manager" },
                    { id: 4, text: "Join casually but don't want to actively organize", value: "zen-master" }
                ]
            },
            {
                id: 9,
                text: "When facing difficulties at work, what do you usually do?",
                options: [
                    { id: 1, text: "Think from different angles to find innovative solutions", value: "idea-harvester" },
                    { id: 2, text: "Carefully analyze the problem and identify issues in each step", value: "detail-inspector" },
                    { id: 3, text: "Take immediate action and try various methods to solve it", value: "zero-second-savior" },
                    { id: 4, text: "Stay calm and wait for the best moment to act", value: "zen-master" }
                ]
            }
        ]
    },

    superpowers: {
        zh: [
            {
                id: "zen-master",
                name: "职场佛系王",
                description: "你拥有平和的心态，能在繁忙的工作中保持冷静，从容应对各种挑战。",
                catchphrase: "慢慢来，一切都会好的。",
                performance: [
                    "能在高压环境中保持冷静",
                    "擅长管理自己的情绪",
                    "有良好的工作生活平衡",
                    "能从困境中找到积极的一面"
                ],
                challenge: "可能过于被动，缺乏主动性；在需要快速决策时可能犹豫不决。",
                suitableJobs: ["心理咨询", "教师", "瑜伽教练", "人力资源", "行政主管"]
            },
            {
                id: "detail-inspector",
                name: "细节纠察队",
                description: "你拥有敏锐的洞察力，能发现别人忽略的细节，确保工作完美无瑕。",
                catchphrase: "等一下，这里有个小问题...",
                performance: [
                    "能快速发现工作中的错误和漏洞",
                    "擅长制定详细的计划和流程",
                    "对数据和信息有超强的记忆力",
                    "追求完美，不轻易放过任何细节"
                ],
                challenge: "可能过于纠结细节，影响整体进度；对自己和他人要求过高。",
                suitableJobs: ["质量控制", "数据分析", "编辑校对", "项目管理", "财务审计"]
            },
            {
                id: "mood-manager",
                name: "氛围管理师",
                description: "你拥有营造良好工作氛围的能力，能促进团队合作，提高工作效率。",
                catchphrase: "大家一起加油！",
                performance: [
                    "擅长调解团队矛盾",
                    "能激发团队成员的积极性",
                    "有良好的沟通和倾听能力",
                    "能创造轻松愉快的工作环境"
                ],
                challenge: "可能过于关注他人感受，忽略自己的需求；在需要强硬决策时可能不够果断。",
                suitableJobs: ["团队领导", "人力资源", "培训师", "公关", "活动策划"]
            },
            {
                id: "idea-harvester",
                name: "点子收割机",
                description: "你拥有无穷无尽的创意，总能在关键时刻提出令人眼前一亮的点子。",
                catchphrase: "这个问题，我有个idea！",
                performance: [
                    "头脑风暴时总能提出最多创意",
                    "擅长从不同角度思考问题",
                    "能够快速将想法转化为行动方案",
                    "在压力下依然能保持创造力"
                ],
                challenge: "有时想法太多，难以专注执行；细节处理可能不够完善。",
                suitableJobs: ["创意总监", "产品经理", "市场营销", "广告策划", "创业家"]
            },
            {
                id: "zero-second-savior",
                name: "零秒救世主",
                description: "你拥有超强的应变能力，能在紧急情况下迅速做出反应，解决问题。",
                catchphrase: "别担心，我搞定！",
                performance: [
                    "在压力下依然能保持冷静",
                    "擅长快速做出决策",
                    "有多种解决方案的储备",
                    "能迅速调整计划应对变化"
                ],
                challenge: "可能过于冲动，没有充分考虑后果；长期处于高压状态容易 burnout。",
                suitableJobs: ["危机管理", "应急响应", "销售经理", "公关专家", "企业家"]
            }
        ],
        en: [
            {
                id: "zen-master",
                name: "Zen Master",
                description: "You possess a peaceful mindset, able to stay calm in busy work and handle various challenges with ease.",
                catchphrase: "Take it easy, everything will be fine.",
                performance: [
                    "Stay calm in high-pressure environments",
                    "Excel at managing your own emotions",
                    "Have good work-life balance",
                    "Find positive aspects in difficult situations"
                ],
                challenge: "May be too passive and lack initiative; might hesitate when quick decisions are needed.",
                suitableJobs: ["Counseling", "Teacher", "Yoga Instructor", "HR", "Admin Manager"]
            },
            {
                id: "detail-inspector",
                name: "Detail Inspector",
                description: "You have keen insight, able to spot details others miss and ensure flawless work.",
                catchphrase: "Wait, there's a small issue here...",
                performance: [
                    "Quickly spot errors and gaps in work",
                    "Excel at creating detailed plans and processes",
                    "Have strong memory for data and information",
                    "Pursue perfection, never overlook any detail"
                ],
                challenge: "May get too caught up in details, affecting overall progress; high standards for self and others.",
                suitableJobs: ["Quality Control", "Data Analyst", "Editor", "Project Manager", "Auditor"]
            },
            {
                id: "mood-manager",
                name: "Mood Manager",
                description: "You can create a positive work atmosphere, promote teamwork, and improve efficiency.",
                catchphrase: "Let's go team!",
                performance: [
                    "Excel at mediating team conflicts",
                    "Inspire team member enthusiasm",
                    "Have strong communication and listening skills",
                    "Create a relaxed and pleasant work environment"
                ],
                challenge: "May focus too much on others' feelings, neglecting your own needs; might lack decisiveness when tough calls are needed.",
                suitableJobs: ["Team Leader", "HR", "Trainer", "PR", "Event Planner"]
            },
            {
                id: "idea-harvester",
                name: "Idea Harvester",
                description: "You have endless creativity, always coming up with brilliant ideas at key moments.",
                catchphrase: "I have an idea for this!",
                performance: [
                    "Always generate the most ideas in brainstorming",
                    "Think about problems from different angles",
                    "Quickly turn ideas into action plans",
                    "Maintain creativity even under pressure"
                ],
                challenge: "Sometimes too many ideas, hard to focus on execution; detail handling may be insufficient.",
                suitableJobs: ["Creative Director", "Product Manager", "Marketing", "Ad Planner", "Entrepreneur"]
            },
            {
                id: "zero-second-savior",
                name: "Zero-Second Savior",
                description: "You have exceptional adaptability, able to react quickly in emergencies and solve problems.",
                catchphrase: "Don't worry, I got this!",
                performance: [
                    "Stay calm under pressure",
                    "Excel at making quick decisions",
                    "Have multiple solution strategies ready",
                    "Quickly adjust plans to handle changes"
                ],
                challenge: "May be too impulsive without fully considering consequences; prone to burnout from prolonged high pressure.",
                suitableJobs: ["Crisis Management", "Emergency Response", "Sales Manager", "PR Expert", "Entrepreneur"]
            }
        ]
    }
};
