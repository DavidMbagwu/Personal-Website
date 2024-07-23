/*=================== Mixitup Filter ======================*/
var mixer = mixitup('.projects_container', {
    selectors: {
        target: '.project_item',
    }
});

const linkProject = document.querySelectorAll('.project_category_btn');

function activeProject() {
    
    linkProject.forEach((a) => a.classList.remove('active_project'));
    this.classList.add('active_project');
}

linkProject.forEach((a) => a.addEventListener('click', activeProject));