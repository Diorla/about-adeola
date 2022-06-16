import projects from "../../api/projects.json";
import Work from "../../interfaces/Work";

interface Project extends Work {
  features: { img: string; description: string }[];
}

export default function filter(
  { query: { projectName } }: { query: { projectName: string } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: Project | { message: string }): void; new (): any };
    };
  }
) {
  const projectObj = projects as { [key: string]: Project };

  const project = projectObj[projectName];

  if (project) {
    res.status(200).json(project);
  } else {
    res
      .status(404)
      .json({ message: `Project with name: ${projectName} not found.` });
  }
}
