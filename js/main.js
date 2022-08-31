// Blurred box in hero 👇
const heroContent = document.getElementById('mainHeroContent')
// First text in text area 👇
const mainTxt1 = document.getElementById('mainTxt1');
// Second text in text area 👇
const mainTxt2 = document.getElementById('mainTxt2');

window.onscroll = () => {
    // Number of the amount of scrolling that has been made in the site.
    let scrollValue = window.scrollY;
    // Parallax Effect
    heroContent.style.transform = 'translateY(' + -scrollValue / 5 + 'px)';
    if (window.matchMedia('screen and (max-width: 650px)').matches) {
        mainTxt1.style.transform = 'translateY(' + -scrollValue / 20 + 'px)';
        mainTxt2.style.transform = 'translateY(' + -scrollValue / 20 + 'px)';
    } else {
        mainTxt1.style.transform = 'translateY(' + scrollValue / 15 + 'px)';
        mainTxt2.style.transform = 'translateY(' + -scrollValue / 15 + 'px)';
    }
}
