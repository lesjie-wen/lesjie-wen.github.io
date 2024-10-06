export const personalInfo = {
  name: 'Junjie Wen',
  chineseName: '文俊杰', // 添加这一行
  profilePicture: '/profile.jpg', //optional
  role: 'Master Student',
  university: ' ECNU',
  universityWebsite: 'https://www.ecnu.edu.cn/',
  email: 'tsunami1999@163.com / 51255901019@stu.ecnu.edu.cn',
  socialMedia: [
    { name: 'Email', url: 'tsunami1999@163.com' },
    { name: 'Twitter', url: 'https://x.com/lesjie298776' },
    {
      name: 'GitHub',
      url: 'https://github.com/lesjie-wen',
    },
    // { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'ORCID', url: 'https://orcid.org/my-orcid?orcid=0009-0004-1660-3268' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=xphZoxIAAAAJ&hl=en' },
  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: 'Robotics Researcher',
  // teaserImage: "/teaser.jpg",
};

export const navigations = [
  { name: 'Projects', route: '/' },
  { name: 'Publications', route: '/publications' },
  // { name: "News", route: "/news" },
  // { name: 'About', route: '/about' },
  { name: 'CV', route: '/cv.pdf' },
];

export const homepageSection = {
  AboutSection: true,
  NewsSection: true,
  SelectedPublicationsSection: true,
  ProjectSection: true,
};

export const fontStyle = 'sans'; // "sans" | "serif" | "mono"
