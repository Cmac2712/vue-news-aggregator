export const truncate = text => `${text.substr(0, 50-1)}…`

export const stripTags = html => {
  let div = document.createElement('div')

  div.innerHTML = html

  return div.textContent || div.innerText || ""
}