import { useRouter } from "next/router";
import Work from "../../interfaces/Work";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import HeaderImage from "components/HeaderImage";
import ProjectHeader from "components/ProjectHeader";
import Feature from "components/Feature";
import FeatureImage from "components/FeatureImage";
import styled, { keyframes } from "styled-components";
import { GiButterfly } from "react-icons/gi";
import Link from "next/link";

const flapWing = keyframes`
  0% {
    transform: scaleX(1) skewY(5deg);
  }
  50% {
    transform: scaleX(0.8) skewY(5deg);
  }
  100% {
    transform: scaleX(1) skewY(5deg);
  }
`;

const flapRotate = keyframes`
  0% {
    transform: scaleX(1) rotate(-45deg) skewY(5deg);
  }
  50% {
    transform: scaleX(0.8) rotate(-45deg) skewY(5deg);
  }
  100% {
    transform: scaleX(1) rotate(-45deg) skewY(5deg);
  }
`;

const Butterfly = styled(GiButterfly)`
  animation: ${flapWing} 2s ease 0.5s infinite forwards;
`;

const SecondButter = styled(Butterfly)`
  margin-left: 4px;
  animation: ${flapRotate} 2s ease 0.5s infinite forwards;
`;

const H2 = styled.h2`
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

const FeatureMessage = styled.div`
  flex: 1;
  text-align: center;
  min-width: 200px;
`;

const CTA = styled.a`
  display: inline-block;
  background: teal;
  color: white;
  text-decoration: none;
  padding: 2px 4px;
  border-radius: 4px;
  &:hover {
    text-decoration: none;
    opacity: 0.9;
  }
`;
interface Project extends Work {
  features: { img: string; description: string }[];
}

const useFetch = (id?: string | string[]) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (id)
      fetch(`/api/${id}`)
        .then((res) => {
          res.json().then((data) => setData(data));
        })
        .then(() => setLoading(false))
        .catch((err) => setError(err));
  }, [id]);
  return { data, error, loading };
};

export default function Project() {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const { data, error, loading } = useFetch(id);

  if (error) return <div>Error fetching data. Please reload</div>;
  if (loading) return <div>...</div>;
  const project = data as Project;
  return (
    <Layout
      active="project"
      title={`Ade Adeola - ${id || ""}`}
      description={project?.description}
    >
      {project ? (
        <div style={{ backgroundColor: "white", margin: 0 }}>
          <Link href="/showcase" passHref>
            <a style={{ color: "teal" }}>&larr; Back</a>
          </Link>
          <ProjectHeader>
            <H2 style={{ fontSize: 24 }}>
              <Butterfly />
              {project.name}
              <SecondButter />
            </H2>
            <HeaderImage src={project.img} alt={project.name} />
            <div>{project.description}</div>
            <CTA href={project.link} target="_blank" rel="noreferrer">
              Visit site
            </CTA>
          </ProjectHeader>
          <div>
            {project.features.map((feature, idx) => (
              <Feature key={idx} isOdd={Boolean(idx % 2)}>
                <FeatureImage src={feature.img} alt={feature.description} />
                <FeatureMessage>{feature.description}</FeatureMessage>
              </Feature>
            ))}
          </div>
        </div>
      ) : (
        <div>...</div>
      )}
    </Layout>
  );
}
