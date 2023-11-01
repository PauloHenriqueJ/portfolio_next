import { RichText } from "@/app/components/rich-text"
import { TechBadge } from "@/app/components/tech-badge"
import { workExperiences } from "@/app/types/work-experience"
import format from "date-fns/format"
import pt from "date-fns/locale/pt"
import ptBR from "date-fns/locale/pt-BR"
import Image from "next/image"

type ExperienceItemProps ={
    experience: workExperiences
}

export const ExperienceItem = ({experience}:ExperienceItemProps) => {
    const{
        endDate,
        companyName,
        companyLogo,
        companyUrl,
        description,
        role,
        technologies,

    } = experience

    const startDate = new Date(experience.startDate)
    const formattedStartDate = format(startDate, 'MMM yyyy', {locale:ptBR})
    const formattedEndDate = endDate ? format(new Date (endDate), 'MMM yyyy', {locale:ptBR}) : 'o momento'

    return(
        <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col items-center gap-4">
                <div className="rounded-full border border-gray-500 p-0.5">
                    <Image
                    src={companyLogo.url}
                    width={40}
                    height={40}
                    className="rounded-full"
                    alt="logo empresa"
                    />
                </div>
                <div className="h-full w-[1px] bg-gray-800"/>

                </div>

                <div>
                    <div className="flex flex-col gap-2 text-sm sm:text-base">
                        <a href="#" target="_blank"
                        className="text-gray-500 hover:text-emerald-500 transition-colors"
                        >{companyName}</a>
                        <h4 className="text-gray-300">{role}</h4>
                        <span className="text-gray-500">{formattedStartDate}- {formattedEndDate}</span>
                        <div className="text-f-text-gray-400"><RichText content={description.raw} />
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">competências</p>

                    <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                      {technologies.map(tech => (
                        <TechBadge key={`experiences- ${companyName}-tech-${tech.name}`} name={tech.name}/>
                      ))}
                       
                        

                    </div>

                </div>
            </div>
            
        
    )
}