import { SectionTitle } from "@/app/components/section-title"
import { KnowTech } from "./know-tech"

import { KnownTech as IKnownTech } from "@/app/types/projects"

type KnownTechProps ={
    techs:IKnownTech[]
}

export const KnowTechs = ({techs}: KnownTechProps) => {
    return(
        <section className="container py-16">
            <SectionTitle subtitle="competência" title="Conhecimentos"/>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
            {techs?.map((tech) => (
                    <KnowTech key={tech.name} tech={tech}/>
                    
            ))}
            </div>
        </section>
    )
}