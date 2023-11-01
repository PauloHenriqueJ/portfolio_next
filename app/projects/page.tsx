import { ProjectsPageData } from "../types/page-info";
import { fetchHygraphQuery } from "../utils/fetch-hygraph-query";
import { PageIntroduction } from "./page-introduction";
import { ProjectsList } from "./projects-list";

const getPageData = async (): Promise <ProjectsPageData> => {
    const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `
    return fetchHygraphQuery(
        query,
        60 * 60 *24
    )
}

export default async function Projects(){
    const {projects} = await getPageData();
    return(
        <>
       <PageIntroduction/>
       <ProjectsList projects={projects}/>
        </>
    )
}