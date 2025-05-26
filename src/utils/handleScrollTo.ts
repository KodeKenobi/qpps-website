export const handleScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};