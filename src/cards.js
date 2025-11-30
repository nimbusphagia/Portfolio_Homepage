import iconGit from "./assets/icons/githubSmall.png";
import iconPage from "./assets/icons/webpage.png";
function projectCard(project) {
  const card = document.createElement("div");
  card.classList.add("projectItem");
  const imgNode = document.createElement("div");
  imgNode.style.backgroundImage = `url(${project.img})`;;
  imgNode.classList.add("projectScreenshot");
  const infoNode = document.createElement("div");
  infoNode.classList.add("projectInfo");

  const header = document.createElement("div");
  header.classList.add("projectHeader");
  const titleNode = document.createElement("h3");
  titleNode.textContent = project.title;
  const urlContainer = document.createElement("div");
  urlContainer.classList.add("projectLinks");
  const gitUrl = document.createElement("a");
  gitUrl.href = project.repoUrl;
  const gitIcon = document.createElement("img");
  gitIcon.src = iconGit
  gitUrl.appendChild(gitIcon);
  const pageUrl = document.createElement("a");
  pageUrl.href = project.pagesUrl;
  const pageIcon = document.createElement("img");
  pageIcon.src = iconPage;
  pageUrl.appendChild(pageIcon);
  urlContainer.appendChild(gitUrl);
  urlContainer.appendChild(pageUrl);
  header.appendChild(titleNode);
  header.appendChild(urlContainer);
  const descNode = document.createElement("p");
  descNode.textContent = project.description;
  infoNode.appendChild(header);
  infoNode.appendChild(descNode);
  card.appendChild(imgNode);
  card.appendChild(infoNode);
  return card;
}
function renderProjects(projArr) {
  const container = document.querySelector(".projectsContainer");
  for (const p of projArr) {
    container.appendChild(projectCard(p));
  }
}
export default renderProjects;
