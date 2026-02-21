import React from 'react';
import { useTranslation } from 'react-i18next';
import { SceneLayout } from '@/layouts';
import { ProjectCard, ExperienceStats } from '@/features/showcase/components';
import { useProjects } from '@/features/showcase/data';

export const ShowcaseScene: React.FC = () => {
  const { t } = useTranslation();
  const projects = useProjects();

  return (
    <SceneLayout>
      <div className="w-full px-6 md:px-12 lg:px-24 py-32 flex flex-col justify-center min-h-screen">
        <h2 className="text-primary font-mono text-sm tracking-[0.3em] mb-8 text-center uppercase animate-pulse">
          {t('showcase.stats.repoTitle')}
        </h2>

        <div className="flex justify-center">
          {projects.map((project) => (
            <div key={project.systemId} className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 duration-700">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <ExperienceStats />
      </div>
    </SceneLayout>
  );
};
