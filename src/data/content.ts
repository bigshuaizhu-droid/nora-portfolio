export interface Project {
  id: string
  number: string
  title: string
  subtitle: string
  tags: string[]
  weight: 'primary' | 'secondary'
  background: string
  role: string
  work: string[]
  highlights: string[]
  results: string
  keywords: string[]
  images: string[]
  h5Url?: string
}

export interface Capability {
  key: string
  en: string
  zh: string
  weight: 'primary' | 'secondary'
}

export interface WorkPrinciple {
  title: string
  content: string
}

export const hero = {
  name: '朱若楠 Nora',
  tags: ['B2B 市场营销 · B2B Marketing', '市场活动 · Market Events', 'To G 项目 · To G Projects'],
  skills: ['市场营销', '市场活动', '项目管理', '资源整合', '商务拓展'],
  intro: [
    [
      { text: '专注于', bold: false },
      { text: 'B2B 市场营销与 To G 项目', bold: true },
      { text: '，擅长在复杂约束下推动项目落地。经历覆盖企业市场活动、政府项目、跨区域大型活动，兼具互联网内容运营与电影营销的跨领域视角。', bold: false },
    ],
    [
      { text: '从', bold: false },
      { text: '业务目标出发', bold: true },
      { text: '，先界定问题，再设计策略与执行路径。面对资源受限、多方协同、周期紧张的项目常态，始终聚焦找到可行、有效的解决方案，并对结果负责。', bold: false },
    ],
  ],
  photo: '/images/photos/portrait.jpg',
  stats: [
    { label: '场活动', value: '30+' },
    { label: '个城市', value: '5+' },
    { label: '人规模', value: '600' },
    { label: '年经验', value: '3' },
  ],
}

export const aboutChapters = [
  {
    title: 'B2B 市场营销 / B2B Market',
    content: '主导企业端市场活动的全流程执行。从活动策划、客户邀约、销售协同，到供应商管理与现场交付，始终以业务目标为导向——活动的价值不在规模，在于是否服务于增长。',
  },
  {
    title: 'To G 项目 / To G Projects',
    content: '深度参与政府及对口支援类项目，协调政府部门、合作机构、专家、院校、供应商及现场团队等多方角色。在信息不对称、资源受限的条件下，统筹方案策划、多方沟通、资源调配与现场执行全链条。',
  },
  {
    title: '市场拓展 / Market & BD',
    content: '基于项目需求持续拓展合作资源。识别关键合作方，推动双方从建立联系到达成合作、再到项目落地，并维护长期合作关系。',
  },
  {
    title: '内容与创意 / Content & Creative',
    content: '跨领域的能力延伸。通过网易云音乐、电影营销等项目，积累了内容策划、文案撰写、热点判断与视觉表达能力，为市场项目提供创意层面的差异化优势。',
  },
]

export const capabilities: Capability[] = [
  { key: 'planning', en: 'Market Planning', zh: '市场策划：从业务目标出发制定市场活动与项目方案', weight: 'primary' },
  { key: 'events', en: 'Market Events', zh: '市场活动：从前期策划、客户邀约，到嘉宾、供应商、现场执行，完整参与活动落地', weight: 'primary' },
  { key: 'pm', en: 'Project Management', zh: '项目管理：拆解复杂任务，建立时间节点，协调多方资源，推动项目按计划完成', weight: 'primary' },
  { key: 'resource', en: 'Resource Integration', zh: '资源整合：连接政府、企业、专家、供应商、学校及其他合作伙伴，让有限资源形成有效组合', weight: 'primary' },
  { key: 'communication', en: 'Communication', zh: '沟通协调：在多方参与、信息不完全同步的情况下持续推进项目，并处理执行中的突发问题', weight: 'primary' },
  { key: 'content', en: 'Content & Creative', zh: '内容与创意：具备文案、内容策划、热点判断和视觉表达能力，为市场项目提供内容加成', weight: 'secondary' },
]

