let page_list = ["index", "about", "resume", "projects", "contact"]
// strip away all URL information except the filename, minus .html
let currentpage = document.location.href.split("/").pop().split(".")[0];
console.log(currentpage);

let header = document.getElementById("header");
header.innerHTML = `
<header>
  <nav class="navbar navbar-expand navbar-default fixed-top navbar-dark">
    <div class="container-fluid">
      <div class="navbar-header">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="navbar-brand" href="../index.html">Darin Kohn</a>
          </li>
          <li class="nav-item">
            <a id="about" class="nav-link" href="./about.html">About</a>
          </li>
          <li class="nav-item">
            <a id="resume" class="nav-link" href="./resume.html">Resume</a>
          </li>
          <li class="nav-item">
            <a id="projects" class="nav-link" href="./projects.html">Projects</a>
          </li>
          <li class="nav-item">
            <a id="contact" class="nav-link" href="./contact.html">Contact</a>
          </li>
        </ul>
      </div>
      <div class="icon">
        <a class="btn navbar-icon" href="https://github.com/d-kohn">
          <i class="fa fa-github fa-2x"></i>
          <span class="visually-hidden">Github</span>
        </a>                                    
        <a class="btn navbar-icon" href="https://www.linkedin.com/in/darin-kohn-895296239/" target="none">
          <i class="fa fa-linkedin fa-2x"></i>
          <span class="visually-hidden">Linkedin</span>
        </a>
      </div>
    </div>
  </nav>
</header> 
`
if (currentpage === "index") {
    for (let i = 1; i < page_list.length; i++) {
        let nav_item = document.getElementById(page_list[i])
        nav_item.href = "./pages/" + page_list[i] + ".html";
    }
}
else {
    for (let i = 1; i < page_list.length; i++) {
        let nav_item = document.getElementById(page_list[i])
        if (currentpage === page_list[i]) {
            nav_item.classList.add("active");
            nav_item.ariaCurrent = "page";
        }
    }
}
