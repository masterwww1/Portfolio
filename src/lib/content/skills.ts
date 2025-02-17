import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack web applications using React, Next.js, with TypeScript, TailwindCSS, ShadCN, and Prisma',
        'Developing robust, scalable, fast backend logic and algorithms using Node.js, Django, ASP.NET Core, and Gin',
      ],
      softwareSkills: [
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'TypeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        { name: 'React.js', icon: 'logos:react' },
        { name: 'Next.js', icon: 'logos:nextjs-icon' },
        { name: 'Vue.js', icon: 'vscode-icons:file-type-vue' },
        { name: 'Express.js', icon: 'skill-icons:expressjs-dark' },

        // Python and related frameworks
        { name: 'Python', icon: 'logos:python' },
        { name: 'Django', icon: 'logos:django-icon' },
        { name: 'Flask', icon: 'simple-icons:flask' },
        { name: 'FastAPI', icon: 'simple-icons:fastapi' },

        // C# and related frameworks
        { name: 'C#', icon: 'logos:c-sharp' },
        { name: 'ASP.NET Core', icon: 'mdi:dot-net' },
        { name: 'Entity Framework', icon: 'mdi:database-outline' },

        // Go and related frameworks
        { name: 'Go', icon: 'logos:go' },
        { name: 'Gin', icon: 'simple-icons:gin' },
      ],
    },
  ],
};
