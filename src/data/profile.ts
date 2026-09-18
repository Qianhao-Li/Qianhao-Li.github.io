// ===================================================================
// 整个首页的内容都在这个文件里。改这里 = 改网站，不用碰任何 .astro。
// 不需要的条目直接从数组里删掉即可。
// ===================================================================

/** 左侧栏 */
export const profile = {
	nameEn: 'Qianhao Li',
	nameCn: '李谦豪',
	/** 头像下面的两行小字 */
	role: '本科生 · 计算机科学',
	affiliation: 'XX 大学',
	email: 'istm47129@gmail.com',
	github: 'https://github.com/Qianhao-Li',
	/** 不需要的留空字符串就会自动隐藏 */
	scholar: '',
	twitter: '',
};

/** 开头的自我介绍 */
export const about = {
	label: 'ABOUT ME',
	/** 大标题，两行，斜体的是第二行 */
	headlineTop: '把想法做出来。',
	headlineBottom: '再把它讲清楚。',
	paragraphs: [
		'我是 XX 大学 XX 专业的本科生，目前在 XX 方向做研究 / 实习。',
		'现在主要关注 XXX：把 XXX 做得更快、更可靠。此前做过 XXX，指导老师是 XXX 教授。',
		'这一段可以写你最想让别人记住的那件事——研究目标、长期兴趣，或者你为什么做现在这件事。',
	],
	/** 关键词标签 */
	tags: ['关键词一', '关键词二', '关键词三'],
};

/** 研究与作品 —— 编号卡片 */
export const works = {
	label: '研究与作品',
	meta: 'SELECTED WORK / 2024–2026',
	items: [
		{
			category: '方向分类，比如 机器学习系统',
			venue: 'Preprint · 2026',
			title: '作品标题',
			subtitle: '副标题：一句话说清它做了什么',
			byline: '李谦豪 · 第一作者 · 指导：XXX 教授',
			description:
				'两三句话说明问题、方法和结果。别写摘要，写“我做了什么、为什么有用”。',
			note: '可选的一行补充，比如评测数据集、落地场景。',
			links: [
				{ label: 'arXiv', href: '#' },
				{ label: 'PDF', href: '#' },
				{ label: 'Code', href: '#' },
			],
		},
		{
			category: '方向分类',
			venue: 'ICXX · 2025',
			title: '第二个作品',
			subtitle: '副标题',
			byline: '李谦豪 · 共同作者',
			description: '同上，两三句话。',
			note: '',
			links: [{ label: 'Paper', href: '#' }],
		},
		{
			category: '开源项目',
			venue: '2025',
			title: '一个开源项目',
			subtitle: '不一定是论文，做过的工具、比赛、作品都可以放这里',
			byline: '独立开发',
			description: '它解决了什么问题，有多少人用，或者你从中学到了什么。',
			note: '',
			links: [{ label: 'GitHub', href: 'https://github.com/Qianhao-Li' }],
		},
	],
};

/** 经历 —— 时间线 */
export const experience = {
	label: '经历',
	meta: 'RESEARCH / INTERNSHIP',
	items: [
		{
			period: '2026.03 – 至今',
			org: 'XX 实验室 / XX 公司',
			current: true,
			role: '研究实习生 · 指导：XXX 教授',
			desc: '一句话说明你在这里做什么。',
		},
		{
			period: '2025.07 – 2025.09',
			org: 'XX 大学',
			current: false,
			role: '暑期科研',
			desc: '一句话说明。',
		},
	],
};

/** 教育与助教 */
export const education = {
	label: '教育与助教',
	school: 'XX 大学',
	period: '2023.09 – 至今',
	degree: '计算机科学与技术 · 本科',
	dept: 'XX 学院',
	meta: 'GPA 3.9 / 4.0 · 专业排名 8 / 90',
	teachingLabel: '助教',
	teaching: [
		{ course: '计算机系统导论', years: '2025, 2026' },
		{ course: '微积分', years: '2024, 2025' },
	],
};

/** 荣誉与奖学金 */
export const honors = {
	label: '荣誉与奖学金',
	meta: 'XX 大学',
	items: [
		{ year: '2026', title: '奖项名称', titleCn: '可选的中/英对照说明' },
		{ year: '2025', title: '某某奖学金', titleCn: '综合奖学金' },
		{ year: '2023 – 至今', title: '学堂奖学金', titleCn: '' },
	],
};
