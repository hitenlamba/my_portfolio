import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  src,
  title,
  description,
  context = [],
  isComingSoon,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1
            className="bento-title special-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              transition-all duration-300
              hover:[text-shadow:0_0_8px_rgba(255,255,255,0.8)]
            "
          >
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
          {Array.isArray(context) && context.length > 0 && (
            <ul className="mt-3 list-disc pl-5  space-y-1">
              {context.map((point, index) => (
                <li
                  key={index}
                  className="
                  
                text-xs sm:text-sm md:text-base lg:text-lg
                transition-all duration-300
                hover:[text-shadow:0_0_6px_rgba(255,155,155,0.9)]
              "
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">MORE INFO</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section id="features" className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">EXPERIENCE</p>
        <p className="w-75 font-circular-web text-lg text-blue-50 opacity-70">
          I’m a Data Engineer and Full-Stack Developer with hands-on experience
          in building scalable data pipelines, interactive dashboards, and
          cloud-native applications.
          <br />
          Over the past few years, I’ve worked across diverse domains including
          retail tech, finance, and education, delivering impactful solutions
          using tools like Azure, AWS, Databricks, Snowflake, and the MERN
          stack.
          <br />
          I’ve also interned as a Software Developer, contributed to IoT-based
          product development, and led personal projects involving AI, real-time
          analytics, and Flutter-based mobile apps.
        </p>
      </div>

      <div className="grid h-[120vh] w-full grid-cols-2 grid-rows-2 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            title={
              <>
                DA<b>T</b>A Analyst
              </>
            }
            description="Fubiq Ventures"
            context={[
              "Implemented SQL/Python-based pipelines for ingesting and cleaning CRM and ERP data, enabling reliable inventory management and automated payment reconciliation with ICICI/HDFC Bank APIs.",
              "Built and maintained dashboards and reporting models using Tableau and MySQL to improve business efficiency, resulting in a 20% increase in operational performance.",
              "Collaborated across teams on Jira to define, test, and document CRM and HRMS features; supported data workflows for lead tracking, ticketing, payroll, and employee lifecycle management.",
              "Improved data consistency and accuracy in small business integration by cleaning and standardizing customer records, supporting digital inclusion in Tier 3 to 6 towns",
            ]}
            isComingSoon
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            title={
              <>
                DA<b>T</b>A Analyst
              </>
            }
            description="Citta Solution"
            context={[
              "Developed data pipelines using AWS Lambda and AWS Glue to support business intelligence initiatives, identifying untapped market areas and contributing to a 20% revenue increase within two quarters.",
              "Partnered with business stakeholders to develop KPIs, process improvements, and automated reporting solutions using AWS QuickSight and Tableau.",
              "Owned the design, development, and maintenance of multiple projects’ ongoing metrics and reports. Provided technical guidance and knowledge transfer to cross-functional team members.",
            ]}
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            title={
              <>
                Sys<b>t</b>em Analyst
              </>
            }
            description="Rochester Institute of Technology"
            context={[
              "Led an enterprise-wide inventory data cleanup project and daily standups to ensure data consistency and quality.",
              "Administered ServiceNow workflows, enhancing performance and reducing ticket resolution times by 25%.",
              "Maintained PCI-compliant IT infrastructure across 14+ retail operations, ensuring 99.9% system uptime for POS and network services and meeting client expectations.",
              "Authored detailed technical documentation and guided onboarding to new hires, improving training efficiency.",
            ]}
          />
        </BentoTilt>

        {/* <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt> */}
      </div>
    </div>
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">PROJECTS</p>
        <p className="w-75 font-circular-web text-lg text-blue-50 opacity-70">
          My project portfolio highlights end‑to‑end solutions that marry modern
          cloud architectures with data‑driven insights. I architected and
          deployed a fully containerized MERN‑stack eCommerce platform on AWS,
          leveraging EKS for orchestration, Lambda for event‑driven
          microservices, DynamoDB and S3 for ultra‑fast storage, and Terraform
          to codify infrastructure. <br />
          To streamline delivery, I built automated CI/CD pipelines with
          CodePipeline, CodeBuild, and ECR, all secured within a private VPC.{" "}
          <br />
          On the analytics side, I spearheaded a Retail Operations Dashboard
          using MySQL, Python (Pandas/NumPy), and Tableau—transforming raw sales
          and inventory data into interactive visualizations that drove a 17%
          boost in stock management efficiency and uncovered $13,200 in annual
          savings.
        </p>
      </div>
      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          title={
            <>
              Dev-Ops Deploymen<b>t</b>
            </>
          }
          description=" scalable MERN stack eCommerce platform on AWS using EKS, Docker, and Kubernetes. Integrated Lambda-based microservices, DynamoDB, and S3 for real-time data and storage. Secured infrastructure with VPC, IAM, and automated CI/CD using CodePipeline and ECR."
          context={[
            "Designed and deployed a MERN stack application using AWS EKS for container orchestration, managing frontend and backend services with Kubernetes pods. Implemented event-driven microservices with AWS Lambda to process real-time data streams, integrated Amazon DynamoDB for low-latency storage, and utilized S3 Buckets for storage. Secured the cloud environment within an Amazon VPC with private subnets, load balancing, and IAM roles.",
            "Automated CI/CD pipelines using AWS Code Pipeline, Code Build, and ECR to streamline deployment.",
          ]}
          isComingSoon
        />
      </BentoTilt>
      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          title={
            <>
              Re<b>t</b>ail Dashboard
            </>
          }
          description=" a data-driven dashboard using Tableau to visualize key KPIs, improving stock management efficiency by 17%. Performed cost-benefit analysis of operational changes, uncovering potential annual savings of $13,200."
          context={[
            "Spearheaded a comprehensive Retail Operations Dashboard of a business to enhance decision-making. Leveraged Tableau to visualize key performance indicators, resulting in a 17% improvement in stock management.",
            "Conducted cost-benefit analysis on proposed operational changes, identifying potential annual savings of up to $13,200.",
          ]}
          isComingSoon
        />
      </BentoTilt>
    </div>
  </section>
);

export default Features;
