import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Project } from '@/shared/types';

interface ProjectData {
  id: string;
  image: string;
  githubUrl: string;
  stack: string[];
  systemId: string;
  translations: {
    vi: {
      title: string;
      category: string;
      description: string;
    };
    en: {
      title: string;
      category: string;
      description: string;
    };
  };
}

const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'facebookClone',
    systemId: 'SYS-01',
    image: '/projects/facebook.png',
    githubUrl: 'https://github.com/vantrong2405/Project-FaceBook',
    stack: ["NodeJS", "MongoDB", "Tailwinds", "Bootstrap", "FlowBite", "Typescript"],
    translations: {
      vi: {
        title: "Facebook Clone",
        category: "Mạng xã hội",
        description: "Bản sao Facebook với đầy đủ tính năng, thiết kế hiện đại và xử lý cơ sở dữ liệu mạnh mẽ."
      },
      en: {
        title: "Facebook Clone",
        category: "Social Network",
        description: "Fully functional Facebook replica with modern design and robust database handling."
      }
    }
  },
];

export const useProjects = (): Project[] => {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || 'en') as 'vi' | 'en';

  return React.useMemo(() => {
    return PROJECTS_DATA.map((project) => ({
      title: project.translations[currentLang].title,
      category: project.translations[currentLang].category,
      systemId: project.systemId,
      description: project.translations[currentLang].description,
      stack: project.stack,
      githubUrl: project.githubUrl,
      image: project.image,
    }));
  }, [currentLang]);
};
