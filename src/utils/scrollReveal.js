import ScrollReveal from "scrollreveal";

const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: false,
});

export const loadTransitions = () => {
    sr.reveal('.img-container', {delay:200, origin:'top'})
    sr.reveal('.hero h1', {delay:200, origin:'bottom'})
    sr.reveal('.hero h3', {delay:200, origin:'bottom'})
    sr.reveal('.about-me-title', {delay:250, origin:'left'})
    sr.reveal('.about-me-description', {delay:250, origin:'right'})
    sr.reveal('.projects-title', {delay:250, origin:'top'})
    sr.reveal('.project-col', {delay:250, origin:'bottom'})
    sr.reveal('.technologies-container h1', {delay:250, origin:'top'})
    sr.reveal('.technologie', {delay:250, origin:'bottom'})
    sr.reveal('.contact-container', {delay:450, origin:'top'})
    
};
