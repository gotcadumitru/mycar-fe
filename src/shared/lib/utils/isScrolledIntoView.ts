const isScrolledIntoView = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect()
  const elemTop = rect.top
  const elemBottom = rect.bottom

  // Only completely visible elements return true:
  const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight
  // Partially visible elements return true:
  // isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible
}
export default isScrolledIntoView
