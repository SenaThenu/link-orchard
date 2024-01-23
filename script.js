let NAME;
let HANDLE;
let DESCRIPTION;
let PROFILEPICPATH; // path to the profile picture
let BGPATH; // path to the background image
let LINKS;
let ICOFORMAT; // the format of the link icons

async function loadConfig() {
    try {
        let response = await fetch("config.json");
        let config = await response.json();
        NAME = config["name"];
        HANDLE = config["handle"];
        PROFILEPICPATH = config["profilePicture"];
        DESCRIPTION = config["description"];
        LINKS = config["links"];
        ICOFORMAT = config["linkIconFormat"];
        BGPATH = config["backgroundImage"];
    } catch (err) {
        console.error(`An error occurred when loading config.json: ${err}`);
    }
}

function setUpHead() {
    // the title of the web page
    let webTitle = document.getElementById("web-title");
    webTitle.innerHTML = `${HANDLE}'s Link Orchard!`;
}

function displayProfile() {
    // the parent container of the profile
    let profileDiv = document.getElementById("profile");

    // profile picture
    let profilePictureDiv = document.createElement("div");
    profilePictureDiv.id = "profile-picture";
    let profilePicture = document.createElement("img");
    profilePicture.src = PROFILEPICPATH;
    profilePicture.alt = `Profile Picture of ${HANDLE}`;
    profilePictureDiv.appendChild(profilePicture);

    // name along with the verified icon
    let nameDiv = document.createElement("div");
    nameDiv.id = "name";
    nameDiv.innerHTML = NAME;
    let verifiedIcon = document.createElement("img");
    verifiedIcon.src = "assets/verified.svg";
    verifiedIcon.alt = "The verified icon";
    verifiedIcon.title = "Verified";
    nameDiv.appendChild(verifiedIcon);

    // username handle
    let handle = document.createElement("div");
    handle.id = "handle";
    handle.innerHTML = `@${HANDLE}`;

    // description
    let description = document.createElement("div");
    description.id = "description";
    description.innerHTML = DESCRIPTION;

    profileDiv.appendChild(profilePictureDiv);
    profileDiv.appendChild(nameDiv);
    profileDiv.appendChild(handle);
    profileDiv.appendChild(description);
}

function displayLinks() {
    const linksContainer = document.getElementById("links-container");
    let counter = 0;
    for (const [linkName, link] of Object.entries(LINKS)) {
        counter += 1;
        // the main container of the link
        let linkContainer = document.createElement("div");
        linkContainer.classList.add("link-container");
        linkContainer.style = `--order: ${counter}`;

        // the anchor tag
        let linkAnchor = document.createElement("a");
        linkAnchor.href = link;
        linkAnchor.target = "_blank";

        // children of the anchor tag
        let linkContent = document.createElement("div");
        linkContent.classList.add("link-content");

        let linkIconDiv = document.createElement("div");
        linkIconDiv.classList.add("link-icon");
        let linkIcon = document.createElement("img");
        linkIcon.src = `assets/${linkName}.${ICOFORMAT}`;
        linkIcon.alt = `Icon of ${linkName}`;
        linkIconDiv.appendChild(linkIcon);

        let nameDiv = document.createElement("div");
        nameDiv.classList.add("link-name");
        let name = document.createElement("p");
        name.innerHTML = linkName;
        nameDiv.appendChild(name);

        // finally, adding the children
        linkContent.appendChild(linkIconDiv);
        linkContent.appendChild(nameDiv);

        linkAnchor.appendChild(linkContent);
        linkContainer.appendChild(linkAnchor);

        linksContainer.appendChild(linkContainer);
    }
    setTimeout(() => {
        linksContainer.classList.remove("hide");
    }, 500);
}

function addCopyright() {
    let copyright = document.getElementById("copyright-info");
    const currentYear = new Date().getFullYear();
    copyright.innerHTML = `&#169; ${NAME} ${currentYear}`;
}

function injectBackground() {
    let masterElement = document.getElementById("master");
    masterElement.style.backgroundImage = `url(${BGPATH})`;
}

async function main() {
    document.addEventListener("DOMContentLoaded", () => {
        let content = document.getElementById("master");
        content.classList.remove("disappear");
    });
    await loadConfig();
    injectBackground();
    setUpHead();
    displayProfile();
    displayLinks();
    addCopyright();
}

main();