export const projects: Project[] = [
  {
    id: 'fenxiang',
    number: '01',
    title: '纷享销客生态伙伴大会',
    subtitle: 'B2B Market Event · 上海 / 杭州 / 南京 · 三城连续举办',
    tags: ['B2B 市场活动 / B2B Market Event', '上海', '杭州', '南京'],
    weight: 'primary',
    background: '公司完成新一轮融资后，亟需向华东市场传达融资进展与生态战略布局，强化区域市场影响力。市场增长承压，活动需兼顾品牌传播与业务转化。',
    role: '项目负责人，统筹上海、杭州、南京三场活动的全流程。负责供应商管理（搭建、酒店、印刷）、销售团队客户邀约协同、嘉宾演讲内容策划与质量把控、现场执行调度。',
    work: [
      '三城活动全流程策划与现场交付',
      '供应商体系搭建与管理',
      '销售团队邀约机制设计与协同推进',
      '嘉宾演讲内容策划与质量把控',
    ],
    highlights: [
      '建立内部邀约机制，通过多轮宣贯与分工细化推动销售团队协同，三场活动到场人数均超预期（上海首场预计400人，实际约600人）',
      '通过供应商谈判与合作置换优化杭州场成本，在预算内完成交付',
    ],
    results: '三城到场人数均超预期；融资进展与生态战略有效触达华东目标市场',
    keywords: ['B2B Marketing', 'Market Event', 'Project Management', 'Sales Coordination'],
    images: [
      '/images/fenxiang/513A0843_wm__11049191.jpeg',
      '/images/fenxiang/513A0708_wm__10080354.jpeg',
      '/images/fenxiang/11316522.jpeg',
      '/images/fenxiang/12576883.jpeg',
      '/images/fenxiang/17040815.jpeg',
      '/images/fenxiang/图片1.jpg',
    ],
  },
  {
    id: 'zhejiang',
    number: '02',
    title: '浙疆非遗产业交流项目',
    subtitle: 'To G Project · 政府 / 对口支援 / 大型活动',
    tags: ['To G 项目 / To G Project', '政府', '对口支援', '大型活动'],
    weight: 'primary',
    background: '浙江对口援疆框架下的非遗产业交流项目，涵盖展览、培训、课堂、产业考察与人才互动等多种活动形态，涉及多层级政府部门与跨区域执行团队。',
    role: '参与前期投标方案撰写；中标后负责活动方案策划与撰写，全程参与筹备至现场执行。',
    work: [
      '非遗成果展览策划与现场执行',
      '浙江非遗大师赴疆培训组织',
      '中小学生非遗课堂统筹',
      '大学生产业考察行程规划',
      '非遗从业者跨区域交流活动',
    ],
    highlights: [
      '在人力、时间、资金、信息均受限的条件下，采用双线并行策略统筹多项活动节奏，最大化团队效能',
      '主动拓展本地自媒体及外部专家资源；协调异地同事重新分工，确保项目人员到位',
      '项目零差错交付，获多方认可；浙江援疆官方公众号专题报道',
    ],
    results: '零差错交付，获多方认可；形成后续对口支援项目可复制的执行样板',
    keywords: ['To G', 'Project Management', 'Resource Integration', 'Cross-team Coordination'],
    images: [
      '/images/zhejiang/图片10.jpg',
      '/images/zhejiang/图片5.jpg',
      '/images/zhejiang/图片6.jpg',
      '/images/zhejiang/图片7.jpg',
      '/images/zhejiang/图片8.jpg',
      '/images/zhejiang/图片9.jpg',
      '/images/zhejiang/微信图片_20260811151549_46_4.jpg',
    ],
  },
  {
    id: 'netease',
    number: '03',
    title: '网易云音乐 × Complex China',
    subtitle: 'Content Growth · 产品运营',
    tags: ['Content Growth', 'Product Operation'],
    weight: 'secondary',
    background: '网易云音乐说唱专区流量相对有限，希望通过活动为专区引流，并进一步增加歌曲播放和分发。',
    role: '独立负责内容策划、H5 原型设计与页面交互方案，协调设计团队完成落地。',
    work: [
      '内容策略策划：联合 Complex China 打造说唱人物志专题',
      'H5 页面原型设计与交互方案',
      '页面内容策划与设计协调',
    ],
    highlights: [
      '以"历史最强 Rapper 大盘点"为核心内容策划，从 1979 年出发梳理说唱发展脉络，打造兼具信息量与传播度的内容产品',
      '栏目化设计，具备长期运营与持续迭代空间',
    ],
    results: '130K UV / 120K PV / 4K+ 站外分享',
    keywords: ['Content Strategy', 'User Insight', 'Product Operation', 'Growth'],
    images: [
      '/images/netease/cover.jpg',
      '/images/netease/微信图片_20260811151315_41_4.jpg',
      '/images/netease/微信图片_20260811151316_42_4.jpg',
      '/images/netease/微信图片_20260811151317_43_4.jpg',
      '/images/netease/微信图片_20260811151318_44_4.jpg',
    ],
    h5Url: 'https://u6v.cn/6arAWj',
  },
  {
    id: 'okuribito',
    number: '04',
    title: '《入殓师》4K 重映',
    subtitle: 'Creative Marketing · 电影营销',
    tags: ['Creative Marketing', 'Film'],
    weight: 'secondary',
    background: '项目面临多重挑战：老片重映缺乏新鲜感、盗版资源分流观众、片名易被误解为恐怖题材、国庆档后日本影片存在文化接受门槛。',
    role: '参与整体营销策略制定，负责核心文案创作与创意内容产出。',
    work: [
      '营销策略：弱化"死亡"，转向"告别"，定位为"下半年口碑第一的人生必看奥斯卡佳作"',
      'Slogan 创作："好好告别是一件正经事"',
      '与彩虹合唱团合作《道别是一件难事》',
      '海报文案："无法道别的桩桩件件，描绘人生的星星点点"',
    ],
    highlights: [
      '策略层面将"死亡"主题转化为更具普适性的"告别"，降低观影心理门槛，拓展受众范围',
      '每个物料产出前明确其传播定位、情绪锚点和用户打开动机，而非单纯追求产出数量',
    ],
    results: '精准定位打破题材壁垒，成功将小众文艺片推向更广泛观众',
    keywords: ['Creative Strategy', 'Copywriting', 'Emotional Marketing', 'Visual Sense'],
    images: [
      '/images/okuribito/cover.jpg',
      '/images/okuribito/图片2.jpg',
      '/images/okuribito/图片3.jpg',
      '/images/okuribito/图片4.jpg',
    ],
  },
  {
    id: 'fantasy',
    number: '05',
    title: '《日常幻想指南》',
    subtitle: 'Social Creative · 电影宣传',
    tags: ['Social Creative', 'Film'],
    weight: 'secondary',
    background: '电影上映前需要社交媒体话题策划与物料产出。',
    role: '主导整体营销策划方案撰写；统筹视觉物料与文案产出，包括创意方向、呈现方式及设计沟通。',
    work: [
      '七夕"不虐狗"系列文案策划',
      '教师节宣传海报创意',
      '电影社交媒体内容整体规划',
    ],
    highlights: [
      '七夕节点策划"不虐狗"系列文案（"七夕不虐狗，谁虐谁吃藕""请把狗粮撒给有需要的狗狗"），以反套路切入节日传播，获管理层认可',
      '教师节海报借演员角色演绎考试语境（"拿捏""逢考必过""高分上岸"），精准触达年轻用户',
    ],
    results: '创意获管理层认可，有效提升电影社交话题度',
    keywords: ['Social Content', 'Copywriting', 'Creative', 'Visual Planning'],
    images: [
      '/images/fantasy/cover.jpg',
      '/images/fantasy/微信图片_20260811140951_36_4.jpg',
      '/images/fantasy/《日常幻想指南》首映礼.jpeg',
      '/images/fantasy/截屏2026-08-11 14.15.53.jpg',
      '/images/fantasy/截屏2026-08-11 14.16.15.jpg',
    ],
  },
]

export const workPrinciples: WorkPrinciple[] = [
  {
    title: 'Start with Why',
    content: '先问为什么：这个项目要解决的是市场问题、业务问题、用户问题，还是传播问题？先找准问题，再决定形式。',
  },
  {
    title: 'Make it executable',
    content: '复杂项目最终都要回到执行。将大目标拆解为：人、时间、节点、资源、流程、风险，逐一推进。',
  },
  {
    title: 'Work with what you have',
    content: '资源有限时，优先重新组合资源而非降低目标——拓展新的专家渠道、重新设计供应商合作模式、以双线并行压缩执行周期。',
  },
  {
    title: 'Stay close to the result',
    content: '方案不是为了写完，活动也不是为了办完。更关心是否解决了原本的问题，以及这次项目是否留下了可以复用的经验与方法。',
  },
]

export const footer = {
  goal: '持续深耕 B2B 市场营销与项目管理，构建从市场判断、项目策划、资源整合到商务协同、执行落地的完整能力链。同时保持内容创意与视觉审美的差异化优势。',
  education: '广州大学 广播电视编导 本科 · 中国艺术研究院 戏剧编剧 硕士',
  contact: '18826054898 ｜ bigshuaizhu@163.com ｜ 微信: bigshuai-zrn',
}
