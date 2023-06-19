import React, { useState } from "react";

import { dummyProjects } from "../../dummyData";
import { Bullet } from "../../assets/id/Bullet";
import { AddSquare } from "../../assets/id/AddSquare";
import { Menu1 } from "../../assets/id/Menu1";

import styles from "./MyProjects.module.css";

export default function MyProjects() {
  const [projects, setProjects] = useState(dummyProjects);
  const [currentProject, setCurrentProject] = useState(dummyProjects[0]);

  return (
    <div>
      <header className={styles.header}>
        <span className={styles.headerText}>MY PROJECTS</span>
        <AddSquare />
      </header>
      <ul className={styles.projectsList}>
        {projects.map((project) => (
          <li
            key={project.id}
            className={`${styles.projectItem} ${
              project.id === currentProject.id && styles.active
            }`}
          >
            <span className={styles.projectInfo}>
              <Bullet color={project.favColor} />
              <span className={styles.projectName}>{project.name}</span>
            </span>
            {project.id === currentProject.id && (
              <span className={styles.activeIcon}>
                <Menu1 />
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}