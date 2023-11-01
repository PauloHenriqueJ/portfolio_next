import { HighlightedProjects } from "./components/pages/highlighted-projects";
import { HeroSection } from "./components/pages/home/hero-section";
import { KnowTechs } from "./components/pages/home/know-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHygraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async ():Promise <HomePageData> => {
  const query = `
  query PageInfoQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies {
        name
      }
      profilePicture {
        url
      }
      socials {
        url
        iconSvg
      }
      knownTechs {
        iconSvg
        name
        startDate
      }
      highlightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        technologies {
          name
        }
      }
  
    }
    workExperiences {
      companyLogo {
        url
      }
      role
      companyName
      companyUrl
      startDate
      endDate
      description {
        raw
      }
      technologies {
        name
      }
    }
    
  }
  `
return fetchHygraphQuery(
  query,
  60 * 60 * 24
)
}

export default async function Home() {
  const {page: pageData, workExperiences} = await getPageData();

  console.log(pageData)
  
  return (
    <>
     <HeroSection homeInfo={pageData}/>
     <KnowTechs techs={pageData.knownTechs}/>
     <HighlightedProjects projects={pageData.highlightProjects}/>
     <WorkExperience experiences={workExperiences}/>
    </>
  )
}