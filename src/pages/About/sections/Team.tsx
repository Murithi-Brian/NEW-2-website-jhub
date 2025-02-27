import { Tab } from "@headlessui/react";
import { classNames } from "../../../utils/classes";
import {
  GeorgeGathoni,
  RehemaNdeda,
  LawrenceNderu,
  MwangiKaranja,
  WillMurithi,
  DaisyOndwari,
  IreneKimani,
  JohnKinyuru,
  CateMuraga,
  Noumbessy,
  Dominique,
  Kamochu,
  Priscilla,
  WilsonGichuhi,
  Sonia,
  Derrick,
  MarianaBozesan,
  HildaMumbi,
} from "../../../assets/images/team";
import TeamCard from "../../../components/About/TeamCard";

function Team() {
  const categories = {
    EXECUTIVE: [
      {
        memberImageUrl: LawrenceNderu,
        memberName: `Dr. Lawrence Nderu`,
        memberRole: `Project Lead`,
        description: `Project Lead with extensive experience as Chairman,
        Lecturer, and Researcher in AI/ML and Software Engineering.
        A Digital Ecosystem Builder and Founder of JKIAN Hub,
        serving as a Digital Africa Connector.`,
        twitterLink: `https://twitter.com/LawrenceNM`,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/dr-lawrence-nderu/?originalSubdomain=ke`,
      },
      {
        memberImageUrl: RehemaNdeda,
        memberName: `Dr. Rehema Ndeda`,
        memberRole: `Climate Smart Agriculture/ Automation Lead/JKUAT`,
        description: `Mechatronics Engineer with a specialization on automation, currently focusing on development and 
        testing of technologies related to precision agriculture`,
        twitterLink: ``,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/r-ndeda/?originalSubdomain=ke`,
      },
      {
        memberImageUrl: MwangiKaranja,
        memberName: `Dr. Mwangi Karanja`,
        memberRole: `Innovative Technology and Data Science Lead`,
        description: `An Innovative technology diffusion expert with a background in computing, research and innovation management. 
        Have trained Small scale entrepreneurs on data management and research-driven approaches to growth`,
        twitterLink: ``,
        facebookLink: ``,
        linkedInLink: `https://ke.linkedin.com/in/drmwangi-karanja`,
      },
      {
        memberImageUrl: WillMurithi,
        memberName: `Dr. William Murithi`,
        memberRole: `DIH Business Development/ Strategy Lead`,
        description: `An expert in business model innovation, digital entrepreneurship & innovation and design thinking. 
        Founder and Lead consultant at EMBC, a premier management consulting firm that offers bespoke and integrated solutions 
        for enterprises.`,
        twitterLink: ``,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/william-murithi-ph-d-fhea-cmbe-8a169425`,
      },
      {
        memberImageUrl: DaisyOndwari,
        memberName: `Ms. Daisy Ondwari`,
        memberRole: `Product Development Fellow`,
        description: `Ms. Daisy Ondwari, as a Product Development Fellow, serves
        as the voice of the customer. Her role extends beyond user
        interface experience, questioning and shaping products to
        align with user needs.`,
        twitterLink: ``,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/daisy-ondwari/`,
      },
      {
        memberImageUrl: IreneKimani,
        memberName: `Irene Kimani`,
        memberRole: `ICT Specialist & Data Manager, KALRO`,
        description: `Irene Kimani is an ICT Specialist and Data Manager at the Kenya Agriculture and Livestock Research Organization(KALRO).
        She has expertise in the ICT field, Data Science, Big Data, Artificial Intelligence, and research informatics. She is passionate about innovations and development, especially in the agricultural sector. Irene's proficiency in agricultural extension services and weather intel has
        been vital for for digitization of the food, and her role in the JHUB Africa team is valuable.`,
        twitterLink: `https://twitter.com/irenekimani14`,
        facebookLink: ``,
        linkedInLink: `https://ke.linkedin.com/in/irene-kimani-6a5b71b9`,
      },
      {
        memberImageUrl: JohnKinyuru,
        memberName: `Dr. John Kinyuru`,
        memberRole: `Research, and Innovation
        Development Lead, JKUAT`,
        description: `Dr John Kinyuru is an esteemed Food and Nutrition Scientist with great leadership and project management capabilities. Director of research and innovation at Jomo Kenyatta University of Agriculture and Technology(JKUAT), and researcher in Agriculture, food, and nutrition. A food systems and nutrition-sensitive agriculture expert, he is typically the insect hunter(specialist of edible insects), passionate about food security through research and implementation. Dr John Kinyuru is a key member of the JHUB Africa project whose role will transform the food and nutrition ecosystem.`,
        twitterLink: `https://twitter.com/jkinyuru`,
        facebookLink: ``,
        linkedInLink:
          "https://www.linkedin.com/in/dr-john-kinyuru-phd-rns-7a797120/",
      },
    ],
    "ADVISORY BOARD": [
      {
        memberImageUrl: CateMuraga,
        memberName: `Catherine Muraga`,
        memberRole: `Managing Director, Microsoft ADC`,
        description: `Catherine is a purpose-driven tech executive, presently holding the position of Managing Director 
        at Microsoft ADC. In this role, she spearheads a team dedicated to crafting impactful products and services on a 
        global scale. Catherine's particular focus lies in advancing STEM education in Africa, reflecting her commitment 
        to driving positive change through technology.`,
        twitterLink: `https://twitter.com/CMuraga`,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/cmuraga/`,
      },
      {
        memberImageUrl: Noumbessy,
        memberName: `Noumbessy Ghislain`,
        memberRole: `Innovation Hub Leader, Bosch EA`,
        description: `Ghislain Noumbessy is a visionary professional who has been with BOSCH, working in different capacities. 
        His rich experience working across different regions in Africa make him one of the most knowledgeable individuals on the 
        problems  the continent encounters. Noumbessy believes that Africa can move beyond being a consumer of technologies to 
        being creators of it. Currently the Innovation Hub Leader at Bosch EA, he is passionate about nurturing innovations across 
        the region as a way to find suitable solutions to the unique problems we face.`,
        twitterLink: ``,
        facebookLink: ``,
        githubLink: ``,
        linkedInLink: `https://www.linkedin.com/in/noumbessyghislain`,
      },
      {
        memberImageUrl: Dominique,
        memberName: `Dominique Kavuisya`,
        memberRole: `CEO & Co-founder, Taimba Limited`,
        description: `An accomplished IT practitioner with over 15 years of experience across US and sub-Saharan Africa, deploying transformational digital solutions. Interested in supply chains, route to market models, fintech & eCommerce.`,
        twitterLink: ``,
        facebookLink: ``,
        githubLink: ``,
        linkedInLink: `https://www.linkedin.com/in/dominiquekavuisya/?originalSubdomain=ke`,
      },
      {
        memberImageUrl: Kamochu,
        memberName: `Samuel Kamochu`,
        memberRole: `CEO & Co-founder, Meliora Technologies Limited`,
        description: `Passionate about Africa and the mission is to empower the next generation of software engineers in Kenya and in the continent of Africa.
        Shares about personal and professional experiences and opinions. Recently recognised by Business Daily Africa as Top 40 under 40 Men in Kenya in 2022. Happy to continue bringing hope to many!`,
        twitterLink: ``,
        facebookLink: ``,
        githubLink: ``,
        linkedInLink: `https://www.linkedin.com/in/kamochu?originalSubdomain=ke`,
      },
      {
        memberImageUrl: Priscilla,
        memberName: `Priscilla Muiruri`,
        memberRole: `Technical Advisor, Ministry of Agriculture & Livestock Development`,
        description: `Priscilla is a professional Technical Advisor, Ministry of Agriculture & Livestock Development, a Technical Advisor in the Cabinet Secretary's Office and coordinates the National Food Systems Transformation Working with innovative solutions.`,
        twitterLink: ``,
        facebookLink: ``,
        githubLink: ``,
        linkedInLink: `https://www.linkedin.com/in/priscilla-muiruri-32825a44/?originalSubdomain=ke`,
      },
      {
        memberImageUrl: MarianaBozesan,
        memberName: `Dr Mariana Bozesan`,
        memberRole: `AI Pioneer, Integral Investor, Tech Entrepreneur`,
        description: `Dr. Mariana Bozesan is an award-winning integral investor, an AI pioneer, and a successful serial tech-entrepreneur who is leveraging exponentially growing technologies to decarbonize the global economy and accelerate the implementation of the UN SDGs within Planetary Boundaries. She studied Computer Science and AI at Stanford University and the Karlsruhe Institute of Technology of which she is a Prominent Alumna. She is also the recipient of the Golden Angelina Award, as Europe’s Female Angel Investor of 2019 and became the Best European Early stage Investor of the Year 2016 awarded by EBAN, the European Business Angel Network. She is also full member of the prominent international Club of Rome, Fellow of the World Academy of Art and Science, and authored several books including Integral Investing: From Profit to Prosperity, a report to the Club of Rome.`,
        twitterLink: ``,
        facebookLink: ``,
        githubLink: ``,
        linkedInLink: `https://www.linkedin.com/in/marianabozesan/`,
      },
    ],
    SECRETARIAT: [
      {
        memberImageUrl: HildaMumbi,
        memberName: `Hilda Mumbi`,
        memberRole: `Project Manager`,
        description: `Hilda is a dedicated and results-driven professional with extensive experience in the ERP (Enterprise Resource Planning) domain, particularly within the dynamic environment. Over the past she has perfected her skills in ERP implementation, project management, and cross-functional team collaboration, contributing to the successful growth and operational efficiency of the companies she's worked with.`,
        twitterLink: ``,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/hilda-mumbi-356099192/`,
      },
      {
        memberImageUrl: GeorgeGathoni,
        memberName: `George Gathoni`,
        memberRole: `Communications and Administration Lead`,
        description: `George is a seasoned member of the communications, media, and secretariat department, boasting a 
        wealth of experience. His expertise lies in the art of storytelling, particularly through multimedia and visual narratives. 
        Having worked across diverse media environments, from newsrooms to multimedia studios, George has honed his skills to adapt 
        and flourish in the constantly changing landscape of today's media industry.`,
        twitterLink: ``,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/george-gichuhi-gathoni-56aa4215b/`,
      },
    ],
    "DEV TEAM": [
      {
        memberImageUrl: WilsonGichuhi,
        memberName: `Wilson Gichuhi`,
        memberRole: `Fullstack Software Engineer`,
        description: `Wilson Gichuhi, a Fullstack Software Engineer, dedicated to web, cross-platform mobile solution,cloud-first
        development, and open-source contribution. He often finds joy in tinkering with various tools and technologies.`,
        twitterLink: `https://twitter.com/wilsonjugia/`,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/wilson-gichuhi`,
      },
      {
        memberImageUrl: Sonia,
        memberName: `Sonia Lomo`,
        memberRole: `Web Developer`,
        description: `Sonia is a passionate Software Developer with a Computer Science degree. Her journey began with lines of code and blossomed into a love for creating elegant solutions. Armed with years of experience, she thrives on building robust applications and contributing to the open-source community. When she’s not immersed in code, you’ll find him spending time with his feline friends, indulging in his slight obsession with cats.`,
        twitterLink: `https://twitter.com/sony_lomo`,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/sonia-lomo/`,
      },
      {
        memberImageUrl: Derrick,
        memberName: `Derrick Obwatsa`,
        memberRole: `DevOps Engineer`,
        description: `A Computer Science major and skilled DevOps engineer, I specialize in backend development and infrastructure automation. My expertise includes designing and implementing APIs using PHP, Node.js, Python, and Java. I excel in setting up servers, orchestrating CI/CD pipelines, and containerizing applications with Docker and Kubernetes. My troubleshooting skills ensure seamless performance, and I’m passionate about continuous learning.`,
        twitterLink: ``,
        facebookLink: ``,
        linkedInLink: `https://www.linkedin.com/in/obwatsamd/`,
      },
    ],
  };

  return (
    <div className="max-w-[85rem] mx-auto mt-8 md:mt-28">
      <h2 className="text-gray-500 text-4xl dark:bg-boxdark-2 dark:text-bodydark text-center font-semibold pb-3">
        Meet the team
      </h2>

      <div className="w-full flex justify-center items-center">
        <Tab.Group as="div" className="p-2 w-full">
          <Tab.List className="flex space-x-1 p-1 w-full overflow-x-auto">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-[40px] py-2 px-4 text-xl md:font-medium font-light leading-5 font-montserrat",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 outline-none focus:ring-2",
                    selected
                      ? "shadow bg-success text-white "
                      : " hover:bg-white/[0.12] hover:text-success"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 w-full">
            {Object.values(categories).map((teamMembers, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl w-full",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 px-2">
                  {teamMembers.map((TeamMember) => (
                    <TeamCard key={crypto.randomUUID()} {...TeamMember} />
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Team;
