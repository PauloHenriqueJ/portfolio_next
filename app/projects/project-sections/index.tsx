'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ProjectSection } from '@/app/types/projects'

type ProjectSectionsProps = {
  sections: ProjectSection[]
}

export const ProjectSections = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="container my-12 md:my-32 flex flex-col gap-8 md:gap-32">
    {sections.map(sections => (
        <div key={sections.title} className="flex flex-col items-center gap-6 md:gap-12">
            <h2>{sections.title}</h2>

            <Image
            src={sections.image.url}
            width={1080}
            height={672}
            className="w-full aspect-auto rounded-lg object-cover"
            alt={`imagem sessao ${sections.title}`}
            unoptimized
            />

        </div>
    ))}

</section>
  )
}

