import { SectionTitle } from "@/app/components/section-title"
import { ExperienceItem } from "./experience-item"
import { workExperiences as IworkExperience } from "@/app/types/work-experience"

type WorkExperienceProps = {
    experiences: IworkExperience[]
}

export const WorkExperience = ({experiences}:WorkExperienceProps) => {
    return(
        <section className="container py-16 flex gap-10 md:gap-4 lg:gap-16 flex-col md:flex-row">
            <div className="max-w-[420px]">
                <SectionTitle subtitle="experiências" title="Experiência Profissional"/>

                <p className="text-gray-400 mt-6">
                    Estou sempre disposto a novos desafios e projetos emocionantes.
                    </p>
            </div>

            <div className="flex flex-col gap-4">
                {experiences?.map(experience => (
                <ExperienceItem
                 key={experience.companyName}
                experience={experience}
                />
                ))}
               

            </div>

        </section>
    )
}