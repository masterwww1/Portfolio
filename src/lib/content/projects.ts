import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'easy fix',
      url: 'https://easy-fix.vercel.app/',
      repo: 'https://github.com/masterwww1/easy-fix',
      img: 'https://user-images.githubusercontent.com/68834718/258852895-df5c6da7-a698-40fb-97c3-a5474314cb85.png',
      year: 2023,
      tags: ['React', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'beautiful animations',
      url: 'https://beautiful-animations-kv.vercel.app/',
      repo: 'https://github.com/masterwww1/beautiful-animations',
      img: 'https://user-images.githubusercontent.com/68834718/265277125-da2a6e07-7cf6-411c-b55f-94e372aa6dc8.png',
      year: 2023,
      tags: ['CSS Animations', 'Sass'],
    },
    {
      id: getId(),
      name: 'buttons animations',
      url: 'https://buttons-animations-kv.vercel.app/',
      repo: 'https://github.com/masterwww1/button-animations',
      img: 'https://buttons-animations-kv.vercel.app/og.png',
      year: 2023,
      tags: ['CSS Animations', 'Sass'],
    },
    {
      id: getId(),
      name: 'remotive jobs',
      url: 'https://remotive-jobs.vercel.app/',
      repo: 'https://github.com/masterwww1/remotive-jobs',
      img: 'https://user-images.githubusercontent.com/68834718/189035104-aa71647e-33e4-442a-a2f9-c0d50bba2db1.png',
      year: 2022,
      tags: ['Nextjs', 'Sass', 'backend', 'frontend'],
    },
    {
      id: getId(),
      name: 'countries app',
      url: 'https://countries-app-kv.netlify.app/',
      repo: 'https://github.com/masterwww1/rest-countries-api',
      img: 'https://user-images.githubusercontent.com/68834718/169527851-19fefb2e-e440-411a-a8a1-4767e2c8688a.png',
      year: 2022,
      tags: ['React', 'Sass', 'Node.js'],
    },
    {
      id: getId(),
      name: 'todo app',
      url: 'https://todo-kv.netlify.app/',
      repo: 'https://github.com/masterwww1/todo-app',
      img: 'https://user-images.githubusercontent.com/68834718/152794002-0e7bc583-084b-4c39-83bb-d82d5dd642b2.png',
      year: 2022,
      tags: ['React', 'Sass', 'JS'],
    },
  ],
};
