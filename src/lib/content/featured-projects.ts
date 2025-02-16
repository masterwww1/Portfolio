import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'Anzens',
      description: 'A fully backed Cardano stablecoin.',
      tasks:
        'I strategically planned project milestones, led a cross-functional team, established a fully managed system, developed the UIs and backend services, and integrated Stripe payments with secure authentication.',
      url: 'https://anzens.com/',
      img: 'https://i.postimg.cc/mkWZWhPB/chrome-96-Gys8j-N9-K.png',
      tags: ['Cardano', 'payment', 'financial', 'responsive', 'Prisma'],
    },
    {
      id: getId(),
      name: 'CardanoSpot',
      description:
        'A platform that redefines the way individuals find their life partners.',
      tasks:
        'As a freelancer, I developed this project by planning, communicating with the client, gathering feedback, implementing UI & pages, and integrating real-time data fetching with filtering functionality.',
      url: 'https://cardanospot.io/landing',
      img: 'https://i.postimg.cc/cCzmJyNx/chrome-e-Jz-Dbac-YRb.png',
      tags: ['Cardano', 'Chat', 'Social-media', 'Real-Time'],
    },
    {
      id: getId(),
      name: 'BigWins',
      description:
        'A Bitcoin online casino gaming site where you can make deposits, bets, and withdrawals using a cryptocurrency known as Bitcoin.',
      tasks:
        'I designed and developed the whole backend logic and payment gateway integration, ensuring fairness and security, consistency',
      url: 'https://bigwins.com/index.html',
      img: 'https://i.postimg.cc/7PBGTnJ2/chrome-s-TILQNM5-I2.png',
      tags: ['Casino', 'Gaming', 'Payment', 'Backend'],
    },
  ],
};

export default featuredProjectsSection;
